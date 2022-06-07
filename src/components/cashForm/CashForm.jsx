import Button from "components/button/Button";
import { StateContext } from "context/StateProvider";
import { Field, Formik, Form } from "formik";
import { useContext } from "react";
import style from "./Form.module.css";

const initialValues = {
  manicure: "mica",
  income: "",
  exit: "",
  credit: false,
};

const CashForm = () => {
  const { createData } = useContext(StateContext);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => createData(values, resetForm)}
    >
      {({ values, handleChange, handleSubmit }) => (
        <Form className={style.container}>
          <Field
            as="select"
            className={style.select}
            name="manicure"
            value={values.manicure}
            onChange={handleChange}
          >
            <option selected value="mica">
              Mica
            </option>
            <option value="mel">Mel</option>
            <option value="abi">Abi</option>
            <option value="jali">Jali</option>
          </Field>
          <Field
            type="number"
            name="income"
            placeholder="Ingresos"
            value={values.income}
            onChange={handleChange}
          />
          <Field
            type="number"
            name="exit"
            placeholder="Salida"
            value={values.exit}
            onChange={handleChange}
          />
          <label htmlFor="credit">Mercado Pago</label>
          <input
            type="checkbox"
            name="credit"
            value={values.credit}
            onChange={handleChange}
          />
          <Button type="submit" onSubmit={handleSubmit}>
            Agregar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CashForm;
