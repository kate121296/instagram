import React, {useState, useEffect} from 'react';
import {IconButton, Input, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import CompasIcon from "../Icons/CompasIcon";
import HeartIcon from "../Icons/HeartIcon";
import HumanIcon from "../Icons/HumanIcon";
import CameraIcon from "../Icons/CameraIcon";
import {getOr, isEmpty} from "lodash/fp";
import {useSnackbar} from "notistack";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const useStyles = makeStyles(theme => ({
    root:{
        backgroundColor:'lightblue'
    },
    header: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        border:'1px solid grey',
        backgroundColor: 'white'
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
        margin:'0 auto',
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
    },
    data:{
        width: '50%',
        border:'1px solid grey',
        borderRadius: 8,
        margin:'0 auto',
        marginTop:70,
        backgroundColor:'white',
    },
    profile:{
        width: '50%',
        margin:'0 auto',
        marginTop:20,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    avatar: {
        width: 50,
        height:50,
        borderRadius:'50%',
        marginRight: 30
    },
    text1:{
        display:'flex',
        flexDirection:' column',
    },
    button: {
        border:'none',
        fontSize: 12,
        padding:'none'
    },
    name:{
        marginLeft:8,
        fontWeight:'bold',
    },
    formWrapper:{
        width: '50%',
        borderRadius: 8,
        margin:'0 auto',
        marginTop:20,
    },
    form: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:'50px 0px 10px 0px'
    },
    namesData:{
        margin:'0 auto',
        width: 100,
        fontWeight:'bold',
    },
    input:{
        margin:'0 auto',
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    button2:{
        marginTop:30,
        margin:'0 auto',
        marginBottom:40
    }
}));
const initValues = {
    name: '',
    username: '',
    website: '',
    about: '',
    email: '',
    phone: '',
    sex: '',
    image:''
};
function EditProfile({
    userProfile=null,
    uid=null,
     onAddUserProfile = () => {},
    onEditUserProfile = () => {},
 }) {
    const { enqueueSnackbar } = useSnackbar();
    const initUserName=getOr('', ['username'], userProfile);
    const isUserProfileExist = Boolean(userProfile)
    const classes = useStyles();
    const [values,setValues] = useState(initValues);
    const [isImageFormOpen,setIsImageFormOpen] = useState(false);
    const avatarSrc = isEmpty(values.image) ? 'https://www.hertrack.com/wp-content/uploads/2018/10/no-image.jpg' : values.image;
    useEffect(() => {
        if(isUserProfileExist) {
            setValues(userProfile)
        }
    }, [isUserProfileExist, userProfile]);

    const handleChange = e => {
        const newValues = {...values};
        newValues[e.target.name] = e.target.value;
        setValues(newValues);
    };
    const handleSubmit = () => {
        const userProfie = {
            userId: uid,
            ...values,
        };
        if (isUserProfileExist) {
            onEditUserProfile(userProfie, userProfile.profileId)
        } else {
            onAddUserProfile(userProfie)
        }
        const snackMessage = isUserProfileExist ? 'Profile edit successfully' : 'Profile created successfully';
        enqueueSnackbar(snackMessage, { variant: 'success' });
    };
    const handleClickAway=()=>{
        setIsImageFormOpen(false);
        console.log(values.image)
    };
    const handleImageFormOpen=()=>{
        setIsImageFormOpen(true)
    }
    return (
        <div className={classes.root}>
            <div className={classes.header}>
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
            <div className={classes.data}>
                <div className={classes.profile}>
                    <img className={classes.avatar} src={avatarSrc} alt=""/>
                    <div className={classes.text1}>
                        <Typography className={classes.name}>{initUserName}</Typography>
                        {isImageFormOpen ? (
                            <ClickAwayListener onClickAway={handleClickAway}>
                                <TextField
                                    type="text"
                                    name="image"
                                    variant="outlined"
                                    placeholder="Enter image src"
                                    className={classes.input}
                                    value={values.image}
                                    onChange={handleChange}
                                />
                            </ClickAwayListener>
                        ):(
                            <Button  color="primary" className={classes.button} onClick={handleImageFormOpen}>
                                change profile photo
                            </Button>
                        )}
                    </div>
                </div>
                <form className={classes.formWrapper}>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Name</Typography>
                        <TextField
                            type="text"
                            name="name"
                            variant="outlined"
                            placeholder="name"
                            className={classes.input}
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Username</Typography>
                        <TextField
                            type="text"
                            name="username"
                            variant="outlined"
                            placeholder="username"
                            className={classes.input}
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Website</Typography>
                        <TextField
                            type="text"
                            name="website"
                            variant="outlined"
                            placeholder="website"
                            className={classes.input}
                            value={values.website}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>About:</Typography>
                        <TextField
                            type="text"
                            name="about"
                            variant="outlined"
                            placeholder="about"
                            className={classes.input}
                            value={values.about}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Email</Typography>
                        <TextField
                            type="email"
                            name="email"
                            variant="outlined"
                            placeholder="email"
                            className={classes.input}
                            value={values.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Phone</Typography>
                        <TextField
                            type="text"
                            name="phone"
                            variant="outlined"
                            placeholder="phone"
                            className={classes.input}
                            value={values.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={classes.form}>
                        <Typography className={classes.namesData}>Sex</Typography>
                        <TextField
                            type="text"
                            name="sex"
                            variant="outlined"
                            placeholder="sex"
                            className={classes.input}
                            value={values.sex}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button2}
                        onClick={handleSubmit}
                    >
                        {isUserProfileExist ? 'Edit' : 'Send'}
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile
