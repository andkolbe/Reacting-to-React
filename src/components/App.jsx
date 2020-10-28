import React from 'react';

/*
const App = (props) => { // props is a vehicle of information between two components
    return (
        <h1>{props.name}</h1>
    );
};
*/

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: 'needs more coffee',
            halpMe: ''
        }; 
    }

    thisIsCalledAHandler(triggeredEvent) { // I think it connects the value to the onChange
        this.setState({ halpMe: triggeredEvent.target.value }); // our old friend event.target
    }

    render() {
        return (
            <React.Fragment> 
                <h1>{`${this.props.name} ${this.state.text}`}</h1>
                <div>
                    <label>HALP</label>
                    <input placeholder="Idk what to write here" 
                        value={this.state.halpMe} onChange={(triggeredEvent) => this.thisIsCalledAHandler(triggeredEvent)} />
                </div>
            </React.Fragment>            
        );
    }
};

export default App;

// prop carries information, state carries user activity
// must use this.setState({}) to update state
// inputs must have value={} and onChange={}
// react.Fragment is a shadow div. Won't show up on dev tools
