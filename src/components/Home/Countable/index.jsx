import { Typography } from "@mui/material";
import React, { Component } from "react";
import Button from '@mui/material/Button';

class Countable extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Count: 0
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        console.log('clicked!')
                    }}
                >
                    Increase!
                </Button>
            </div>
        )
    }
}
export default Countable