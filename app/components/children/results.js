var React = require("react");

var Results = React.createClass({
    render: function () {
        return (
            <div className="row">
                <div className="col-sm-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Results</div>
                        <div id="results" className="panel-body">
                            {this.props.articles.map(function (search, i) {
                                return (
                                    <div className="panel panel-default" key={i}>
                                        <div className="panel-heading">{search.web_url}<button className="pull-right btn btn-info" onClick={() => this.onPressSave(i).bind(this)} id={i}>Save</button>
                                            <div className="clearfix"></div>
                                        </div>
                                        <div className="panel-body">
                                            <p>{search.abstract} <br />Date: {search.pub_date}</p>
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
module.exports = Results;