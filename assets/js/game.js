//this asks the player to name their robot
var playerName = window.prompt("what is your robot's name?");

//this is the players starting health and attack points
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy robot's name, health and attack points
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Opening game alert//
var fight = function(enemyName) {
    //alert player that they are starting a new round
    window.alert("Welcome to Robot Gladiators!");

//allow the user to fight or skip the battle
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        // remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player choses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
//confirm player wants to skip
var confirmSkip = window.confirm("Are you sure you'd like to quit?")
    //if yes (true), leave fight
        if (confirmSkip){
            window.alert(playerName + " has decided to skip this fight. Goodbye! ");
            //subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
        }
        //if no (false), ask question again by running fight() again
        else {
            fight();
    }
    window.alert(playerName + " has chosen to skip the fight!");
    //if player doesn't enter fight or skip
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less


}; //end of fight fuction

//run fight function to start game and allows you to fight all robots
for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}