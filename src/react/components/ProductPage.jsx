var React = require("react");

var ProductPage = React.createClass({
    getInitialState(){
        return {
            pId: ''
        }
    },
    componentDidMount(){
        this.setState({
            //React router automatically passes down any params if they are available
            pId: this.props.params.productId
        })
    },
    render: function () {
        return (
            <div>
                <h1>This is product number + {this.state.pId}</h1>
            </div>
        )
    }
});

module.exports = ProductPage;
