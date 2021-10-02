import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Screens
import ArtDetails from 'screens/ArtScreen/ArtDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/art/:id" component={ArtDetails}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
