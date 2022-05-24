import React, { useState, ChangeEvent, MouseEvent } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import styles from "../styles/FormCard.module.css";
import { LoginState } from "../interfaces";
import LoginForm from "./LoginForm";


const LoginCard = () => {
  const [loginValues, setLoginValues] = useState<LoginState>({
    user: "",
    password: "",
    showPassword: false,
  });

  

  return (
    <Paper className={styles.container} elevation={3}>
      <Typography
        variant="h5"
        component="div"
        style={{ color: "#123D68", margin: "12px", fontWeight: "bold" }}
      >
        Login
      </Typography>
      <LoginForm values={loginValues} setValues={setLoginValues} />
    </Paper>
  );
};

export default LoginCard;
