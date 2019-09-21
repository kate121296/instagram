import React from 'react';
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";

import SettingIcon from "../Icons/SettingIcon";

const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginTop:30,
    },
    imageWrapper: {
        width:'20%'  ,
        marginTop:20
    },
    image: {
        width: 200,
        height:200,
        borderRadius:'50%',
    },
    headerWrapper:{
        width:'40%'  ,
    },
    header: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    name:{
        fontSize:30,
        marginRight:20,
    },
    button:{
        width:200,
        fontWeight:'bold'
    },
    spacing:{
        marginLeft: 20,
    },
    subheader:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop: 30,
    },
    subsubheader:{
        margin:'30px 0px 0px 25px'
    },
    text:{
        fontSize: 20,
        marginRight: 20,
    },
    text1:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:10,
    },
    link:{
        underline:'none',
    }
});

function SubHeader() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.imageWrapper}>
                <img className={classes.image} src="https://flowerlodge.co.uk/Resources/parallax2.jpeg" alt=""/>
            </div>
            <div className={classes.headerWrapper}>
                <div className={classes.header}>
                    <Typography className={classes.name}>katysha121296</Typography>
                    <Link style={{ textDecoration: 'none' }} to="/edit">
                        <Button variant="contained" className={classes.button}>
                            Edit profile
                        </Button>
                    </Link>
                    <IconButton className={classes.spacing}>
                        <SettingIcon />
                    </IconButton>
                </div>
                <div className={classes.subheader}>
                    <Typography className={classes.text}>108 publications</Typography>
                    <Typography className={classes.text}>760 subscribers</Typography>
                    <Typography className={classes.text}>subscriptions:893</Typography>
                </div>
                <div className={classes.subsubheader}>
                    <Typography className={classes.text1}>Katya M</Typography>
                    <Typography>*IFNMY</Typography>
                    <Typography>*Medical student</Typography>
                    <Typography>*22y.o.</Typography>
                    <Typography>*UA</Typography>
                </div>
            </div>
        </div>
    );
}

export default SubHeader;