import { Component } from "react";

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Hello from the Home Page</h1>
                <h2>What's up {this.props.name} and now My status {this.props.status}</h2>
            </div>
        )
    }
}

export default HomePage