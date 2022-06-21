import { Button } from "components";
import { Form, Formik } from "formik";
import React, { useContext } from "react";
import style from "./LoginForm.module.css";
import TextInput from "components/textInput/TextInput";
import useFirebase from "hooks/useFirebase";

const initialForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { loginUser } = useFirebase();

  return (
    <Formik
      initialValues={initialForm}
      onSubmit={(values) => loginUser(values)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className={style.container}>
          <TextInput
            label="Email"
            type="email"
            placeholder="Ingresa tu Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextInput
            label="Password"
            type="password"
            placeholder="Ingresa tu Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
          <Button onSubmit={handleSubmit}>Ingresar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
