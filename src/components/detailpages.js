import React, {Component} from "react";
import {connect} from "react-redux";
import {pageScroolDetail} from "./helper";
import * as ReactDOM from 'react-dom';
import {animateScroll} from "react-scroll";


class DetailPages extends Component {

    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
        window.addEventListener('scroll', this.scrollingPage);
        this.scrollToComponent(this.props.match.params.id);
    }


    componentDidUpdate(prevProps) {
        if (this.props.match.params.id !== prevProps.match.params.id) {
            if (this.props.match.params.id) {
                setTimeout(() => {
                    this.scrollToComponent(this.props.match.params.id);
                }, 50)
            }
        }
    }


    scrollingPage = () => {
        if (this.props.items && this.clickedMenu !== true) {
            this.props.items.map((item, key) => {
                if (item.link && this.refs[item.link.replace("/", "")] && pageScroolDetail(this.refs[item.link.replace("/", "")])) {
                    let locationArr = this.props.history.location.pathname.split("/");
                    if (this.props.history.location.pathname !== "/" + locationArr[1] + item.link) {
                        this.props.history.replace("/" + locationArr[1] + item.link);
                    }
                }
                return item;
            })
        }
    };

    handleLoad = () => {
        setTimeout(() => {
            this.scrollToComponent(this.props.match.params.id);
        }, 50);
    };

    scrollToComponent = (key) => {
        if (this.props.history.action !== "REPLACE") {
            const scrollNode = ReactDOM.findDOMNode(this.refs[key]);
            if (scrollNode) {
                this.clickedMenu = true;
                clearTimeout(this.timeoutFunc);
                this.timeoutFunc = null;
                this.timeoutFunc = setTimeout(() => {
                    this.clickedMenu = false;
                }, 1000);
                animateScroll.scrollTo(scrollNode.offsetTop, {
                    align: 'top',
                    duration: 1000
                });
            }
        }
    };


    componentWillUnmount() {
        window.removeEventListener("load", this.scrollingPage);
        window.addEventListener('load', this.handleLoad);
    }

    render() {
        let items = this.props.items;
        return (
            <section>
                <React.Fragment>
                    <div className="test">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi corporis cupiditate
                            dolores ea, eligendi enim eum eveniet explicabo hic inventore ipsum iure labore laborum
                            mollitia
                            nihil nobis non, nostrum numquam officiis omnis porro quo ratione rem sunt totam vel veniam,
                            vero voluptatibus. Delectus dolore dolorem eaque nulla voluptates!
                        </p>
                    </div>
                </React.Fragment>
                {items && items.map((item, key) => (
                    <article key={key} className={item.class} ref={item.link.replace("/", "")}>
                        <h1>{item.name}</h1>
                        <div className="img">
                            <img src={item.img} alt=""/>
                        </div>
                        <p>{item.desc}</p>
                    </article>
                ))
                }
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.product.items
});

export default connect(mapStateToProps)(DetailPages);
