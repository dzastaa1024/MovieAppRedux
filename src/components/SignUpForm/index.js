import React, { Component } from "react";
import { setLocalStorage } from "../../localStorage/localStorage";
import { connect } from "react-redux";
import { addUser } from "../../actions/userActions";

import {
  Wrapper,
  Form,
  InputWrapper,
  Input,
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
    },
    errors: [],
  };

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/");
    }
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
    const { name, surname, email } = this.state.user;

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
            <SubmitBtn>Create account</SubmitBtn>
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
