//this asks the player to name their robot//
var playerName = window.prompt("what is your robot's name?");

//this is the players starting health and attack points//
var playerHealth = 100;
var playerAttack = 10;

//enemy robot's name, health and attack points//
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//Opening game alert//
var fight = function() {
    //alert player that they are starting a new round//
    window.alert("Welcome to Robot Gladiators!");

    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack


    // Log a resulting message to the console so we know that it worked.
    console.log(
    playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    } 
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    //check enemy's health
    if (enemyHealth <= 0){
        window.alert(enemyName + " has died! ");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left. ");
    }
    // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining. "
};

fight();


