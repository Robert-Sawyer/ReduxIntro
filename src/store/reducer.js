const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            //nie chcemy zmieniać stanu state, czyli mutować go, tylko zachować go jako immutable, skopiować i wstawić nowa wartość
            //stary state wstawiamy w metodzie assign i klonujemy go w sposób immutable - tworzy NOWY obiekt ze wszystkimi
            //parametrami starego
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
            //nie musimy dawać break bo gdy wykona się jedna akcja nie ma możliwości że uruchomi się druga
        case 'DECREMENT':
            return {
                //ALTERNATYWNY SPOSÓB
                //oto co sie tu dzieje: ... - weź obiekt state, skopiuj wszystkie jego wlasciwosci i wartosci, opakuj go
                //w nowy obiekt ( {} ) i zmień tylko wartość pola counter, nie ruszaj result
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                //action to po prostu zawartość nawiasów klamrowych w Counter, mapDispatchToProps, dispatch, możemy dodawać type propsów ile chcemy
                counter: state.counter + action.value
            };
        case 'SUBSTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                //concat działa jak push, tylko nie wrzuca wartości do starej tablicy, tylko tworzy NOWĄ, która równa sie
                //starej PLUS argument w nawiasach, dlatego nie powinno sie uzywac push przy metodach ktore powinny byc immutable
                results: state.results.concat({id: new Date, value: state.counter})
            };
        case 'DELETE_RESULT':
            return {

            };
    }
    return state;
};

export default reducer;