import "./login.css";
import logo from "../../Img/logo100x93.png";

const Login = () => {
  return (
    <article className="container">
      <div className="login">
        <div className="login-art">
          <p>
            “This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever before.”
          </p>
          <span>Sofia Davis</span>
        </div>
        <form className="login-connect">
          <div className="login-connect-title">
            <img src={logo} alt="Logo LGAM" />
            <h3>Faça seu login</h3>
            <p>Digite seu e-mail abaixo para entrar na sua conta</p>
          </div>
          <div className="login-connect-input">
            <input type="text" placeholder="E-mail" className="login-input" />
            <input type="text" placeholder="Senha" className="login-input" />
            <button className="login-button">Login</button>
          </div>
        </form>
      </div>
    </article>
  );
};

export default Login;
