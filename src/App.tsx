import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import PeopleDetails from './Components/Pages/PeopleDetails';
import ErrorPage from './Components/Pages/Error';
import Header from './Components/Layout/Header';

function App() {
  return(
  <BrowserRouter>
      <Switch>
            <Header/>
            <Route exact path="/" component = {Home}/>
            <Route path="/details" component={PeopleDetails} />
              <Route exact path="*" component={ErrorPage} />
    </Switch>
</BrowserRouter>
)}

export default App;
