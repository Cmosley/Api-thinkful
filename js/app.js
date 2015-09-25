$(function(){

    $('#search-term').submit(function(event){
        event.preventDefault();
        var searchTerm = $('#query').val(); 
        getRequest(searchTerm);
        });
    }); 

    

    function getRequest(searchTerm){
        var params = {
            part: 'snippet', 
            key: 'AIzaSyDDGYN5mw6vv4tjAhVZ9y07g-NvyK94TaU',
            q: searchTerm
        };
        url = 'https://www.googleapis.com/youtube/v3/search'; 

        $.getJSON(url, params, function(data){
            showResults(data.Search);
        }); 
    }
    

    function showResults(results) {
        var resultList = ""; 
        $.each(results, function(index, value){
            resultList += '<p>' + value.item.snippet.thumbnail.medium.url + '</p>';
            console.log('displaying');
            
    });
        $('#search-results').html(resultList);
    }
