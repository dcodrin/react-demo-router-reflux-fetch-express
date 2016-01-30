var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var NavItem = React.createClass({
    getInitialState(){
        return {
            hover: false
        }
    },
    mouseOver(e){
        this.setState({
            hover: true
        })
    },
    mouseOut(e){
        this.setState({
            hover: false
        })
    },
    render: function () {
        var linkColor = {};
        if(this.props.aStyle){
            linkColor = this.props.aStyle;
        }
        return (
            //IMPORTANT for mouseOver events you HAVE to include a mouseOut event as well!
            <li className={this.state.hover ? "active": ""} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
                <Link style={linkColor} to={this.props.link}>{this.props.title}</Link>
            </li>
        )
    }
});

module.exports = NavItem;
