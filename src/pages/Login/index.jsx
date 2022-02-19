import WrapperLogin from "./style";
import Logo from "../../utils/images/gtdLogo1.svg";
import googleIcon from "../../utils/images/icons/googleIcon.svg";
import facebookIcon from "../../utils/images/icons/facebookIcon.svg";
import linkedinIcon from "../../utils/images/icons/linkedinIcon.svg";

function Login() {
  return (
    <WrapperLogin>
      <img className="logo" src={Logo} alt="Logo-gtd" />
      <input type="email" placeholder="Example@email.com" />
      <input type="password" placeholder="senha" />
      <input type="button" value="LOGIN" />
      <div className="icons">
        <img className="icon" src={googleIcon} alt="google" />
        <img className="icon" src={facebookIcon} alt="facebook" />
        <img className="icon" src={linkedinIcon} alt="linkedin" />
      </div>
    </WrapperLogin>
  );
}

export default Login;
