"use client";
import { Container, FormTitle, Form, StyledButton as Button, MemberSwitchContainer } from "./page.styles";
import Logo from "components/Logo/Logo";
import Card from "components/Card/Card";
import FormInputRow from "components/Form/FormInputRow";
import { useState } from "react";
import { useAppContext } from "context/appContext";
// import Button from "components/Button/Button";

const RegisterPage = () => {
  // const context = useAppContext();
  // console.log(context);

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 在 RegisterPage 组件内定义 handleOnSubmit 函数
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleOnChange = (event) => {
    console.log(event.target.value);
    console.log(event.target);
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
    //延迟，滞后
    // console.log(formValues);
  };

  return (
    <Container>
      <Card>
        <Logo />
        <FormTitle>Register</FormTitle>
        <Form data-testid="form" onSubmit={handleOnSubmit}>
          <FormInputRow onChange={handleOnChange} name="name" type="text" />
          <FormInputRow onChange={handleOnChange} name="email" type="text" />
          <FormInputRow onChange={handleOnChange} name="password" type="password" />
          <Button type="submit">Submit</Button>
        </Form>
        <Button variant="secondary">Demo App</Button>
        <MemberSwitchContainer>
          Already a Member ?<Button variant="text">Login</Button>
        </MemberSwitchContainer>
      </Card>
    </Container>
  );
};

export default RegisterPage;
