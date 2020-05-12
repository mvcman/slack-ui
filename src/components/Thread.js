import React from 'react';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';

export default function ThreadComponent(){
    const classes = useStyles();
    const isToggle = useSelector(state => state.Thread.isOpen);
    const dispatch = useDispatch();
    console.log(isToggle);
    return (
        <div className={isToggle ? classes.threadBarUp : classes.threadBar}>
            <div className={isToggle ? classes.smalltopbar : classes.smalltopbarDown}>
                <div className={classes.title}>
                    <p>Thread</p>
                </div>
                <CloseIcon onClick={() => dispatch({ type: 'TOGGLE_CLOSE' })}/>
            </div>
        </div>
    );
}