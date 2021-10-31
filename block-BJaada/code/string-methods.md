Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.charAt(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
   - Return: A new string representing the calling string converted to upper case.
   - Example:
   ```js
   let name = 'Arya Stark';
     name.toUpperCase();//'ARYA STARK'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase();//'A QUICK BROWN FOX JUMPED OVER A LAZY DOG'
     let houseName = 'Starks';
     houseName.toUpperCase()//`STARKS'
     ```
    - `toUpperCase` method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

3. `toLowerCase`
- Return: A new string representing the calling string converted to lower case.
   - Example:
   ```js
   let name = 'Arya Stark';
     name.toUpperCase();//'arya Stark'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.toUpperCase();//'a quick brown fox jumped over a lazy dog''
     let houseName = 'Starks';
     houseName.toUpperCase()//`starks'
     ```
    - `toLowerCase` method returns the calling string value converted to toLowerCase (the value will be converted to a string if it isn't one).
4. `trim`
- Return: A new string representing str stripped of whitespace from both its beginning and end.
- Example:
```js
let name = ` hello         `
name.trim();//`hello`

const people="       John Stark     "
people.trim();//'John Stark'

var sentance = "   Its my birthday  "
sentance.trim();//'Its my birthday'
```
- `trim` method removes whitespace from both ends of a string.
5. `trimEnd`
- Return: A new string representing str stripped of whitespace from its end (right side).
- Example:
```js
let name = ` hello         `
name.trimEnd();//' hello'

const people="       John Stark     "
people.trimEnd();//'       John Stark'

var sentance = "   Its my birthday  "
sentance.trimEnd();//'   Its my birthday'
```
- `trimEnd()` method removes whitespace from the end of a string. trimRight() is an alias of this method.

6. `trimStart`
- Return: A new string representing str stripped of whitespace from its beginning (left side).
- Example: 
```js
let name = ` hello         `
name.trimStart();//'hello         '

const people="       John Stark     "
people.trimStart();//'John Stark     '

var sentance = "   Its my birthday  "
sentance.trimStart();//'Its my birthday  '
```
- `trimStart`  method removes whitespace from the beginning of a string. trimLeft() is an alias of this method.

7. `concat`

- Return: A new string containing the combined text of the strings provided.
- Example:
```js
let product=[`tv`,`radio`,`telephone`]
let otherProduct=[`Phone`,`Earphone`,`Airpods`]
product.concat(otherProduct);//(6) ['tv', 'radio', 'telephone', 'Phone', 'Earphone', 'Airpods']

let firstName= "Upendra";
let lastName= "Rajput";
firstName.concat(" ",lastName)//'Upendra Rajput'

product.concat(otherProduct,firstName,lastName)//(8) ['tv', 'radio', 'telephone', 'Phone', 'Earphone', 'Airpods', 'Upendra', 'Rajput']
```
`concat`method concatenates the string arguments to the calling string and returns a new string.

8. `endsWith`
- Parameter: searchString
The characters to be searched for at the end of value.

length Optional
If provided, it is used as the length of varible. Defaults to varible.length.
- Return: true if the given characters are found at the end of the string; otherwise, false.
```js
   let name = 'Arya Stark';
     name.endsWith(`Stark`);//true
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.endsWith(`!`);// false
     let houseName = 'Starks';
     houseName.endsWith(`s`)//true
     ```
     `endsWith` method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

9. `includes`
- Parameter: searchString
A string to be searched

position Optional
The position within the string at which to begin searching for searchString. (Defaults to 0.)
- Example:
```js
 let name = 'Arya Stark';
     name.include(`r`);//true
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.include(`!`);// false
     let houseName = 'Starks';
     houseName.include(`s`)//true
```
   `includes`method performs a case-sensitive search to determine whether one string may be found within another string, returning true or false as appropriate.

10. `indexOf`
- Parameters: searchValue
The string value to search for.
- Return: The index of the first occurrence of searchValue, or -1 if not found.
- Example:
```js
   let name = 'Arya Stark';
     name.indexOf(`k`);//9
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.indexOf(`!`);// -1
     sentance.indexOf(`lazy`);//32
     let houseName = 'Starks';
     houseName.indexOf(`s`)//5
    ```
    - `indexOf` method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.
11. `lastIndexOf`
- Parameters: searchElement
Element to locate in the array.
- Return: The last index of the element in the array; -1 if not found.
  - Example:
```js
     let name = 'Arya Stark';
     name.lastIndexOf(`k`);//9
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.lastIndexOf(`!`);// -1
     sentance.ilastIndexOf(`lazy`);//32
     let houseName = 'Starks';
     houseName.lastIndexOf(`s`)//5
     ```
     - `lastIndexOf` method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
12. `padEnd`
- Parametre:  If the value is lower than length, the current string will be returned as-is.
- return: A String of the specified targetLength with the padString applied at the end of the current varible.
- Example:
```js
   let name = 'Arya Stark';
     name.padEnd(15);//'Arya Stark     '
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padEnd(100);// 'A quick brown fox jumped over a lazy dog                                                            '
     let houseName = 'Starks';
     houseName.padEnd(25,`.`)//'Starks...................'
     ```
     - `padEnd` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
13. `padStart`
- Parametre:  If the value is lower than length, the current string will be returned as-is.
- return: A String of the specified targetLength with the padString applied at the start of the current varible.
- Example:
```js
   let name = 'Arya Stark';
     name.padStart(15);//'     Arya Stark'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.padStart(100);// '                                                            A quick brown fox jumped over a lazy dog'
     let houseName = 'Starks';
     houseName.padStart(25,`0`)//'0000000000000000000Starks'
     ```
    - `padStart` method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the start of the current string.
14. `repeat`
- parameter: default to 0- (number data type)
- return: charater is repeat to how much index is.
- Example:
```js
   let name = 'Arya Stark';
     name.repeat(5);//'Arya StarkArya StarkArya StarkArya StarkArya Stark'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.repeat(3);// `A quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dogA quick brown fox jumped over a lazy dog`
     let houseName = 'Starks';
     houseName.repeat(3)//`StarksStarksStarks`
     ```
    - `repeat` CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

15. `replace`
- Parameter: The match or matches are replaced with newSubstr or the value returned by the specified replacerFunction.
- Return: A new string, with some or all matches of a pattern replaced by a replacement.
- Example:

``js
   let name = 'Arya Stark';
     name.replace(`Arya`,`John`);//'John Stark'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.replace(`lazy`,`cool`);// 'A quick brown fox jumped over a cool dog'
     let houseName = 'Starks';
     houseName.replace(`s`,``)//'Stark'
     ```
     replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. If pattern is a string, only the first occurrence will be replaced.

16. `slice`
- Parameter: 
beginIndex
The zero-based index at which to begin extraction.replacerFunction.
endIndex Optional
The zero-based index before which to end extraction. The character at this index will not be included.
- Return: A new string containing the extracted section of the string.
- Example:

``js
   let name = 'Arya Stark';
     name.slice(0,4);//'Arya s'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.slice(0,15);// 'A quick brown f'
     let houseName = 'Starks';
     houseName.slice(2, 6)//'arks'
     ```
     `slice` method extracts a section of a string and returns it as a new string, without modifying the original string.
17. `split`
- Parameter: The pattern describing where each split should occur.  The separator can be a simple string or it.
- Return: An Array of strings, split at each point where the separator occurs in the given string.
- Example:
```js
let name = 'Arya Stark';
     name.split(` `);//(2) ['Arya', 'Stark']
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.split(" ");// (9) ['A', 'quick', 'brown', 'fox', 'jumped', 'over', 'a', 'lazy', 'dog']
     let houseName = 'Starks';
     houseName.split(" ")//['Starks']
     ```
The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.


18. `substring`
- Parameter: indexStart
The index of the first character to include in the returned substring.

indexEnd Optional
The index of the first character to exclude from the returned substring.

- Return: A new string containing the specified part of the given string.
- Example:
``js
   let name = 'Arya Stark';
     name.substring(0,6);//'Arya s'
    let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance.substring(15, 0);// 'A quick brown f'
     let houseName = 'Starks';
     houseName.substring(6, 2)//'arks'
     ```
      `substring` method returns the part of the string between the start and end indexes, or to the end of the string.