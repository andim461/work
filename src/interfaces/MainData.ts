import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date";

interface MainData {
  name: string;
  surname: string;
  fatherName: string;
  birthday: Date | MaterialUiPickersDate;
}
export default MainData;
