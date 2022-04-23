import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch,
  } from 'react-router-dom';
import { Home } from './components/pages/Home'
import { Test } from './components/pages/Test'

export const App = () => {

    return (
        <div>
          <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/men' exact component={Home} />
                <Route path='/Test' component={Test} />
                {/* <Route path='/example' component={Example} />
                <Route path='/post/edit/:id' component={PostEdit} /> */}
            </Switch>
          </BrowserRouter>
        </div>
    );
}


// ReactDOM.render((
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   ), document.getElementById('root'))
