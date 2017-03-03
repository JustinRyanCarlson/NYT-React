// Include the Main React Dependency
var React = require("react");
var axios = require("axios");

// Include children components
var Form = require("./children/form");
var Results = require("./children/Results");
var Saved = require("./children/saved_articles");

// Creating the Main component
var Main = React.createClass({
    getInitialState: function () {
        return {
            topicSearched: "",
            startYear: "",
            endYear: "",
            results: [],
            history: []
        };
    },

    componentDidMount: function () {
        axios.get("/api/saved").then(function (response) {
            console.log(response);
            if (response !== this.state.history) {
                this.setState({ history: response.data });
            }
        }.bind(this));
    },

    componentDidUpdate: function () {
        if (this.state.topicSearched != "") {
            var queryString = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
            var apiKey = "?api-key=743707e5f8f44f1ca8c6aab3a1a11f39"
            var topic = '&q=' + this.state.topicSearched;

            var startManipulate = this.state.startYear;
            startManipulate = startManipulate.split('-');
            startManipulate = startManipulate.join('');
            var startYear = '&begin_date=' + startManipulate;

            var endManipulate = this.state.endYear;
            endManipulate = endManipulate.split('-');
            endManipulate = endManipulate.join('');
            var endYear = '&end_date=' + endManipulate;

            var query = queryString + apiKey + topic + startYear + endYear;

            axios.get(query)
                .then(function (response) {
                    console.log(response.data.response.docs);
                    this.setState({
                        topicSearched: "",
                        startYear: "",
                        endYear: ""
                    });
                    this.setState({ results: response.data.response.docs });
                }.bind(this))
                .catch(function (error) {
                    console.log(error);
                });
        } else { }
    },

    setTerm: function (topic, start, end) {
        this.setState({
            topicSearched: topic,
            startYear: start,
            endYear: end
        });
    },
    // Here we render the function
    render: function () {
        return (
            <div>
                <Form setTerm={this.setTerm} />
                <Results articles={this.state.results} />
                <Saved savedArticles={this.state.history} />
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
