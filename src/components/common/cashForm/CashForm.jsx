import { Button, Loader, TextInput } from "components";
import { Field, Formik, Form } from "formik";
import useFirebase from "hooks/useFirebase";
import style from "./Form.module.css";

const initialValues = {
  details: "",
  manicure: "mica",
  income: "",
  exit: "",
  credit: "digital",
};

const CashForm = () => {
  const { createData, loading } = useFirebase();

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => createData(values, resetForm)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <Form className={style.container}>
            <div className={style.containerInput}>
              <TextInput
                label="Detalle"
                type="text"
                name="details"
                placeholder="Detalles"
                value={values.details}
                onChange={handleChange}
              />
              <div className={style.labelSelect}>
                <label htmlFor="credit">Manicuras</label>
              </div>

              <div className={style.containerSelect}>
                <Field
                  as="select"
                  className={style.select}
                  name="manicure"
                  value={values.manicure}
                  onChange={handleChange}
                >
                  <option defaultValue={"mica"} value="mica">
                    Mica
                  </option>
                  <option value="mel">Mel</option>
                  <option value="abi">Abi</option>
                  <option value="jali">Jali</option>
                </Field>
              </div>

              <TextInput
                label="Ingresos"
                type="number"
                name="income"
                placeholder="Ingresos"
                value={values.income}
                onChange={handleChange}
              />

              <TextInput
                label="Gastos"
                type="number"
                name="exit"
                placeholder="Salida"
                value={values.exit}
                onChange={handleChange}
              />
              <div className={style.labelSelect}>
                <label htmlFor="credit">Forma de Pago</label>
              </div>
              <Field
                as="select"
                name="credit"
                className={style.select}
                value={values.credit}
                onChange={handleChange}
              >
                <option defaultValue={"digital"} value="digital">
                  Digital
                </option>
                <option value="efectivo">Efectivo</option>
              </Field>

              <Button type="submit" onSubmit={handleSubmit}>
                Agregar
              </Button>
              <div className={style.containerLoading}>
                {loading && <Loader />}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CashForm;
