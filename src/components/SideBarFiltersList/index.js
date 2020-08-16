import React from "react";
import {
  Wrapper,
  List,
  Title,
  Filter,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
} from "./style";
import {
  toggleGenreFilters,
  toggleLanguageFilters,
} from "../../actions/FILTERS_ACTION";
import {useSelector, useDispatch} from 'react-redux';
import Scroll from "../Scroll";

const SideBarFiltersList = ({
  filters,
  filterKey,
  title
}) => {
  const activeGenreFilter = useSelector(state => state.activeGenreFilter);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Title>{title} </Title>
      <Scroll>
        <List>
          {filters
            ? filters.map((filter) => {
                return (
                  <Filter
                    onClick={() => {
                      if (filterKey === "genres") {
                        dispatch(toggleGenreFilters(filter.id));
                      } else {
                        dispatch(toggleLanguageFilters(filter.iso_639_1));
                      }
                    }}
                    key={filter.id || filter.iso_639_1}
                  >
                    <Label>
                      <CheckboxContainer>
                        <HiddenCheckbox
                          value={activeGenreFilter[filterKey].includes(
                            filter.id
                          )}
                          type="checkbox"
                        />
                        <StyledCheckbox
                          checked={activeGenreFilter[filterKey].includes(
                            filter.id
                          )}
                        ></StyledCheckbox>
                      </CheckboxContainer>
                    </Label>
                    {filter.english_name ? filter.english_name : filter.name}
                  </Filter>
                );
              })
            : null}
        </List>
      </Scroll>
    </Wrapper>
  );
};


export default SideBarFiltersList;
