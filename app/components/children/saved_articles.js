var React = require("react");

var Saved = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Saved Articles</div>
                        <div id="saved-articles" className="panel-body">
                            {this.props.savedArticles.map(function (search, i) {
                                return (
                                    <div className="panel panel-default" key={i}>
                                        <div className="panel-heading">{search.url}<button className="pull-right btn btn-info" id={i}>Delete</button>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="panel-body">
                                            <p>{search.title} <br />Date: {search.date}</p>
                                            <hr />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});
module.exports = Saved;