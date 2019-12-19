
var loading = '<div class="text-center">';
loading += '<div class="spinner-border " style="width: 3rem; height: 3rem;" role="status">';
loading += '<span class="sr-only">Loading...</span>';
loading += '</div>';
 loading += '<div>Loading...</div>';
loading += '</div>';

$('#loading').html(loading);

jQuery(document).ready(function(){
    axios.get('http://csc225.mockable.io/movies')
    .then(function(response){
       
        var movieHTML = response.data.map(function(movie){
        return '<p class="movies btn btn-warning container" data-movies="'+movie.id+'">' + 
            movie.title + '</p>' ;
        });
        $('#movies').html(movieHTML);
        $('#loading').hide();

    });
 $('body').on('click', '.movies', function(){
    var id = $(this).data('movies');
    var url = 'http://csc225.mockable.io/movies/' + id;
    axios.get(url).then(function(response){
        var movie = response.data;
        var movieHTML = '<div class="card" style = "width:30rem;">';
         movieHTML += '<img src = "' + movie.poster + '" height = "500">';
        movieHTML += '<div class = "card-body">';
        movieHTML += '<h5 class = "card-title">' + movie.title + '</h5>';
        movieHTML += '<p class= "card-text">' + 'Director: '+ movie.director + '</p>';
        movieHTML += '<p class= "card-text">' + 'Release: '+ movie.release + '</p>';
        movieHTML += '</div>';
        movieHTML += '</div>';
         $('#current-movie').html(movieHTML);
        
    })
$('#current-movie').html(loading);

 })

})