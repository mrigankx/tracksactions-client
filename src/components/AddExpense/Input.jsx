import React from "react";
import { Grid, TextField } from "@material-ui/core";

const input = ({
  type,
  autoFocus,
  handleChange,
  label,
  name,
  value,
  isRequired,
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        autoFocus={autoFocus}
        type={type}
        value={value}
        required={isRequired}
        fullWidth
        xs={6}
      />
    </Grid>
  );
};

export default input;
