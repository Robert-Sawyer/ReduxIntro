import * as actionTypes from '../actions/actions';

const initialState = {
    counter: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            //nie chcemy zmieniać stanu state, czyli mutować go, tylko zachować go jako immutable, skopiować i wstawić nowa wartość
            //stary state wstawiamy w metodzie assign i klonujemy go w sposób immutable - tworzy NOWY obiekt ze wszystkimi
            //parametrami starego
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
                //action to po prostu zawartość nawiasu klamrowego w metodzie add w actions.js,
                //możemy dodawać type propsów ile chcemy
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