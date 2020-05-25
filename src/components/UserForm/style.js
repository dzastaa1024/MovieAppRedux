import styled, { css } from "styled-components";

const Wrapper = styled.div`
  background-color: #18171f;
  margin-left: 20rem;
  margin-top: 10rem;
  border-top-left-radius: 40px;
  width: calc(100% - 2 * 200px);
  height: 100%;
  padding: 5rem;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 5rem;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 3fr));
  margin-bottom: 3rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 90%;
  margin: 0 auto;
  border-bottom: 1px solid #d3d3d3;
  flex-shrink: 0;
  ${(props) =>
    props.radiobtn &&
    css`
      border: none;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    `}
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: white;
  font-size: 2rem;
`;

const DateOfBirth = styled.input`
  border: none;
  color: #7d7d7d;
  font-size: 1.6rem;
  width: 100%;
  border: none;
  outline: none;
`;

const RadioBtn = styled.input`
  margin-left: 1rem;
`;

const Label = styled.label`
  text-align: center;
  color: white;
`;

const Select = styled.select``;

const Option = styled.option``;

const SubmitBtn = styled.button`
  height: 3.2rem;
  width: 13rem;
  background-color: #ecff34;
  color: gray;
  outline: none;
  border: none;
  border-radius: 2px;
  box-shadow: 0 1px 2px grey;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  position: absolute;
  bottom: 3%;
  left: 44%;
`;

const NameOfError = styled.p``;

const ErrorsWrapper = styled.div`
  color: red;
`;

export {
  Wrapper,
  Form,
  InputWrapper,
  Input,
  DateOfBirth,
  RadioBtn,
  Select,
  Option,
  SubmitBtn,
  NameOfError,
  ErrorsWrapper,
  Label,
};
