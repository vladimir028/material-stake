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
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import ImagePicker from "../components/image-picker/ImagePicker";
import useRegisterUser from "../hooks/useRegisterUser";
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

const RegisterPageMaterialUI = () => {
    const {
        username, setUsername, email, setEmail, password, setPassword, successMessage,
        setSelectedImage,
        handleSubmit
    } = useRegisterUser();

    return (

        <>
            <Navigation isNavigationWhite={true}/>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main"
                      sx={{
                          height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',
                          backgroundColor: '#DBD2CB',
                          backdropFilter: 'blur(13939px)',
                          opacity: 1,
                      }}>
                    <CssBaseline/>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={7}
                        sx={{textAlign: 'center'}}
                    >
                        <Typography variant="h4" component="div" gutterBottom
                                    className="mb-5"
                                    style={{
                            fontFamily: 'Geologica, sans-serif',
                            fontOpticalSizing: 'auto',
                            fontWeight: 600,
                            fontStyle: 'normal',
                            fontVariationSettings: '"slnt" 0, "CRSV" 0.5, "SHRP" 19'
                        }}>
                            Ве молиме изберете го вашиот карактер
                        </Typography>
                        <ImagePicker setSelectedImage={setSelectedImage}/>
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
                                <LockOutlinedIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign up
                            </Typography>
                            <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 1}}>
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
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="/login" variant="body2">
                                            {"Already have an account? Sign In"}
                                        </Link>
                                    </Grid>
                                    {successMessage && <p style={{color: "darkgreen"}}>{successMessage}</p>}
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

export default RegisterPageMaterialUI;