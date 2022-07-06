import { Typography } from "@mui/material";
import { withStyles } from "@mui/styles";
import React, { Component } from "react";
import { styleSheet } from "./style";
import TextField from '@mui/material/TextField';
import GDSEButton from "../../components/common/Button";

class Login extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.login__cover}>
                    <div className={classes.title__container}>
                        <Typography variant="h4">Login</Typography>
                    </div>
                    <div className={classes.form__container}>
                        <TextField id="outlined-basic" label="User name" variant="outlined" />
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" />
                    </div>
                    <div className={classes.btn__container}>
                        <GDSEButton variant="contained" label="Login" />
                    </div>
                </div>

            </div>
        )
    }
}
export default withStyles(styleSheet)(Login)