import * as Yup from "yup"

export const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Es requerido'),
    password: Yup.string().min(6, "minimo 6 caracteres").required('El password es requerido')
  });