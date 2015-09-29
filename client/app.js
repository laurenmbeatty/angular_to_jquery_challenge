$(document).ready(function() {
    var democraticCandidate = [];
    var republicanCandidate = [];
    var allCandidates = [];
    $.ajax({
        url: '/getDemocrats'
    }).done(function(response){
        console.log(response);
        for(var i = 0; i < response.length; i++) {
            democraticCandidate.push(response[i].name);
            console.log(democraticCandidate);
            var $dems = $("<li>" + democraticCandidate[i] + "</li>");
            $('.democratCandidates').append($dems);
        }
    });
    $.ajax({
        url: '/getRepublicans'
    }).done(function(response){
        console.log(response);
        for(var i = 0; i < response.length; i++) {
            republicanCandidate.push(response[i].name);
            console.log(republicanCandidate);
            var $repubs = $("<li>" + republicanCandidate[i] + "</li>");
            $('.republicanCandidates').append($repubs);

        }
        allCandidates = democraticCandidate.concat(republicanCandidate);
        console.log(allCandidates);


    });

    $('#show').on('click', function() {
        $('ul').removeClass('hideMe');
    });




    $('#winner').on('click', function(){
        var $winner = randomName(allCandidates);
        $('.victor').html($winner);
    });




});
//pick a random winner
function randomName (allCandidates) {
    var randomNumber = Math.floor(Math.random() * 10);
    var name = allCandidates[randomNumber];
    return name;
};
//when clicking the who will win button, do the randomName function, and append to the h1


//loop through the response and append candidates to the appropriate ul
//for first button, addClass or removeClass to show
//make a new array with all of the candidates called allCandidates
//do randomCandidate picker
//for second button, call the function and pass in , and append to the dom
