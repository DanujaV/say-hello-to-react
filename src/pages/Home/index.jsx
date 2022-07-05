import { Component } from "react";
import Greeting from "../../components/Home/Greeting";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Greeting name="GDSE"/>
        )
    }
}

export default HomePage