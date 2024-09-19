/* Used this file to write code before posting in file */


const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
   * Use .reduce to return the total sum of each number to the 
   * second power (what would PEMDAS say about this?)
   */

const sumSquareAllNums = newNums.reduce((sum, num) => {
    return (sum + num) ** 2
})

console.log(sumSquareAllNums)

// This was the bonus, couldn't figure it out
// Answer should be 2025