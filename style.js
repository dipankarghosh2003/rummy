var tappedCardDeck=0;
var dropinvalidcard=0;
$(document).ready(function(){
    $("#game-area .msg").animate({opacity:1},500);
    setTimeout(interoanima,1500);
    
    $("#pileofcard").bind("click",function(){
        if(tappedCardDeck==1){
//flip();
            moveCardFromdeck();
        }
            
    });
    $("#game-area #topc4").bind("click",function(){
        if(dropinvalidcard==1){

        }
    })
   
    $("#game-area #correctcard").bind("click",function(){
        $("#game-area .msg").html("");
        $("#game-area #correctcard img").css("animation", "none");
        $('#game-area #correctcard').delay(00).animate({left:"209px",top:"121px",width:"73px"}, {
            step: function(now,fx) {
              $(this).css('-webkit-transform','rotate(26deg)'); 
              $(this).css('-moz-transform','rotate(26deg)');
              $(this).css('transform','rotate(26deg)');
            },
            duration:1000
        
        },1000,animateinCorrectCard());
       
        $("#game-area #correctcard img").css("box-shadow", "none");
    });
    $("#game-area #clickableareaforinvalidcard").bind("click",function(){
        deleteWrongCard()
    })
})


function interoanima(){
    $("#game-area #pileofcard").animate({left:"71px",top:"7px"},1000,function(){
       //$("#game-area .msg").html("Make Sequence, Make Money");
        
       animatecardopen();
    });
    setTimeout(tapToPick,1200)
    $("#game-area #card1").addClass("animateCards");
    $("#game-area #bottomcardcontainer").delay(500).animate({top:"94px"},500)
    
}

