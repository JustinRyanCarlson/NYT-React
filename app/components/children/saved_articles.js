var React = require("react");

var Saved = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Saved Articles</div>
                        <div id="saved-articles" className="panel-body">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Saved;