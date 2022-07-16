import { Form, Formik } from "formik";
import useFirebase from "hooks/useFirebase";
import { Button, TextInput } from "components";
import style from "./LoginForm.module.css";

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
          <div className={style.containerInput}>
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
