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
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
        //action to po prostu zawartość nawiasów klamrowych w Counter, mapDispatchToProps, dispatch, możemy dodawać type propsów ile chcemy
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUBSTRACT') {
        return {
            counter: state.counter - action.value
        }
    }
    return state;
};

export default reducer;