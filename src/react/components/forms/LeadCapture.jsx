var React = require("react");
var EmailField = require("./EmailField.jsx");
var NameField = require("./NameField.jsx");
var Reflux = require("reflux");
var Actions = require("../../reflux/Actions.jsx");
var EmailStore = require("../../reflux/EmailStore.jsx");

var LeadCapture = React.createClass({
    //Setting up our listeners. Call the onChange function when a change is detected.
    //Dont forget to create the onChange function.
    mixins: [Reflux.listenTo(EmailStore, "onChange")],
    getInitialState(){
        return {
            confirm: "",
            confirmStyle: {}
        }
    },
    //We are using refs to access data on child components
    onSubmit(e){
        if (!this.refs.fieldEmail.state.valid) {
            this.setState({
                confirm: "Email no valid.!",
                confirmStyle: {
                    color: "red"
                }
            })
        } else if (this.refs.fieldEmail.state.value.length < 1) {
            this.setState({
                confirm: "Email field empty.",
                confirmStyle: {
                    color: "red"
                }

            })
        } else if (this.refs.fieldName.state.value < 1) {
            this.setState({
                confirm: "Name field empty.!",
                confirmStyle: {
                    color: "red"
                }
            })
        } else {
            //This would be the place to send request to server
            var userRegistration = {
                email: this.refs.fieldEmail.state.value,
                name: this.refs.fieldName.state.value,
                //Generate an id for testing purposes
                id: Math.floor(Date.now() /1000) + this.refs.fieldEmail.state.value
            };
            //The functions to clear the input boxes live on the components themselves
            this.refs.fieldName.clear();
            this.refs.fieldEmail.clear();

            Actions.submitEmail(userRegistration);
        }
    },
    //The data is being passed from the store to our onChange function.
    onChange(msg){
        if (msg === "Email submitted.") {
            this.setState({
                confirm: "Thank you!",
                confirmStyle: {
                    color: "green"
                }
            });
            setTimeout(()=> {
                this.setState({confirm: ""})
            }, 5000)
        } else {
            this.setState({
                confirm: "Submission failed. Please try again.",
                confirmStyle: {
                    color: "red"
                }
            })
        }
    },
    render: function () {
        return (
            <div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4>Get Free E-Book</h4>
                    </div>
                    <div className="panel-body">
                        <NameField type="First" ref="fieldName"/>
                        <EmailField ref="fieldEmail"/>
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-primary" onClick={this.onSubmit}>Submit</button>
                            </div>
                            <div className="col-sm-8">
                                <h5 style={this.state.confirmStyle}>{this.state.confirm}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LeadCapture;