import React from 'react';
import { Card, Stack, Box, Container, Button, Checkbox, Divider, FormControlLabel, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';


const MyComponent = () => {
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
                    label={"รหัสนักศึกษา"}
                    helperText={`ตัวอย่าง: ${"000000000-0"}`}
                    variant="outlined"
                    size="small"
                    autoFocus
                />
                <FormControlLabel
                    label="ยังไม่มีรหัสนักศึกษา"
                    control={<Checkbox />}
                />
            </Box>
            <Button variant='contained' sx={{ my: 2 }}>find</Button>
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
                        <Typography color='#fff5ef' variant='h1' sx={{ m: 0, p: 0 }}>Non</Typography>
                        <Box>
                            <Typography color='#fff5ef' sx={{ textAlign: 'right', m: 0, p: 0 }}>คะแนนสะสม</Typography>
                            <Typography color='#fff5ef' variant='h1' sx={{ textAlign: 'right', m: 0, p: 0 }}>100</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', m: 2 }}>
                    <Select sx={{}}>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <Box sx={{ my: 2, display:'flex', columnGap: 2, justifyContent:'center'}}>
                        {inputFields}
                    </Box>
                    <Button variant='contained' sx={{ my: 2, width:'30%' }}>redeem</Button>
                </Box>
                
            </Box>
        </Container>
    </>
);
};

export default MyComponent;
