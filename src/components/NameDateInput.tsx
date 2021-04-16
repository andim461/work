import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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

interface FormValues {
  name: string;
  surname: string;
  fatherName: string;
  birthday: Date | MaterialUiPickersDate;
}

const NameDateInput = () => {
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
      required: "This is required",
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
    <form>
      <TextField
        id="name"
        variant="outlined"
        margin="normal"
        required
        label="Имя"
        {...register("name", {
          required: "This is requred",
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
        id="surname"
        variant="outlined"
        margin="normal"
        required
        label="Фамилия"
        {...register("surname", {
          required: "This is requred",
          pattern: {
            value: /^[A-Za-zА-Яа-я]*$/,
            message: "Должно состоять только из букв",
          },
        })}
        error={!!errors.surname}
        helperText={errors.surname?.message}
      />
      <TextField
        id="fatherName"
        variant="outlined"
        margin="normal"
        required
        label="Отчество"
        {...register("fatherName", {
          required: "This is requred",
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

      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit((data) => console.log(data))}
      >
        Следующий шаг
      </Button>
    </form>
  );
};

export default NameDateInput;
