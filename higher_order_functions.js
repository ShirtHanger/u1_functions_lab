const nums = [1, 3, 6, 9, 11, 15, 21, 25, 28, 30, 32, 34, 36, 40, 44, 45]

splitPrompts("getSquares")

const getSquares = (nums) => {return nums.map(nums => nums * 2)}

console.log(getSquares(nums))

// Had to understand what .map did with this webpage
// It returns a new array with the math operation
// I can nest a function into it, only functions
// https://www.w3schools.com/jsref/jsref_map.asp
// Jake Pagnotto helped me understand I can get my answers by using arrow functions
// Since the arrow function is TECHNICALLY a variable containing a function

splitPrompts("isDivBy3")

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

splitPrompts("filterOdds")

const filterOdds = nums.filter((num) => {
    return num % 2 !== 0
})

console.log(filterOdds)

// googled .filter
// https://www.w3schools.com/jsref/jsref_filter.asp
// But didn't finish work
// actually learned about filter for day 4 of class
// Learning it and having an example 
// Of this function from a class repo made this signifigantly easier to understand

splitPrompts("filterEvens")

const filterEvens = nums.filter((num) => {
    return num % 2 === 0
})

console.log(filterEvens)

// Just copy-pasted my work on FilterOdds

splitPrompts("filterDivBy4")

const filterDivBy4 = nums.filter((num) => {
    return num % 4 === 0
})

console.log(filterDivBy4)

// Just copy-pasted my work on FilterOdds

splitPrompts("addAllUp")

const addAllUp = nums.reduce((sum, num) => {
    return sum + num
}, 0)

console.log(addAllUp)

// Again, class notes helped out alot.

splitPrompts("multiplyAllNums") 

const multiplyAllNums = nums.reduce((product, num) => {
    return product * num
}, 1)

console.log(multiplyAllNums)

// This would repeatedly print 0 instead of the product, until I replaced
// "}, 0)" with "})", no clue why....
// When I played around with the 0, I noticed 1 returns the correct answer while 2, 3, 4, etc.
// would multiply the answer by that. I think the 0 is added to the final output, but for some reason
// only messes with multiplication
// ..
// Clinquea Stafford figured it out. The 0 is some sort of shadow-arguement. It is where the number
// Starts out as, THEN the value and accumulator are added to it. And anything * 0 is always 0

splitPrompts("BONUS!!!")

// BONUS



// This function is being hoisted to top, splits outputs for easier reading for professors

function splitPrompts(promptName) {
    console.log('===================')
    console.log('prompt -', promptName)
    console.log('===================')
}