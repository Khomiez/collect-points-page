/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import ControlPointIcon from "@mui/icons-material/ControlPoint";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { EffectCards, EffectCoverflow, Pagination } from "swiper/modules";

type Props = {};

const END_DATE = new Date("June 3, 2024 08:00:00");
const END_DATE_FIRST_MEET = new Date("June 11, 2024 23:59:59");

const Home = (props: Props) => {
  const [days, hours, minutes, seconds] = useCountdown(END_DATE);

  return (
    <main>
      {/* Vercel Ship */}
      <Stack>
        <Container>
          <Stack
            direction="row"
            sx={{
              mt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: grey[700],
              }}
            >
              VERCEL SHIP IS OUR ONE-DAY SPECIAL EVENT
            </Typography>
            <Typography
              textAlign="end"
              sx={{
                fontSize: "12px",
                color: grey[700],
              }}
            >
              YOU CAN JOIN US IN PERSON OR VIRTUALLY
            </Typography>
          </Stack>
        </Container>
      </Stack>
      {/* Countdown */}
      <Stack
        sx={{
          mt: 4,
        }}
      >
        <Container>
          <Stack spacing={2}>
            {/* Countdown time, first line */}
            <Stack direction="row" spacing={2}>
              {/* Days */}
              <Stack flexGrow={1} spacing={1}>
                <Box
                  sx={{
                    backgroundColor: grey[100],

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "64px",
                      fontWeight: 500,
                    }}
                  >
                    {days > 9 ? days : `0${days}`}
                  </Typography>
                </Box>
                <Typography textAlign="center" sx={{ color: grey[500] }}>
                  Days
                </Typography>
              </Stack>
              {/* Hours */}
              <Stack flexGrow={1} spacing={1}>
                <Box
                  sx={{
                    backgroundColor: grey[100],

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "64px",
                      fontWeight: 500,
                    }}
                  >
                    {hours > 9 ? hours : `0${hours}`}
                  </Typography>
                </Box>
                <Typography textAlign="center" sx={{ color: grey[500] }}>
                  Hours
                </Typography>
              </Stack>
            </Stack>
            {/* Countdown time, second line */}
            <Stack direction="row" spacing={2}>
              {/* Minutes */}
              <Stack flexGrow={1} spacing={1}>
                <Box
                  sx={{
                    backgroundColor: grey[100],

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "64px",
                      fontWeight: 500,
                    }}
                  >
                    {minutes > 9 ? minutes : `0${minutes}`}
                  </Typography>
                </Box>
                <Typography textAlign="center" sx={{ color: grey[500] }}>
                  Minutes
                </Typography>
              </Stack>
              {/* Seconds */}
              <Stack flexGrow={1} spacing={1}>
                <Box
                  sx={{
                    backgroundColor: grey[100],

                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",

                    borderRadius: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "64px",
                      fontWeight: 500,
                    }}
                  >
                    {seconds > 9 ? seconds : `0${seconds}`}
                  </Typography>
                </Box>
                <Typography textAlign="center" sx={{ color: grey[500] }}>
                  Seconds
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      {/* Join the ver */}
      <Stack>
        <Container>
          <Stack
            direction="row"
            sx={{
              mt: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                color: grey[700],
              }}
            >
              JOIN THE VERCEL COMMUNITY
            </Typography>
            <Typography
              textAlign="end"
              sx={{
                fontSize: "12px",
                color: grey[700],
              }}
            >
              MAY 23 2024, NEW YORK 225 LIBERTY STREET
            </Typography>
          </Stack>
        </Container>
      </Stack>
      {/* Get Tickets */}
      <Stack
        sx={{
          py: 32,
        }}
      >
        <Container>
          <Stack alignItems="center">
            <Box>
              <Button
                size="large"
                variant="contained"
                disableElevation
                sx={{
                  // fontSize: "32px",
                  // py: 1.5,
                  // px: 4,

                  fontSize: "48px",

                  px: 4,
                  py: 0,

                  minHeight: 0,
                  minWidth: 0,

                  textTransform: "none",

                  borderRadius: 2,
                }}
              >
                Get Tickets
              </Button>
            </Box>
          </Stack>
        </Container>
      </Stack>
      {/* Buy iPhone 15 */}
      <Stack
        sx={{
          pb: 32,
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 500,
              lineHeight: "44px",
              letterSpacing: "normal",
            }}
          >
            Buy iPhone 15
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              // lineHeight: "44px",
              // letterSpacing: "normal",

              mt: 2,

              color: grey[600],
            }}
          >
            From $799 or $33.29/mo. for 24 mo.*
          </Typography>
          <Stack
            spacing={2}
            sx={{
              mt: 4,
            }}
          >
            <Box>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                size="small"
                sx={{
                  backgroundColor: grey[100],
                  color: grey[700],
                  fontSize: "14px",
                  fontWeight: 400,

                  px: 2,
                  py: 1,

                  borderRadius: 4,

                  textTransform: "none",
                }}
                endIcon={<ControlPointIcon sx={{ color: grey[700] }} />}
              >
                Get $50-$630 for your trade-in.
              </Button>
            </Box>
            <Box>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                size="small"
                sx={{
                  backgroundColor: grey[100],
                  color: grey[700],
                  fontSize: "14px",
                  fontWeight: 400,

                  px: 2,
                  py: 1,

                  borderRadius: 4,

                  textTransform: "none",
                }}
                endIcon={<ControlPointIcon sx={{ color: grey[700] }} />}
              >
                Get 3% Daily Cash back with Apple Card.
              </Button>
            </Box>
          </Stack>
        </Container>
      </Stack>
      {/* Model */}
      <Stack
        sx={{
          pb: 32,
        }}
      >
        <Container>
          <Typography
            sx={{
              fontSize: "24px",
              fontWeight: 500,
              color: grey[500],
            }}
          >
            <Typography
              sx={{
                display: "inline",
                fontSize: "24px",
                fontWeight: 500,
                color: grey[900],
              }}
            >
              Model.
            </Typography>{" "}
            Which is best for you?
          </Typography>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Swiper
              // effect={"coverflow"}
              // grabCursor={true}
              // centeredSlides={true}
              // slidesPerView={"auto"}
              // coverflowEffect={{
              //   rotate: 50,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 1,
              //   slideShadows: true,
              // }}
              // pagination={false}
              // modules={[EffectCoverflow, Pagination]}
              // className="mySwiper"
              className="mySwiper swiper-h"
              spaceBetween={50}
              pagination={{
                clickable: true,
              }}
              // modules={[Pagination]}
            >
              {[
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353817403_636038701898948_3467347313347577378_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGdwfCovrRR-blh9ZkMH8zmYzEJJqaMjqBjMQkmpoyOoBZ6G3cKkGsIIYt9ZrEHYpcxVY7MtoCVkgL1mEjPyQtR&_nc_ohc=hsFDh5eoCJsQ7kNvgGMAOND&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBaNEhl_8OIdTBZgCRJ0O1DGenCn6m0wTE2qsRZiXMEtQ&oe=664F25CC",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/348962137_636042568565228_8926871617450638819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOl09hOTRfF_vJXxhrMr5-WPTuW7FW7w5Y9O5bsVbvDtYCU2b-tAF0jpFW5Iv0dsFaCOa_7l885KF59Vk4EViB&_nc_ohc=UtvthxgO924Q7kNvgGM0Bbx&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDuHS30qpqwtVVRHbb58UkUMuh-3_FceU7vtVk07KZ0uQ&oe=664F1574",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353837226_636040375232114_663182266560327668_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF0zsUQ-VPJ_FSZRWq9n0axZNaUzj9F8Bpk1pTOP0XwGv63e1tYPHN-b2M0zwa2ufSnaxMlCvOPDIuu5qhxSbAR&_nc_ohc=ZY6V7cu90AUQ7kNvgEyfcf3&_nc_oc=AdgUWod-G8BGdNYqBixwU82sPnVMCeWwvzs412ECnmm5uouqsCG8LaQMvl2Cwh6ZBWk&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBjy7ODxj-z_avfCvQFt-wkfV07lfxAPw-rMYQWpFm94g&oe=664F172E",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353844228_636039945232157_1521694805117508621_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWpgpU32j_YqFA05N4oh6htY6iTYj6pni1jqJNiPqmeFxQcCaF4QWC0lA5JgGoXMpbPjNeKb8t2D0pcRX7cgWs&_nc_ohc=Ap9Xh1SW0EsQ7kNvgHdWGi5&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDwK1BMpBfdZ1OvE7XGY05v4g8EFdT4-K0y65m1pR6MJg&oe=664F0904",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353825225_636040425232109_3934723563331811350_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGXcCFKU-L8vRpwRHhDIZiMALYCE8SarysAtgITxJqvK8oz31ZrFkA6c2lJ10g5NmmAag7Kc-S-lvVZmutZcZwY&_nc_ohc=87SmRtPCPgoQ7kNvgH_MkkC&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBHKM2f0XYTIy2KHhcmykwRBVuIjIqdU2NOQHvVk7AqCA&oe=664F163D",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353772862_636040531898765_3341380709858211770_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGKReSBf_pXLoFLR8Kso_kttChEHVNOube0KEQdU065t7YBRiJHOIsLMjKN0s4CieTfgBAxEO5jMZa5nY4XoGfc&_nc_ohc=E1pUIea0Z7MQ7kNvgHUhTCl&_nc_ht=scontent-bkk1-2.xx&oh=00_AYAKcgZLNpTWSSIFPcHiW6LkFB01DdsGRYI_-w4t2s2p0w&oe=664EF9E4",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353850330_636040491898769_6427285398878762544_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJJ3Ghe1O8Ujjp2VWcm9m-AYVmeOIqNvcBhWZ44io298lSWjmandNuyGeke-BsGWnNQyl0EItE-u0f0n97CBW5&_nc_ohc=JTEplLNNhKEQ7kNvgFvITh5&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDJT-ltlRVIRMZ7lES1EA6OIp2kM0VmgAPnuKk-KTGCeg&oe=664F1354",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353465674_636040658565419_3712628468132994946_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUgATOfOKfCWlBlTjon5qCOoYNnh9Szas6hg2eH1LNq_FvC8qMbO5MewOHbRPuFbsWdDhx28PAETZ2qsZmDJN6&_nc_ohc=4rDN4ZmOLvcQ7kNvgGvTGgk&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCtxb8MDiDk6RD8mcTSVzkZfHSY3EwMriojSWIGukpcbA&oe=664F16DE",
                "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/354024682_636040601898758_799768974030736596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvKmE-5HNQWc2ZNJeQaGk9FvWmIRykHxoW9aYhHKQfGglWcz8SR0sd5fnvlTi7T4POgKQOlBwl9OWZ9ChDQDPv&_nc_ohc=tKyKvGjzwygQ7kNvgEyoHDN&_nc_ht=scontent-bkk1-2.xx&oh=00_AYD__8TYhpy9RnBpGRvFe3p-MgAwFVxjsGyb4cbzHyPXAw&oe=664EFA4A",
              ].map((value, index, array) => {
                return (
                  <SwiperSlide key={index}>
                    <img
                      src={value}
                      style={{
                        borderRadius: "16px",
                      }}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Typography
              sx={
                {
                  // fontSize: "24px",
                }
              }
            >
              Thank :
            </Typography>
          </Stack>
          <Stack
            sx={{
              mt: 2,
            }}
          >
            <Stack
              direction="row"
              sx={{
                borderWidth: "2px",
                borderStyle: "solid",
                borderColor: "#0071e3",

                p: 2,

                borderRadius: 4,
              }}
            >
              <Stack direction="column">
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: "20px",
                  }}
                >
                  เข้าร่วมกิจกรรม
                </Typography>
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  6.1-inch display
                </Typography>
              </Stack>
              {/* <Stack>
                <Typography>From $799 or $33.29/mo. for 24 mo.*</Typography>
              </Stack> */}
            </Stack>
          </Stack>
        </Container>
      </Stack>
      {/* Buy iPad Pro */}
      <Stack
        sx={{
          mt: 64,
        }}
      >
        <Container>
          <Stack>
            <Typography>New</Typography>
            <Typography>Buy iPad Pro</Typography>
            <Typography>
              From $999 or $83.25/mo. per month for 12 mo. months Footnote *{" "}
            </Typography>
            <Stack>
              <Button>{`Get $40–$580 for your trade-in with Apple.`}</Button>
              <Button>{`Get 3% Daily Cash back with Apple Card.`}</Button>
            </Stack>
          </Stack>
        </Container>
      </Stack>
      <Stack>
        <Container>
          <Stack>
            <Typography>
              Model. <Typography>Choose your size.</Typography>
            </Typography>
          </Stack>
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            className="mySwiper"
          >
            {[
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353817403_636038701898948_3467347313347577378_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGdwfCovrRR-blh9ZkMH8zmYzEJJqaMjqBjMQkmpoyOoBZ6G3cKkGsIIYt9ZrEHYpcxVY7MtoCVkgL1mEjPyQtR&_nc_ohc=hsFDh5eoCJsQ7kNvgGMAOND&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBaNEhl_8OIdTBZgCRJ0O1DGenCn6m0wTE2qsRZiXMEtQ&oe=664F25CC",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/348962137_636042568565228_8926871617450638819_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFOl09hOTRfF_vJXxhrMr5-WPTuW7FW7w5Y9O5bsVbvDtYCU2b-tAF0jpFW5Iv0dsFaCOa_7l885KF59Vk4EViB&_nc_ohc=UtvthxgO924Q7kNvgGM0Bbx&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDuHS30qpqwtVVRHbb58UkUMuh-3_FceU7vtVk07KZ0uQ&oe=664F1574",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353837226_636040375232114_663182266560327668_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF0zsUQ-VPJ_FSZRWq9n0axZNaUzj9F8Bpk1pTOP0XwGv63e1tYPHN-b2M0zwa2ufSnaxMlCvOPDIuu5qhxSbAR&_nc_ohc=ZY6V7cu90AUQ7kNvgEyfcf3&_nc_oc=AdgUWod-G8BGdNYqBixwU82sPnVMCeWwvzs412ECnmm5uouqsCG8LaQMvl2Cwh6ZBWk&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBjy7ODxj-z_avfCvQFt-wkfV07lfxAPw-rMYQWpFm94g&oe=664F172E",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353844228_636039945232157_1521694805117508621_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEWpgpU32j_YqFA05N4oh6htY6iTYj6pni1jqJNiPqmeFxQcCaF4QWC0lA5JgGoXMpbPjNeKb8t2D0pcRX7cgWs&_nc_ohc=Ap9Xh1SW0EsQ7kNvgHdWGi5&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDwK1BMpBfdZ1OvE7XGY05v4g8EFdT4-K0y65m1pR6MJg&oe=664F0904",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353825225_636040425232109_3934723563331811350_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGXcCFKU-L8vRpwRHhDIZiMALYCE8SarysAtgITxJqvK8oz31ZrFkA6c2lJ10g5NmmAag7Kc-S-lvVZmutZcZwY&_nc_ohc=87SmRtPCPgoQ7kNvgH_MkkC&_nc_ht=scontent-bkk1-2.xx&oh=00_AYBHKM2f0XYTIy2KHhcmykwRBVuIjIqdU2NOQHvVk7AqCA&oe=664F163D",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353772862_636040531898765_3341380709858211770_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGKReSBf_pXLoFLR8Kso_kttChEHVNOube0KEQdU065t7YBRiJHOIsLMjKN0s4CieTfgBAxEO5jMZa5nY4XoGfc&_nc_ohc=E1pUIea0Z7MQ7kNvgHUhTCl&_nc_ht=scontent-bkk1-2.xx&oh=00_AYAKcgZLNpTWSSIFPcHiW6LkFB01DdsGRYI_-w4t2s2p0w&oe=664EF9E4",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353850330_636040491898769_6427285398878762544_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEJJ3Ghe1O8Ujjp2VWcm9m-AYVmeOIqNvcBhWZ44io298lSWjmandNuyGeke-BsGWnNQyl0EItE-u0f0n97CBW5&_nc_ohc=JTEplLNNhKEQ7kNvgFvITh5&_nc_ht=scontent-bkk1-2.xx&oh=00_AYDJT-ltlRVIRMZ7lES1EA6OIp2kM0VmgAPnuKk-KTGCeg&oe=664F1354",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/353465674_636040658565419_3712628468132994946_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUgATOfOKfCWlBlTjon5qCOoYNnh9Szas6hg2eH1LNq_FvC8qMbO5MewOHbRPuFbsWdDhx28PAETZ2qsZmDJN6&_nc_ohc=4rDN4ZmOLvcQ7kNvgGvTGgk&_nc_ht=scontent-bkk1-2.xx&oh=00_AYCtxb8MDiDk6RD8mcTSVzkZfHSY3EwMriojSWIGukpcbA&oe=664F16DE",
              "https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/354024682_636040601898758_799768974030736596_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvKmE-5HNQWc2ZNJeQaGk9FvWmIRykHxoW9aYhHKQfGglWcz8SR0sd5fnvlTi7T4POgKQOlBwl9OWZ9ChDQDPv&_nc_ohc=tKyKvGjzwygQ7kNvgEyoHDN&_nc_ht=scontent-bkk1-2.xx&oh=00_AYD__8TYhpy9RnBpGRvFe3p-MgAwFVxjsGyb4cbzHyPXAw&oe=664EFA4A",
            ].map((value, index, array) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={value}
                    style={{
                      borderRadius: "16px",
                      // height: "200px",
                      // width: "400px",
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>
      </Stack>

      <Box
        sx={{
          height: "100dvh",
        }}
      />
    </main>
  );
};

export default Home;

import { useCountdown } from "@/shared/hooks/useCountdown.hook";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  AvatarGroup,
  Backdrop,
  Badge,
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Breadcrumbs,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Chip,
  CircularProgress,
  ClickAwayListener,
  Collapse,
  Container,
  CssBaseline,
  darkScrollbar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Drawer,
  Fab,
  Fade,
  FilledInput,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  // Grid,
  Unstable_Grid2,
  Grow,
  Hidden,
  Icon,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Input,
  InputAdornment,
  InputBase,
  InputLabel,
  LinearProgress,
  // Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  ListSubheader,
  Menu,
  MenuItem,
  MenuList,
  MobileStepper,
  Modal,
  NativeSelect,
  NoSsr,
  OutlinedInput,
  // Pagination,
  PaginationItem,
  Paper,
  Popover,
  Popper,
  Portal,
  Radio,
  RadioGroup,
  Rating,
  ScopedCssBaseline,
  Select,
  Skeleton,
  Slide,
  Slider,
  Snackbar,
  SnackbarContent,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepButton,
  StepConnector,
  StepContent,
  StepIcon,
  StepLabel,
  Stepper,
  SvgIcon,
  SwipeableDrawer,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Tabs,
  TabScrollButton,
  TextField,
  TextareaAutosize,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
  useScrollTrigger,
  Zoom,
  useAutocomplete,
  GlobalStyles,
  generateUtilityClass,
  generateUtilityClasses,
  Unstable_TrapFocus,
} from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import { useEffect, useRef, useState } from "react";
