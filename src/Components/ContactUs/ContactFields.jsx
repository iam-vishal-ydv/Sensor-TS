import React from 'react'
import { Grid, TextField } from '@mui/material'
export default function ContactFields() {
    return (
        <>
                <Grid container>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                        
                            fullWidth
                            id="outlined-controlled"
                            label="Full Name"
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            fullWidth
                            type='email'
                            id="outlined-controlled"
                            label="Email"
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            fullWidth
                            type='number'
                            id="outlined-controlled"
                            label="Phone"
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                        fullWidth
                            id="outlined-multiline-static"
                            label="Message"
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <button className='btn'>Submit</button>
                    </Grid>
                </Grid>
        </>
    )
}
