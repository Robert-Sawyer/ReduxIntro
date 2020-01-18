const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                //nie kopiujemy state za pomocą ... bo utworzyliśmy już initialstate, które jest kopią i ustawiamy jej nową wartość
                counter: state.counter + 1
            };
            //nie musimy dawać break bo gdy wykona się jedna akcja nie ma możliwości że uruchomi się druga
        case 'DECREMENT':
            return {
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                //action to po prostu zawartość nawiasów klamrowych w Counter, mapDispatchToProps, dispatch, możemy dodawać type propsów ile chcemy
                counter: state.counter + action.value
            };
        case 'SUBSTRACT':
            return {
                counter: state.counter - action.value
            }
    }
    return state;
};

export default reducer;