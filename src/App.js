import React, { Suspense, lazy } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes/routes";

const Main = lazy(() => import("./components/Main"));
const ProjectDetail = lazy(() => import("./components/ProjectDetail"));

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route exact path={routes.home()} component={Main} />
          <Route
            path={routes.projectDetail({ projectId: ":projectId" })}
            component={ProjectDetail}
            exact
          />
        </Switch>
        <Main />
      </Suspense>
    </Router>
  );
}

export default App;
