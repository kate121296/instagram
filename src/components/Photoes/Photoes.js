import React from 'react';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    root:{
        width:'70%',
        margin:'0 auto',
        marginTop:100,
        padding:20,
        display:'flex',
        flexWrap:'wrap',
    },
    image:{
        width: '31%',
        border:'1px solid black',
        marginRight:21,
        marginBottom:21,
        borderRadius:8,
    }
});
function Photoes({
    images=[]
                 }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {images.map(photo=>{
                return(
                    <img
                        className={classes.image}
                        src={photo.src}
                        key={photo.id}
                    />
                )
            })}
        </div>
    );
}

export default Photoes;