import { LoginForm, NavIcons } from "components";
import style from "./Login.module.css";

const Login = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <h1>Login</h1>
        <LoginForm />
      </div>
      <div className={style.right}>
        <NavIcons />
      </div>
    </div>
  );
};

export default Login;
