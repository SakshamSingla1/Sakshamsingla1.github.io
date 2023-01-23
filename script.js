var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var _w = w * 0.5;
var _h = h * 0.5;
var num = 80;
var hearts = [];
var u = 0;
for (var i = 0; i < num; i++) {
var heart = new Heart(_w + rnd(-w, w),
    _h + rnd(-h, h), rnd(20, 145), 'heart');
hearts.push(heart);
}
fallen();

function fallen() {
u -= .2;
window.requestAnimationFrame(fallen);
$.globalCompositeOperation = 'source-over';
  var g_ = $.createLinearGradient(c.width + c.width, c.height + c.height * 1.5, c.width + c.width, 1);
g_.addColorStop(0, 'hsla(253, 5%, 95%, 1)');
g_.addColorStop(0.5, 'hsla(253, 75%, 20%, 1)');
g_.addColorStop(1, 'hsla(0, 0%, 5%, 1)');
$.fillStyle = g_;
$.fillRect(0, 0, c.width, c.height);
$.globalCompositeOperation = 'difference';
$.font = "3.5em Sonsie One";
$.fillStyle = 'hsla(' + u + ',85%,50%,.2)';
for (var i = 0; i < hearts.length; i++) {
    hearts[i].move();
    hearts[i].render($);
}
}

function Heart(x, y, sz, _heart) {
this.x = x || w;
this.y = y || h;
this.dy = sz / 100;
this.sz = sz || 100;
this._heart = _heart || 'heart';
this.hue = Math.random() * 360;
this.move = function() {
    this.y += this.dy;
    if (this.y > h + this.sz) {
      this.y -= h + this.sz * 2;
    }
};
this.render = function($) {
    var g = $.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.sz);
    g.addColorStop(0, 'hsla(' + this.hue + ',100%,50%,1)');
    g.addColorStop(1, 'hsla(0,0%,0%,0)');
    $.beginPath();
    $.fillStyle = g;
    $.moveTo(this.x, this.y);
    this.hue += 0.3;
    if (this.hue > 359) this.hue = 0;
    var path;
    switch (this._heart) {
    case 'heart':
        path = [
        [-0.00417, -0.25796, -0.44345, -0.29936, -0.49702, 0],
        [-0.54762, 0.30254, -0.08333, 0.5, 0, 0.79618],
        [0.08333, 0.5, 0.54762, 0.30254, 0.49702, 0],
        [0.44345, -0.29936, 0.0417, -0.25796, 0, 0]
        ];
        break;
    default:
        break;
    }
    for (var i = 0; i < path.length; i++) {
      $.bezierCurveTo(path[i][0] * this.sz + this.x, path[i]
        [1] * this.sz + this.y, path[i]
        [2] * this.sz + this.x, path[i]
        [3] * this.sz + this.y, path[i]
        [4] * this.sz + this.x, path[i]
        [5] * this.sz + this.y);
    }
    $.closePath();
    $.fill();
};
}

function rnd(min, max) {
  return Math.random() * (max - min) + min;
}
window.addEventListener('resize', function() {
c.width = w = window.innerWidth;
c.height = h = window.innerHeight;
});
var love = setInterval(function(){
    var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
    var r_time = Math.floor(Math.random() * 5) + 5;
    $('.bg_heart').append("<div class='heart' style='width:"+r_size+"px;height:"+r_size+"px;left:"+r_left+"%;background:rgba(255,"+(r_bg-25)+","+r_bg+",1);-webkit-animation:love "+r_time+"s ease;-moz-animation:love "+r_time+"s ease;-ms-animation:love "+r_time+"s ease;animation:love "+r_time+"s ease'></div>");
    
    $('.bg_heart').append("<div class='heart' style='width:"+(r_size-10)+"px;height:"+(r_size-10)+"px;left:"+(r_left+r_num)+"%;background:rgba(255,"+(r_bg-25)+","+(r_bg+25)+",1);-webkit-animation:love "+(r_time+5)+"s ease;-moz-animation:love "+(r_time+5)+"s ease;-ms-animation:love "+(r_time+5)+"s ease;animation:love "+(r_time+5)+"s ease'></div>");

},500);

var i = 0;
var txt1 = "Hi Pari👸🏻!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                 > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                     > I want to tell few lines for you !                    <<< Tum se us din milkr hm                   < Kuch is kadar khush hue the                    < Ki muskurahat meri raat                    < Aur hasi meri din hue the                    << Udasi aur mayusi se mulakat hue                     < Ab lamba samay ho gaya hai                     < Shayad jb tum ban than k aayi thi                     < In kaatil nigahon se do katl hue the                                                                              >I Love U <Pari👸🏻!                   <<<< Give me One chance to Prove my Love ...!";
var speed = 50;
typeWriter();
function typeWriter() {
if (i < txt1.length) {        
    if(txt1.charAt(i)=='<')
        document.getElementById("text1").innerHTML += '</br>';
    else if(txt1.charAt(i)=='>')
        document.getElementById("text1").innerHTML = '';
    else
        document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
}