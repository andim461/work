import { makeAutoObservable } from "mobx";

class IndexCounter {
  user = { name: "", surname: "", fatherName: "", birthDate: "" };
  constructor() {
    makeAutoObservable(this);
  }
  setNameDate(name: string, surname: string, fatherName: string, birthDate: string) {
      this.user.name = name;
      this.user.surname = surname;
      this.user.fatherName = fatherName;
      this.user.birthDate = birthDate;
  }
}
export default new IndexCounter();
