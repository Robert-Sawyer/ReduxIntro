export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//importowanie nazw akcji to dobra praktyka, ponieważ trudno wtedy o pomyłkę w nazwie itp, co oszczędza mnósrwo czasu na ewentualne
//szukanie błędu

//taka funkcja to actionCreator
export const increment = () => {
    return {
        type: INCREMENT
    };
};

export const decrement = () => {
    return {
        type: DECREMENT
    };
};

export const add = (val) => {
    return {
        type: ADD,
        value: val
    };
};

export const subtract = (val) => {
    return {
        type: SUBTRACT,
        value: val
    };
};

//żeby wykonać kod asynchroniczny (za pomoca settimeout) po zaimportowaniu redux-thunk możemy zmodyfikować actionCreators
//aby opóźnić asynchronicznie wykonanie storeResult (sposób poniżej)
export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout( () => {
            dispatch(saveResult(res))
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElementId: resElId
    };
};
