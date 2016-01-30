var React = require("react");
var validator = require("email-validator");

//validator.validate("test@email.com");

var EmailField = React.createClass({
    getInitialState(){
        return {
            valid: true,
            value: ''
        }
    },
    onChange(e){
        var value = e.target.value;
        !validator.validate(value) ? this.setState({valid: false}):this.setState({valid: true});
        this.setState({value: value})
    },
    clear(){
        this.setState({
            valid: true,
            value: ""
        })
    },
    render: function () {
        /*We are setting a bootstrap class dynamically*/
        var formClass = this.state.valid || !this.state.value ? "form-group" : "form-group has-error";
        return (
            <div className={formClass}>
                <input type="text" className="form-control" onChange={this.onChange} placeholder="email" value={this.state.value}/>
            </div>
        )
    }
});

module.exports = EmailField;