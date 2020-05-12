import { combineReducers } from 'redux';

function ToggleThread(state = { isOpen: false }, action) {
    switch (action.type) {
        case 'TOGGLE':
            return { isOpen: !state.isOpen };
        case 'TOGGLE_CLOSE':
            return { isOpen: false };
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    Thread: ToggleThread,
});
