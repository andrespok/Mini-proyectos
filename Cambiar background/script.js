document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
});

function background1() {
    document.querySelector('#random').style.backgroundImage = "url('./Backgrounds/1.jpg')" ;
    document.getElementById('myModal').style.display = 'none';
}

function background2() {
    document.querySelector('#random').style.backgroundImage = "url('./Backgrounds/2.jpg')" ;
    document.getElementById('myModal').style.display = 'none';
}

function background3() {
    document.querySelector('#random').style.backgroundImage = "url('./Backgrounds/3.jpg')" ;
    document.getElementById('myModal').style.display = 'none';
}