import Main from "./components/Main";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  app: {
    background: "linear-gradient(50deg, #06FF11 15%, #FF8E53 70%)",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
});
const App = () => {
  const styles = useStyles();
  return (
    <div className={styles.app}>
      <Main />
    </div>
  );
};

export default App;
