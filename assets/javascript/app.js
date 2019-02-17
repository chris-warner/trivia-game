var counter;
var timer;
var score;
var wins = 0;
var losses = 0;
var Unanswered = 0;



$(".questionDiv").hide();

$("#btnNewgame").click(function() {
    newGame();
    $(".questionDiv").show();
    $(this).hide();
});

function countDown(i) {
    var int = setInterval(function() {
        document.getElementById("displayDiv").innerHTML = "Time Left: " + i;
        i-- || clearInterval(timeup()) & clearInterval(int); //if i is 0, then stop the interval and call timeup() function.
    }, 1000);
}


function newGame() {
    countDown(30);
}

//If timer is 0, call this function. When the game is finished, this concluded the score and handles the reset.
function timeup() {
    //alert("time is up!");
    //Hide the questions
    $(".questionDiv").hide();
    calculateScore();
}

function calculateScore() {
    Unanswered = 0;
    $(function() {

        //Question 1
        if ($('input[name=question1]:checked').val() === "Christina Aguilera") {
            wins++;
        }
        if ($('input[name=question1]:checked').val() === "The Spice Girls" || $('input[name=question1]:checked').val() === "Britney Spears") {
            losses++;
        }
        if ($('input[name=question1]:checked').val() != "Christina Aguilera" && $('input[name=question1]:checked').val() != "The Spice Girls" && $('input[name=question1]:checked').val() != "Britney Spears") {
            Unanswered++;
        }

        //Question 2
        if ($('input[name=question2]:checked').val() === "Deee-Lite") {
            wins++;
        }
        if ($('input[name=question2]:checked').val() === "The Pretenders" || $('input[name=question1]:checked').val() === "Britney Spears") {
            losses++;
        }
        if ($('input[name=question2]:checked').val() != "Deee-Lite" && $('input[name=question1]:checked').val() != "The Pretenders" && $('input[name=question1]:checked').val() != "Britney Spears") {
            Unanswered++;
        }

        //Question 3
        if ($('input[name=question3]:checked').val() === "Meat Loaf") {
            wins++;
        }
        if ($('input[name=question3]:checked').val() === "Van Halen" || $('input[name=question1]:checked').val() === "Avenged Sevenfold") {
            losses++;
        }
        if ($('input[name=question3]:checked').val() != "Meat Loaf" && $('input[name=question1]:checked').val() != "Van Halen" && $('input[name=question1]:checked').val() != "Avenged Sevenfold") {
            Unanswered++;
        }

        //Question 4
        if ($('input[name=question4]:checked').val() === "Eye of the Tiger") {
            wins++;
        }
        if ($('input[name=question4]:checked').val() === "We Built this City" || $('input[name=question1]:checked').val() === "Avenged Sevenfold") {
            losses++;
        }
        if ($('input[name=question4]:checked').val() != "Eye of the Tiger" && $('input[name=question1]:checked').val() != "These Dreams" && $('input[name=question1]:checked').val() != "We Built this City") {
            Unanswered++;
        }

        //Question 5
        if ($('input[name=question5]:checked').val() === "Madonna") {
            wins++;
        }
        if ($('input[name=question5]:checked').val() === "Alice in Chains" || $('input[name=question1]:checked').val() === "Metallica") {
            losses++;
        }
        if ($('input[name=question5]:checked').val() != "Madonna" && $('input[name=question1]:checked').val() != "Alice in Chains" && $('input[name=question1]:checked').val() != "Metallica") {
            Unanswered++;
        }

        //Question 6
        if ($('input[name=question6]:checked').val() === "Wonder") {
            wins++;
        }
        if ($('input[name=question6]:checked').val() === "Jealousy" || $('input[name=question1]:checked').val() === "Carnival") {
            losses++;
        }
        if ($('input[name=question6]:checked').val() != "Madonna" && $('input[name=question1]:checked').val() != "Carnival" && $('input[name=question1]:checked').val() != "Jealousy") {
            Unanswered++;
        }
        displayScore();
    });
}

function displayScore() {
    //alert($('input[name=question1]:checked').val());
    // alert("Correct: " + wins + " " + "Incorrect: " + losses);
    document.getElementById("displayDiv").innerHTML = "Answeres correct: " + wins + " " + "Incorrect: " + losses + " " + "Unanswered: " + Unanswered;
    $("#btnNewgame").show();
    wins = 0;
    losses = 0;
    Unanswered = 0;

    $("input[name=question1]").prop("checked", false);
    $("input[name=question2]").prop("checked", false);
    $("input[name=question3]").prop("checked", false);
    $("input[name=question4]").prop("checked", false);
    $("input[name=question5]").prop("checked", false);
    $("input[name=question6]").prop("checked", false);
}