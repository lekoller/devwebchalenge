import React, { ChangeEvent, MouseEvent } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import styles from "../styles/LoginForm.module.css";
import { LoginState } from "../interfaces";

interface Props {
  values: LoginState;
  setValues: React.Dispatch<React.SetStateAction<LoginState>>;
}

const LoginForm = (props: Props) => {
  const handleChange =
    (prop: keyof LoginState) => (event: ChangeEvent<HTMLInputElement>) => {
      props.setValues({ ...props.values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    props.setValues({
      ...props.values,
      showPassword: !props.values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel>E-mail ou Celular</InputLabel>
        <OutlinedInput
          id="outlined-user"
          type="text"
          value={props.values.user}
          onChange={handleChange("user")}
          label="E-mail ou Celular"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={props.values.showPassword ? "text" : "password"}
          value={props.values.password}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {props.values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Senha"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>
    </div>
  );
};

export default LoginForm;
