var React = require("react");
var ReactDOM = require("react-dom");
var Results = require("./components/results");
var Saved = require("./components/saved_articles")

var where = document.getElementById("results");

ReactDOM.render(
    <div>
        <Roster />
    </div>
    , where);