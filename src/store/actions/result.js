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
    return (dispatch, getState) => {
        setTimeout( () => {
//Jeśli chcielibyśmy podejrzeć stary counter (sprzed zmiany w kodzie asynchronicznym) możemy to zrobić w taki sposób:
//            const oldCounter = getState().ctr.counter;
//            console.log(oldCounter);
//robimy to przed dispatchem akcji saveResult, ale nie należy nadużywać tego typu logiki w actionCreators
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
