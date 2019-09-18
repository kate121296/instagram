import React, {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {Link, Redirect} from "react-router-dom";
import Footer from "../Footer/Footer";

const useStyles = makeStyles({
    root: {
        width: '100%',
        backgroundColor: 'lightgrey',
        paddingTop:20
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid grey',
        borderRadius: 8,
        padding: 20,
        width: '35%',
        marginBottom:30,
        backgroundColor:'white',
        margin:'0 auto'
    },
    link2: {
        margin:'0 auto'
    },
    button: {
        width:'60%',
        fontSize: 12,
        padding: 10,
        margin: '0 auto',
        marginBottom: 20,
        marginTop:10
    },
    input: {
        display: 'none',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
        marginBottom: 20,
        width:'70%',
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    enter: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid grey',
        borderRadius:8,
        padding:15,
        width:'35%',
        margin:'0 auto',
        backgroundColor:'white',
    },
    title: {
        fontSize: 40,
        textAlign:'center',
        marginBottom: 10,
    },
    text1: {
        margin: '0 auto',
        textAlign:'center',
        width: '50%',
        marginBottom: 15,
    },
    text2: {
        margin: '0 auto',
        textAlign:'center',
        width: '50%',
        marginBottom: 15,
        color: 'grey',
        fontSize:12,
    },
    text3:{
        fontSize: 15,
    },
    text4: {
        textAlign:'center',
        fontSize: 15,
        marginTop: 20,
    },
    linksWrapper: {
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    link: {
        width:'15%',
        marginTop: 20,
        cursor:'pointer',
        paddingBottom: 20
    },
});
const initValues = {
    email: '',
    password: '',
};
function LoginScreen({
   onSignIn=()=>{},
    uid=null
}) {

    const classes = useStyles();
    const [values,setValues] = useState(initValues);

    const handleChange = e => {
        const newValues = {...values};
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };
    const handleSubmit = () => {
        const { email, password} = values;
        onSignIn(email, password);
    };
    if (uid!==null) return <Redirect to="/" />;
    return (
        <div >
            <div className={classes.root}>
                    <div className={classes.form}>
                        <Typography className={classes.title}>Instagram</Typography>
                        <form className={classes.container} onSubmit={handleSubmit} >
                            <TextField
                                type="email"
                                name="email"
                                variant="outlined"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            <TextField
                                type="password"
                                name="password"
                                variant="outlined"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                onClick={handleSubmit}
                            >
                                Sign in
                            </Button>
                        </form>
                        <Typography className={classes.text2}>OR</Typography>
                        <Button variant="contained" color="primary" className={classes.button}>
                            Sign in with Facebook
                        </Button>
                        <Link
                            className={classes.link2}
                            component="button"
                            variant="body2"
                            to="/">
                            Forgot password?
                        </Link>
                    </div>
                    <div className={classes.enter}>
                        <Typography className={classes.text3}>You do not have an account yet?</Typography>
                        <Link to="/">Sign up</Link>
                    </div>
                    <Typography className={classes.text4}>Install application.</Typography>
                    <div className={classes.linksWrapper}>
                        <img
                            className={classes.link}
                            src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_russian-ru.png/bfba6d0fd6bd.png"
                            alt=""
                        />
                        <img
                            className={classes.link}
                            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_russian-ru.png/4c70948c09f3.png"
                            alt=""
                        />
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default LoginScreen;