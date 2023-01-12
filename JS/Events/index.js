var button2 = document.getElementById('button2');
button2.onclick = function() {
    alert('Second button clicked')
}

function onFirstButtonClick() {
    alert('First button clicked')
}



button2.addEventListener('click', function () {
    alert('Event handler 2');
})

function clickMe(event) {
   console.log(event.target);
   console.log(event.currentTarget);
   console.log(event.clientX)
}