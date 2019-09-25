
const readline = require('readline-sync')


function health_bar(total_bars, current_Hp, maximum_Hp){
    let current_Health, no_bars, max_Health, Bar_Hp, Bar_Empty
    let health_bar_ratio, final_Health_Bar
        
    no_bars = total_bars
    current_Health = current_Hp
    max_Health = maximum_Hp
    final_Health_Bar = "["
    
    // no_bars = readline.question("Enter number of bars: ")
    // current_Health = readline.question("Enter current health: ")
    // max_Health = readline.question("Enter max health: ")
    
    health_bar_ratio = Math.floor(max_Health/no_bars)
    Bar_Hp = current_Health/health_bar_ratio
    Bar_Empty = no_bars - Bar_Hp
    
    for(i=0; Bar_Hp > i; i++){
        final_Health_Bar += "|"
    }
    
    for(i=0; Bar_Empty > i; i++){
        final_Health_Bar += "-"
    }
    
    final_Health_Bar += "]"
        console.log(`${final_Health_Bar} ${current_Health}/${max_Health}`)
    }

    function player_stats(total_bars, current_atk, maximum_atk, current_def, maximum_def, current_Hp, maximum_Hp){
        let current_Health, no_bars, max_Health, Bar_Hp, Bar_Empty
        let health_bar_ratio, final_Health_Bar
            
        no_bars = total_bars
        current_Health = current_atk
        max_Health = maximum_atk
        final_Health_Bar = "["
        
        // no_bars = readline.question("Enter number of bars: ")
        // current_Health = readline.question("Enter current health: ")
        // max_Health = readline.question("Enter max health: ")
        
        health_bar_ratio = Math.floor(max_Health/no_bars)
        Bar_Hp = current_Health/health_bar_ratio
        Bar_Empty = no_bars - Bar_Hp
        
        for(i=0; Bar_Hp > i; i++){
            final_Health_Bar += "|"
        }
        
        for(i=0; Bar_Empty > i; i++){
            final_Health_Bar += "-"
        }
        
        final_Health_Bar += "]"
            console.log(`Atk Dmg: ${final_Health_Bar}`)


            current_Health = current_def
            max_Health = maximum_def
            final_Health_Bar = "["
            
            // no_bars = readline.question("Enter number of bars: ")
            // current_Health = readline.question("Enter current health: ")
            // max_Health = readline.question("Enter max health: ")
            
            health_bar_ratio = Math.floor(max_Health/no_bars)
            Bar_Hp = current_Health/health_bar_ratio
            Bar_Empty = no_bars - Bar_Hp
            
            for(i=0; Bar_Hp > i; i++){
                final_Health_Bar += "|"
            }
            
            for(i=0; Bar_Empty > i; i++){
                final_Health_Bar += "-"
            }
            
            final_Health_Bar += "]"
                console.log(`Def:\t ${final_Health_Bar}`)

        current_Health = current_Hp
        max_Health = maximum_Hp
        final_Health_Bar = "["
        no_bars = total_bars
        
        // no_bars = readline.question("Enter number of bars: ")
        // current_Health = readline.question("Enter current health: ")
        // max_Health = readline.question("Enter max health: ")
        
        health_bar_ratio = Math.floor(max_Health/no_bars)
        Bar_Hp = current_Health/health_bar_ratio
        Bar_Empty = no_bars - Bar_Hp
        
        for(i=0; Bar_Hp > i; i++){
            final_Health_Bar += "|"
        }
        
        for(i=0; Bar_Empty > i; i++){
            final_Health_Bar += "-"
        }
        
        final_Health_Bar += "]"
            console.log(`Health:\t ${final_Health_Bar}`)

            
        }

            function mitigated_damage(def, atk){
                const damage_reduc_const = 3/10

                let defense_player = def 
                let enemy_attack = atk


                let damage_reduc = (defense_player/10)-damage_reduc_const
                let final_damage = enemy_attack-((damage_reduc)*enemy_attack)
                final_damage = Math.floor(final_damage)
                
                
                return final_damage
            }

                function crit_chance_player(){

                        let chance = Number(Math.floor((Math.random()*4)+1))
                        return chance
                    }  

                        function enemy_crit_chance(){

                            let chance = Number(Math.floor((Math.random()*3)+1))
                            return chance
                        }

let died = "You died bitchzxzcczxz!"

