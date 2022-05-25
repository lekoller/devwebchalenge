import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import styles from "../styles/FormCard.module.css";
import { LoginState, RegisterState } from "../interfaces";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { HTTPBaseService } from "../services";
import BasicAlerts from "./Alerts";

const LoginCard = () => {
  const [displayRegister, setDisplayRegister] = useState<boolean>(false);
  const [loginValues, setLoginValues] = useState<LoginState>({
    user: "",
    password: "",
    showPassword: false,
  });
  const [registerValues, setRegisterValues] = useState<RegisterState>({
    name: "",
    email: "",
    phone: "",
    password: "",
    retypePassword: "",
    showPassword: false,
    showRetypePassword: false,
    acceptTerms: false,
    marketing: null,
  });
  const [marketingValue, setMarketingValue] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [policyError, setPolicyError] = useState(false);
  const [marketingError, setMarketingError] = useState(false);
  const [policyHelperText, setPolicyHelperText] = useState("");
  const [marketingHelperText, setMarketingHelperText] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordHelperText, setPasswordHelperText] = useState("");
  const [passwordSizeError, setPasswordSizeError] = useState(false);
  const [passwordSizeHelperText, setPasswordSizeHelperText] = useState("");
  const [phoneSizeError, setPhoneSizeError] = useState(false);
  const [phoneSizeHelperText, setPhoneSizeHelperText] = useState("");
  const [emailSizeError, setEmailSizeError] = useState(false);
  const [emailSizeHelperText, setEmailSizeHelperText] = useState("");
  const [nameSizeError, setNameSizeError] = useState(false);
  const [nameSizeHelperText, setNameSizeHelperText] = useState("");
  const [token, setToken] = useState("");
  const [loginFailed, setLoginFailed] = useState("");
  const [registerFailed, setRegisterFailed] = useState("");
  const [registerSucceeded, setRegisterSucceeded] = useState("");

  const httpService: HTTPBaseService = new HTTPBaseService(
    "http://localhost:3030/api/v1/"
  );

  const handleLoginSubmit = async () => {
    const { user, password } = loginValues;

    try {
      const res = await httpService.login(user, password);

      if (res.status === 202) {
        setToken(res.data.access_token);
      }
    } catch (err) {
      setLoginFailed(err.message);
    }
  };

  const handleRegisterSubmit = async () => {
    const {
      name,
      email,
      phone,
      password,
      retypePassword,
      marketing,
      acceptTerms,
    } = registerValues;
    let isReadyToSubmit = true;

    if (!marketingValue) {
      setMarketingHelperText("É necessário escolher a resposta");
      setMarketingError(true);
      isReadyToSubmit = false;
    }

    if (!acceptedTerms) {
      setPolicyHelperText("É necessário aceitar os termos");
      setPolicyError(true);
      isReadyToSubmit = false;
    }

    if (password !== retypePassword) {
      setPasswordHelperText("As senhas não coincidem");
      setPasswordError(true);
      isReadyToSubmit = false;
    }

    if (password.length < 8) {
      setPasswordSizeHelperText("A senha deve conter mais de 8 caracteres");
      setPasswordSizeError(true);
      isReadyToSubmit = false;
    } else if (password.length > 60) {
      setPasswordSizeHelperText("A senha deve conter menos de 60 caracteres");
      setPasswordSizeError(true);
      isReadyToSubmit = false;
    }

    if (phone.length < 9) {
      setPhoneSizeHelperText(
        "O numero de telefone deve conter mais de 9 dígitos (incluir DDD)"
      );
      setPhoneSizeError(true);
      isReadyToSubmit = false;
    } else if (phone.length > 11) {
      setPhoneSizeHelperText(
        "O numero de telefone deve conter menos de 11 dígitos"
      );
      setPhoneSizeError(true);
      isReadyToSubmit = false;
    }

    if (email.length < 5) {
      setEmailSizeHelperText(
        "O endereço de email deve conter mais de 5 caracteres"
      );
      setEmailSizeError(true);
      isReadyToSubmit = false;
    } else if (email.length > 100) {
      setEmailSizeHelperText(
        "O endereço de email deve conter menos de 100 caracteres"
      );
      setEmailSizeError(true);
      isReadyToSubmit = false;
    }

    if (name.length < 5) {
      setNameSizeHelperText("O nome deve conter mais de 5 caracteres");
      setNameSizeError(true);
      isReadyToSubmit = false;
    } else if (name.length > 100) {
      setNameSizeHelperText("O nome deve conter menos de 100 caracteres");
      setNameSizeError(true);
      isReadyToSubmit = false;
    }

    if (!isReadyToSubmit || !acceptTerms) {
      return;
    }

    setPolicyError(false);
    setMarketingError(false);
    setPolicyHelperText("");
    setMarketingHelperText("");
    setPasswordHelperText("");
    setPasswordError(false);
    setPasswordSizeHelperText("");
    setPasswordSizeError(false);
    setPhoneSizeHelperText("");
    setPhoneSizeError(false);
    setEmailSizeHelperText("");
    setEmailSizeError(false);
    setNameSizeHelperText("");
    setNameSizeError(false);

    try {
      const res = await httpService.create(
        name,
        email,
        password,
        phone,
        marketing,
      )

      if (res.status === 201) {
        setRegisterSucceeded(`Usuário ${res.data["name"]} cadastrado com sucesso!`)
      }
    } catch (err) {
      setRegisterFailed(err.message)
    }
  };

  return (
    <Paper className={styles.container} elevation={3}>
      <Typography
        variant="h5"
        component="div"
        style={{ color: "#123D68", margin: "12px", fontWeight: "bold" }}
      >
        {displayRegister ? "Cadastre-se" : "Login"}
      </Typography>
      {displayRegister ? (
        <RegisterForm
          values={registerValues}
          setValues={setRegisterValues}
          marketingValue={marketingValue}
          setMarketingValue={setMarketingValue}
          acceptedTerms={acceptedTerms}
          setAcceptedTerms={setAcceptedTerms}
          policyError={policyError}
          setPolicyError={setPolicyError}
          marketingError={marketingError}
          setMarketingError={setMarketingError}
          policyHelperText={policyHelperText}
          marketingHelperText={marketingHelperText}
          setPolicyHelperText={setPolicyHelperText}
          setMarketingHelperText={setMarketingHelperText}
          passwordError={passwordError}
          passwordHelperText={passwordHelperText}
          passwordSizeError={passwordSizeError}
          passwordSizeHelperText={passwordSizeHelperText}
          phoneSizeError={phoneSizeError}
          phoneSizeHelperText={phoneSizeHelperText}
          emailSizeError={emailSizeError}
          emailSizeHelperText={emailSizeHelperText}
          nameSizeError={nameSizeError}
          nameSizeHelperText={nameSizeHelperText}
        />
      ) : (
        <LoginForm values={loginValues} setValues={setLoginValues} />
      )}

      <Button
        style={{
          textTransform: "none",
          fontSize: 16,
          fontWeight: "bold",
          background:
            "linear-gradient(156.07deg, rgba(58, 163, 245, 0.86) -10.81%, #123D68)",
          width: "240px",
          height: "50px",
          margin: "16px",
        }}
        variant="contained"
        onClick={displayRegister ? handleRegisterSubmit : handleLoginSubmit}
      >
        {displayRegister ? "Cadastrar" : "Conectar"}
      </Button>
      <Link
        href="#"
        underline="hover"
        color={"#000"}
        onClick={() => setDisplayRegister(displayRegister ? false : true)}
      >
        {displayRegister
          ? "Já é cliente Disparo Pro?"
          : "Ainda não é cliente Disparo Pro?"}
      </Link>
      <Button
        size="medium"
        style={{
          textTransform: "none",
          fontSize: 16,
          fontWeight: "bold",
          width: "240px",
          height: "50px",
        }}
        onClick={() => setDisplayRegister(displayRegister ? false : true)}
      >
        {displayRegister ? "Fazer Login" : "Criar Conta"}
      </Button>

      {token && <BasicAlerts type="success" message="Login realizado!" />}
      {loginFailed && <BasicAlerts type="error" message={loginFailed} />}
      {registerSucceeded && <BasicAlerts type="success" message={registerSucceeded} />}
      {registerFailed && <BasicAlerts type="error" message={registerFailed} />}
    </Paper>
  );
};

export default LoginCard;
