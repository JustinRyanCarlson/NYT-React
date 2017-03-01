$(document.body).on('click', '#submit', function () {
    var queryString = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    var apiKey = "?api-key=743707e5f8f44f1ca8c6aab3a1a11f39"
    var topic = '&q=' + $('#topic').val().trim();

    var startManipulate = $('#start-year').val().split('-');
    startManipulate = startManipulate.join('');
    var startYear = '&begin_date=' + startManipulate;

    var endManipulate = $('#end-year').val().split('-');
    endManipulate = endManipulate.join('');
    var endYear = '&end_date=' + endManipulate;

    var query = queryString + apiKey + topic + startYear + endYear;

    console.log(query);

    $('#topic, #start-year, #end-year').val('');

    $.get(query, function (articles) {
        console.log(articles);
    });

    return false;
});