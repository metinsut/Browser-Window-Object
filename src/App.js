import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";
import Homepage from "./components/homepage";
import DetailPages from "./components/detailpages";
import HashPages from "./components/hashpages";
import Header from "./components/header";
import {product} from "./actions/index";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


class App extends Component {

    componentDidMount() {
        if (!this.props.product) {
            this.props.dispatch(product())
        }
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Header/>
                </Switch>
                <main>
                    <Switch>
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/detail/:id?" component={DetailPages}/>
                        <Route exact path="/hash" component={HashPages}/>
                    </Switch>
                </main>
            </React.Fragment>
        );
    }
}

export default withRouter(connect()(App));
