import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";
import { makeAutoObservable } from "mobx";
import MainData from "../interfaces/MainData";
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
  setMainData(data: MainData) {
    this.user.name = data.name;
    this.user.surname = data.surname;
    this.user.fatherName = data.fatherName;
    this.user.birthday = data.birthday;
  }
  setEmail(email: string) {
    this.user.email = email;
  }
  setPassword(password: string) {
    this.user.password = password;
  }
}
export default new IndexCounter();
