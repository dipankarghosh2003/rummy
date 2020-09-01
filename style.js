$(document).ready(function(){
    $("#game-area #playnow").bind("click",function(){
        // $("#game-area .page").hide();
        // $("#game-area #page2").show();
        $("#game-area #playnow").animate({top: "184px",opacity:0},1000);
        $("#game-area #round1bararea").css({"top":"206px"});
        $("#game-area #round1bararea").delay(1000).animate({opacity:1,top:"186px"},500);
        $("#game-area #bottomcardsarea").css({"top":"230px"});
        $("#game-area #bottomcardsarea").delay(1000).animate({opacity:1,top:"220px"},700,openGamearea);
        $("#game-area #bottomcardsarea").delay(1000).animate({opacity:1,top:"220px"},700);
       // startRound1();
    })
    $("#game-area #dropperarea").droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
          var draggableId = ui.draggable.attr("id");
          console.log("dropped"+draggableId);
          if(draggableId=="card4"){
            id="#"+draggableId;
            $(id).draggable({ revert: false });
            $(id).addClass("round1card3anim");
            
                round1Completed();
           

          }
          else{
            
            id="#"+draggableId;
            console.log(id)
              $(id).draggable({ revert: true });
          }
          
        }
    });
    $("#game-area #dropperarearound2").droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
           var draggableId = ui.draggable.attr("id");
          console.log("dropped"+draggableId);
          if(draggableId=="card21"){
            id="#"+draggableId;
            $(id).draggable({ revert: false });
            $(id).addClass("round2card2anim");
            
                round2Completed();
           

          }
          else{
            
            id="#"+draggableId;
            console.log(id)
              $(id).draggable({ revert: true });
          }
          
        }
    });

    $("#game-area #dropperarearound3").droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
           var draggableId = ui.draggable.attr("id");
          console.log("dropped"+draggableId);
          if(draggableId=="card31"){
            id="#"+draggableId;
            $(id).draggable({ revert: false });
            $(id).addClass("round3card2anim");
            $(this).hide();
            $("#game-area #dropperarearound4").show();
            $("#game-area #cursor2").animate({left:"260px"},50)
            $("#game-area #topc33 img").attr("src","./assets/screen3/c3s.png");
            $("#game-area #card31").hide();
           

          }
          else{
            
            id="#"+draggableId;
            console.log(id)
              $(id).draggable({ revert: true });
          }
          
        }
    });
    $("#dropperarearound4").droppable({
        classes: {
          "ui-droppable-active": "ui-state-active",
          "ui-droppable-hover": "ui-state-hover"
        },
        drop: function( event, ui ) {
           var draggableId = ui.draggable.attr("id");
          console.log("dropped"+draggableId);
          if(draggableId=="card34"){
            id="#"+draggableId;
            $(id).draggable({ revert: false });
            $(id).addClass("round4card4anim");
            $("#game-area #cursor2").hide();
                round3Completed();
               
           

          }
          else{
            
            id="#"+draggableId;
            console.log(id)
              $(id).draggable({ revert: true });
          }
          
        }
    });

});

function startRound1(){
    setTimeout(function(){
        $("#game-area #introscreen").hide();
        $("#game-area #game1area").show();
        msg2Round1();
    },2000,);
    $("#game-area #card1").draggable({ revert: "invalid" });
    $("#game-area #card2").draggable({ revert: "invalid" });
    $("#game-area #card3").draggable({ revert: "invalid" });
    $("#game-area #card4").draggable({ revert: "invalid" });
    
}

function msg2Round1(){

    setTimeout(function(){
        $("#game-area #intro2").show();
        $("#game-area #intro1").hide();
        $("#game-area #cursor").show();
        startGame();
    },2000);

}

function startGame(){
    setTimeout(function(){$('#game-area #cursor').hide();}, 2000);
    //$("#cursor").delay(2000).hide()
}

function round1Completed(){
   $("#game-area #round1winmsgarea").show();
   $("#game-area #topwimsg").animate({top:"60px",opacity:1},1000);
   $("#game-area #card1container").animate({top:"220px",opacity:1},1000,startSecondRound)
   $("#game-area #bottomcardsarea").hide();
   $("#game-area #topcardcontainer").hide();
   $("#game-area #cursor").hide();
   $("#game-area #round1bararea").hide();
   $("#game-area #greenmsgbox").hide();
   $("#game-area #dropperarea").hide();
   $("#game-area #confetti").addClass("animateConfetti")
}

