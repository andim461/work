import userData from "../store/userData";
import { makeStyles } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles({
  paper: {
    background: "linear-gradient(50deg, #00FFFF 0%, #4169E1 100%)",
    marginTop: "20%",
    height: "300px",
    textAlign: "center",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  text: {
    maxWidth: "500px",
  },
});
const Celebrate = () => {
  const classes = useStyles();
  const user = userData.user;
  return (
    <Paper elevation={20} className={classes.paper} square>
      <Typography variant="h4">
        Поздравляем, {user.surname} {user.name} {user.fatherName}!
      </Typography>
      <div>
        <Typography variant="h5">Вы успешно прошли регистрацию!</Typography>
        <Typography>Ваш email: {user.email}</Typography>
        <Typography>
          Ваша дата рождения: {user.birthday?.toLocaleDateString()}
        </Typography>
      </div>
    </Paper>
  );
};

export default Celebrate;
