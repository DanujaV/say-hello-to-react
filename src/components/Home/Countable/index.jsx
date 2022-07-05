import { Typography } from "@mui/material";
import React, { Component } from "react";
import Button from '@mui/material/Button';

class Countable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0 
        }
    }

    incrementCount() {
        console.log("increment function calling");
        this.setState({
            count: this.state.count + 1
        })
    }

    

    render() {
        const count = 0;
        return (
            <div>
                <Typography variant="h4" gutterBottom>
                    Count: {this.state.count}
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => {
                        console.log('clicked!')
                        this.incrementCount()

                    }}
                >
                    Increase!
                </Button>
            </div>
        )
    }
}
export default Countable