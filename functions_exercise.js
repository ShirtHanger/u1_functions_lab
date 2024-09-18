/* 
(1)
Write a function called logIn that takes your name as a parameter and console.logs 
'Hello /your name/!' when it is called. 
(/your name/ should be your name written as a literal)
*/

splitPrompts(1)

function logIn(name, isLoggedIn) {
    console.log(`Hello ${name}!`) 
}

logIn('CajunSamursai')

// I was able to figure this out on my own without looking at lesson

/* 
(2)
Take that same function up a notch by creating a new variable called isLoggedIn, 
and have the function measure that variable, and log 'Hello /your name/!' 
when the variable is true, or "please log in" when it is false */

splitPrompts(2)

function validateLogIn(name, isLoggedIn) {
    if (isLoggedIn) {
        console.log(`Hello ${name}!`) 
    } else {
        console.log("Please log in")
    }
    
}

validateLogIn('GarlicZulu', false)

// Same, this was easy for me after the leson

/* 
(3)
We are looking to re-sod our lawn. It has a length of 20' 
and a width of 30', with Sod costing $1.45/sqft. Additionally, 
it will cost $100 to have thew work done. Write a function that finds the area of the lawn, 
the price of the Sod, and what the total cost will be to get the lawn redone. 
If our budget is $700, will it be enough? Log either how much extra we will need, 
or how much we will have left over
 */

splitPrompts(3)


function lawnPrice(length, width, sodRate, workPrice, budget) {

    const area = length*width
    const sodPrice = sodRate * area
    const totalPrice = workPrice + sodPrice

    console.log(`Lawn area: ${area} sqft`)
    console.log(`Sod rate: $${sodRate} per sqft`)
    console.log(`Sod cost: $${sodPrice}`)
    console.log(`Price for installation: $${workPrice}`)
    console.log('-----')
    console.log(`Your budget: ${budget}`)
    console.log('-----')

    if (budget === totalPrice) {
        console.log("You have enough!")
    } else if (budget >= totalPrice) {
        console.log(`You can afford the work with $${budget - totalPrice} to spare!`)
    } else {
        console.log(`You need $${totalPrice - budget} more`)
    }
}

lawnPrice(20, 30, 1.45, 100, 700)

// Spent a VERY long time on this, first trying to 
// understand the question, then trying to make 
// it look nice as an output

/* 
(4)
Write a function that loops over the following array of SEBR 
students and prints out their name, and how many letters their name is
 */

splitPrompts(4)

const students = [
    'Alice',
    'Andy',
    'Andrew',
    'Casey',
    'Damian',
    'Emily',
    'Emilie',
    'Grant',
    'Howie',
    'Isabella',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Oscar',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Umberto',
    'Wade',
    'Zhe'
  ]


  function printStudents(studentArray) {
    for (element of studentArray)
        console.log(`${element} (Length: ${element.length})`)
        // console.log(`Name: ${element}`)
        // console.log(`Length: ${element.length}`)
        console.log('------')
    }
    
printStudents(students)

// Originally, I had the name and length in different logs, but I could not 
// get it to print length for anything but Zhe for some reason






// This function is being hoisted to top, splits outputs for easier reading for professors

function splitPrompts(promptNum) {
    console.log('===================')
    console.log('prompt', promptNum)
    console.log('===================')
}
