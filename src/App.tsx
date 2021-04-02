import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import ItemDetailPeople from './Components/ItemDetailPeople';
import ErrorPage from './Components/Pages/Error';
import Header from './Components/Layout/Header';
import { PeopleDetailsProvider } from './context/peopleDetails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <PeopleDetailsProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/details" component={ItemDetailPeople} />
          <Route exact path="*" component={ErrorPage} />
        </Switch>
      </PeopleDetailsProvider>
    </BrowserRouter>
  );
}

export default App;
