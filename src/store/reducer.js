import * as actionTypes from './actions';

const initialState = {
    counter: 0,
    results: []
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
                //action to po prostu zawartość nawiasów klamrowych w Counter, mapDispatchToProps, dispatch, możemy dodawać type propsów ile chcemy
                counter: state.counter + action.value
            };
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            };
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                //concat działa jak push, tylko nie wrzuca wartości do starej tablicy, tylko tworzy NOWĄ, która równa sie
                //starej PLUS argument w nawiasach, dlatego nie powinno sie uzywac push przy metodach ktore powinny byc immutable
                results: state.results.concat({id: new Date, value: state.counter})
            };
        case actionTypes.DELETE_RESULT:
            //są dwa sposoby na usunięcie elementu tablicy immutably - 1 poniżej: robimy kopię results, usuwamy obiekt z nowej
            //i podmieniamy tablice
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 2);

            //filter zwraca nowa tablicę, nie dotyka orginalnej; przyjmuje funkcję jako argument i zwraca true albo false
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId)
            return {
                ...state,
                results: updatedArray
            };
    }
    return state;
};

export default reducer;