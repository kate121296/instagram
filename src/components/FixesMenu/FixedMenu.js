import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {IconButton} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

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

function FixedMenu({
   onAddNewPhoto=()=>{}
}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const handleChange = e => {
        setValue(e.target.value)
    };
    const handleSubmit=()=>{
        onAddNewPhoto(value);
        handleClose();
        handleResedValue()
    };
    const handleResedValue=()=>{
        setValue('')
    };
    const handleClickOpen=()=> {
        setOpen(true);
    };

    const handleClose=()=> {
        setOpen(false);
    };
    return (
        <div>
            <footer className={classes.footerWrapper}>
                <IconButton className={classes.icon}>
                    <HomeIcon/>
                </IconButton>
                <IconButton className={classes.icon}>
                    <SearchIcon/>
                </IconButton>
                <IconButton className={classes.icon} onClick={handleClickOpen}>
                    <PlusIcon/>
                </IconButton>
                <IconButton className={classes.icon}>
                    <HeartIcon/>
                </IconButton>
                <IconButton className={classes.icon}>
                    <HumanIcon/>
                </IconButton>
            </footer>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add new photo to the profile</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        id="name"
                        label="Add new src of the photo"
                        type="text"
                        fullWidth
                        value={value}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FixedMenu;