import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import indexCounter from "../store/indexCounter";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import userData from "../store/userData";

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
        <TextField
          className={classes.input}
          id="password"
          variant="outlined"
          margin="normal"
          required
          label="Пароль"
          {...register("password", {
            required: "Обязательное поле",
            minLength: {
              value: 8,
              message: "Пароль должен быть более 7 символов.",
            },
          })}
          autoFocus
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          className={classes.input}
          id="confirm"
          variant="outlined"
          margin="normal"
          required
          label="Подтвердите пароль"
          {...register("confirm", {
            required: "Обязательное поле",
            validate: (value) =>
              getValues("password") === value ? true : "Пароли не совпадают",
          })}
          autoFocus
          error={!!errors.confirm}
          helperText={errors.confirm?.message}
        />
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
