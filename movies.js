

$('#movie-form button').on('click', function (e) {
    e.preventDefault();
    let movie = $('#movie-title').val();
    let rating = $('#movie-rating').val();
    if (movie) {
        
        $('#movies ul')
        .append($('<li>', {text: `${movie} is ${rating} out of 10`, class: "movie-li"}));

        $('li:last').append($('<button>', {text: "remove", class: 'remove-button'}));

        $("#movie-title").val("")
        $("#movie-rating").val(0)

        $('.remove-button').on('click', function(e) {
            console.log(e.target.parentElement)
            e.target.parentElement.remove();
            
           
        
        })
        
    } else {
        alert('please enter movie title');
    }
    
})

