import styled from "styled-components";

const Wrapper = styled.div`
  padding: 2rem;
  color: #d4d4d4;
  font-size: 1.3rem;
  height: 50%;
  overflow: hidden;
`;

const List = styled.ul`
  cursor: pointer;
  padding: 0.5rem;
`;

const Filter = styled.li`
  cursor: pointer;
  padding: 0.5rem;
`;

const Title = styled.h2`
  padding-bottom: 2rem;
  color: #d4d4d4;
`;

const CheckboxContainer = styled.div`
  margin-right: 0.5rem;
  display: inline-block;
  vertical-align: middle;
`;

const HiddenCheckbox = styled.input`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Label = styled.label`
  width: 100%;
  height: 100%;
`;

const StyledCheckbox = styled.label`
  display: inline-block;
  width: 14px;
  height: 14px;
  background: gray;
  border-radius: 3px;
  background: ${(props) => (props.checked ? "#e2f720" : "#302e44")};
`;

export {
  Wrapper,
  List,
  Title,
  Filter,
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Label,
};
