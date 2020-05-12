import React from 'react';
import useStyles from './styles';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

export default function Main(){
    const classes = useStyles();
    const isToggle = useSelector(state => state.Thread.isOpen);
    const dispatch = useDispatch();
    return (
        <div className={isToggle ? classes.mainDown : classes.main}>
            <div className={isToggle ? classes.topbarDown : classes.topbar}></div>
            <div className={classes.content}>
                <p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p><p>Mandadr</p>
                <Button color="secondary" onClick={() => dispatch({ type: 'TOGGLE' })}>Click Me</Button>
            </div>
            <div className={isToggle ? classes.bottomTabDown : classes.bottomTab}></div>
        </div>
    );
}