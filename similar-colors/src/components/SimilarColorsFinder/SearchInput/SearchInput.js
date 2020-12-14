import React from "react";
import { Paper, TextField, InputAdornment } from "@material-ui/core";

//custom styles
import useStyles from "./styles";

const SearchInput = ({
  searchInput,
  handleChange,
  handleKeyDown,
  inputError,
  errorMessage
}) => {
  //Hooks
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <TextField
        value={searchInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        label="Color Code"
        id="search-input"
        InputProps={{
          startAdornment: <InputAdornment position="start">#</InputAdornment>,
          maxLength: 6
        }}
        variant="outlined"
        autoFocus
        error={inputError}
        helperText={errorMessage}
        className={classes.textField}
      />
    </Paper>
  );
};

export default SearchInput;
