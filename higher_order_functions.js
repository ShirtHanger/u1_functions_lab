const nums = [1, 3, 6, 9, 11, 15, 21, 25, 28, 30, 32, 34, 36, 40, 44, 45]

const getSquares = (nums) => {return nums.map(nums => nums * 2)}

console.log(getSquares(nums))

// Had to understand what .map did with this webpage
// It returns a new array with the math operation
// I can nest a function into it, only functions
// https://www.w3schools.com/jsref/jsref_map.asp
// Jake Pagnotto helped me understand I can get my answers by using arrow functions
// Since the arrow function is TECHNICALLY a variable containing a function

const isDivBy3 = (nums) => {return nums.map(nums => {
    if (nums % 3 === 0) {
        return true
    } else {
        return false
    }
})}

console.log(isDivBy3(nums))

// Using previous acquirred knowledge, did this by my self. 
// Figured to nest a conditional within second arrow function

const filterOdds = (nums) => { /**

Use .filter to return an array of all odd numbers
The modulus % operator may be useful * */ }

const filterEvens = (nums) => { /**

Use .filter to return all even numbers
The modulus % operator may be useful * */ }
const filterDivBy4 = (nums) => { /**

Use .filter to return all numbers that are divisible by 4
The modulus % operator may be useful * */ }
const addAllUp = (nums) => { /**

Use .reduce to return the total sum of all numbers */ }
const multiplyAllNums = (nums) => { /**

Use .reduce to return the total product of all numbers */ }
// BONUS