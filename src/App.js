import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Topbar from "./components/Topbar";
import SideBarFilters from "./components/SidebarFilters";
import Scroll from "./components/Scroll";
import MainPage from "./views/MainPage";
import MoviePage from "./views/MoviePage";
import TVPage from "./views/TVPage";
import WatchPage from "./views/WatchPage";
import SidebarNews from "./components/SidebarNews";

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <Topbar />
          <SideBarFilters />
          <Route
            exact
            path="/"
            render={() => (
              <Scroll>
                <MainPage />
              </Scroll>
            )}
          />
          <Route
            path="/movies"
            render={() => (
              <Scroll>
                <MoviePage />
              </Scroll>
            )}
          />
          <Route
            path="/tvshows"
            render={() => (
              <Scroll>
                <TVPage />
              </Scroll>
            )}
          />
          <Route
            path="/watchlists"
            render={() => (
              <Scroll>
                <WatchPage />
              </Scroll>
            )}
          />
        </Router>
        <Scroll>
          <SidebarNews />
        </Scroll>
      </>
    );
  }
}
