import React from "react";
import { useParams } from "react-router-dom";
import portfolio from "../../portfolio";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import pwd from "../../secrets";
import ProjectContent from "./ProjectContent";
import { Typography } from "@material-ui/core";
import OOps from "../../images/oops.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  OOpsImg: {
    width: "20rem",
  },
}));

function ProjectDetail() {
  const { projectId } = useParams();
  const classes = useStyles();

  const result = portfolio.find((obj) => {
    return obj.project_id === projectId;
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    identified: false,
    validationError: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleKeyPress = () => (event) => {
    if (event.key === "Enter") {
      if (event.target.value === pwd) {
        setValues({ ...values, identified: !values.identified });
      } else {
        setValues({ ...values, validationError: !values.validationError });
      }
    }
  };

  return (
    <div id="details">
      {result.protected && values.identified === false ? (
        <>
          <Typography gutterbottom style={{ fontSize: "2rem" }}>
            <b style={{ color: "#ff9100" }}>OOPS! </b>
            looks like you need access to see this project, please contact me,
            I'll be happy to give it to you.
          </Typography>
          <div>
            <img
              className={classes.OOpsImg}
              src={OOps}
              alt="OOps you need access"
              title="Open doodles by Paco Stanley"
            />
          </div>
          <FormControl>
            <InputLabel htmlFor="standard-adornment-password">
              Password
            </InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              onKeyPress={handleKeyPress()}
              error={values.validationError}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <Visibility fontSize="small" />
                    ) : (
                      <VisibilityOff fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {values.validationError && (
              <FormHelperText>Invalid Password</FormHelperText>
            )}
          </FormControl>
        </>
      ) : (
        <ProjectContent />
      )}
    </div>
  );
}

export default ProjectDetail;
