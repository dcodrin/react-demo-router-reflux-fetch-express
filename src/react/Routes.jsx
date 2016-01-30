var React = require("react");
var ReactRouter = require("react-router");
var basePage = require("./components/BasePage.jsx");
var HomePage = require("./components/HomePage.jsx");
var ProductPage = require("./components/ProductPage.jsx");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
//The IndexRoute will be shown as the default page "/"
var IndexRoute = ReactRouter.IndexRoute;

var createHistory = require("history/lib/createHashHistory");

var History = new createHistory({
    queryKey: false
});

var Routes = (
    <Router history={History}>
        <Route path="/" component={basePage}>
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={ProductPage} />
        </Route>
    </Router>
);


module.exports = Routes;