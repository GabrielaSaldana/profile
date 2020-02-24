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
import FormHelperText from '@material-ui/core/FormHelperText';
import pwd from "../../secrets";
import ProjectContent from "./ProjectContent";

function ProjectDetail() {
  const { projectId } = useParams();

  const result = portfolio.find(obj => {
    return obj.project_id === projectId;
  });

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
    identified: false,
    validationError: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleKeyPress = () => event => {
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
      {result.protected ? (
        <>
          {!values.identified ? (
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
              {values.validationError && (<FormHelperText>Invalid Password</FormHelperText>)}
            </FormControl>
          ) : (<ProjectContent />)}
        </>
      ) : (<ProjectContent />)}
    </div>
  );
}

export default ProjectDetail;
  
