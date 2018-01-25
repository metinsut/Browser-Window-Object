import React, {Component} from "react";
import {NavLink, withRouter} from "react-router-dom";

class Header extends Component {
    render() {
        console.log(this.props);
        return (
            <header>
                <h1>HEADER</h1>
                <div className="links">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink to="/detail">Detail</NavLink>
                    <NavLink to="/hash">Hash</NavLink>
                </div>


                {/*You can disable comment if you would like to show detail pages while you are not in detail page.*/}

                {/*{ this.props.location.pathname === "/detail" &&*/}

                    <div className="links">
                    <NavLink to="/detail/one">One</NavLink>
                    <NavLink to="/detail/two">Two</NavLink>
                    <NavLink to="/detail/three">Three</NavLink>
                    <NavLink to="/detail/four">Four</NavLink>
                    <NavLink to="/detail/five">Five</NavLink>
                    </div>

                {/* }  */}

            </header>
        );
    }
}

export default withRouter(Header);
