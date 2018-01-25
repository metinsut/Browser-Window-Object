import React, {Component} from "react";

class Homepage extends Component {
    render() {
        return (
            (true === true) ?
                <div className="homePage">
                    <h1>Home</h1>
                </div>
                :
                <div></div>
        )
    }
}

export default Homepage;
