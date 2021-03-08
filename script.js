var wrap = document.body.querySelector(".wrapper");
var dragonHealth = 10;
var userHealth = 5;


while(dragonHealth > 0 && userHealth > 0){
  var damage = window.prompt("How many times would you like to hit the dragon? (Max 5 hits.)");
  

  randDamage = Math.floor(Math.random() * damage) + 1;
  if(randDamage > 5){
    dragonHealth = dragonHealth - 1;
  }
  else{
    dragonHealth = dragonHealth - randDamage;
  }
 
  if(dragonHealth > 0){
    dragRandDamage = Math.floor(Math.random() * 2) + 1;
    userHealth = userHealth - dragRandDamage;
  }

  else{
    wrap.innerHTML = "User Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
    break;
  }
  
  if(userHealth <= 0){
     wrap.innerHTML = "Dragon Wins! " + "User Health = " + userHealth + ", Dragon Health = " + dragonHealth;
    break;
  }
  
  
}