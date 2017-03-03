// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({
    getInitialState: function () {
        return {
            topicSearched: "",
            startYear: "",
            endYear: ""
        };
    },

    handleTopicChange: function (event) {
        this.setState({
            topicSearched: event.target.value,
        });

    },

    handleStartChange: function (event) {
        this.setState({
            startYear: event.target.value,
        });

    },

    handleEndChange: function (event) {
        this.setState({
            endYear: event.target.value
        });

    },

    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();
        // Set the parent to have the terms
        this.props.setTerm(this.state.topicSearched, this.state.startYear, this.state.endYear);
        this.setState({
            topicSearched: "",
            startYear: "",
            endYear: ""
        });
    },

    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-info">
                        <div className="panel-heading">Search</div>
                        <div className="panel-body">
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="topic">Topic:</label>
                                    <input value={this.state.topicSearched} onChange={this.handleTopicChange} required type="text" className="form-control" id="topic" placeholder="Ex. Barack Obama" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="start-year">Start Year:</label>
                                    <input value={this.state.startYear} onChange={this.handleStartChange} required type="date" data-date-format="YYYY-MM-DD" className="form-control" id="start-year" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="end-year">End Year:</label>
                                    <input value={this.state.endYear} onChange={this.handleEndChange} required type="date" data-date-format="YYYY-MM-DD" className="form-control" id="end-year" />
                                </div>
                                <button id="submit" type="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>)
    }
});

// Export the component back for use in other files
module.exports = Form;
