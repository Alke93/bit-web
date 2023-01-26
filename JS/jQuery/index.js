$(document).ready(function () {
    // console.log('document ready');
    // var header = $('#header');
    // console.log(header);
    // var ul = $('ul');
    // console.log(ul.html());
    // console.log(ul.text())
    // var listElements = $('li');
    // console.log(listElements);
    listManipulation();
})

function listManipulation() {
    // $('#header').replaceWith('<h1>Lista</h1>')
    $('#header').html('<h1>Lista</h1>');
    $('li:last').remove();
    $('#header h1').addClass('headerColor')
    $('li.active').prepend('Dan ');
    $('li.active').append('.');
    $('li:last').after('<li>Cetvrti</li>');
    // $('#header').after('<ul></ul>');
    // $('ul:first').append('<li>Jedan</li>');
    // $('ul:first').append('<li>Dva</li>');

    var id = $('div').attr('id', 'newHeader');
    console.log(id);
    // $('.active').removeAttr('class')

    // $('li:last').addClass('active');
    // $('li:last').removeClass('active')

    $('li').each(function(index, element) {
        if($(element).is('#active-item')) {
            $(element).css({'background-color':'yellow', 'color':'green'})
        } else {
            $(element).css({'background-color':'green', 'color':'yellow'})
        }
    })
}

function submitInput() {
    var inputValue = $('input').val();
    if($.isNumeric(inputValue)) {
        alert(`Vrednost broja je ${inputValue}`);
    } else {
        alert(inputValue);
    }
}