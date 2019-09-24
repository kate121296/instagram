import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import { Input } from '@material-ui/core';
import { IconButton } from '@material-ui/core';

import CameraIcon from "../Icons/CameraIcon";
import CompasIcon from "../Icons/CompasIcon";
import HeartIcon from "../Icons/HeartIcon";
import HumanIcon from "../Icons/HumanIcon";

const useStyles = makeStyles({
    root: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    image: {
        width:50,
        height:30,
        margin:'0 auto',
        marginRight: 10
    },
    text:{
      fontSize:20
    },
    part1:{
        width:'15%',
        margin: '0 auto',
        padding:10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    part2:{
        width:'15%',
        margin:'0 auto',

    },
    part3:{
        width:'25%',
        margin:'0 auto',
        padding: 10
    },
    textField:{
        margin:'0 auto',
        width:'100%',
        height: 32,
        padding: 5,
        border: '1px solid lightgrey',
        borderRadius: 8,
    },
    spacing:{
        marginLeft: 20,
    },
    space:{
        margin:'0px 10px 0px 10px'
    }
});

function Header() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <div className={classes.part1}>
                    <CameraIcon />
                    <Typography className={classes.space}>|</Typography>
                    <Typography className={classes.text}>Instagram</Typography>
                </div>
                <div className={classes.part2}>
                    <Input
                        disableUnderline
                        id="outlined-email-input"
                        label="Search"
                        className={classes.textField}
                        type="text"
                        name="Search"
                        autoComplete="email"
                        variant="outlined"
                        placeholder="Search"
                    />
                </div>
                <div className={classes.part3}>
                    <IconButton>
                        <CompasIcon  />
                    </IconButton>
                    <IconButton className={classes.spacing}>
                        <HeartIcon />
                    </IconButton>
                    <IconButton className={classes.spacing}>
                        <HumanIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    );
}

export default Header;