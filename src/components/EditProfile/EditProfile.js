import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({

});

function EditProfile() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <h1>Edit profile</h1>
        </div>
    );
}

export default EditProfile;