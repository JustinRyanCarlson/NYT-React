// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {
        return { term: "" };
    },

    // This function will respond to the user input
    handleChange: function (event) {

        this.setState({ term: event.target.value });

    },

    // When a user submits...
    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this.props.setTerm(this.state.term);
        this.setState({ term: "" });
    },
    // Here we describe this component's render method
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Search</div>
                        <div className="panel-body">
                            <form>
                                <div className="form-group">
                                    <label for="topic">Topic:</label>
                                    <input type="text" className="form-control" id="topic" placeholder="Ex. Barack Obama" />
                                </div>
                                <div className="form-group">
                                    <label for="start-year">Start Year:</label>
                                    <input type="date" data-date-format="YYYY-MM-DD" className="form-control" id="start-year" />
                                </div>
                                <div className="form-group">
                                    <label for="end-year">End Year:</label>
                                    <input type="date" data-date-format="YYYY-MM-DD" className="form-control" id="end-year" />
                                </div>
                                <button id="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>)
    };
});

// Export the component back for use in other files
module.exports = Form;
