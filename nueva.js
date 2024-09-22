let i=0;
let j=5;

const dots = document.querySelectorAll('.dot-cont button');
const images = document.querySelectorAll('image-cont img');

function next(){
    document.getElementById('content' + (i + 1)).classList.remove('active');
    i = (j + i + 1)% j;
    document.getElementById('content' + (i + 1)).classList.add('active');
    indicator(i + 1);
}

function prev(){
    document.getElementById('content' + (i + 1)).classList.remove('active');
    i = (j + i - 1)% j;
    document.getElementById('content' + (i + 1)).classList.add('active');
    indicator(i + 1);
}

function indicator(num){
    dots.forEach(function(dot){
        dot.style.backgroundColor = 'transparent';
    } );
    document.querySelector(
        '.dot-cont button:nth-child(' + num + ')'
    ).style.backgroundColor = '#8052ec';
}

function dot(prueva){
    images.forEach(function(image){
        image.classList.remove('active');
    });
    document.getElementById('content' + prueva).classList.add('adtive');
    i = prueva -1;
    indicator(prueva);
}