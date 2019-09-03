var colorRed = document.getElementById('red');
var colorPurple = document.getElementById('purple');
var colorBlack = document.getElementById('black');
var colorBlue = document.getElementById('blue');
var colorPink = document.getElementById('pink');
var image = document.getElementById('image');

var time = document.getElementById('button1');
var heart = document.getElementById('button2');

var timeText = document.getElementById('timetext');
var heart1 = document.getElementById('heart1');



//color change section
colorPurple.addEventListener('click', function(){
    image.src="https://i.imgur.com/xSIK4M8.png";
});
colorRed.addEventListener('click', function(){
    image.src="https://i.imgur.com/PTgQlim.png";
});
colorBlack.addEventListener('click', function(){
    image.src="https://i.imgur.com/iOeUBV7.png";
});
colorBlue.addEventListener('click', function(){
    image.src="https://i.imgur.com/Mplj1YR.png";
});
colorPink.addEventListener('click', function(){
    image.src="https://i.imgur.com/Zygu7I3.png";
});



//inside watch change events
time.addEventListener('click', function(){
    heart1.style.display = "none";
    timeText.style.display = "block";
});
heart.addEventListener('click', function(){
    timeText.style.display = "none";
    heart1.style.display = "block";
});



//time increment
setInterval(function(){
    if( timeText.innerHTML.slice(-2)=='59' ){
        var str = timeText.innerHTML.split('');
        str[6] = '0';
        str[7] = '0';
        timeText.innerHTML = str.join('');
        timeText.innerHTML = timeText.innerHTML.slice(0,3) + (parseInt(timeText.innerHTML.slice(3,5)) + 1) + timeText.innerHTML.slice(-3);
    }
    if(timeText.innerHTML.slice(7)=='9'){
        var str = timeText.innerHTML.split('');
        str[7] = '0';
        str[6] = parseInt(str[6]) + 1;
        timeText.innerHTML = str.join('');
    }
    if(timeText.innerHTML.slice(-2)!='59' && timeText.innerHTML.slice(-1)!='9') {
        timeText.innerHTML = timeText.innerHTML.slice(0,-1) + (parseInt(timeText.innerHTML.slice(-1)) + 1);
    }
},1000);