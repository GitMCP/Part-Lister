import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
            </Switch>
        </BrowserRouter>
    );
}
