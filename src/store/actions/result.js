import * as actionTypes from './actionTypes';


//żeby wykonać kod asynchroniczny (za pomoca settimeout) po zaimportowaniu redux-thunk możemy zmodyfikować actionCreators
//aby opóźnić asynchronicznie wykonanie storeResult (sposób poniżej)
export const saveResult = (res) => {
    return {
        type: actionTypes.STORE_RESULT,
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
        type: actionTypes.DELETE_RESULT,
        resultElementId: resElId
    };
};
