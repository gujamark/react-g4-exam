import { Route, Switch } from 'react-router';
import './App.css';

import SignInPage from './components/pages/SignIn';
import AddressesPage from './components/pages/Addresses';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="d-flex">
      <div id="navigation">
        <Navigation />
      </div>
      <div id="content">
        <Switch>
          <Route path="/signin">
            <SignInPage />
          </Route>
          <Route path="/">
            <AddressesPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
