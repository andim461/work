import MainDataInput from "./MainDataInput/MainDataInput";
import indexCounter from "../store/indexCounter";
import { observer } from "mobx-react-lite";
import EmailInput from "./EmailInput/EmailInput";
import PasswordInput from "./PaswordInput/PasswordInput";
import Celebrate from "./Celebrate/Celebrate";

const Main = observer(() => {
  const dataFields = [
    <MainDataInput />,
    <EmailInput />,
    <PasswordInput />,
    <Celebrate />,
  ];
  indexCounter.setMaxIndex(dataFields.length - 1);
  return dataFields[indexCounter.count];
});

export default Main;
