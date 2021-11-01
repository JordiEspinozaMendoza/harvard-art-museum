import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//* Screens
import ArtDetails from "screens/ArtScreen/ArtDetails";
import { MainPageRouter } from "routers/mainPageRouter";
// ? Theme stuff
import { ThemeProvider } from "styled-components";
import { mainTheme } from "utils";

function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Switch>
          <Route
            exact
            path="/"
            name="mainPage"
            render={(props) => <MainPageRouter {...props} />}
          />
          <Route exact path="/art/:id" component={ArtDetails} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
