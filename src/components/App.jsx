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
            halpMe: '',
            hasLoaded: false
        }; 
    }

    thisIsCalledAHandler(triggeredEvent) { 
        this.setState({ halpMe: triggeredEvent.target.value }); 
    }

    buttonHandler() {
        this.setState({ hasLoaded: !this.state.hasLoaded })
    }

    componentDidMount() {
        this.setState({ hasLoaded: true })
    }


    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment> 
                    <h1>{`${this.props.name} ${this.state.text}`}</h1>
                    <div>
                        <input placeholder="Idk what to write here" 
                            value={this.state.halpMe} onChange={(triggeredEvent) => this.thisIsCalledAHandler(triggeredEvent)} />
                        <button onClick={() => this.buttonHandler()}>HALP</button>
                    </div>
                </React.Fragment>            
            );
        } else {
            return (
                <React.Fragment> 
                    <h1>Loading...</h1>
                    <button onClick={() => this.buttonHandler()}>HALP</button>
                </React.Fragment>            
            );
        }
    }
};

export default App;

// props is an object
// props carries information, state carries user activity
// class allows you to uses state
// must use this.setState({}) to update state
// inputs must have value={} and onChange={}
// value is tied to the state and onChange is what updates that state
// react.Fragment is a shadow div. Won't show up on dev tools
