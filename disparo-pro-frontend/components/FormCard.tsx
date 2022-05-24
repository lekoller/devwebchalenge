import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import styles from "../styles/FormCard.module.css";
import { LoginState, RegisterState } from "../interfaces";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

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

  const handleRegisterSubmit = () => {
    if (!marketingValue) {
      setMarketingHelperText("É necessário escolher a resposta");
      setMarketingError(true);
      return
    }

    console.log(registerValues);
    if (!acceptedTerms) {
      setPolicyHelperText("É necessário aceitar os termos");
      setPolicyError(true);
      return;
    }

    setPolicyError(false);
    setMarketingError(false);
    setPolicyHelperText("");
    setMarketingHelperText("");
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
        onClick={handleRegisterSubmit}
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
    </Paper>
  );
};

export default LoginCard;
