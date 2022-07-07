import { Form, Formik } from "formik";
import useClients from "hooks/useClients";
import Button from "../button/Button";
import Loader from "../loader/Loader";
import TextInput from "../textInput/TextInput";
import style from "./FormClients.module.css";

const initialValues = {
  client: "",
  date: "",
  service: "",
  cellphone: "",
};

const FormClients = () => {
  const { addClient, loading } = useClients();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => addClient(values, resetForm)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <>
          <Form className={style.container}>
            <TextInput
              label="Clienta"
              type="text"
              name="client"
              value={values.client}
              onChange={handleChange}
            />
            <TextInput
              label="Fecha de Nacimiento"
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
            />
            <TextInput
              label="Servicio"
              type="text"
              name="service"
              value={values.service}
              onChange={handleChange}
            />
            <TextInput
              label="Telefono"
              type="number"
              name="cellphone"
              value={values.cellphone}
              onChange={handleChange}
            />
            <Button onSubmit={handleSubmit}>Agregar</Button>
            {loading && <Loader />}
          </Form>
        </>
      )}
    </Formik>
  );
};

export default FormClients;
