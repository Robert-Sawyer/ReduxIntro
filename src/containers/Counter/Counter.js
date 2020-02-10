import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

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
                {/*wcześniej w resultReducer w value było odniesienie do counter. Teraz nadal chcemy otrzymac do niego dostęp*/}
                {/*więc musimy odwołać się do globalnego counterreducera który jest teraz pobierany z index.js przez ctr poniżej*/}
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
                <ul>
                    {this.props.storedResults.map(strResults => (
                        //musimy dać tutaj key, bo zwracamy tablicę <li> i dlatego w concat w reducerze ustawiliśmy obiekt z unikatowym id
                        <li key={strResults.id} onClick={() => this.props.onDeleteResult(strResults.id)}>{strResults.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

//za pomocą tej funkcji ustawiamy state jako properties i zmieniamy value w CounterOutput ze state.counter na props.ctr (jak counter)
const mapStateToProps = state => {
    return {
        //środkowe counter i res biorą się od tych reducerów ustawionych w index.js jako global state
        ctr: state.counter.counter,
        storedResults: state.res.results
    }
};

//za pomocą tej fukcji tworzymy konkretną, interesująca nas akcję (np. inkrementację) i ustawiamy ją jako properties trzymającę
// referencję do fukcji.
//utworzoną zmienną onIncrementCounter (zawierającą funkcję wywołującą akcję) wstawiamy do zdarzenia clicked w CounterControl (wyżej)
//logikę samej akcji ustawiamy natomiast w reducerze ->
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(11)),
        onSubstractCounter: () => dispatch(actionCreators.subtract(23)),
            //w resultReducer mamy value: action.result, dlatego umieszczamy argument w wywołaniu funkcji i ten argument jest po
            //dwukropku po STORE_RESULT, result, a pierwsze result to jest własnie to action.result
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);