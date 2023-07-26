import { ErrorMessage, Form, Formik } from "formik";
import useFirebase from "hooks/useFirebase";
import { Button, TextInput } from "components";
import style from "./LoginForm.module.css";
import { SignupSchema } from "utils/validates/LoginValidates";

const initialForm = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { loginUser } = useFirebase();

  return (
    <Formik
      initialValues={initialForm}
      validationSchema={SignupSchema}
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
            <ErrorMessage name="email" render={(msg) => <span className={style.custom}>{msg}</span>}/>
            <TextInput
              label="Password"
              type="password"
              placeholder="Ingresa tu Password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
            <ErrorMessage name="password" render={(msg) => <span className={style.custom}>{msg}</span>}/>
            <Button onSubmit={handleSubmit}>Ingresar</Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
