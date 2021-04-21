import NameDateInput from "./NameDateInput";
import indexCounter from "../store/indexCounter";
import { observer } from "mobx-react-lite";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Celebrate from "./Celebrate";

const Main = observer(() => {
  const dataFields = [
    <NameDateInput />,
    <EmailInput />,
    <PasswordInput />,
    <Celebrate />,
  ];
  indexCounter.setMaxIndex(dataFields.length - 1);
  return dataFields[indexCounter.count];
});

export default Main;
