// Health of all the cards of heroes and enemies.
var thorhealth=500;
var wolverinehealth=600;
var hulkhealth=700;
var cyclopshealth=800

// Attack power of the hero and enemy.
var baselineattackpower=5; //The hero you picked's attack power (which will increase as the game goes on)
var thorenemyattack=20;
var wolverineenemyattack=30;
var hulkenemyattack=45;
var cyclopsenemyattack=50;


// Booleans to trigger code when you pick a hero.
var thor=false;
var wolverine=false;
var hulk=false;
var cyclops=false;

// Booleans to trigger code when you pick an enemy.
var thorenemyhealth=false;
var wolverineenemyhealth=false;
var hulkenemyhealth=false;
var cyclopsenemyhealth=false;

// Booleans to trigger win condition.
var thorenemywin=false;
var wolverineenemywin=false;
var hulkenemywin=false;
var cyclopsenemywin=false;

$(document).ready(function() {
  
    $(".hiddencontent").hide();
    $(".hiddenrestart").hide();

    
    $(".displaythorhealth").text(thorhealth);
    $(".displaywolverinehealth").text(wolverinehealth);
    $(".displayhulkhealth").text(hulkhealth);
    $(".displaycyclopshealth").text(cyclopshealth);
    

    $(".thorbtn").on("click", function() {
        console.log("This works!");
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Choose your VICTIM");
        $(".wolverine card, .hulk card, .cyclops card").hide();
        $(".enemyholdera").append($(".wolverineenemycard"));
        $(".enemyholderb").append($(".hulkenemycard"));
        $(".enemyholderc").append($(".cyclopsenemycard"));
        $(this).hide();
        thor=true;
    });

    $(".wolverinebtn").on("click", function() {
        console.log("This works!");
        $(".leftappend").append($(".wolverine card"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Choose your VICTIM");
        $(".thor card, .hulk card, .cyclopscard").hide();
        $(".enemyholdera").append($(".thorenemycard"));
        $(".enemyholderb").append($(".hulkenemycard"));
        $(".enemyholderc").append($(".cyclopsenemycard"));
        $(this).hide();
        wolverine=true;
    });

    $(".hulkbtn").on("click", function() {
        console.log("This works!");
        $(".leftappend").append($(".hulk card"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("CHOOSE YOUR VICTIM");
        $(".wolverine card, .thor card, .cyclops card").hide();
        $(".enemyholdera").append($(".thorenemycard"));
        $(".enemyholderb").append($(".wolverineenemycard"));
        $(".enemyholderc").append($(".cyclopsenemycard"));
        $(this).hide();
        yagamiherohealth=true;
    });

    $(".cyclopsbtn").on("click", function() {
        console.log("This works!");
        $(".leftappend").append($(".cyclops card"));
        $(".charactertop").text("Your Hero!");
        $("#enemytitle").text("Choose your VICTIM!");
        $(".wolverine card, .hulk card, .thor card").hide();
        $(".enemyholdera").append($(".thorenemycard"));
        $(".enemyholderb").append($(".wolverineenemycard"));
        $(".enemyholderc").append($(".hulkenemycard"));
        $(this).hide();
        yugiherohealth=true;
    });

    // Enemy Buttons and Cards
    $(".thorenemybtn").on("click", function () {
        $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").hide();
        $(".mainenemyholder").append($(".thorenemycard"));
        thorenemyhealth=true;
    });

    $(".wolverineenemybtn").on("click", function () {
        $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").hide();
        $(".mainenemyholder").append($(".wolverienemycard"));
        wolverineenemynehealth=true;
    });

    $(".hulkenemybtn").on("click", function () {
        $(".thorenemybtn, .wolvrineenemybtn, .hulkenemybtn, .cyclopsenemybtn").hide();
        $(".mainenemyholder").append($(".hulkenemycard"));
       hulkenemyhealth=true;
    });

    $(".cyclopsenemybtn").on("click", function () {
        $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").hide();
        $(".mainenemyholder").append($(".cyclopsenemycard"));
        cyclopsenemyhealth=true;
    });

    //Attack Button
    $(".attack").on("click", function() {

        
        // Code Base if Cloud Strife is the Hero
        if (thor && wolverineine) {
            $("#herofight").text("Attacked wolverine For "+baselineattackpower);
            $("#enemyfight").text("wolverine Attacked For " +wolverineenemyattack);
            baselineattackpower=baselineattackpower+5;
            thor=thor-wolverineenemyattack;
            wolverine=wolverine-baselineattackpower;
            $(".displaythor").text(thor);
            $(".displaywolverine").text(wolverinerin);
            if (wolverine<=0) {
               wolverineenemyhealth=false;
             wolverineenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (thor<=0) {
                $(".hiddenrestart").show();
                thor=false;
                $(".battlestats").text("by my hammer");
            }
            console.log(thor);
        }

        else if (thor && hulkenemyhealth) {
            $("#herofight").text("Attacked hulk "+baselineattackpower);
            $("#enemyfight").text("hulk Attacked For " +hulkenemyattack);
            baselineattackpower=baselineattackpower+15;
           thor-hulkenemyattack;
            hulk=hulk-baselineattackpower;
            $(".display thor").text(thor);
            $(".display hulk").text(hulk);
            if (hulk<=0) {
                hulkenemyhealth=false;
                hulkenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (thor<=0) {
                $(".hiddenrestart").show();
                thor=false;
                $(".battlestats").text("SMASH.");
            }
        }

        else if (thor && cyclopsenemyhealth) {
            $("#herofight").text("Attacked cyclops For "+baselineattackpower);
            $("#enemyfight").text("cyclops Attacked For " +cyclopsenemyattack);
            baselineattackpower=baselineattackpower+15;
            thor=thor-cyclopsenemyattack;
            cyclops=cyclops-baselineattackpower;
            $(".displaythor").text(thor);
            $(".displaycyclops").text(cyclops);
            if (cyclops<=0) {
                cyclopsenemyhealth=false;
                cyclopsenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (thor<=0) {
                $(".hiddenrestart").show();
                thor=false;
                $(".battlestats").text("X beam");
            }
        }

        //Code Base if Lelouch is the Hero
        if (wolverine && thorenemyhealth) {
            $("#herofight").text("Attacked thor For "+baselineattackpower);
            $("#enemyfight").text("Cloud thor Attacked For " +thorenemyattack);
            baselineattackpower=baselineattackpower+15;
            wolverine=wolverine-thornemyattack;
            thor=thor-baselineattackpower;
            $(".displaywolverine").text(wolverine);
            $(".displaythor").text(thor);
            if (thor<=0) {
                thorenemyhealth=false;
                thorenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (wolverine<=0) {
                $(".hiddenrestart").show();
                wolverine=false;
                $(".battlestats").text("slice and dice.");
            }

        }

        else if (wolverine && hulkenemyhealth) {
            $("#herofight").text("Attacked hulk For "+baselineattackpower);
            $("#enemyfight").text("hulk Attacked For " +hulkenemyattack);
            baselineattackpower=baselineattackpower+15;
            wolverine=wolverine-hulkenemyattack;
            hulk=hulk-baselineattackpower;
            $(".displaywolverine").text(wolverine);
            $(".displayhulk").text(hulk);
            if (hulk<=0) {
                hulkenemyhealth=false;
                hulkenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (wolverine<=0) {
                $(".hiddenrestart").show();
                wolverine=false;
                $(".battlestats").text("damn");
            }
        }

        else if (wolverine && cyclopsenemyhealth) {
            $("#herofight").text("Attacked cyclops For "+baselineattackpower);
            $("#enemyfight").text("cyclops Attacked For " +cyclopsenemyattack);
            baselineattackpower=baselineattackpower+15;
            wolverine=wolverine-cyclopsenemyattack;
            cyclops=cyclops-baselineattackpower;
            $(".displaywolverine").text(wolverine);
            $(".displaycyclops").text(cyclops);
            if (cyclops<=0) {
                cyclopsenemyhealth=false;
                cyclopsenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (wolverine<=0) {
                $(".hiddenrestart").show();
                wolverine=false;
                $(".battlestats").text("done");
            }
        }

        //Code base if Light Yagami is picked as the hero.
        if (hulk && thorenemyhealth) {
            $("#herofight").text("Attacked thor For "+baselineattackpower);
            $("#enemyfight").text("thor Attacked For " +thorenemyattack);
            baselineattackpower=baselineattackpower+15;
          hulk =hulk-thorenemyattack;
           thor=thor-baselineattackpower;
            $(".displayhulk").text(hulk);
            $(".displaythor").text(thor);
            if (thor<=0) {
                thorenemyhealth=false;
                thorenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (hulk<=0) {
                $(".hiddenrestart").show();
                hulk=false;
                $(".battlestats").text("puny god");
            }

        }

        else if (hulk && wolverine) {
            $("#herofight").text("Attacked wolverine For "+baselineattackpower);
            $("#enemyfight").text("wolverine Attacked For " +wolverineenemyattack);
            baselineattackpower=baselineattackpower+15;
            hulk=hulk-wolverineenemyattack;
            wolverine=wolverine-baselineattackpower;
            $(".displayhulk").text(hulk);
            $(".displaywolverine").text(wolverine);
            if (wolverine<=0) {
                wolverineenemyhealth=false;
                wolverineenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (hulk<=0) {
                $(".hiddenrestart").show();
                hulk=false;
                $(".battlestats").text("smash");
            }
        }

        else if (hulk &&cyclops ) {
            $("#herofight").text("Attacked cyclops For "+baselineattackpower);
            $("#enemyfight").text("cyclops Attacked For " +cyclopsenemyattack);
            baselineattackpower=baselineattackpower+15;
            hulk=hulk-cyclopsenemyattack;
            cyclops=cyclops-baselineattackpower;
            $(".displayhulk").text(hulk);
            $(".displaycyclops").text(cyclops);
            if (cyclops<=0) {
                cyclopsenemyhealth=false;
                cyclopsenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (hulk<=0) {
                $(".hiddenrestart").show();
                hulk=false;
                $(".battlestats").text("smash");
            }
        }

        //Code Base for when Yugi Moto is picked as the hero.

        if (cyclops && thor) {
            $("#herofight").text("Attacked thor For "+baselineattackpower);
            $("#enemyfight").text("thor Attacked For " +thorenemyattack);
            baselineattackpower=baselineattackpower+15;
            cyclops=cyclops-thorenemyattack;
            thor=thor-baselineattackpower;
            $(".displaycyclops").text(cyclops);
            $(".displaythor").text(thor);
            if (thor<=0) {
                thor=false;
                thorenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (cyclops<=0) {
                $(".hiddenrestart").show();
                cyclops=false;
                $(".battlestats").text("X beam");
            }

        }

        else if (cyclops && wolverine) {
            $("#herofight").text("Attacked cyclops For "+baselineattackpower);
            $("#enemyfight").text("cyclops Attacked For " +cyclopsenemyattack);
            baselineattackpower=baselineattackpower+15;
            cyclops=cyclops-wolverineenemyattack;
            wolverine=wolverine-baselineattackpower;
            $(".displaycyclops").text(cyclops);
            $(".displaywolverine").text(wolverine);
            if (wolverine<=0) {
                wolverine=false;
                wolverineenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (cyclops<=0) {
                $(".hiddenrestart").show();
                cyclops=false;
                $(".battlestats").text(" X blast");
            }
        }

          else if (cyclops && hulk) {
            $("#herofight").text("Attacked cyclops For "+baselineattackpower);
            $("#enemyfight").text("cyclops Attacked For " +hulkenemyattack);
            baselineattackpower=baselineattackpower+15;
            cyclops=cyclops-hulkenemyattack;
           hulk=hulk-baselineattackpower;
            $(".displaycyclops").text(cyclops);
            $(".displayhulk").text(hulk);
            if (hulk<=0) {
               hulk=false;
                hulkenemywin=true;
                $(".mainenemyholder").empty();
                $("#herofight").empty();
                $("#enemyfight").empty();
                $(".thorenemybtn, .wolverineenemybtn, .hulkenemybtn, .cyclopsenemybtn").show();
            }
            else if (cyclops<=0) {
                $(".hiddenrestart").show();
                cyclops=false;
                $(".battlestats").text(" X bomber");
            }
        }

        wincondition();

        
    });

    //conditions to trigger win scenario
    function wincondition() {
        if (wolverineenemywin && hulkenemywin && cyclopsenemywin) {
            $(".battlestats").text("I am the VICTOR");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (thorenemywin && hulkenemywin &&cyclopsenemywin) {
            $(".battlestats").text("I am the VICTOR");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (thorenemywin && wolverineenemywin && cyclopsenemywin) {
            $(".battlestats").text("I am the VICTOR!");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }

        else if (thorenemywin && wolverineenemywin && cyclopsenemywin) {
            $(".battlestats").text("I am the VICTOR");
            $(".hiddenrestart").show();
            console.log("you should get a message")
        }
        
    };

    //restart function that will only show at the end of the game (win or lose)
    $(".restart").on("click", function() {
        location.reload();
    })


  });











