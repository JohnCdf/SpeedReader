
var position = 0;
var splitText = [];
var WPM;
var workingInt;
var going = false;
//60 / WMP.val() * 1000
var mainInt = function(){
    workingInt = setInterval(function(){
        if(position == splitText.length){
            return
        }

        $("#Word").text(splitText[position]);
        position+=1;
    },WPM)

};
var start = function(){
        $("#fa-pause").show()
        $("#fa-play").hide()
        mainInt()
};
var pause = function(){

    $("#fa-play").show()
    $("#fa-pause").hide()
    clearInterval(workingInt)
};
var stop = function(){
    pause()
    position = 0;
    $("#Word").text(splitText[0]);
};

var submitText = function() {
    let WPMinput = $("#WPM-input").val();
    let textinput = $("#text-input").val();
    if (WPMinput.length > 1 && Number(WPMinput) < 5001 &&textinput.length > 1) {
        $("#createText").animate({height: "0", "border-width": "0"}, 750);
        $("#readText").animate({height: "90vh", "border-wdith": "3px"}, 750);
        readText();
    }
    else if(Number(WPMinput) > 5000){
        alert("You cant read more than 5,000 words per minute! :O")
    }
    else {
        alert("All inputs must be filled out!")
    }

};

var readText = function() {
    let WPMinput = $("#WPM-input").val();
    let textinput = $("#text-input").val();
        WPM = 60 / Number(WPMinput) * 1000;

        console.log("Reading at " + WPM + " interval")
        splitText = textinput.split(" ");
        $("#Word").text(splitText[0]);




};

var newText = function(){
    position = 0;
    splitText = [];
    WPM = 150;
    workingInt;
    going = false;
    stop()
    $("#WPM-input").val("300");
    $("#text-input").val(" ");
    $("#readText").animate({height: "0", "border-width": "0"}, 750);
    $("#createText").animate({height: "90vh", "border-wdith": "3px"}, 750);
};
