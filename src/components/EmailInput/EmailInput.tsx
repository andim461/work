import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import indexCounter from "../../store/indexCounter";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { observer } from "mobx-react-lite";
import userData from "../../store/userData";

interface FormValues {
  email: string;
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  row: {
    width: 400,
  },
  button: {
    marginTop: 30,
    width: 200,
  },
});
const EmailInput = observer(() => {
  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  return (
    <form className={classes.root}>
      <TextField
        className={classes.row}
        id="email"
        variant="outlined"
        margin="normal"
        required
        label="email"
        {...register("email", {
          required: "Обязательное поле",
          pattern: {
            value: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*)@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:+)\])/,
            message: "Необходимо ввести правильный email",
          },
        })}
        autoFocus
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleSubmit((data) => {
          indexCounter.increment();
          userData.setEmail(data.email);
        })}
      >
        Следующий шаг
      </Button>
    </form>
  );
});

export default EmailInput;
