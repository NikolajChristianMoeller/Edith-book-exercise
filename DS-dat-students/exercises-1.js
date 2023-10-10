// ------------------------------------ PREPERATION ------------------------------------ //

/*
 * Note: In the following exercises we will primarily work with array methods.
 * We wont care about duplicates (words appearing more than once) for now 😎
 */

/*
 * 0. Make a function which reads in the json-file you made runing array-ex.js and retuns it. Save it in a variable afterwards.
 *
 * 
 * 
 *    The function should have one parameter, such that we can write in a specific file ourselfs.
 *    Use JSON.parse(), so that we can process/work with the data as a JS array of strings.
 *    console.log() the variable to ensure that you have fetched the needed data.
 *    Comment out the console.log() and as the last statement in the function, return the variable with the data.
 *
 *    Remember:
 *    1) When we read data or write data we use async/await
 */

// write your function here

async function readJson(book) {

const res = res.JSON.parse(book);
const data = await res.JSON;
console.log(book);
return data;
}

readJson("DS-dat-students/oddity-words.json")


/*
 * Invoke the above function you just made and write in as an argument the specific json-file. Assign it a variable.
 * You will use this specific line of code for each of the following exercises, but comment it out here.
 */

// ------------------------------------ EXERCISES PART 1 ------------------------------------ //

/*
 * 1. Make a function which filter all the words from the book that starts with a specific letter, let say 'f'.
 *    You will have to use one array method and one in-built string method.
 *    console.log() the filtered words or the number of words that starts with the given letter.
 *
 *
 *    Optional: If you feel like it give the function a parameter, such that we can specify the letter ourselfs when invoking the function.
 *              You can also add to the function that all words starting with the letter in uppercase or lower case should be included.
 */

// write function here, remember that the first line in the function should be the invoked version of the function from exercise 0.

// invoke/test the function here (remember to comment out afterwords)

/*
 * 2. Make a function which map each of the words in the book to its length.
 *    Hence, your function should use map in a way such that instead of the word itself we get the amount of letters for each word.
 *
 *    Optional: How many letters is the longest word in the book?
 *              Look up the sort() method of array to answer this. You could use a combination of two array methods of a compare function.
 *              How many words is this long?
 *              You will have to use an array function we have worked with before.
 */

// write function here, remember that the first line in the function should be the invoked version of the function from exercise 0.

// invoke/test the function here (remember to comment out afterwords)

/*
 * 3. Make a function that reduce all words to the total number of characters in the book.
 *    Hence, you will have to use .reduce() in way such that the accumulated value is updated with length value of each word.
 */

// write function here, remember that the first line in the function should be the invoked version of the function from exercise 0.

// invoke/test the function here (remember to comment out afterwords)
