const algorithmData = [
	{
		name: "Multiply",
		difficulty: "8",
		language: "javascript",
		explanation: "Given two integers, multiply them and return the result",
		code: `function multiply(a, b) {
            var z = a * b;
            return z; 
        }`,
	},
	{
		name: "Reversed Strings",
		difficulty: "8",
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
		difficulty: "8",
		language: "javascript",
		explanation:
			"A function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.",
		code: `function sum (numbers) {
return numbers.reduce((p, c) => p + c, 0);
}`,
	},
	{
		name: "String Repeat",
		difficulty: "8",
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
		difficulty: "8",
		language: "javascript",
		explanation:
			"A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with by powerful dragons! Each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's going to grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive? Return True if yes, False otherwise",
		code: `function hero(bullets, dragons){
			return dragons * 2 <= bullets;
		}`,
	},
	{
		name: "Are you Playing Banjo?",
		difficulty: "8",
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
		difficulty: "8",
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
		difficulty: "8",
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
		difficulty: "6",
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
		return isSame;
		
		
		||| Alternative |||
		
		array1.sort((a, b) => a - b);  
		array2.sort((a, b) => a - b);
		array1.map((val, index) => {
			if(val * val !== array2[index]){
				isSame = false;
			}   
			return val;
		});
		return isSame;  
		}`,
	},
];

export default algorithmData;