let game = true
let battle = true
let class_Check = 0
let your_Class
let game_level = 0
let random_enemy
let player_name
let player_command
let enemy_crit, player_crit_chance

let press_Enter
let estus_flask_charges = 3
let estus_add = 35

let player_Class
let player_Attack
let player_Defense
let player_Health
let player_current_health


let class_Knight = "Knight"
let class_Knight_attack = 12
let class_Knight_defense = 8
let class_Knight_health = 160

let class_Warrior = "Warrior"
let class_Warrior_attack = 14
let class_Warrior_defense = 6
let class_Warrior_health = 200

let class_Mage = "Mage"
let class_Mage_attack = 20
let class_Mage_defense = 4
let class_Mage_health = 140

let class_Assassin = "Assassin"
let class_assassin_attack = 18
let class_assassin_defense = 5
let class_assassin_health = 100


//Enemies can be added here
let enemy_ghoul = "The Ravenous Ghoul"
let enemy_ghoul_attack = 15
let enemy_ghoul_health = 75

let enemy_hollow = "The Souless Hollow"
let enemy_hollow_attack = 20
let enemy_hollow_health = 80

let enemy_hound = "The Undead Hound"
let enemy_hound_attack = 16
let enemy_hound_health = 110

let enemy_wraith = "Noxious Wraith"
let enemy_wraith_attack = 40
let enemy_wraith_health = 45



let enemy_name, enemy_attack, enemy_health, enemy_current_health





// Class selection Starts here

while(class_Check!=1){
console.clear()
console.log("Choose a class.\n1 - Knight\n2 - Warrior\n3 - Mage\n4 - Assassin")
your_Class = readline.question("Your Class: ")

if(your_Class==1){
    console.clear()
    console.log(`Class:\t\t ${class_Knight}`)
    console.log(`Attack Damage:\t ${class_Knight_attack}`)
    console.log(`Defense:\t ${class_Knight_defense}`)
    console.log(`Health Points:\t ${class_Knight_health}\n`)
    player_stats(10, class_Knight_attack, 20, class_Knight_defense, 10, class_Knight_health, 200)
    console.log("\nUnique Passive: Wjolnhir's Blessing")
    console.log("Description: Estus's heal is increased by 25%")
    your_Class = readline.question("Will you select this class? (yes/no): ")

        if(your_Class=="yes"){
            class_Check = 1
            player_Class = class_Knight
            player_Attack = class_Knight_attack
            player_Defense = class_Knight_defense
            player_Health = class_Knight_health
        }

}

else if(your_Class==2){
    console.clear()
    console.log(`Class:\t\t ${class_Warrior}`)
    console.log(`Attack Damage:\t ${class_Warrior_attack}`)
    console.log(`Defense:\t ${class_Warrior_defense}`)
    console.log(`Health Points:\t ${class_Warrior_health}\n`)
    player_stats(10, class_Warrior_attack, 20, class_Warrior_defense, 10, class_Warrior_health, 200)
    console.log("\nUnique Passive: Precision Strikes")
    console.log("Description: ")
    your_Class = readline.question("Will you select this class? (yes/no): ")

        if(your_Class=="yes"){
            class_Check = 1
            player_Class = class_Warrior
            player_Attack = class_Warrior_attack
            player_Defense = class_Warrior_defense
            player_Health = class_Knight_health
        }

}

else if(your_Class==3){
    console.clear()
    console.log(`Class:\t\t ${class_Mage}`)
    console.log(`Attack Damage:\t ${class_Mage_attack}`)
    console.log(`Defense:\t ${class_Mage_defense}`)
    console.log(`Health Points:\t ${class_Mage_health}\n`)
    player_stats(10, class_Mage_attack, 20, class_Mage_defense, 10, class_Mage_health, 200)
    your_Class = readline.question("Will you select this class? (yes/no): ")

        if(your_Class=="yes"){
            class_Check = 1
            player_Class = class_Mage
            player_Attack = class_Mage_attack
            player_Defense = class_Mage_defense
            player_Health = class_Mage_health
        }

}

else if(your_Class==4){
    console.clear()
    console.log(`Class:\t\t ${class_Assassin}`)
    console.log(`Attack Damage:\t ${class_assassin_attack}`)
    console.log(`Defense:\t ${class_assassin_defense}`)
    console.log(`Health Points:\t ${class_assassin_health}\n`)
    player_stats(10, class_assassin_attack, 20, class_assassin_defense, 10, class_assassin_health, 200)
    
    your_Class = readline.question("Will you select this class? (yes/no): ")

        if(your_Class=="yes"){
            class_Check = 1
            player_Class = class_Assassin
            player_Attack = class_assassin_attack
            player_Defense = class_assassin_defense
            player_Health = class_assassin_health

        }

    }   

}

