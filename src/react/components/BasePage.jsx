var React = require("react");
var NavBar = require("../nav/NavBar.jsx");
var LeadCapture = require("./forms/LeadCapture.jsx");

var navLinks = [
    {
        title: "Home",
        link: "/"
    }
];

var BasePage = React.createClass({
    render: function () {
        var containerStyle = {paddingTop: 10};
        return (
            <div>
                <NavBar bgColor="" titleColor="#3097d1" linkColor="" navLinks={navLinks} />
                <div className="container" style={containerStyle}>
                    <div className="row">
                        <div className="col-sm-9">
                            {this.props.children}
                        </div>
                        <div className="col-sm-3">
                            <LeadCapture />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = BasePage;
