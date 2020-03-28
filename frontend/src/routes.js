import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} /> {/* o parametro 'exact' faz com que a rota valide se é exatamente igual */}
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}