import { useForm } from "react-hook-form";
import indexCounter from "../../store/indexCounter";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import userData from "../../store/userData";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useState } from "react";

interface FormValues {
  password: string;
  confirm: "";
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },

  input: {
    marginLeft: 10,
    marginRight: 10,
  },
  button: { marginTop: 20 },
});
const PasswordInput = observer(() => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <form className={classes.root}>
      <div>
        <FormControl
          className={classes.input}
          variant="outlined"
          error={!!errors.password}
        >
          <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
          <OutlinedInput
            id="password"
            type={showPassword ? "text" : "password"}
            {...register("password", {
              required: "Обязательное поле",
              minLength: {
                value: 8,
                message: "Пароль должен быть более 7 символов.",
              },
            })}
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <FormHelperText id="component-helper-text">
            {errors.password?.message}
          </FormHelperText>
        </FormControl>

        <FormControl
          className={classes.input}
          variant="outlined"
          error={!!errors.confirm}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Подтвердите пароль
          </InputLabel>
          <OutlinedInput
            id="confirm"
            type={showPassword ? "text" : "password"}
            {...register("confirm", {
              required: "Обязательное поле",
              validate: (value) =>
                getValues("password") === value ? true : "Пароли не совпадают",
            })}
            autoFocus
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  onMouseDown={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={170}
          />
          <FormHelperText id="component-helper-text">
            {errors.confirm?.message}
          </FormHelperText>
        </FormControl>
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleSubmit((data) => {
          indexCounter.increment();
          userData.setPassword(data.password);
        })}
      >
        Следующий шаг
      </Button>
    </form>
  );
});

export default PasswordInput;
