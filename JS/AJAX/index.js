$(document).ready(function () {
    var request = new XMLHttpRequest();
    request.open('GET', 'note.xml', true);
    request.onload = function (event) {
        console.log(request.status);
        var response = request.responseXML;
        console.log(response);
        var reminder = response.querySelector('heading');
        console.log(reminder);
    }

    request.send();

    var requestJson = new XMLHttpRequest();
    requestJson.open('GET', 'example.json');
    requestJson.onload = function (event) {
        console.log(requestJson.status);
        var response = requestJson.response;
        console.log(response);
        var obj = JSON.parse(response);
        console.log(obj);
    }

    requestJson.send();

});

function getRandomDogImage() {
    $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET'
    }).done(function (response) {
        console.log(response);
        var img = $('<img/>').attr("src", response.message);
        $('#image-container').html("")
        $('#image-container').append(img);
    }).fail(function(response){
        console.log(response);
        alert(response);
    }).always(function() {
        console.log('request finished');
    });
    // var request = $.ajax({
    //     url: 'https://dog.ceo/api/breeds/image/random',
    //     method: 'GET'
    // });

    // request.done(function (response) {
    //     console.log(response);
    //     var img = $('<img/>').attr("src", response.message);
    //     $('#image-container').html("")
    //     $('#image-container').append(img);
    // });

    // request.fail(function (response) {
    //     console.log(response);
    //     alert(response);
    // })

    // request.always(function () {
    //     console.log('request finished')
    // })
}