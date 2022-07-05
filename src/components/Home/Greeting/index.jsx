import { Component } from "react";

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Hello GDSE
                    </Typography>
                </div>
                <div></div>
            </div>
        )
    }

}