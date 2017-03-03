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
            var startYear = '&begin_date=' + this.state.startYear.split('-').join('');
            var endYear = '&end_date=' + this.state.endYear.split('-').join('');

            var query = queryString + apiKey + topic + startYear + endYear;

            axios.get(query)
                .then(function (response) {

                    this.setState({
                        topicSearched: "",
                        startYear: "",
                        endYear: ""
                    });

                    var queryResults = [];
                    for (var i = 0; i < 5; i++) {
                        var date = response.data.response.docs[i].pub_date.split('T');
                        date = date[0];
                        var articleObj = {
                            abstract: response.data.response.docs[i].abstract,
                            pub_date: date,
                            web_url: response.data.response.docs[i].web_url
                        }
                        queryResults.push(articleObj);
                    }

                    this.setState({ results: queryResults });
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

    setSave: function (index) {
        var currentResults = this.state.results;

        axios.post('/api/saved', this.state.results[index])
            .then(function (response) {
                var newResults = currentResults;
                var newResultsDel = newResults.splice(index, 1);
                this.setState({
                    results: newResults
                });

                axios.get("/api/saved").then(function (response) {
                    if (response !== this.state.history) {
                        this.setState({ history: response.data });
                    }
                }.bind(this));
            }.bind(this))
    },

    setDelete: function (id) {
        axios.delete('/api/saved/' + id)
            .then(function (response) {
                axios.get("/api/saved").then(function (response) {
                    if (response !== this.state.history) {
                        this.setState({ history: response.data });
                    }
                }.bind(this));
            }.bind(this))
    },

    // Here we render the function
    render: function () {
        return (
            <div>
                <Form setTerm={this.setTerm} />
                <Results articles={this.state.results} setSave={this.setSave} />
                <Saved savedArticles={this.state.history} setDelete={this.setDelete} />
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = Main;
