import React, { Component } from "react";
import { Wrapper, List, Title } from "./style";
import { toggleGenreFilters } from "../../actions/FILTERS_ACTION";
import { connect } from "react-redux";

import Scroll from "../Scroll";

class SideBarFiltersList extends Component {
  render() {
    const { filters, activeFilter, filterKey, title } = this.props;

    return (
      <Wrapper>
        <Title>{title} </Title>
        <Scroll>
          <List>
            {filters
              ? filters.map((filter) => {
                  return (
                    <li
                      onClick={() => this.props.toggleGenreFilters(filter.id)}
                      key={filter.id}
                    >
                      <label>
                        <input
                          value={activeFilter[filterKey].includes(filter.id)}
                          type="checkbox"
                        />
                      </label>
                      {filter.english_name ? filter.english_name : filter.name}
                    </li>
                  );
                })
              : null}
          </List>
        </Scroll>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    activeFilter: state.activeFilter,
  };
};

export default connect(mapStateToProps, { toggleGenreFilters })(
  SideBarFiltersList
);
