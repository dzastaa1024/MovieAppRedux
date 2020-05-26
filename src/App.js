import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import Topbar from "./components/Topbar";
import SideBarFilters from "./components/SidebarFilters";
import Scroll from "./components/Scroll";
import MainPage from "./views/MainPage/MainPage";
import MoviePage from "./views/MoviePage/MoviePage";
import TVPage from "./views/TvPage/TVPage";
import WatchPage from "./views/WatchList/WatchPage";
import SidebarNews from "./components/SidebarNews";
import SignUpForm from "./components/SignUpForm";
import MovieModal from "./components/Modal/MovieModal/MovieModal";
import { connect } from "react-redux";
import { closeModal, openModal } from "./actions/MODAL_ACTION";
import UserForm from "./components/UserForm";
import requireAuth from "./hoc/requireAuth";

class App extends Component {
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
          <Route path="/signup" component={SignUpForm} />
          <Route path="/account" component={requireAuth(UserForm)} />
        </Router>
        <Scroll>
          <SidebarNews />
        </Scroll>
        {this.props.isModal ? <MovieModal /> : null}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isModal: state.isModal,
  };
};

export default connect(mapStateToProps)(App);
