import { HashRouter, Route, Switch, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Container } from './components/Guilds/common/Layout';

import Header from './components/Guilds/Header';
import GuildsPage from './pages/Guilds/Guilds';
import ProposalPage from './pages/Guilds/Proposal';
import GlobalStyle from './theme/GlobalTheme';
import theme from './theme/light.json';

import { FilterProvider } from 'contexts/Guilds/filters';

const GuildsApp = () => {
  const history = useHistory();

  const isTestingEnv = !window.location?.hostname?.startsWith('dxvote.eth');
  if (!isTestingEnv) {
    history.push('/');
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/guilds">
        <GlobalStyle />
        <Header />
        <Container>
          <Switch>
            <Route exact path="/">
              <FilterProvider>
                <GuildsPage />
              </FilterProvider>
            </Route>
            <Route path="/:proposal_id">
              <ProposalPage />
            </Route>
          </Switch>
        </Container>
      </HashRouter>
    </ThemeProvider>
  );
};

export default GuildsApp;