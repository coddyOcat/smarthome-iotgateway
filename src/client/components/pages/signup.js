import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function signup() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            fname: data.get('fname'),
            lname: data.get('lname'),
            username: data.get('username'),
            password: data.get('password'),
            email: data.get('email'),
            phone: data.get('phone')
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="fname"
                                    autoComplete="given-name"
                                    name="fname"
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="lname"
                                    autoComplete="family-name"
                                    name="lname"
                                    required
                                    fullWidth
                                    label="Last Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="username"
                                    autoComplete="username"
                                    name="username"
                                    required
                                    fullWidth
                                    label="User Name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="password"
                                    autoComplete="new-password"
                                    name="password"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="email"
                                    autoComplete="email"
                                    name="email"
                                    required
                                    fullWidth
                                    label="Email Address"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="phone"
                                    autoComplete="phone"
                                    name="phone"
                                    required
                                    fullWidth
                                    label="Phone Number"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="Accept with your information"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                        Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/login" variant="body2">
                                    Already have an account? Login
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
