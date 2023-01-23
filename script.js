
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
var txt1 = "Hi Pari👸🏻!  <<               Now I wan't to say something special to you. <<<                So , Please read everything carefully...!                                                                           > When I saw you for the first time < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in future...!                                                 > I Love my Parents so much than anything else in this world....!                    << Now You are the only person  whom I love equally with my parents....!                                     > I want to tell few lines for you !                    <<< Tum se us din milkr hm                   < Kuch is kadar khush hue the                    < Ki muskurahat meri raat                    < Aur hasi meri din hue the                    << Udasi aur mayusi se mulakat hue !                    < Ab lamba samay ho gaya hai !                    < Shayad jb tum ban than k aayi thi !                    < In kaatil nigahon se do katl hue the !                                                                             >I Love U <Pari👸🏻!                   <<<< Give me One chance to Prove my Love ...!";
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