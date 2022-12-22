var x = 'Browser built-in objects';
console.log(x);

function test() {
    console.log('Window objekat');
}

// window.test();

function getNavigationProperties() {
    console.log(navigator.userAgent);
    console.log(navigator.cookieEnabled);
    console.log(navigator.geolocation.getCurrentPosition());
}

// getNavigationProperties();
function screenDimensions() {
    console.log(screen.height);
    console.log(screen.width);
    screen.height = 500;
    screen.width = 500;
    console.log(screen.height);
    console.log(screen.width);
}

// screenDimensions();

function getLocationData() {
    console.log(location.hostname);
    console.log(location.href);
    console.log(location.protocol);
}

// getLocationData();

function storageTest() {
    localStorage.setItem('name', 'Nikola Alic');
    var name = localStorage.getItem('name');

    console.log(`Name from local storage: ${name}`);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('name', name + 'test');
    localStorage.clear();
    sessionStorage.clear();
}


// storageTest();

function reloadPage() {
    location.reload();
}

function alertPromptConfirm() {
    alert('Hello world');
    var userInput = prompt('Predaja nikad nije bila opcija');
    console.log(userInput);
    var yesNo = confirm('Da li je ovo rekao predsednik?');
    console.log(yesNo);

}

// alertPromptConfirm();
function foo() { console.log('foo'); }
function openGoogle() {
    var win = window.open('http://google.com');
    setTimeout(function() {
        win.close();
        var fooIntervalId = setInterval(foo, 1000);
        setTimeout(function() {
            clearInterval(fooIntervalId);
            console.log("clear");
        }, 8000);
    }, 4000);
}