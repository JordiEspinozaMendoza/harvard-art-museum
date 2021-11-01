import React from "react";
import { Route, Switch } from "react-router-dom";

// ? Routes
import { mainPageRoutes as routes } from "routes/mainPageRoutes";
// ? Components
import { NavigationBar } from "components/NavigationBar";
export const MainPageRouter = () => {
  return (
    <>
      <React.Suspense
        fallback={<div className="container loader-container-router"></div>}
      >
        <NavigationBar />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </React.Suspense>
    </>
  );
};
