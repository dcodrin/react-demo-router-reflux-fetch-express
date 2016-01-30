var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var HomePage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>HOME</h1>
                <ul>
                    <li><Link to="/product/55">iOS Course</Link></li>
                    <li><Link to="/product/100">Java Course</Link></li>
                </ul>
            </div>
        )
    }
});

module.exports = HomePage;
