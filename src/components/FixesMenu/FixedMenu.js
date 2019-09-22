import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton} from "@material-ui/core";

import HomeIcon from "../Icons/HomeIcon";
import SearchIcon from "../Icons/SearchIcon";
import PlusIcon from "../Icons/PlusIcon";
import HeartIcon from "../Icons/HeartIcon";
import HumanIcon from "../Icons/HumanIcon";

const useStyles = makeStyles({
    footerWrapper:{
        width:'100%',
        border:'1px solid black',
        position: 'fixed',
        left:0,
        bottom:0,
        height:50,
        backgroundColor:'white',
    },
    icon:{
        width: '20%',

    }
});

function FixedMenu() {
    const classes = useStyles();
    return (
        <footer className={classes.footerWrapper}>
            <IconButton className={classes.icon}>
                <HomeIcon/>
            </IconButton>
            <IconButton className={classes.icon}>
                <SearchIcon/>
            </IconButton>
            <IconButton className={classes.icon}>
                <PlusIcon/>
            </IconButton>
            <IconButton className={classes.icon}n>
                <HeartIcon/>
            </IconButton>
            <IconButton className={classes.icon}>
                <HumanIcon/>
            </IconButton>
        </footer>
    );
}

export default FixedMenu;