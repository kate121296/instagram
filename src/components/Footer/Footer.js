import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footerWrapper: {
        backgroundColor:'lightgrey',
    },
    footer:{
        display:'flex',
        width:'70%',
        padding:10,
        margin:'0 auto',
        color:'darkblue',
    },
    text5:{
        marginRight:20,
        fontSize:12,
        cursor: 'pointer'
    },
    text6: {
        fontSize:12,
        marginLeft:210,
        paddingBottom:20
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footerWrapper}>
            <div className={classes.footer}>
                <Typography className={classes.text5}>ABOUT US</Typography>
                <Typography className={classes.text5}>SUPPORT</Typography>
                <Typography className={classes.text5}>PRESS</Typography>
                <Typography className={classes.text5}>АРІ</Typography>
                <Typography className={classes.text5}>VACATIONS</Typography>
                <Typography className={classes.text5}>CONFIDENTIALITY</Typography>
                <Typography className={classes.text5}>CONDITIONS</Typography>
                <Typography className={classes.text5}>DIRECTORY</Typography>
                <Typography className={classes.text5}>PROFILES</Typography>
                <Typography className={classes.text5}>HASHTAGES</Typography>
                <Typography className={classes.text5}>LANGUAGE</Typography>
            </div>
            <Typography className={classes.text6}>© INSTAGRAM ОТ FACEBOOK, 2019</Typography>
        </footer>
    );
}

export default Footer;