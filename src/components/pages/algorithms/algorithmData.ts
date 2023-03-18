const algorithmData = [
	{
		name: "Multiply",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/50654ddff44f800200000004",
		language: "javascript",
		explanation: "Given two integers, multiply them and return the result",
		code: `function multiply(a, b) {
            var z = a * b;
            return z; 
        }`,
	},
	{
		name: "Reversed Strings",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5168bb5dfe9a00b126000018",
		language: "javascript",
		explanation: "Given a string, return it reversed.",
		code: `function solution(str){
//   split the string into an array, and use 
the reverse method to completely reverse the 
array, and then use the 
join method to turn it back into a string.
return str.split("").reverse().join("");
}`,
	},
	{
		name: "Sum Arrays",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/53dc54212259ed3d4f00071c",
		language: "javascript",
		explanation:
			"A function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.",
		code: `function sum (numbers) {
return numbers.reduce((p, c) => p + c, 0);
}`,
	},
	{
		name: "String Repeat",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/57a0e5c372292dd76d000d7e",
		language: "javascript",
		explanation: "Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.",
		code: `function repeatStr (n, s) {
	// n * s, then concat/join to make it a 
	// single string which is returned
	let newString = "";
	for(i = 0; i < n; i++){
	newString += s;
	};
	return newString;
			}`,
	},
	{
		name: "Is he going to survive?",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/59ca8246d751df55cc00014c",
		language: "javascript",
		explanation:
			"A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with by powerful dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's going to grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise",
		code: `function hero(bullets, dragons){
			return dragons * 2 <= bullets;
		}`,
	},
	{
		name: "Are you Playing Banjo?",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/53af2b8861023f1d88000832",
		language: "javascript",
		explanation: `Create a function which answers the question "Are you playing banjo?".
			If your name starts with the letter "R" or lower case "r", you are playing banjo!			
			The function takes a name as its only argument, and returns one of the following strings:

			name + " plays banjo"
			name + "does not play banjo"`,
		code: `function areYouPlayingBanjo(name) {
  //   toLowerCase to make all names lowercase, ignoring capital letters. 
  //   charAt is fed an index point in the string "array" and compares it to the value
if(name.toLowerCase().charAt(0) === "r"){
    return name + " plays banjo"
} 
return name + " does not play banjo";
}`,
	},
	{
		name: "Even or Odd",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/53da3dbb4a5168369a0000fe",
		language: "javascript",
		explanation: `Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.`,
		code: `function even_or_odd(number) {
		if(number % 2 === 0){
			return "Even";
		}else{
			return "Odd"
		}
	}`,
	},
	{
		name: "Keep Hydrated",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/582cb0224e56e068d800003c",
		language: "javascript",
		explanation: `Nathan loves cycling.

		Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
		
		You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.`,
		code: `function litres(time) {
 		return Math.floor(time * .5);
		}`,
	},
	{
		name: "Are they the 'Same'?",
		difficulty: 6,
		source: "Codewars",
		url: "https://www.codewars.com/kata/550498447451fbbd7600041c",
		language: "javascript",
		explanation: `Given two arrays, write a function that checks whether the two arrays have the 'same' elements, with the same multiplicities.`,
		code: `function comp(array1, array2){
		var isSame = true;
		
		if (array1 == null || 
			array2 == null || 
			array1.length !== array2.length){
			return false;
		}
		array1.map((val, index) => {
			let array2Index = array2.indexOf(val * val);
				if(array2Index == -1) {
				isSame = false;
				} else {
				array2[array2Index] = -1;
				}                
			return val;
			});
		return isSame;`,
	},
	{
		name: "Simple Multiplication",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/583710ccaa6717322c000105",
		language: "javascript",
		explanation: `If a given number is even, return it multiplied by eight. If it is odd, multiply it by nine.`,
		code: `function simpleMultiplication(number) {
		//   IF STATEMENT
		//   if(number % 2 == 0 ){
		//     return number * 8;
		//   } else {
		//     return number * 9;
		//   }
		//  TERENARY OPERATOR   
return (number % 2 == 0 ? number * 8 : number * 9);
}`,
	},
	{
		name: "Invert Values",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad",
		language: "javascript",
		explanation: `Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives`,
		code: `function invert(array) {
	//   multiplying a number by a negative turns 
	//   it into the inverse of itself. 
return array.map(a=> -(a));
			}`,
	},
	{
		name: "Count by X",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5513795bd3fafb56c200049e",
		language: "javascript",
		explanation: `Create a function with two arguments that will return an array of the first n multiples of x.

		Assume both the given number and the number of times to count will be positive numbers greater than 0.
		
		Return the results as an array.`,
		code: `function countBy(x, n) {
	let z = [];
		for (i = 1; i <= n; ++i){
			z.push(x*i)
		}
	return z;
	}`,
	},
	{
		name: "Grade Book",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/55cbd4ba903825f7970000f5",
		language: "javascript",
		explanation: `Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

		Numerical Score	Letter Grade
		90 <= score <= 100	'A'
		80 <= score < 90	'B'
		70 <= score < 80	'C'
		60 <= score < 70	'D'
		0 <= score < 60	'F'
		Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.`,
		code: `function getGrade (s1, s2, s3) {
			let score = (s1 + s2 + s3) / 3;
	if (score <= 100 && score >= 90){
				return "A";
	} else if(score < 90 && score >= 80){
				return "B";
	}else if(score < 80 && score >= 70){
				return "C";
	}else if(score < 70 && score >= 60){
				return "D";
	}else {
				return "F"
	}
			
}`,
	},
	{
		name: "Make Uppercase",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/57a0556c7cb1f31ab3000ad7",
		language: "javascript",
		explanation: `Write a function which converts the input string to uppercase.`,
		code: `function makeUpperCase(str) {
	return str.toUpperCase(); 
	}`,
	},
	{
		name: "Lost Without a Map - Beginner",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/57f781872e3d8ca2a000007e",
		language: "javascript",
		explanation: `Given an array of integers, return a new array with each value doubled.

		For example:
		
		[1, 2, 3] --> [2, 4, 6]`,
		code: `function maps(x){
	return x.map((x) => x * 2);
}`,
	},
	{
		name: "Reverse Words",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5259b20d6021e9e14c0010d4",
		language: "javascript",
		explanation: `Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.`,
		code: `function reverseWords(str) {
	let wordArray = str.split(" ")
	.map(word => word.split("").reverse().join(""));
	return wordArray.join(" ");
}`,
	},
	{
		name: "Reverse Words",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5259b20d6021e9e14c0010d4",
		language: "javascript",
		explanation: `Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.`,
		code: `function reverseWords(str) {
	let wordArray = str.split(" ")
	.map(word => word.split("").reverse().join(""));
	return wordArray.join(" ");
}`,
	},
	{
		name: "Return Negative",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/55685cd7ad70877c23000102",
		language: "javascript",
		explanation: `In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?`,
		code: `function makeNegative(num) {
let negative = Math.sign(num);
if(negative === 1){
	return -(num);
}else{
	return num;
	}
}`,
	},
	{
		name: "You're a Square!",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/54c27a33fb7da0db0100040e",
		language: "javascript",
		explanation: `Given an integral number, determine if it's a square number.`,
		code: `var isSquare = function(n){
if(Number.isInteger(Math.sqrt(n))){
	return true;
}else{
	return false;
	}
}`,
	},
	{
		name: "Highest and Lowest",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/554b4ac871d6813a03000035",
		language: "javascript",
		explanation: `Given a string of space separated numbers, return the highest and lowest number`,
		code: `function highAndLow(numbers){
numbers = numbers.split(" ");
return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers);
}`,
	},
	{
		name: "How good are you really?",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/554b4ac871d6813a03000035",
		language: "javascript",
		explanation: `There was a test in your class and you passed it. Congratulations!
		But you're an ambitious person. You want to know if you're better than the average student in your class.
		
		You receive an array with your peers' test scores. Now calculate the average and compare your score!
		
		Return True if you're better, else False.`,
		code: `function betterThanAverage(classPoints, yourPoints) {
let average = classPoints.reduce((p, c) => p + c, 0) / classPoints.length;
if(average <= yourPoints){
	return true;
} else {
	return false;
	}
}`,
	},
	{
		name: "Two to One",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5656b6906de340bd1b0000ac",
		language: "javascript",
		explanation: `Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.`,
		code: `function longest(s1, s2) {
let s3 = s1.concat(s2).split("").sort()
.filter(function(item, pos, self){
return self.indexOf(item) == pos;
}).join("");
  return s3;
}`,
	},
	{
		name: "Disemvowel Trolls",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/5656b6906de340bd1b0000ac",
		language: "javascript",
		explanation: `Trolls are attacking your comment section!

		A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
		
		Your task is to write a function that takes a string and return a new string with all vowels removed.
		Note: for this, y isn't considered a vowel`,
		code: `function disemvowel(str) {
return str.replace(/[aeiou]/gi,"");
}`,
	},
	{
		name: "Digit * Digit",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/546e2562b03326a88e000020",
		language: "javascript",
		explanation: `Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

		For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)`,
		code: `function squareDigits(num){
return Number(('' + num).split('')
.map(function(val){ return val* val}).join(''));
}`,
	},
	{
		name: "Ones and Zeros",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/578553c3a1b8d5c40300037c",
		language: "javascript",
		explanation: `Given an array of ones and zeroes, convert the equivalent binary value to an integer.

		Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.`,
		code: `const binaryArrayToNumber = arr => {
let total = 0;
let counter = 0;
for( i = arr.length -1; i >= 0; i--){
  if(arr[i] == 1){
	total += Math.pow(2, counter);
  }
  counter++;
}
return total;  
};`,
	},
	{
		name: "Abbreviate a Two Word Name",
		difficulty: 8,
		source: "Codewars",
		url: "https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3",
		language: "javascript",
		explanation: `Write a function to convert a name into initials. This function strictly takes two words with one space in between them.

		The output should be two capital letters with a dot separating them.`,
		code: `function abbrevName(name) {
let initials = '';
name.split(' ').map((character, index) => {
  initials += character.charAt(0);
    if (index == 0) {
     initials += '.';
	}
});
return initials.toUpperCase();
}`,
	},
	{
		name: "Is this a triangle?",
		difficulty: 7,
		source: "Codewars",
		url: "https://www.codewars.com/kata/56606694ec01347ce800001b",
		language: "javascript",
		explanation: `Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

		(In this case, all triangles must have surface greater than 0 to be accepted).`,
		code: `function isTriangle(a,b,c) {
if (a + b > c && b + c > a && a + c > b){
 return true;
} else {
 return false;
}}`,
	},
	{
		name: "RBG to Hex Conversion",
		difficulty: 5,
		source: "Codewars",
		url: "https://www.codewars.com/kata/513e08acc600c94f01000001",
		language: "javascript",
		explanation: `The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

		Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.`,
		code: `function rgb(r, g, b){
 function toHex(i){
  if(i>=255){
   return 'FF'
  }
  if(i<=0){
   return '00'
  }
  let value = i.toString(16).padStart(2,"0");

  return value.toUpperCase();
  };
return toHex(r) + toHex(g) + toHex(b); 
};`,
	},
];

export default algorithmData;
