// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({


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
                                    <label htmlFor="topic">Topic:</label>
                                    <input type="text" className="form-control" id="topic" placeholder="Ex. Barack Obama" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="start-year">Start Year:</label>
                                    <input type="date" data-date-format="YYYY-MM-DD" className="form-control" id="start-year" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="end-year">End Year:</label>
                                    <input type="date" data-date-format="YYYY-MM-DD" className="form-control" id="end-year" />
                                </div>
                                <button id="submit" className="btn btn-default">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>)
    }
});

// Export the component back for use in other files
module.exports = Form;
