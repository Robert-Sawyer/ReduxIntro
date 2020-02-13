import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

//NIE POWINNO SIĘ DAWAĆ ZBYT DUŻO LOGIKI ZMIENIAJĄCEJ DANE DO ACTIONCREATORS, BO NIE OD TEGO JEST TA KLASA.
// CAŁA LOGIKA MANIPULUJĄCA STANEM POWINNA SIĘ ZNALEŹĆ W REDUCERZE, BO TO REDUCER JEST JĄDREM PROJEKTU OPARTEGO NA REACT-REDUX

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD:
            //action to po prostu zawartość nawiasu klamrowego w metodzie add w actions.js,
            //możemy dodawać type propsów ile chcemy
            return updateObject(state, {counter: state.counter + action.value});
        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value});
    }
    return state;
};

export default reducer;