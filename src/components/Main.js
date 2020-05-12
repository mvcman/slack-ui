import React from 'react';
import useStyles from './styles';

export default function Main(){
    const classes = useStyles();
    return (
        <div className={classes.main}>
            <div className={classes.topbar}></div>
            <div className={classes.content}>
                <p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
            </div>
            <div className={classes.bottomTab}></div>
        </div>
    );
}