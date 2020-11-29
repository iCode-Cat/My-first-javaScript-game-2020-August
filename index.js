
        
    
var counter = setInterval(counter, 15)
i = 0
function counter(){
    
    document.getElementById('h3').innerHTML= ++i ;

} 


$("div").click(function (){    

 
    target = $("#character")
    target.removeClass("character-anim")
    setTimeout("target.addClass('character-anim');", 100)
    document.getElementById('character').style.animationPlayState='running';

});

var character = $("#character")
var tree = $("#trees")


var checkDead = setInterval(function(){
    var characterTop =
    parseInt(window.getComputedStyle(document.getElementById('character')).getPropertyValue('top'));
    var blockLeft = 
    parseInt(window.getComputedStyle(document.getElementById('trees')).getPropertyValue('left'));
    if (blockLeft < 45 && blockLeft>0 && characterTop>=85 ) {
        
        document.getElementById('trees').style.animationPlayState='paused';
        document.getElementById('character').style.animationPlayState='paused';
        document.getElementById('h1').style.visibility='visible';
        document.getElementById('button').style.visibility='visible';
        i = 0
        
    }
}, 10)

$('#button').click(function (){

    location.reload();

});

