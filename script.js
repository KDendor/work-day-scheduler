$(document).ready(function() {
    $("currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    //save button
    $(".saveBtn").on("click", function () {
        console.log(this);

    var text = $(this)
    var time = $(this).attr("id");
    localStorage.setItem(time,text);
});

$("#hour-9 .description").val(localStorage.getItem("hour9"));
$("#hour-10 .description").val(localStorage.getItem("hour10"));
$("#hour-11 .description").val(localStorage.getItem("hour11"));
$("#hour-12 .description").val(localStorage.getItem("hour12"));
$("#hour-1 .description").val(localStorage.getItem("hour1"));
$("#hour-2 .description").val(localStorage.getItem("hour2"));
$("#hour-3 .description").val(localStorage.getItem("hour3"));   
$("#hour-4 .description").val(localStorage.getItem("hour4"));
$("#hour-5 .description").val(localStorage.getItem("hour5"));

function hourTracker() {
    var currentHour = moment().hour(); //moment.js

    $(".time-block").each(function () {
        var hour = parseInt($(this).attr("id").split("hour")[1]);
        console.log( blockHour, currentHour)

        if (blockHour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future"); 
        }
        else if (blockHour === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeCLass("future");
        }
        else {
            $(this).removeClass("past")
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    }
    hourTracker();
})

// const dayjs = require('dayjs')
//     dayjs().format()

//     require('dayjs/locale/de')
//     dayjs.locale('de') 
//     dayjs().locale('de').format() 

//     if (timeBlock < currentTime) { 
//         then (apply id="past") 
//     } else if (timeBlock = currentTime)  {
//         then (apply id="present")
//     } else if (timeBlock > currentTime) {
//         then (apply id="future")
//     }
// });