import Header from './Header';
import Home from './Home';
import {GlobalStyle} from '../styles/GlobalStyle.js';
import { Switch, Route, } from 'react-router-dom';
import Movie from './Movie';
import NotFound from './NotFound';

const App = () => (
  <div>
    <Header />
      <Switch>
          <Route path="/:movieId">
            <Movie title="movie" link="/:movieId" />
          </Route>
          <Route exact path="/" >
            <Home title="welcome" link="/" />
          </Route>
          <Route path="*" element={<NotFound />} />
       </Switch>
    <GlobalStyle />
  </div>
);

export default App;