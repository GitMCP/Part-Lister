import React from 'react';
import { DndProvider } from 'react-dnd';
import { Provider } from 'react-redux';
import HTML5Backend from 'react-dnd-html5-backend';
import Routes from './routes';
import GlobalStyle from './styles/global';

import store from './store';

function App() {
    return (
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <Routes />
                <GlobalStyle />
            </DndProvider>
        </Provider>
    );
}

export default App;
