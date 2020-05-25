import React, { Component } from "react";
import { setLocalStorage } from "../../localStorage/localStorage";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";

import {
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
} from "./style";

class SignUpForm extends Component {
  state = {
    user: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      dateOfBirth: "",
      gender: "female",
      status: "",
    },
    errors: [],
  };

  componentDidMount() {
    this.setState({
      user: {
        ...this.state.user,
        ...this.props.user,
      },
    });
  }

  handleChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value,
      },
      errors: [],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // const isValid = this.isFormValid();
    setLocalStorage("user", this.state.user);
    this.props.addUser(this.state.user);

    this.props.history.push("/");
  };

  render() {
    const {
      name,
      surname,
      email,
      phone,
      dateOfBirth,
      gender,
    } = this.state.user;

    const { errors } = this.state;

    return (
      <>
        <Wrapper>
          <Form onSubmit={this.handleSubmit}>
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input
                value={name}
                placeholder=""
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                autocomplete="new-password"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="surname">Surname</Label>
              <Input
                value={surname}
                placeholder=""
                type="text"
                name="surname"
                id="surname"
                onChange={this.handleChange}
                autocomplete="new-password"
              />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input
                value={email}
                placeholder=""
                type="text"
                name="email"
                id="email"
                onChange={this.handleChange}
                autocomplete="new-password"
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="dateOfBirth">Date of birth</Label>
              <DateOfBirth
                value={dateOfBirth}
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                onChange={this.handleChange}
              />
            </InputWrapper>

            <InputWrapper>
              <Label htmlFor="phone">Phone</Label>
              <DateOfBirth
                value={phone}
                type="phone"
                name="phone"
                id="phone"
                onChange={this.handleChange}
              />
            </InputWrapper>

            <InputWrapper radiobtn>
              <Label htmlFor="male">
                Male
                <RadioBtn
                  type="radio"
                  value="male"
                  name="gender"
                  id="male"
                  checked={gender === "male"}
                  onChange={this.handleChange}
                />
              </Label>
              <Label htmlFor="female">
                Female
                <RadioBtn
                  type="radio"
                  value="female"
                  name="gender"
                  id="female"
                  checked={gender === "female"}
                  onChange={this.handleChange}
                />
              </Label>
            </InputWrapper>

            <Label htmlFor="select">
              <Select id="select" onChange={this.handleChange} name="status">
                <Option value="single">Single</Option>
                <Option value="maried">Maried</Option>
              </Select>
            </Label>
            <SubmitBtn>Update</SubmitBtn>
          </Form>
          <ErrorsWrapper>
            {errors.length > 0 &&
              errors.map((error) => (
                <NameOfError key={error.message}> {error.message}</NameOfError>
              ))}
          </ErrorsWrapper>
        </Wrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { addUser })(SignUpForm);
