var Reflux = require("reflux");
var http = require(("../services/httpservice.js"));
var Actions = require("./Actions.jsx");

var EmailStore = Reflux.createStore({
    //listenables is an actual Reflux key word
    listenables: [Actions],
    //FUNCTION NAMES MUST BE THE SAME AS ACTION NAMES
    submitEmail(subscriberInfo){

        http.post("/subscribers", subscriberInfo).then((res)=>{

            var msg = "";

            if(res.status === 200){
                msg = "Email submitted.";
            } else msg = "Submission failed!";

            //In Reflux when we want to trigger something we call this.trigger.
            this.trigger(msg);

            console.log(res);
        })
    }
});

module.exports = EmailStore;