var intro = {};
intro.SID = 0;
intro.init = function() {
        $("body").addClass("introstarted");

        $("#slider-container").append($("#slidertooltip"));
        var topoffset = -10+0.5 * ($("body").height() - $("#introtext").height());
        $("#introtext").css("margin-top", topoffset);
        $("body").addClass("unbluronlyslider");
       // $("#stage1 .stagecontent .hl").css("visibility", "hidden");
        intro.SID = setInterval(intro.introTextPhase0, 100);

    } //init


intro.introTextPhase0 = function() {
        clearInterval(intro.SID);
        $("#introtext").addClass("phase0");
        intro.SID = setInterval(intro.introTextPhase1, 1000);
    } //introTextPhase1


intro.introTextPhase1 = function() {
        clearInterval(intro.SID);
        $("#introtext").addClass("phase1");
        intro.SID = setInterval(intro.introTextPhase2, 800);
    } //introTextPhase1


intro.introTextPhase2 = function() {
        clearInterval(intro.SID);
        $("#introtext").addClass("phase2");
        intro.SID = setInterval(intro.introTextPhase3, 400);
    } //introTextPhase1

intro.introTextPhase3 = function() {
        clearInterval(intro.SID);
        $("#introtext").addClass("phase3");
        intro.SID = setInterval(intro.introTextPhase4, 400);
    } //introTextPhase3

intro.introTextPhase4 = function() {
        clearInterval(intro.SID);
        $("#introtext").addClass("phase4");
        intro.SID = setInterval(intro.leaveintro, 2000);
    } //introTextPhase4



intro.leaveintro = function() {
        clearInterval(intro.SID);
        $("body").addClass("leaveintro");
        intro.SID = setInterval(intro.deleteintro, 1000);

    } //leaveintro

intro.deleteintro = function() {

        clearInterval(intro.SID);
        $("body").addClass("deleteintro");
        intro.setBGTransparent();

    } //leaveintro



intro.setBGTransparent = function() {
        intro.animateSliderValue(sliderObject.sliderMaxVal * 0.9);
        clearInterval(intro.SID);
        $("body").addClass("introbackgroundtransparent");
        intro.SID = setInterval(intro.deletetooltip, 1500);
    } //setBGTransparent


/*
intro.unbluronlyslider = function() {
        clearInterval(intro.SID);
        $("body").addClass("unbluronlyslider");
        intro.SID = setInterval(intro.deletetooltip, 3000);
    } //unbluronlyslider

*/
intro.deletetooltip = function() {
        clearInterval(intro.SID);
        $("body").addClass("deletetooltip");
        intro.animateSliderValue(sliderObject.sliderMinVal);
        $(".mb_sliderHandler").css("left",0);   //2018
    } //deletetooltip


intro.animateSliderValue = function(v) {
        sliderObject.issueValue = v;
        sliderObject.$sliderEl.mbsetVal(sliderObject.issueValue);
        sliderObject.$sliderTextEl.text(calculator.formatValue(sliderObject.issueValue));
    } //animateSliderValue

$(document).ready(function() {
    intro.init();

});