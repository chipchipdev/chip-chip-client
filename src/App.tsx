import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { useFullscreenStatus } from './lib/use-fullscreen-status';
import { FullscreenDialog } from './component/fullscreen-dialog';

import { Home } from './page/home';
import { Link } from './page/link';
import { Connection } from './page/connection';

export const App = () => {
  const isFullScreen = useFullscreenStatus();

  return (
    <StyledEngineProvider injectFirst>
      <FullscreenDialog open={!isFullScreen} />
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/link" component={Link} />
            <Route exact path="/connection" component={Connection} />
          </Switch>
        </Router>
      </div>
    </StyledEngineProvider>
  );
};
