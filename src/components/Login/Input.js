import React from "react";
import {
    Grid,
    TextField,
    InputAdornment,
    IconButton
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import useStyles from "./inputStyle";
const Input = ({
    type,
    autoFocus,
    handleChange,
    handleShowPassword,
    label,
    name,
    half,
    value
}) => {
    const classes = useStyles();
    return (
        <Grid item xs={
            12
        }
            sm={
                half ? 6 : 12
            } >
            <TextField
                className={classes.root}
                name={
                    name
                }
                label={
                    label
                }
                onChange={
                    handleChange
                }
                variant="outlined"

                autoFocus={
                    autoFocus
                }
                type={
                    type
                }
                value={value}
                required fullWidth InputProps={
                    name === "password" ? {
                        endAdornment: (
                            <InputAdornment position="end" >
                                <IconButton style={{ color: "#808080" }} onClick={handleShowPassword} > {
                                    type === "password" ? < Visibility /> : < VisibilityOff />
                                } </IconButton> </InputAdornment >
                        ),
                    } : null
                }
                xs={
                    6
                }
            /> </Grid >
    );
};

export default Input;