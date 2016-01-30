var React = require("react");

var NameField = React.createClass({
    getInitialState(){
        return {
            value: ""
        }
    },
    onChange(e){
        this.setState({
            value: e.target.value
        })
    },
    clear(){
        this.setState({
            value: ''
        })
    },
    render: function () {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder={this.props.type + " Name"}
                    onChange={this.onChange}
                    value={this.state.value}/>
            </div>
        )
    }
});

module.exports = NameField;