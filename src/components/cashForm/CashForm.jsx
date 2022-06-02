import Button from "components/button/Button";
import { Field, Formik, Form } from "formik";
import style from "./Form.module.css";

const initialValues = {
  manicure: "",
  income: "",
  exit: "",
  credit: "",
};

const CashForm = ({ createData }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => createData(values)}
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
            <option value="mica">Mica</option>
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
          <Button onSubmit={handleSubmit}>Agregar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default CashForm;
