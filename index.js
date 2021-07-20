import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */

let cup_2014 = fifaData.filter(function(e) {
    return e.Year == 2014 && e.Stage == "Final" ;
},0);
// (a)
console.log(cup_2014[0]["Home Team Name"]);
// (b)
console.log(cup_2014[0]["Away Team Name"]);
// (c)
console.log(cup_2014[0]["Away Team Goals"]);
// (e)
function getWinner(array) {
    if (array[0]["Home Team Goals"] > array[0]["Away Team Goals"]) {
        return array[0]["Home Team Name"];
    } else {
        return array[0]["Away Team Name"];
    }
};
console.log(getWinner(cup_2014));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {

    let finals = array.filter(function(e) {
        return e.Stage == "Final" ;
    });
    return finals;

};
console.log(getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(callback) {

    let years = callback.map(function(e) {
        return e.Year;
    });
    return years;

};

console.log(getYears(getFinals(fifaData)));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(callback) {

    let homeWins = callback.filter(function(e) {
        return e["Home Team Goals"] > e["Away Team Goals"];
    });
    let names1 = homeWins.map(function(e) {
        return e["Home Team Name"];
    });
    
    let awayWins = callback.filter(function(e) {
        return e["Away Team Goals"] > e["Home Team Goals"];
    });
    let names2 = awayWins.map(function(e) {
     return e["Away Team Name"];
 });
 
    let winners = names1.concat(names2);
 
    return winners;
 
 
 };
 
 console.log(getWinners(getFinals(fifaData)));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(winners, years) {

    let messages = [];

    for (let i in winners) {
        messages.push(`In ${years[i]} ${winners[i]} won the World Cup.`);
    }

    return messages;

};
console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(array) {

    let scores = array.map(function(e) {
        return e["Home Team Goals"] + e["Away Team Goals"];
    });

    let average = scores.reduce(function(accumulator, currentValue ) {
        return (accumulator + currentValue) / scores.length;
    });

    return average;

};

console.log(getAverageGoals(fifaData));



/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
