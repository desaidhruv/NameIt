import './App.css';
import Header from './../Header/Header';
import SearchBox from './../SearchBox/SearchBox';
import ResultsContainer from './../ResultsContainer/ResultsContainer';

import React, { Component } from 'react';

const name = require('@rstacruz/startup-name-generator')

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        }
    }

    handleInputChange = (inputText) => {
        this.setState({ headerExpanded: !inputText, suggestedNames: inputText ? name(inputText) : [] });
    }
    render() {
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                <SearchBox OnInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}

export default App;