// Class selection ends here



// Player name is asked, buffs are shown.
player_name = readline.question("What is your name, challenger? ")
console.clear()
console.log(`\n\n${player_name}, You have a 25% chance to critically strike.  `)
console.log("Enemies have a 33% crit chance. \nBut worry not for you get an Estus charge everytime you defeat your foes.")
press_Enter = readline.question(`Are you ready to battle, ${player_name}? (Press enter to fight!)`)

// The general variable for player current health is matched with max health of chosen class  
player_current_health = player_Health

// Game Starts here
while(game){

    battle = true

    // Number is randomly generated. Number corresponds to a certain enemy type
    random_enemy = Math.floor(Number((Math.random()*4)+1))
    
    // Enemy assignment starts here
    if(random_enemy == 1){
        enemy_name = enemy_ghoul
        enemy_attack = enemy_ghoul_attack
        enemy_health = enemy_ghoul_health
    }
    
    else if(random_enemy == 2){
        enemy_name = enemy_hollow
        enemy_attack = enemy_hollow_attack
        enemy_health = enemy_hollow_health
    }
    
    else if(random_enemy == 3){
        enemy_name = enemy_hound
        enemy_attack = enemy_hound_attack
        enemy_health = enemy_hound_health
    }

    else if(random_enemy == 4){
        enemy_name = enemy_wraith
        enemy_attack = enemy_wraith_attack
        enemy_health = enemy_wraith_health
    }
    // Enemy assignment ends here
    
    
    // selected enemy max health is assigned to the general enemy current health variable
    enemy_current_health = enemy_health
    
    
    // Enemy encounter is mentioned here
    console.clear()
    console.log(`\n\n${player_name}, you have encountered ${enemy_name}!`)
    press_Enter = readline.question("")
    console.clear()
    

        // Battle sequence loop starts here
        while(battle){

            console.clear()

            // health status of enemy and player are shown
            // Player gets to make a move 
            console.log(`Enemies Defeated: ${game_level}`)
            console.log("\n\n")
            console.log(`${enemy_name}`)
            health_bar(10, enemy_current_health, enemy_health)
            console.log("\n\n")

            console.log(`${player_name} the ${player_Class}`)
            health_bar(10, player_current_health, player_Health)
            console.log("______________________________________________________")
            console.log(`1 - Attack!\t2 - Drink Estus (${estus_flask_charges} Charges left)`)
            player_command = Number(readline.question("Your move: "))


            // If player choses 1, attack is executed, enemy current health is subtracted by the number of player attack points
            // if crit_chance is 1 (random number is generated from 1 - 4, thus 25% chance to crit), enemy current health is subtracted by twice the number of player attack points
            if(player_command == 1){
                
                player_crit_chance = crit_chance_player()
                    
                   
                    if(player_crit_chance == 1){

                        enemy_current_health = enemy_current_health - player_Attack - player_Attack
                        console.log("Your attack is going to Crit!")
                        press_Enter = readline.question(" ")

                    }

                    else{
                        
                        enemy_current_health = enemy_current_health - player_Attack

                    }
                
                            // This condition checks if the current health of enemy is reduced to a number below 0
                            // If condition is true, the negative value is replaced with 0, because there's no negative health duuhhh
                            if(enemy_current_health<=0){

                                enemy_current_health = 0

                            }
            }


            // if Player choses 2, Estus heal points are added to current HP of player
            // It makes sure that this is not executed when estus charge is 0
            else if(player_command == 2){
                
                if(estus_flask_charges!==0){
                    player_current_health = player_current_health + estus_add
                    estus_flask_charges = estus_flask_charges - 1

                    // When the addition of estus heal points overheals current Hp, the current HP is changed to match the max health 
                    if(player_current_health>player_Health){
                        player_current_health = player_Health
                    }
                }

                else{
                    console.log("You ran out of Estus!")
                    press_Enter = readline.question(" ")
                }
                
                
                console.clear()
            }


            else{

                press_Enter = readline.question(" ")
            }
            
        


            // Health bars of both player and enemy is logged to console again to show change to enemy HP
            console.clear()
            console.log(`Enemies Defeated: ${game_level}`)
            console.log("\n\n")
            console.log(`${enemy_name}`)
            health_bar(10, enemy_current_health, enemy_health)
            console.log("\n\n")

            console.log(`${player_name} the ${player_Class}`)
            health_bar(10, player_current_health, player_Health)
            console.log("______________________________________________________")



            //enemy starts to attack here

            if(enemy_current_health>0){

                console.log("Enemy's turn to make a move.")
                enemy_crit = enemy_crit_chance()

                if(enemy_crit == 1){

                    //player_current_health = player_current_health - enemy_attack - enemy_attack

                    player_current_health = player_current_health - mitigated_damage(player_Defense, enemy_attack) - mitigated_damage(player_Defense, enemy_attack) 
                    console.log("Enemy attack is about to critically strike you!")
                    console.log(`Enemy Damage: ${enemy_attack+enemy_attack}`)
                    console.log(`Reduced Damage: ${mitigated_damage(player_Defense, enemy_attack)+mitigated_damage(player_Defense, enemy_attack)}`)
                    press_Enter = readline.question(" ")
                    
                    if(player_current_health<=0){

                        player_current_health = 0
                    
                    }
                }

                else{

                
                    press_Enter = readline.question("")
                    player_current_health = player_current_health - mitigated_damage(player_Defense, enemy_attack)

                    console.log(`Enemy Damage: ${enemy_attack}`)
                    console.log(`Reduced Damage: ${mitigated_damage(player_Defense, enemy_attack)}`)
                    press_Enter = readline.question(" ")

                    // changes current hp of player to 0 when it is reduced to a negative number
                    if(player_current_health<=0){

                        player_current_health = 0
                    
                    }
                }

                // Shows current health of both parties, player current hp is reduced
                console.clear()
                console.log(`Enemies Defeated: ${game_level}`)
                console.log("\n\n")
                console.log(`${enemy_name}`)
                health_bar(10, enemy_current_health, enemy_health)
                console.log("\n\n")
                
                console.log(`${player_name} the ${player_Class}`)
                health_bar(10, player_current_health, player_Health)
                console.log("______________________________________________________")
                
    

            }

            // enemy attack ends here



            //Checks if either the enemy current Hp or player current hp is 0
            if(enemy_current_health == 0 || player_current_health == 0 ){
                console.clear()
                console.log(`Enemies Defeated: ${game_level}`)
                console.log("\n\n")
                console.log(`${enemy_name}`)
                health_bar(10, enemy_current_health, enemy_health)
                console.log("\n\n")

                console.log(`${player_name} the ${player_Class}`)
                health_bar(10, player_current_health, player_Health)
                console.log("______________________________________________________")

                // If player current HP is not 0, it means at this point, enemy has been defeated
                if(player_current_health>0){
                    game = true
                    battle = false

                    if(enemy_name == enemy_wraith){
                        let estus_add_before = estus_add
                        estus_add = estus_add + 5
                        console.log(`You have slain the Noxious Wraith. Your Estus heal has been empowered (${estus_add_before} -> ${estus_add} )!`)
                        console.log("You've also gained 2 Estus Charges!")
                        estus_flask_charges+=2
                        game_level++
                    }
                    
                    else{

                        console.log("\n\nVictory! Estus has been refilled by 1 charge!")
                        estus_flask_charges++
                        game_level++
                    }
                
                    
                }

                // If enemy current hp is not 0, enemy has obviously killed the player, thus stopping the battle loop
                // and then showing the health bars for the last time
                else if(enemy_current_health>0){
                    game = false
                    battle = false
                

                    console.clear()
                    console.log(`Enemies Defeated: ${game_level}`)
                    console.log("\n\n")
                    console.log(`${enemy_name}`)
                    health_bar(10, enemy_current_health, enemy_health)
                    console.log("\n\n")

                    console.log(`${player_name} the ${player_Class}`)
                    health_bar(10, player_current_health, player_Health)
                    console.log("______________________________________________________")
                    press_Enter = readline.question("")
                    console.clear()

                    console.log("\n\n\n\t\t\tYou Died\t\t\t\t")
                        
                }
            }
        }

        press_Enter = readline.question()
    }

