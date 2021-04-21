import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import indexCounter from "../store/indexCounter";
import { Button } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import DateFnsUtils from "@date-io/date-fns";
import { observer } from "mobx-react-lite";
import userData from "../store/userData";
import { makeStyles } from "@material-ui/core/styles";

interface FormValues {
  name: string;
  surname: string;
  fatherName: string;
  birthday: Date | MaterialUiPickersDate;
}
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    marginLeft: "25%",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 25,
  },
  input: {
    width: 260,
  },
  button: {
    marginTop: 25,
    alignSelf: "center",
    width: 200,
  },
});
const NameDateInput = observer(() => {
  const classes = useStyles();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>();
  const [date, setDate] = useState<MaterialUiPickersDate>(null);
  const value = watch("birthday") as Date;
  useEffect(() => {
    register("birthday", {
      required: "Обязательное поле",
      valueAsDate: true,
      validate: {
        future: (value) => {
          if (value) {
            return value < new Date()
              ? true
              : "Число не может быть больше сегодняшнего";
          } else return "Строка не может быть пустой";
        },
      },
    });
  }, [register]);
  useEffect(() => {
    setDate(value || null);
  }, [setDate, value]);
  return (
    <form className={classes.root}>
      <div className={classes.row}>
        <TextField
          className={classes.input}
          id="name"
          variant="outlined"
          margin="normal"
          required
          label="Имя"
          {...register("name", {
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Za-zА-Яа-я]*$/,
              message: "Должно состоять только из букв",
            },
          })}
          autoFocus
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          className={classes.input}
          id="surname"
          variant="outlined"
          margin="normal"
          required
          label="Фамилия"
          {...register("surname", {
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Za-zА-Яа-я]*$/,
              message: "Должно состоять только из букв",
            },
          })}
          error={!!errors.surname}
          helperText={errors.surname?.message}
        />
      </div>
      <div className={classes.row}>
        <TextField
          className={classes.input}
          id="fatherName"
          variant="outlined"
          margin="normal"
          required
          label="Отчество"
          {...register("fatherName", {
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Za-zА-Яа-я]*$/,
              message: "Должно состоять только из букв",
            },
          })}
          error={!!errors.fatherName}
          helperText={errors.fatherName?.message}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            value={date}
            onChange={(date) => {
              setDate(date);
              setValue("birthday", date, {
                shouldValidate: true,
                shouldDirty: true,
              });
            }}
            margin="normal"
            id="date"
            label="Дата рождения"
            format="dd/MM/yyyy"
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            error={!!errors.birthday}
            helperText={errors.birthday?.message}
          />
        </MuiPickersUtilsProvider>
      </div>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        onClick={handleSubmit((data) => {
          indexCounter.increment();
          userData.setNameDate(
            data.name,
            data.surname,
            data.fatherName,
            data.birthday as Date
          );
        })}
      >
        Следующий шаг
      </Button>
    </form>
  );
});

export default NameDateInput;
