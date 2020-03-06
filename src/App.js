import React, { Component } from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Routes from './routes';
import GlobalStyle from './styles/global';

/* function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Routes />
            <GlobalStyle />
        </DndProvider>
    );
}

export default App; */

/* import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; */
class App extends Component {
    /*     state = {
        data: null,
    }; */

    componentDidMount() {
        // Call our fetch function below once the component mounts
        this.callBackendAPI();
    }

    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message);
        }
        return body;
    };

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
                <Routes />
                <GlobalStyle />
            </DndProvider>
        );
    }
}
export default App;
