// Include the Main React Dependency
var React = require("react");

// Include children components
var Form = require("./children/form");
var Results = require("./children/Results");
var Saved = require("./children/saved_articles");

// Creating the Main component
var Main = React.createClass({
    // Here we render the function
    render: function () {
        return (
            <div>
                <Form />
                <Results />
                <Saved />
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
