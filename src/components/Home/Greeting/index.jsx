import { Component } from "react";
import Typography from '@mui/material/Typography';
import ijse_logo from "../../../assets/img/ijse_logo.png"

class Greeting extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <Typography variant="h3" gutterBottom component="div">
                        Hello {this.props.name}
                    </Typography>
                </div>
                <div>
                   <img src={ijse_logo} alt="https://www.ijse.lk"/> 
                </div>
            </div>
        )
    }

}

export default Greeting