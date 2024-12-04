import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navigation from "../components/navigation/Navigation";

const Copyright = (props) => {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                FINKI Share
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

const LoginPageMaterialUI = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    username: username,
                    password: password
                }),
                credentials: 'include'
            });
                console.log("Invalid credentials");
        } catch (error) {
            const response = await fetch('http://localhost:8080/check-login', {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const resultObject = await response.json();
                if (resultObject["authenticated"]) {
                    window.location.href = '/';
                }
            }
        }
    };

    return (
        <>
            <Navigation isNavigationWhite={true}/>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main"
                      sx={{
                          height: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          position: 'relative',
                          '&::before': {
                              content: '""',
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100%',
                              height: '100%',
                              backgroundImage: 'url(https://www.up.pt/portal/media/images/estudar-espacos-de-e.325d2f2a.fill-1020x330.format-webp.webp)',
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              opacity: 0.9,
                              zIndex: -1,
                              filter: 'blur(6px)',
                          }
                      }}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={7}
                        sx={{textAlign: 'center'}}
                    >
                    </Grid>
                    <Grid item
                          xs={12}
                          sm={4}
                          md={7}
                          sx={{
                              textAlign: 'center',
                              position: 'absolute',
                              top: '50%',
                              right: '35%',
                              transform: 'translate(-50%, -50%)',
                              color: '#FFFFFF',
                              zIndex: 1, //
                          }}>
                        <Typography variant="h3" style={{
                            fontFamily: 'Geologica, sans-serif',
                            fontOpticalSizing: 'auto',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontVariationSettings: '"slnt" 0, "CRSV" 0.5, "SHRP" 19'
                        }}>
                            Welcome to FINKI Share.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1}}>
                                <LockOpenIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <Box component="form" noValidate sx={{mt: 1}} onSubmit={handleSubmit}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/registerUI" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                    {/*{successMessage && <p style={{color: "darkgreen"}}>{successMessage}</p>}*/}
                                </Grid>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </>
    );
}

export default LoginPageMaterialUI;
