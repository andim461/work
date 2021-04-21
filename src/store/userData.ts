import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeAutoObservable } from "mobx";

interface UserData {
  name: string;
  surname: string;
  fatherName: string;
  birthday: Date | null | MaterialUiPickersDate;
  email: string;
  password: string;
}
class IndexCounter {
  user: UserData = {
    name: "",
    surname: "",
    fatherName: "",
    birthday: null,
    email: "",
    password: "",
  };
  constructor() {
    makeAutoObservable(this);
  }
  setNameDate(
    name: string,
    surname: string,
    fatherName: string,
    birthday: Date
  ) {
    this.user.name = name;
    this.user.surname = surname;
    this.user.fatherName = fatherName;
    this.user.birthday = birthday;
  }
  setEmail(email: string) {
    this.user.email = email;
  }
  setPassword(password: string) {
    this.user.password = password;
  }
}
export default new IndexCounter();