function flip() {
    $('#game-area .carddef').toggleClass('flipped');
    setTimeout(function(){
       
        $("#game-area #cursor").show();
     
    },500);
}
function flip1() {
    $('#game-area .carddef').toggleClass('flipped');
    setTimeout(function(){
       
        $("#game-area #cursor1").show();
     
    },500);
}
function flip2() {
    $('#game-area .carddef').toggleClass('flipped');
    setTimeout(function(){
       
        $("#game-area #cursor2").show();
     
    },500);
}
function openGamearea(){
    $("#game-area #playnow").hide();
    $("#game-area #headermsg").delay(1000).animate({top:"-85px"},500);
    $("#game-area #round1bararea").delay(1000).animate({top:"22px"},500).delay(100).animate({opacity:1,top:"12px"},'slow');
    $("#topcardcontainer").delay(1200).animate({opacity:1},500);
   // $("#game-area #round1bararea").delay(1400).animate({opacity:1,top:"12px"},'slow');
   
    $('#game-area #topc1').delay(1700).animate({left:"96px",top:"8px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-15deg)'); 
          $(this).css('-moz-transform','rotate(-15deg)');
          $(this).css('transform','rotate(-15deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc2').delay(1700).animate({left:"124px",top:"3px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-6deg)'); 
          $(this).css('-moz-transform','rotate(-6deg)');
          $(this).css('transform','rotate(-6deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc3').delay(1700).animate({left:"150px",top:"6px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(9deg)'); 
          $(this).css('-moz-transform','rotate(9deg)');
          $(this).css('transform','rotate(9deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc4').delay(1700).animate({left:"172px",top:"14px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(21deg)'); 
          $(this).css('-moz-transform','rotate(21deg)');
          $(this).css('transform','rotate(21deg)');
        },
        duration:'slow'
    },'linear');
    $("#game-area #greenmsgbox").delay(1800).animate({opacity:1},'slow',animateRound1CardDeck);
    
   
}
function animateRound1CardDeck(){
    $("#game-area #card1").animate({left:"13px"},1000)
    $("#game-area #card2").animate({left:"90px"},1000)
    $("#game-area #card3").animate({left:"166px"},1000)
    $("#game-area #card4").animate({right:"17px"},1000,flip);
    $("#game-area #dropperarea").show();
    $("#game-area #card1").draggable({ revert: "invalid" });
    $("#game-area #card2").draggable({ revert: "invalid" });
    $("#game-area #card3").draggable({ revert: "invalid" });
    $("#game-area #card4").draggable({ revert: "invalid" });

}

function startSecondRound(){
    $("#game-area #round1winmsgareap2").show();
    $("#game-area #page1").hide();
    $("#game-area #page2").show();
    $('#game-area .carddef').toggleClass('flipped');
    $("#game-area #round1winmsgareap2").animate({top:"-170px"},1000)
  
   
    $("#game-area #topcardcontainer1").delay(1200).animate({opacity:1},500);

    $('#game-area #topc21').delay(1700).animate({left:"96px",top:"8px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-15deg)'); 
          $(this).css('-moz-transform','rotate(-15deg)');
          $(this).css('transform','rotate(-15deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc22').delay(1700).animate({left:"124px",top:"3px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-6deg)'); 
          $(this).css('-moz-transform','rotate(-6deg)');
          $(this).css('transform','rotate(-6deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc23').delay(1700).animate({left:"150px",top:"6px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(9deg)'); 
          $(this).css('-moz-transform','rotate(9deg)');
          $(this).css('transform','rotate(9deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc24').delay(1700).animate({left:"172px",top:"14px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(21deg)'); 
          $(this).css('-moz-transform','rotate(21deg)');
          $(this).css('transform','rotate(21deg)');
        },
        duration:'slow'
    },'linear');
    $("#game-area #greenmsgbox1").delay(1600).animate({opacity:1},500,animateRound2CardDeck);
}

function animateRound2CardDeck(){
    $("#game-area #card21").animate({left:"13px"},1000)
    $("#game-area #card22").animate({left:"90px"},1000)
    $("#game-area #card23").animate({left:"166px"},1000)
    $("#game-area #card24").animate({right:"17px"},1000,flip1);
    $("#game-area #dropperarearound2").show();
    $("#game-area #card21").draggable({ revert: "invalid" });
    $("#game-area #card22").draggable({ revert: "invalid" });
    $("#game-area #card23").draggable({ revert: "invalid" });
    $("#game-area #card24").draggable({ revert: "invalid" });

}
function round2Completed(){
    $("#game-area #round2winmsgarea").show();
    $("#game-area #topwimsg2").animate({top:"60px",opacity:1},1000);
    $("#game-area #card2container").animate({top:"220px",opacity:1},1000,startThirdRound)
    $("#game-area #bottomcardsarea2").hide();
    $("#game-area #topcardcontainer1").hide();
    $("#game-area #cursor1").hide();
    $("#game-area #round1winmsgareap2").hide();
    $("#game-area #greenmsgbox1").hide();
    $("#game-area #dropperarearound2").hide();
    $("#game-area #confetti2").addClass("animateConfetti")
 }
 function startThirdRound(){
    $("#game-area #round2winmsgareap3").show();
    $("#game-area #page2").hide();
    $("#game-area #page3").show();
    $('#game-area .carddef').toggleClass('flipped');
    $("#game-area #round2winmsgareap3").animate({top:"-170px"},1000);

   

    $("#game-area #topcardcontainer2").delay(1200).animate({opacity:1},500);


    $('#game-area #topc31').delay(1700).animate({left:"28px",top:"31px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-31deg)'); 
          $(this).css('-moz-transform','rotate(-31deg)');
          $(this).css('transform','rotate(-31deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc32').delay(1700).animate({left:"51px",top:"21px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-23deg)'); 
          $(this).css('-moz-transform','rotate(-23deg)');
          $(this).css('transform','rotate(-23deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc33').delay(1700).animate({left:"80px",top:"12px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-14deg)'); 
          $(this).css('-moz-transform','rotate(-14deg)');
          $(this).css('transform','rotate(-14deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc34').delay(1700).animate({left:"111px",top:"8px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(-5deg)'); 
          $(this).css('-moz-transform','rotate(-5deg)');
          $(this).css('transform','rotate(-5deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc35').delay(1700).animate({left:"145px",top:"8px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(5deg)'); 
          $(this).css('-moz-transform','rotate(5deg)');
          $(this).css('transform','rotate(5deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc36').delay(1700).animate({left:"179px",top:"14px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(14deg)'); 
          $(this).css('-moz-transform','rotate(14deg)');
          $(this).css('transform','rotate(14deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc37').delay(1700).animate({left:"207px",top:"23px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(23deg)'); 
          $(this).css('-moz-transform','rotate(23deg)');
          $(this).css('transform','rotate(23deg)');
        },
        duration:'slow'
    },'linear');
    $('#game-area #topc38').delay(1700).animate({left:"233px",top:"36px"}, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate(31deg)'); 
          $(this).css('-moz-transform','rotate(31deg)');
          $(this).css('transform','rotate(31deg)');
        },
        duration:'slow'
    },'linear');

    $("#game-area #greenmsgbox2").delay(1600).animate({opacity:1},500,animateRound3CardDeck);
 }

 function animateRound3CardDeck(){
    $("#game-area #card31").animate({left:"13px"},1000)
    $("#game-area #card32").animate({left:"90px"},1000)
    $("#game-area #card33").animate({left:"166px"},1000)
    $("#game-area #card34").animate({right:"17px"},1000,flip2);
    $("#game-area #dropperarearound3").show();
    
    $("#game-area #card31").draggable({ revert: "invalid" });
    $("#game-area #card32").draggable({ revert: "invalid" });
    $("#game-area #card33").draggable({ revert: "invalid" });
    $("#game-area #card34").draggable({ revert: "invalid" });

}
function round3Completed(){
     $("#game-area #round3winmsgarea").show();
     $("#game-area #topwimsg3").animate({top:"60px",opacity:1},1000);
     $("#game-area #card3container").animate({top:"220px",opacity:1},1000)
     $("#game-area #bottomcardsarea3").hide();
     $("#game-area #topcardcontainer2").hide();
     $("#game-area #cursor2").hide();
     //$("#game-area #round1winmsgareap2").hide();
     $("#game-area #greenmsgbox2").hide();
     $("#game-area #dropperarearound3").hide();
     $("#game-area #dropperarearound4").hide();
     $("#game-area #round2winmsgareap3").hide();
     $("#game-area #confetti3").addClass("animateConfetti")
 }
 