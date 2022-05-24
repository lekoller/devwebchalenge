import React, { useState, ChangeEvent, MouseEvent } from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import styles from "../styles/LoginCard.module.css";

interface State {
  user: string;
  password: string;
  showPassword: boolean;
}

const LoginCard = () => {
  const [values, setValues] = useState<State>({
    user: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Paper className={styles.container} elevation={3}>
      <Typography
        variant="h5"
        component="div"
        style={{ color: "#123D68", margin: "12px", fontWeight: "bold" }}
      >
        Login
      </Typography>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel>E-mail ou Celular</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type="text"
          value={values.user}
          onChange={handleChange("user")}
          label="E-mail ou Celular"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Senha"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>
      <Button
        style={{
          textTransform: "none",
          fontSize: 16,
          fontWeight: "bold",
          background:
            "linear-gradient(156.07deg, rgba(58, 163, 245, 0.86) -10.81%, #123D68",
          width: "240px",
          height: "50px",
          margin: "16px",
        }}
        variant="contained"
      >
        Conectar
      </Button>
      <Link href="#" underline="hover" color={'#000'}>
        Ainda não é cliente Disparo Pro ?
      </Link>
      <Button size="medium"
      style={{
        textTransform: "none",
        fontSize: 16,
        fontWeight: "bold",
        width: "240px",
        height: "50px",
      }}
      >Criar Conta</Button>
    </Paper>
  );
};

export default LoginCard;
