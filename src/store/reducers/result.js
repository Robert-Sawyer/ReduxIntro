import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            //concat działa jak push, tylko nie wrzuca wartości do starej tablicy, tylko tworzy NOWĄ, która równa sie
            //starej PLUS argument w nawiasach, dlatego nie powinno sie uzywac push przy metodach ktore powinny byc immutable
            //UWAGA action.result
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            //są dwa sposoby na usunięcie elementu tablicy immutably - 1 poniżej: robimy kopię results, usuwamy obiekt z nowej
            //i podmieniamy tablice
            // const id = 2;
            // const newArray = [...state.results];
            // newArray.splice(id, 2);

            //filter zwraca nowa tablicę, nie dotyka orginalnej; przyjmuje funkcję jako argument i zwraca true albo false
            const updatedArray = state.results.filter(result => result.id !== action.resultElementId);
            return updateObject(state, {results: updatedArray});
    }
    return state;
};

export default reducer;