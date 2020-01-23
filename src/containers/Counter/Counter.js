import React, { Component } from 'react';
import {connect} from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    };

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } );
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } );
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } );
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } );
                break;
        }
    };

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 11" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 23" clicked={this.props.onSubstractCounter}  />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        //musimy dać tutaj key, bo zwracamy tablicę <li> i dlatego w concat w reducerze ustawiliśmy obiekt z unikatowym id
                        <li key={strResults.id} onClick={this.props.onDeleteResult}>{strResults.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//za pomocą tej funkcji ustawiamy state jako properties i zmieniamy value w CounterOutput ze state.counter na props.ctr (jak counter)
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.results
    }
};

//za pomocą tej fukcji tworzymy konkretną, interesująca nas akcję (np. inkrementację) i ustawiamy ją jako properties trzymającę
// referencję do fukcji.
//utworzoną zmienną onIncrementCounter (zawierającą funkcję wywołującą akcję) wstawiamy do zdarzenia clicked w CounterControl (wyżej)
//logikę samej akcji ustawiamy natomiast w reducerze ->
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', value: 11}),
        onSubstractCounter: () => dispatch({type: 'SUBSTRACT',value: 23}),
        onStoreResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch({type: 'DELETE_RESULT'})

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);