import React, { ChangeEvent, MouseEvent, useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";

import styles from "../styles/LoginForm.module.css";
import { RegisterState } from "../interfaces";

interface Props {
  values: RegisterState;
  setValues: React.Dispatch<React.SetStateAction<RegisterState>>;
  marketingValue: string;
  acceptedTerms: boolean;
  setMarketingValue: React.Dispatch<React.SetStateAction<string>>;
  setAcceptedTerms: React.Dispatch<React.SetStateAction<boolean>>;
  policyError: boolean;
  marketingError: boolean;
  setPolicyError: React.Dispatch<React.SetStateAction<boolean>>
  setMarketingError: React.Dispatch<React.SetStateAction<boolean>>
  policyHelperText: string;
  marketingHelperText: string;
  setPolicyHelperText: React.Dispatch<React.SetStateAction<string>>;
  setMarketingHelperText: React.Dispatch<React.SetStateAction<string>>;
}

const RegisterForm = (props: Props) => {
  const handleChange =
    (prop: keyof RegisterState) => (event: ChangeEvent<HTMLInputElement>) => {
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

  const [marketingValue, setMarketingValue] = [props.marketingValue, props.setMarketingValue];
  const [acceptedTerms, setAcceptedTerms] = [props.acceptedTerms, props.setAcceptedTerms];
  const [policyError, setPolicyError] = [props.policyError, props.setPolicyError];
  const [marketingError, setMarketingError] = [props.marketingError, props.setMarketingError];
  const [policyHelperText, setPolicyHelperText] = [props.policyHelperText, props.setPolicyHelperText];
  const [marketingHelperText, setMarketingHelperText] = [props.marketingHelperText, props.setMarketingHelperText];

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value;

    setMarketingValue(value);
    setMarketingHelperText("");
    setMarketingError(false);

    if (value === "true") {
      props.setValues({ ...props.values, marketing: true });
    } else {
      props.setValues({ ...props.values, marketing: false });
    }
  };

  const onPolicyRadioChange = () => {
    props.setValues({ ...props.values, acceptTerms: !acceptedTerms });
    setAcceptedTerms(!acceptedTerms);
    setPolicyHelperText("");
    setPolicyError(false);
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel>Nome</InputLabel>
        <OutlinedInput
          type="text"
          value={props.values.name}
          onChange={handleChange("name")}
          label="Nome"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel>E-mail</InputLabel>
        <OutlinedInput
          type="text"
          value={props.values.email}
          onChange={handleChange("email")}
          label="E-mail"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel>Número</InputLabel>
        <OutlinedInput
          type="number"
          value={props.values.phone}
          onChange={handleChange("phone")}
          label="Número"
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

      <FormControl sx={{ m: 1, width: "50ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-retype-password">
          Repetir senha
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-retype-password"
          type={props.values.showPassword ? "text" : "password"}
          value={props.values.retypePassword}
          onChange={handleChange("retypePassword")}
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
          label="Repetir senha"
          style={{ paddingLeft: "12px", paddingRight: "12px" }}
        />
      </FormControl>

      <FormControl sx={{ m: 4 }} error={policyError} variant="standard">
        <div className={styles.radioOptions}>
          <Radio
            checked={acceptedTerms}
            onChange={onPolicyRadioChange}
            value={true}
            name="radio-buttons"
          />
          <FormLabel id="demo-error-radios">
            Eu li e aceito a politica de privacidade da Disparo Pro
          </FormLabel>
        </div>
        <FormHelperText>{policyHelperText}</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 4 }} error={marketingError} variant="standard">
        <FormLabel id="demo-error-radios">
          Quero receber ofertas,novidades, conteúdos informativos e
          publicitários da Disparo Pro
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={marketingValue}
          onChange={handleRadioChange}
        >
          <div className={styles.radioOptions}>
            <FormControlLabel value="true" control={<Radio />} label="Sim" />
            <FormControlLabel value="false" control={<Radio />} label="Não" />
          </div>
        </RadioGroup>
        <FormHelperText>{marketingHelperText}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default RegisterForm;
