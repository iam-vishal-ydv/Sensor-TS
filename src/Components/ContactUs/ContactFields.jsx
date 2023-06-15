import React, { useRef, useState } from 'react'
import { Backdrop, CircularProgress, Grid, TextField } from '@mui/material'
import emailjs from '@emailjs/browser';
export default function ContactFields({setAlert}) {
    const data = useRef()
    const [open,setOpen] = useState(false)
    const sendMail = (e) => {
        setOpen(true)
        e.preventDefault()
        // console.log(data.current)
        emailjs.sendForm('service_1bq0usj', 'template_m85142v', data.current, 'XdgoOlRQy8sv7MUuc')
            .then((result) => {
                console.log(result.text);
                setOpen(false)
                setAlert(true)
            }, (error) => {
                console.log(error.text);
                setOpen(false)
            });
       setTimeout(()=>{
       setAlert(false)
       },5000)
    }

    return (
        <>
        
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <form ref={data} onSubmit={sendMail}>
                <Grid container>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            onChange={(e) => data.current.name = e.target.value}
                            fullWidth
                            name='name'
                            id="outlined-controlled"
                            label="Full Name"
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            fullWidth
                            type='email'
                            name='email'
                            id="outlined-controlled"
                            label="Email"
                            onChange={(e) => data.current.email = e.target.value}
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            fullWidth
                            type='number'
                            name='phone'
                            id="outlined-controlled"
                            onChange={(e) => data.current.phone = e.target.value}
                            label="Phone"
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <TextField
                            fullWidth
                            onChange={(e) => data.current.massage = e.target.value}
                            id="outlined-multiline-static"
                            label="Message"
                            name='message'
                            multiline
                            rows={4}
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} mb={1}>
                        <button className='btn' type='submit' >Submit</button>
                    </Grid>
                </Grid>
            </form>
        </>
    )
}
