// Teste Git Push
import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
    return (
        <DndProvider backend={HTML5Backend}>
            <Routes />
            <GlobalStyle />
        </DndProvider>
    );
}

export default App;
