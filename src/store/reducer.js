const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        return {
            //nie kopiujemy state za pomocą ... bo utworzyliśmy już initialstate, które jest kopią i ustawiamy jej nową wartość
            counter: state.counter + 1
        }
    }
    return state;
};

export default reducer;