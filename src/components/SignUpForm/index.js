import React from "react";
import { setLocalStorage } from "../../localStorage/localStorage";
import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
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

const SignUpForm = (props) => {
  const userDeatils = {
    name: "",
    surname: "",
    email: "",
  }

  const signUser =  useSelector(state => state.user);
  const dispatch =  useDispatch();

  const [user, setUser] = useState(userDeatils);
  const [errors, setErrors] = useState([]);

  // state = {
  //   user: {
  //     name: "",
  //     surname: "",
  //     email: "",
  //   },
  //   errors: [],
  // };

  useEffect(() => {
        if (signUser) {
      props.history.push("/");
    }
  }, [])

  // componentDidMount() {
  //   if (signUser) {
  //     props.history.push("/");
  //   }
  // }

  const handleChange = (e) => {
    e.persist();
    console.log('value', e.target.value);
    setUser((prevState)=>{
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
      setErrors([]);

    // this.setState({
    //   user: {
    //     ...this.state.user,
    //     [e.target.name]: e.target.value,
    //   },
    //   errors: [],
    // });
  };

  const isFormValid = () => {
    const errors = [];

    if (isFiledEmpty()) {
      errors.push({ message: "Fill in the empty fields." });
    }

    if (isEmailValid()) {
      errors.push({ message: "Your emial is incorrect." });
    }

    if (errors.length) {
      setErrors(errors);
      // this.setState({
      //   errors: errors,
      // });
      return false;
    }

    return true;
  };

  const isEmailValid = () => {
    return !user.email.includes("@");
  };

  const isFiledEmpty = () => {
    const { name, surname, email } = user;
    return !name.length || !surname.length || !email.length;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = isFormValid();

    if (!isValid) {
      return;
    }

    setLocalStorage("user", user);
    dispatch(addUser(user));

    props.history.push("/");
  };

    const { name, surname, email } = user;
    //const { errors } = this.state;

    return (
      <>
        <Wrapper>
          <Form onSubmit={handleSubmit}>
            <InputWrapper>
              <Label htmlFor="name">Name</Label>
              <Input
                value={name}
                placeholder=""
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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

export default SignUpForm;
