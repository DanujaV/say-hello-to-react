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

    decrementCount() {
        console.log("decrement function calling");
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCount() {
        console.log("reset function calling");
        this.setState({
            count: 0
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
                        console.log('Increase button clicked!')
                        this.incrementCount()

                    }}
                >
                    Increase!
                </Button>
                <Button
                    variant="outlined"
                    onClick={() => {
                        console.log('Decrease button clicked!')
                        this.decrementCount()

                    }}
                    style={{marginLeft: '15px'}}
                >
                    Decrease!
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => {
                        console.log('Reset button clicked!')
                        this.resetCount()

                    }}
                    style={{marginLeft: '15px'}}
                >
                    Reset!
                </Button>
            </div>
        )
    }
}
export default Countable