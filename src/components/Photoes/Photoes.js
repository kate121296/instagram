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
function Photoes() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVIIGkA9N8_pAbheJ5Q9bQC-pHaYy43ZQ7i-W69cZNkQeaY7h2" alt=""/>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAj4SJ87FGOX9HBaHCT09r1-Iktd4tEpaUYUvRUiEcsQ1I8XlX" alt=""/>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyUAdKNuu8Zrxv9pszXKTcwoFaEWO2EZU4Yzgtnp7lsAZYNqFR" alt=""/>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXBE_ZFdYsSd27wOr82_PjYMY6T7zQsxp-Mt-a1SX9pPgnPkZ" alt=""/>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR1cNEHIBHr9rbzWqE-ZOcYmxclCV4qbJOPz-JkK1Rke-Dw-7b" alt=""/>
            <img className={classes.image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcDDNtD-vbueTKpfWMgnPR6Chkpkmt0Eef0lv8_-ah60iH5JSI" alt=""/>
        </div>
    );
}

export default Photoes;