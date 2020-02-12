import * as actionTypes from './actionTypes';

//NIE POWINNO SIĘ DAWAĆ ZBYT DUŻO LOGIKI ZMIENIAJĄCEJ DANE DO ACTIONCREATORS, BO NIE OD TEGO JEST TA KLASA.
// CAŁA LOGIKA MANIPULUJĄCA STANEM POWINNA SIĘ ZNALEŹĆ W REDUCERZE, BO TO REDUCER JEST JĄDREM PROJEKTU OPARTEGO NA REACT-REDUX

//taka funkcja to actionCreator
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    };
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    };
};

export const add = (val) => {
    return {
        type: actionTypes.ADD,
        value: val
    };
};

export const subtract = (val) => {
    return {
        type: actionTypes.SUBTRACT,
        value: val
    };
};