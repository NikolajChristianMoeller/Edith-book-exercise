// ------------------------------------ EXERCISE 2 ------------------------------------ //

/*
 * Note: You have now learned about the map and set data structures.
 *       You might realise (or have realised) that most of the answers from exercises-1 is somewhat inaccurate.
 *       First of all, we have not taking into consideration words apperaing more than once, and second,
 *       we have only worked with array, though other data strcuturesmight be better suited for some tasks.
 *
 *       Following exercises are pretty much the same as exercises-1 and we will write pretty much the same code,
 *       but we will implement map and set data strcutures, were they will prove useful.
 *       We will be using the same function as before to read in the json file (from 1. in exercises-1).
 *       If you had trouble writing this, you can use mine.
 */

// Ediths read json file function
async function readInBook(file) {
  const book = await fs.readFile(file);
  const words = JSON.parse(book);
  return words;
}

/*
 * Invoked version of the above function with the returned value assigned to a variable.
 * You will use this specific line of code for each of the following exercises, but comment it out here.
 */

const book = await readInBook("franken-words.json");

/*
 * 1. Make a function which filter all the words from the book that starts with a specific letter, let say 'f'.
 *
 *    First use set (new Set()) to avoid working with duplicates.
 *    Use spread operator or .from() array method to turn the set into an array once again. Look up each option.
 *    We have now avoided working with duplicates. Yay!
 *    Now, similar to exercises-1, you can use filter() array method and a string method, to filter words based on first letter.
 *
 */

// write function here, remember that the first line in the function should be the invoked version of the function from exercise 0, exercises-1 or Ediths function.

// invoke/test the function here (remember to comment out afterwords)

/*
 * 2. Make a function which map each of the words in the book to its length.
 *
 *    Here it would be smart to use a map, where the key is the length of a word and the value an array of words which length matches the key.
 *    First create a map (new Map()), which we will fill with keys and values.
 *    Then use map() to go through each word.
 *    In the body of the map() callback function, save the length of the word in a variable, call it word.
 *    Now use the get() method of map to return the value (array) associated with the length, if the length is a key in the map. If not, we will just like an empty array. Assign this in a new variable, call it wordsArray.
 *    Then push the word to wordsArray.
 *    Lastly, set the map with the word as key and wordArray as value.
 *    console.log() to see the content of the map.
 *
 *    Optional: The map now contains multiple duplicate words in each array. Try and remove the duplicates by using a set.
 *              To make a nicer representation of the maps content, loop over the map, and console.log() the keys and values of teh map with some describing text.
 *              You could also try and sort the keys of the map such that the words with the shortest length is printed out first.
 *              For this you might need  spread operator, .sort() and a compare function.
 */

// write function here, remember that the first line in the function should be the invoked version of the function from exercise 0.

// invoke/test the function here (remember to comment out afterwords)
