import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        //nie musimy dawać break bo gdy wykona się jedna akcja nie ma możliwości że uruchomi się druga
        case actionTypes.DECREMENT:
            return {
                //ALTERNATYWNY SPOSÓB
                //oto co sie tu dzieje: ... - weź obiekt state, skopiuj wszystkie jego wlasciwosci i wartosci, opakuj go
                //w nowy obiekt ( {} ) i zmień tylko wartość pola counter, nie ruszaj result
                ...state,
                counter: state.counter - 1
            };
        case actionTypes.ADD:
            return {
                ...state,
                //action to po prostu zawartość nawiasów klamrowych w Counter, mapDispatchToProps, dispatch, możemy dodawać type propsów ile chcemy
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
    }
    return state;
};

export default reducer;