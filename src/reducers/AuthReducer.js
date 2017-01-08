import {EMAIL_CHANGED} from "./types";
// Initial state value - everything has to return something by default
const INITIAL_STATE = {email: ""};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return something;

        default:
            return state;
    }
};