function animatecardopen(){
    $('#game-area #topc1').animate({left:"66px",top:"7px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-20deg)'); 
          $(this).css('-moz-transform','rotate(-20deg)');
          $(this).css('transform','rotate(-20deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc2').animate({left:"102px",top:"3px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-7deg)'); 
          $(this).css('-moz-transform','rotate(-7deg)');
          $(this).css('transform','rotate(-7deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc3').animate({left:"140px",top:"5px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(1deg)'); 
          $(this).css('-moz-transform','rotate(1deg)');
          $(this).css('transform','rotate(1deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc4').animate({left:"175px",top:"15px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(14deg)'); 
          $(this).css('-moz-transform','rotate(14deg)');
          $(this).css('transform','rotate(14deg)');
        },
        duration:'slow'
    },'linear');
}

function tapToPick(){
    $("#game-area .msg").html("Tap to Pick a Card");
    $("#game-area #showhand").css({display:'block'});
    $("#game-area #showhand").addClass("showhandanim");
    $("#game-area #card1").addClass("animateCards");
    tappedCardDeck=1;
    setTimeout(function(){
        $("#game-area #showhand").css({display:'none'});console.log("ini")
    },3000)
    
}
function flip() {
    
    $('#game-area .carddef').addClass('flipped');;
    $("#game-area #showhand").css({left:'170px'});
    setTimeout(function(){
        $("#game-area .msg").html("Tap to Complete the Sequence");
        tappedCardDeck=2;
        $("#card1").css({opacity:"0"});
        $("#correctcard").css({opacity:"1"});
        $("#game-area #showhand").css({display:'block'});

    },1000)
        
    setTimeout(function(){
        $("#game-area #showhand").css({display:'none'});
    },2500)
    
}
function moveCardFromdeck(){
    console.log("onside it")
    $("#game-area .container").animate({left:"91px"},"slow",function(){
        $("#game-area .msg").html("");
        flip();
        
    });
    
}
function animateinCorrectCard(){ 
    setTimeout(function(){
        $("#game-area .msg").html("Tap to Drop the Invalid Card");
        $("#game-area #showhand").css({display:'block'});
        $("#game-area #showhand").css({left:'170px',top:'111px',transform:'rotate(26deg)'});
    //$("#game-area #topc4").addClass("animateIncorrectCard");
    dropinvalidcard=1;
    $("#clickableareaforinvalidcard").css({display:'block'})
    },1000)
    setTimeout(function(){
        $("#game-area #showhand").css({display:'none'});
    },2500)
    
}
function deleteWrongCard(){
    console.log("delete it")
    $("#game-area #topc4").removeClass("animateIncorrectCard");
    
    $('#game-area #topc4').delay(00).animate({left:"162px",top:"-87px",width:"43px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(0deg)'); 
          $(this).css('-moz-transform','rotate(0deg)');
          $(this).css('transform','rotate(0deg)');
        },
        duration:1000
    
    },1000,nextAnim());

    $('#game-area #correctcard').delay(00).animate({left:"178px",top:"110px",width:"81px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(14deg)'); 
          $(this).css('-moz-transform','rotate(14deg)');
          $(this).css('transform','rotate(14deg)');
        },
        duration:1000
    
    },1000,nextAnim());
    
   setTimeout(function(){
    $('#game-area #invalidcard').css({display:'block'});
    $("#game-area #clickableareaforinvalidcard").hide();
   },1000)
    $('#game-area #topc4').delay(1100).animate({opacity:"0"},function(){
        
    })
}


function nextAnim(){
   
    setTimeout(function(){
        $("#game-area .msg").html("Sequence Complete");
    },500)
    
    
    setTimeout(function(){
        //$("#game-area #confetti3").addClass("animateConfetti")
        $("#game-area .msg").html("");
        $('#game-area #topc4').css({transform:"rotate(14deg)",left:"175px",top:"15px",width:"84px"});
        $("#game-area #correctcard").hide();
        $("#game-area #pileofcard").hide()
        $("#game-area #invalidcard").hide();
        $("#game-area #bottomcardcontainer").animate({top:"200px"},1000,showFinal)
    },1500);
    setTimeout(function(){
        //uplifeCards();
    },2200)
}

function uplifeCards(){
    $("#game-area #pileofcard").animate({opacity:"0"},400);
    $("#game-area #invalidcard").animate({opacity:"0"},400,function(){
        $('#game-area #topc4').css({transform:"rotate(14deg)",left:"175px",top:"15px",opacity:"1",width:"84px"});
        $('#game-area #topc4 img').attr("src","./assets/card-9-club.png");
        $("#game-area #correctcard").hide();
        $("#game-area #bottomcardcontainer").animate({top:"27px"},1000,showFinal)
    })
}

function showFinal(){
    $("#game-area .msg").html("Congratulations!");
    $("#game-area .msg").css({color:"#cab991"});
    $("#game-area .msg2").css({display:"block"});
    $("#game-area .msg2").animate({opacity:"1"},500);
    $("#game-area #money").animate({top:"223px"},500);
    setTimeout(function(){
        $("#game-area #confetti3").addClass("animateConfetti1");
    },1000)
    
    // $("#game-area .msg2").show();
    $("#game-area #bottomcardcontainer").hide();
    $("#game-area #money").show();
    setTimeout(function(){
        $("#game-area #money").animate({opacity:"0"},1000);
        $("#game-area .msg2").animate({opacity:"0"},1000);
        $("#game-area .msg").animate({opacity:"0"},1000);
        $("#game-area #confetti3").removeClass("animateConfetti1");
       setTimeout(function(){
        nfinal();
       },1200)
        //nfinal();

        // $("#game-area #page1").hide();
        // $("#game-area #page2").show();
        // $("#game-area #confetti4").addClass("animateConfetti1")
    },2000,nfinal)
}

function nfinal(){

    $("#game-area #phone").delay(200).animate({top:"0%"},1000);
    $("#game-area .msg").css({color:"#ffffff"});
    $("#game-area .msg").html("Play More, Earn More");
    $("#game-area .msg").css({"font-size":"24px"});
    $("#game-area .msg").delay(200).animate({opacity:"1"},1000);
    $("#game-area #confetti3").removeClass("animateConfetti1");
    setTimeout(function(){
        nxfinal();
    },2400)
}

function nxfinal(){
    $("#game-area .msg").css({"font-size":"18px"});
    $("#game-area .msg").html("Guiness Record for <br/> Worlds Biggest Rummy Tournament");
    $("#game-area #confetti3").addClass("animateConfetti1");
    setTimeout(function(){
        $("#game-area #confetti3").hide();
    },1000)
}


