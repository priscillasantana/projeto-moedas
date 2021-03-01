import { TextField } from '@material-ui/core'
import axios from 'axios'
import React from 'react'
import { useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Footer from '../../components/footer'


function Login () {

    let emailInput = useRef<HTMLInputElement>(null)
    let passwordInput = useRef<HTMLInputElement>(null)

    const [logado, setLogado] = useState<Boolean>(false)
    
    const enviaForm = () => {
         
        const email = emailInput.current?.value
        const password = passwordInput.current?.value
  
            axios.post("http://localhost:4000/login", {
            email: email,
            password: password,
        })
            .then(resposta => {
                localStorage.setItem("token", resposta.data.accessToken)
                setLogado(true)
            })}


              const useStyles = makeStyles((theme) => ({
                paper: {
                  marginTop: theme.spacing(8),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
                avatar: {
                  margin: theme.spacing(1),
                  backgroundColor: theme.palette.secondary.main,
                },
                form: {
                  width: '100%',
                  marginTop: theme.spacing(3),
                },
                submit: {
                  margin: theme.spacing(3, 0, 2),
                },
              }));

              const classes = useStyles();

            
    return (
        <div>
            <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                              <TextField
                              variant="outlined"
                              required
                              fullWidth
                              id="email"
                              label="Email"
                              name="email"
                              autoComplete="email"
                              inputRef={emailInput}
                              />
                          </Grid>
                          <Grid item xs={12}>
                              <TextField
                              variant="outlined"
                              required
                              fullWidth
                              name="password"
                              label="Senha"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              inputRef={passwordInput}
                              />
                          </Grid>
                        </Grid>
                        <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={enviaForm}
                        >
                        Entrar
                        </Button>
                        <Grid container justify="flex-end">
                        </Grid>
                    </form>
                    </div>
                    <Box mt={5}>
                    <Footer />
                    </Box>
                </Container>

      {logado && <Redirect to= "/home" />}
    );

        </div>
    )};

export default Login;