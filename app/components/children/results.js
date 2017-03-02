var React = require("react");

var Results = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Results</div>
                        <div id="results" className="panel-body">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Results;