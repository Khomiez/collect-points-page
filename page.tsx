"use client";
import { EventConverter, EventRegistrationConverter, PointConverter, StudentConverter } from "@/shared/models";
import { db } from "@/shared/services/firebase";
import { Stack, Container, Typography, TextField, Box, Button, Divider, Select, MenuItem, SelectChangeEvent, InputLabel, Checkbox, FormControlLabel } from "@mui/material";
import { addDoc, and, collection, doc, DocumentData, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";

type Props = {};

// interfaces
interface CodeRedemptionAttempt {
  [name: string]: number;
}

interface Doc {
  [uuid: string]: DocumentData;
}

const CollectPoints = (props: Props) => {
  // collection references
  const studentsColRef = collection(db, "students");
  const eventRegistrationsColRef = collection(db, "event-registrations");
  const eventsColRef = collection(db, "events");
  const pointsColRef = collection(db, "points");
  const clubsColRef = collection(db, "clubs");

  // general useState variables
  const [studentCodeOrTel, setStudentCodeOrTel] = useState<string | null>(null);
  const [isNoStudentCode, setIsNostudentCode] = useState<boolean>(false);
  const [inputCode, setInputCode] = useState<string>();
  const [codeType, setCodeType] = useState<string>();
  const [isShownCodeInputSec, setIsShownCodeInputSec] = useState<boolean>(false);
  const [codeRedemptionAttempt, setCodeRedemptionAttempt] = useState<CodeRedemptionAttempt>({});
  const [totalPoints, setTotalPoints] = useState<number>(0);

  // student useState variables
  const [studentUUID, setStudentUUID] = useState<string | null>();
  const [studentNickname, setStudentNickname] = useState<string | null>();
  const [registrationUUID, setRegistrationUUID] = useState<string>();

  // Documents
  const [eventDocuments, setEventDocuments] = useState<Doc>({});
  const [eventRegistrationDocuments, setEventRegistrationDocuments] = useState<Doc>({});
  const [pointDocuments, setPointDocuments] = useState<Doc>({});

  // handle functions
  const handleInputForQuery = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isNoStudentCode && /^\d{9}-\d{1}$/.test(studentCodeOrTel!)) { // use student code
      handleQueryStudentCode();
    }
    else if (isNoStudentCode && /^0\d{9}$/.test(studentCodeOrTel!)) { // use student telephone
      handleQueryStudentTelephone();
    }
    else {
      console.log("wrong input format.");
    }
  }

  // function to set studentUUID by query student's code
  const handleQueryStudentCode = async () => {
    const queryStudentCode = query(studentsColRef,
      where("std_code", "==", studentCodeOrTel)
    );
    const queryStudentUUIDSnapshot = await getDocs(queryStudentCode);
    if (!queryStudentUUIDSnapshot.empty) {
      setStudentUUID(queryStudentUUIDSnapshot.docs[0].id);
    }
  }

  // function to set studentUUID by query student's telephone number
  const handleQueryStudentTelephone = async () => {
    const queryStudentCode = query(studentsColRef,
      where("std_telephone", "==", studentCodeOrTel)
    );
    const queryStudentUUIDSnapshot = await getDocs(queryStudentCode);
    if (!queryStudentUUIDSnapshot.empty) {
      setStudentUUID(queryStudentUUIDSnapshot.docs[0].id);
    }
  }

  // get student's nickname
  const handleGetStudentNickname = async () => {
    const studentDoc = await getDoc(doc(studentsColRef, studentUUID!).withConverter(StudentConverter))
    setStudentNickname(studentDoc.data()?.std_nickname);
  }
  const handleQueryUsableEventRegistrations = async () => {
    let queryEventCode = query(eventRegistrationsColRef,
      where("uuid_student", "==", studentUUID),
      where("code_isUsed", "==", true),
      where("code_point_isUsed", "==", false)
    );
    const docs = await getDocs(queryEventCode.withConverter(EventRegistrationConverter));
    docs.forEach((doc) => {
      setEventRegistrationDocuments((prevState) => ({
        ...prevState,
        [doc.id]: doc.data()
      }));
    });
  };

  // query pointsCollection
  const handleQueryPointCol = async () => {
    if (!studentUUID) return;
    const queryPoints = query(pointsColRef,
      where("uuid_student", "==", studentUUID)
    );
    const docs = await getDocs(queryPoints.withConverter(PointConverter));
    docs.forEach((doc) => {
      setPointDocuments((prevState) => ({
        ...prevState,
        [doc.id]: doc.data()
      }));
    });
  };

  const handleQueryClubCode = async () => {
    const queryClubCode = query(clubsColRef,
      where("club_code", "==", inputCode)
    );
    const docs = await getDocs(queryClubCode);
    return docs;
  };

  // useEffects
  // reset code redeem section when change student input (input: student code // student telephone)
  useEffect(() => {
    setIsShownCodeInputSec(false);
    setStudentUUID(null);
    setStudentNickname(null);
    setTotalPoints(0);
    setCodeType("");
    setEventDocuments({});
    setEventRegistrationDocuments({});
    setPointDocuments({});
  }, [studentCodeOrTel, isNoStudentCode]);

  // do handleQueryRegisteredEvents() and handleQueryStudentNickname() <--- whenever [studentUUID] changes
  useEffect(() => {
    const fetchData = async () => {
      if (studentUUID) {
        await handleGetStudentNickname();
        await handleQueryUsableEventRegistrations();
        await handleQueryPointCol();
        setIsShownCodeInputSec(true);
      }
    };
    fetchData();
  }, [studentUUID]);

  useEffect(() => {
    const fetchData = async () => {
      await handleRegisteredEvents();
    };
    fetchData();
  }, [eventRegistrationDocuments]);

  useEffect(() => {
    handleSumPoints();
  }, [pointDocuments]);

  // set registrationUUID from selected [codeType] <---- whenever [codeType, studentRegistrations] changes
  useEffect(() => {
    if (eventRegistrationDocuments && codeType) {
      setRegistrationUUID(codeType);
    }
  }, [codeType, eventRegistrationDocuments]);

  // handle checkbox (toggle student input (student's code // student's telephone) )
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNostudentCode(e.target.checked);
  };

  const handleRegisteredEvents = async () => {
    const eventRegistrationUUID = Object.keys(eventRegistrationDocuments);
    eventRegistrationUUID.forEach(async (uuid) => {
      const event = await getDoc(doc(eventsColRef, eventRegistrationDocuments[uuid].uuid_event).withConverter(EventConverter));
      if (event.exists()) {
        setEventDocuments((prevState) => ({
          ...prevState,
          [event.id]: event.data()
        }));
      }
    });
  };

  // redeem code depends on selected code type <---- do when [redeem button] is clicked 
  const handleSubmitCodeRedeem = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!codeType) { console.log("please select codeType"); return; }
    if (!isRedeemableDate()) { console.log("redeem event time out"); return; }

    const eventName = handleFindEventRegistrationUUIDName(codeType);
    if (!studentUUID || eventName === "not found") {
      console.log("invalid student UUID or event not found");
      return;
    }
    if (codeType === "ร่วมกิจกรรมชมรม") {
      redeemClubCode();
    }
    else if (eventName === "FriendShip Group") {
      redeemFriendshipCode();
    }
    else { redeemEventCode(); }
  };

  const handleFindEventRegistrationUUIDName = (uuid: string) => {
    return eventDocuments[eventRegistrationDocuments[uuid].uuid_event].event_name;
  }

  // get all points of the student 
  const handleSumPoints = () => {
    let totalPoints = 0;
    const pointDocUUID = Object.keys(pointDocuments);
    pointDocUUID.forEach((uuid) => {
      // setTotalPoints((prevState) => prevState += (pointDocuments[uuid].point));
      totalPoints += pointDocuments[uuid].point;
    });
    setTotalPoints(totalPoints);
  }

  // update event-registration doc
  const handleUpdateRegistrationPointStatus = async (redeemType: string) => {
    if (redeemType === "event") {
      await updateDoc(doc(eventRegistrationsColRef, registrationUUID), {
        code_point_isUsed: true,
        code_point_isUsed_timestamp: serverTimestamp()
      });
      setEventRegistrationDocuments({});
      await handleQueryUsableEventRegistrations(); // query new update
      return;
    }
  }

  // addDoc to points Collection ( data depends on parameter )
  const handleAddDocToPointCol = async (redeemType: string) => {
    let redeemable: boolean = true;
    switch (redeemType) {
      case "event":
        redeemable = await isRedeemable("uuid_registration", registrationUUID);
        break;

      case "friendship":
        redeemable = await isRedeemable("uuid_friendship_code", inputCode);
        break;

      case "club":
        redeemable = await isRedeemable("uuid_club_code", inputCode);
        break;
    }
    if (redeemable) {
      const pointData = {
        uuid_student: studentUUID,
        uuid_registration: redeemType === "event" ? registrationUUID : null,
        uuid_friendship_code: redeemType === "friendship" ? inputCode : null,
        uuid_club_code: redeemType === "club" ? inputCode : null,
        point: redeemType === "event" ? 100 : 10,
      };
      await addDoc(pointsColRef, pointData);
      await handleUpdateRegistrationPointStatus(redeemType);
      console.log("code successfully redeemed");
      // setTotalPoints((prevState) => prevState + ("event" ? 100 : 10));
      setPointDocuments({});
      await handleQueryPointCol();
    };
  }

  const handleUpdateCodeRedemptionAttempt = async () => {
    console.log("Invalid code.");
    if (!codeType) { return; }
    setCodeRedemptionAttempt(prevState => ({
      ...prevState,
      [codeType]: prevState[codeType] ? prevState[codeType] + 1 : 1
    }));
    console.log(codeRedemptionAttempt);
    if (codeRedemptionAttempt[codeType] >= 5) {
      console.log("redemption attempt limit reached");
      await updateDoc(doc(eventRegistrationsColRef, registrationUUID), {
        code_point_isDisable: true,
      });
      await handleQueryUsableEventRegistrations(); // fetch new update
    }
  };

  // utils
  // check if the code is redeemable or not 
  const isRedeemable = async (fieldToCheck: string, value: string | null | undefined): Promise<boolean> => {
    return !Object.values(pointDocuments).some(doc => doc[fieldToCheck] === value);
  };

  // redeem [club_code] ( query check club_code with [inputCode] ) if valid --> handleAddDocToPointCol("club")
  const redeemClubCode = async () => {
    const docs = await handleQueryClubCode();
    if (!docs.empty) {
      handleAddDocToPointCol("club");
    } else {
      console.log("Invalid code or code was already used.");
      return;
    }
  }

  const handleQueryFriendRegistrationCode = async (friendCode: string) => {
    const queryValidFriendRegistrationCode = query(eventRegistrationsColRef,
      where("code", "==", friendCode),
      where("code_isUsed", "==", true),
      where("uuid_student", "!=", studentUUID),
    );
    const docs = await getDocs(queryValidFriendRegistrationCode);
    return docs;
  };

  // redeem [friendship_code] ( query check event-registrations code with [inputCode] ) if valid --> handleAddDocToPointCol("friendship");
  const redeemFriendshipCode = async () => {
    // const registrationDoc = await getDoc(doc(eventRegistrationsColRef, registrationUUID));
    if (!registrationUUID || !inputCode) {
      console.log("invalid registrationUUID or inputCode")
      return;
    }
    const registrationData = eventRegistrationDocuments[registrationUUID];

    if (!registrationData) {
      console.log("invalid registrationData")
      return;
    }

    const friendDocs = await handleQueryFriendRegistrationCode(inputCode);
    if (friendDocs.empty) {
      console.log("Invalid code.");
      return;
    }
    handleAddDocToPointCol("friendship");
  };

  // redeem [event_code] ( query check event-registrations code with [inputCode] ) if valid --> handleAddDocToPointCol("event");
  const redeemEventCode = () => {
    if (!registrationUUID) {
      console.log("invalid registrationUUID")
      return;
    }
    const registrationData = eventRegistrationDocuments[registrationUUID];

    if (!registrationData) {
      console.log("invalid registrationData")
      return;
    }

    if (registrationData.code_point_isDisable) {
      console.log("code redeem limitation exceed");
      return;
    }

    const registrationDataCode: string = registrationData.code
    if (registrationDataCode != inputCode) {
      handleUpdateCodeRedemptionAttempt();
      return;
    }
    handleAddDocToPointCol("event");
  };

  const isRedeemableDate = (): boolean => {
    if (!codeType) { return false; } // if codetype is null
    // const presentDate = new Date();
    const event_uuid = eventRegistrationDocuments[codeType].uuid_event;
    const event_start_date = new Date(eventDocuments[event_uuid].event_start_date * 1000);
    const presentDate = event_start_date;
    const event_redeem_end = new Date(eventDocuments[event_uuid].event_end_date * 1000);
    event_redeem_end.setHours(23);
    event_redeem_end.setMinutes(59);
    event_redeem_end.setSeconds(59);
    return (event_start_date <= presentDate) && (presentDate <= event_redeem_end);
  }

  const inputFields = Array.from({ length: 6 }).map((_, i) => (
    <input
      key={i}
      type="text"
      style={{
        display: 'block',
        width: 40,
        textAlign: 'center',
        border: 'gray 1px solid',
        borderRadius: 6,
        fontSize: 35,
        margin: 0
      }}
    />
  ));

  return (
    <>
      <Container sx={{
        display: 'flex', flexDirection: 'column', mx: 2,
        width: 'auto', height: 'auto', border: '1px solid black',
        alignItems: 'center'
      }}>
        <Typography variant='h4' sx={{ my: 2 }}>Event Points collection</Typography>
        <Box sx={{ my: 2 }}>
          <TextField sx={{ width: '100%' }}
            label={isNoStudentCode ? "เบอร์โทรนักศึกษา" : "รหัสนักศึกษา"}
            helperText={`ตัวอย่าง: ${isNoStudentCode ? "0XXXXXXXXX" : "000000000-0"}`}
            variant="outlined"
            size="small"
            onChange={(e) => setStudentCodeOrTel(e.target.value)}
            autoFocus
          />
          <FormControlLabel
            label="ยังไม่มีรหัสนักศึกษา"
            control={<Checkbox checked={isNoStudentCode} onChange={handleCheckboxChange} />}
          />
        </Box>
        <Button onClick={handleInputForQuery} variant='contained' sx={{ my: 2 }}>
          {`ตรวจสอบ${isNoStudentCode ? "เบอร์โทรนักศึกษา" : "รหัสนักศึกษา"}`}
        </Button>

        {isShownCodeInputSec && <><Divider sx={{ mt: 2 }} />
          <Box sx={{
            boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px', height: 400, width: '100%',
            my: 4, borderRadius: 2, maxWidth: 600, display: 'flex', flexDirection: 'column', overflow: 'hidden',
          }}>
            <Box sx={{ p: 1, bgcolor: '#ed4649' }}>
              <Typography color='#fff5ef'>663040419-1</Typography>
              <Box sx={{
                display: 'flex', flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'flex-end',
                mx: 1
              }}>
                <Typography
                  color='#fff5ef'
                  variant='h1'
                  sx={{ m: 0, p: 0 }}>{studentNickname}</Typography>
                <Box>
                  <Typography color='#fff5ef' sx={{ textAlign: 'right', m: 0, p: 0 }}>คะแนนสะสม</Typography>
                  <Typography color='#fff5ef' variant='h1' sx={{ textAlign: 'right', m: 0, p: 0 }}>{totalPoints}</Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
              <Select
                value={codeType}
                onChange={(event) => { setCodeType(event.target.value) }}
              >
                {Object.keys(eventRegistrationDocuments).map((uuid) => {
                  return (
                    <MenuItem key={uuid} value={uuid}>
                      {eventDocuments[eventRegistrationDocuments[uuid].uuid_event].event_name}
                    </MenuItem>
                  );
                })}
                <MenuItem value={"ร่วมกิจกรรมชมรม"}>
                  ร่วมกิจกรรมชมรม
                </MenuItem>
              </Select>
              <Box sx={{ my: 2, display: 'flex', columnGap: 2, justifyContent: 'center' }}>
                {inputFields}
              </Box>
              <Button variant='contained' onClick={handleSubmitCodeRedeem}  sx={{ my: 2, width: '30%' }}>สะสมแต้มกิจรรม</Button>
            </Box>

          </Box></>}
      </Container>
    </>
  );
};
export default CollectPoints;