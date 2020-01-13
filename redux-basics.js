//istotą redux jest zmiana state, ale przy założeniu, że state pozostaie IMMUTABLE. nie chcemy modyfikować niemodikowalnego obiektu
//zamiast tego tworzymy kopię state (przez '...') i podstawiam nową wersję starego state

const redux = require('redux');
const createStore = redux.createStore;
//tworzymy store

const initialState = {
    counter: 0
};
//inicjujemy state

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        };
    }

    return state;
    //i modyfikujemy (w tym przypadku zwracamy pierwotny state, ale moglibyśmy je z-updatować
};


//Store
const store = createStore(rootReducer);
console.log(store.getState());
//wyświetlamy state zaraz po inicjalizacji


//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});
//metoda subscripe ma wykonac się zawsze gdy state zostanie zaktualizowany


//Dispatching action
store.dispatch({type: 'INC_COUNTER'});
//argumentem w funkcji dispatch jest ACTION będąca obiektem, w którym musi znaleźc się typ (type) - jakiego typu jest akcja
//i co zamierzamy zrobić z reduktorem - to unikatowy identyfikator naszej akcji/wyboru (używamy go wielkimi literami
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
//wyświetlamy zaktualizowany state po wykonaniu konkretnych akcji (logika na górze w rootreducer).



