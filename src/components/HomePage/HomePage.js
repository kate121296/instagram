import React from 'react';
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({

});

function HomePage({
    uid=null
}) {
    const classes = useStyles();
    return (
     <Typography>
         {uid}
     </Typography>
    );
}

export default HomePage;