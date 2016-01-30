var React = require("react");
var NavItem = require("./NavItem.jsx");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;
var NavBar = React.createClass({
    render: function () {

        //We are creating a style object that will be passed to our navigation bar
        var navStyle = {
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius: 0
        };
        var titleStyle = {};
        var linkColor ={};

        if(this.props.linkColor){
            linkColor.color = this.props.linkColor;
        }
        //If the user passed down a color, use it
        if(this.props.bgColor){
            navStyle.background = this.props.bgColor
        }
        //This style can be used on any element that you want to change the text color
        if(this.props.titleColor){
            titleStyle.color = this.props.titleColor;
        }
        return (
            <div>
                <nav style={navStyle} className="navbar navbar-default">
                    <div className="navbar-header">
                        <button className="navbar-toggle collapsed" type="button" data-toggle="collapse" data-target="#nav-collapse">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link style={titleStyle} to="/" className="navbar-brand">Product Shop</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="nav-collapse">
                        <ul className="nav navbar-nav">
                            {this.props.navLinks.map((link) => {
                                return <NavItem aStyle={linkColor} title={link.title} link={link.link} key={link.title + link.link}/>
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
});

module.exports = NavBar;