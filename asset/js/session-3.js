// JavaScript მეთოდების კოლექცია: სტრინგები, მასივები და ობიექტები


// === სტრინგის მეთოდები (String Methods) ===

// 1. .length – აბრუნებს სტრინგის სიგრძეს (სიმბოლოების რაოდენობას).
// მაგალითი: გამოთვალეთ სიტყვის სიგრძე.
let text = "JavaScript";
console.log(text.length); // შედეგი: 10

// 2. .toUpperCase() – გარდაქმნის სტრინგს დიდ ასოებად.
// მაგალითი: გარდაქმნეთ ტექსტის რეგისტრი.
let lowerText = "hello";
console.log(lowerText.toUpperCase()); // შედეგი: HELLO

// 3. .toLowerCase() – გარდაქმნის სტრინგს პატარა ასოებად.
// მაგალითი: გარდაქმნეთ ტექსტის რეგისტრი.
let upperText = "WORLD";
console.log(upperText.toLowerCase()); // შედეგი: world

// 4. .indexOf(substring) – აბრუნებს substring-ის პირველი გამოჩენის ინდექსს, ან -1 თუ არ მოიძებნა.
// მაგალითი: იპოვეთ 'a'-ს პოზიცია.
let sentence = "JavaScript is awesome";
console.log(sentence.indexOf("a")); // შედეგი: 1 (პირველი 'a' "Java"-ში)

// 5. .lastIndexOf(substring) – აბრუნებს substring-ის ბოლო გამოჩენის ინდექსს.
// მაგალითი: იპოვეთ 'a'-ს ბოლო პოზიცია.
console.log(sentence.lastIndexOf("a")); // შედეგი: 14 (ბოლო 'a' "awesome"-ში)

// 6. .slice(start, end) – ამოჭრის სტრინგის ნაწილს start-დან end-მდე (end არ შედის).
// მაგალითი: ამოჭერით სახელი.
let fullName = "John Doe";
console.log(fullName.slice(0, 4)); // შედეგი: John

// 7. .substring(start, end) – მსგავსია slice-ის, მაგრამ არ უჭერს მხარს უარყოფით ინდექსებს.
// მაგალითი: ამოჭერით გვარი.
console.log(fullName.substring(5)); // შედეგი: Doe

// 8. .substr(start, length) – ამოჭრის length რაოდენობის სიმბოლოს start-დან (deprecated, მაგრამ ჯერ კიდევ მუშაობს).
// მაგალითი: ამოჭერით 4 სიმბოლო.
console.log(fullName.substr(0, 4)); // შედეგი: John

// 9. .replace(old, new) – ცვლის old-ს new-ით (მხოლოდ პირველ გამოჩენას, თუ არა RegExp).
// მაგალითი: შეცვალეთ სიტყვა.
let errorText = "I love Java";
console.log(errorText.replace("Java", "JavaScript")); // შედეგი: I love JavaScript

// 10. .split(separator) – ყოფს სტრინგს მასივად separator-ის მიხედვით.
// მაგალითი: გაყავით ხილები.
let fruits = "apple,banana,orange";
let fruitArray = fruits.split(",");
console.log(fruitArray); // შედეგი: ["apple", "banana", "orange"]

// 11. .trim() – შლის ზედმეტ სივრცეებს დასაწყისიდან და ბოლოდან.
// მაგალითი: გაასუფთავეთ ტექტი.
let messyText = "   Hello   ";
console.log(messyText.trim()); // შედეგი: Hello

// 12. .charAt(index) – აბრუნებს სიმბოლოს მითითებულ ინდექსზე.
// მაგალითი: მიიღეთ პირველი სიმბოლო.
let word = "Grok";
console.log(word.charAt(0)); // შედეგი: G

// 13. .charCodeAt(index) – აბრუნებს სიმბოლოს Unicode კოდს მითითებულ ინდექსზე.
// მაგალითი: მიიღეთ ASCII კოდი.
console.log(word.charCodeAt(0)); // შედეგი: 71 (G-ის კოდი)

// === მასივის მეთოდები (Array Methods) ===

// 1. .push(element) – ამატებს ელემენტს მასივის ბოლოში.
// მაგალითი: დაამატეთ რიცხვი.
let stack = [1, 2];
stack.push(3);
console.log(stack); // შედეგი: [1, 2, 3]

// 2. .pop() – შლის და აბრუნებს ბოლო ელემენტს.
// მაგალითი: წაშალეთ ბოლო ელემენტი.
stack.pop();
console.log(stack); // შედეგი: [1, 2]

// 3. .shift() – შლის და აბრუნებს პირველ ელემენტს.
// მაგალითი: წაშალეთ პირველი ელემენტი.
let queue = [1, 2, 3];
queue.shift();
console.log(queue); // შედეგი: [2, 3]

// 4. .unshift(element) – ამატებს ელემენტს მასივის დასაწყისში.
// მაგალითი: დაამატეთ დასაწყისში.
queue.unshift(0);
console.log(queue); // შედეგი: [0, 2, 3]

// 5. .splice(index, howMany, items...) – შლის/ამატებს ელემენტებს მითითებულ ადგილას.
// მაგალითი: წაშალეთ 2 ელემენტი ინდექსიდან 1.
let arr = [1, 2, 3, 4];
arr.splice(1, 2);
console.log(arr); // შედეგი: [1, 4]

// 6. .slice(start, end) – აბრუნებს ახალ მასივს start-დან end-მდე (end არ შედის).
// მაგალითი: ამოჭერით ნაწილი.
let original = [1, 2, 3, 4];
console.log(original.slice(1, 3)); // შედეგი: [2, 3]

// 7. .concat(array2) – აერთიანებს ორ მასივს ახალ მასივში.
// მაგალითი: გააერთიანეთ მასივები.
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // შედეგი: [1, 2, 3, 4]

// 8. .join(separator) – გარდაქმნის მასივს სტრინგად separator-ით.
// მაგალითი: გააერთიანეთ სიტყვები.
let words = ["Hello", "World"];
console.log(words.join(" ")); // შედეგი: Hello World

// 9. .indexOf(value) – აბრუნებს value-ის ინდექსს, ან -1 თუ არ მოიძებნა.
// მაგალითი: იპოვეთ რიცხვი.
let nums = [1, 2, 3];
console.log(nums.indexOf(2)); // შედეგი: 1

// 10. .forEach(callback) – გაშლის თითოეულ ელემენტს callback ფუნქციით (არ აბრუნებს ახალ მასივს).
// მაგალითი: გაამრავლეთ და დაბეჭდეთ.
nums.forEach(num => console.log(num * 2)); // შედეგი: 2, 4, 6 (კონსოლში)

// 11. .map(callback) – ქმნის ახალ მასივს callback-ის გამოყენებით თითოეულ ელემენტზე.
// მაგალითი: გაამრავლეთ თითოეული 2-ზე.
let doubled = nums.map(num => num * 2);
console.log(doubled); // შედეგი: [2, 4, 6]

// 12. .filter(callback) – ქმნის ახალ მასივს callback-ის მიხედვით გაფილტრული ელემენტებით.
// მაგალითი: იპოვეთ ლუწი რიცხვები.
let evens = [1, 2, 3, 4].filter(n => n % 2 === 0);
console.log(evens); // შედეგი: [2, 4]

// 13. .reduce(accumulator, current, callback) – აკუმულირებს მასივს ერთ მნიშვნელობად.
// მაგალითი: გამოთვალეთ ჯამი.
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // შედეგი: 6

// 14. .sort(compareFunction) – ალაგებს მასივს (ნაგულისხმევად როგორც სტრინგები).
// მაგალითი: დაალაგეთ რიცხვები.
let unsorted = [3, 1, 4, 2];
unsorted.sort((a, b) => a - b); // ზრდადობით
console.log(unsorted); // შედეგი: [1, 2, 3, 4]







// === ობიექტის მეთოდები (Object Methods) ===

// 1. Object.keys(obj) – აბრუნებს ობიექტის გასაღებების (keys) მასივს.
// მაგალითი: მიიღეთ გასაღებები.
let person = { name: "Alice", age: 30 };
console.log(Object.keys(person)); // შედეგი: ["name", "age"]

// 2. Object.values(obj) – აბრუნებს ობიექტის მნიშვნელობების (values) მასივს.
// მაგალითი: მიიღეთ მნიშვნელობები.
console.log(Object.values(person)); // შედეგი: ["Alice", 30]

// 3. Object.entries(obj) – აბრუნებს [key, value] წყვილების მასივს.
// მაგალითი: მიიღეთ წყვილები.
console.log(Object.entries(person)); // შედეგი: [["name", "Alice"], ["age", 30]]

// 4. for...in loop – გაშლის ობიექტის თვისებებს.
// მაგალითი: დაბეჭდეთ თვისებები.
for (let key in person) {
  console.log(key + ": " + person[key]); // შედეგი: name: Alice, age: 30
}

// დამატებითი ოპერაციები ობიექტებზე (არა მეთოდები, მაგრამ სასარგებლო):
// თვისების დამატება:
person.job = "Developer";
console.log(person); // შედეგი: { name: "Alice", age: 30, job: "Developer" }

// თვისების წაშლა:
delete person.age;
console.log(person); // შედეგი: { name: "Alice", job: "Developer" }




// === დამატებითი მაგალითები და ამოცანები ===

// პალინდრომის შემოწმება სტრინგზე:
let palindrome = "radar";
let reversed = palindrome.split("").reverse().join("");
console.log(palindrome === reversed); // შედეგი: true

// მაქსიმალური რიცხვი მასივში:
let maxNums = [1, 5, 3];
console.log(Math.max(...maxNums)); // შედეგი: 5

// დუბლიკატების მოშორება მასივიდან:
let duplicates = [1, 2, 2, 3];
let unique = [...new Set(duplicates)];
console.log(unique); // შედეგი: [1, 2, 3]

// ობიექტის თვისებების რაოდენობა:
console.log(Object.keys(person).length); // შედეგი: 2 (name და job)

// მასივი ობიექტებით და ფილტრაცია:
let people = [
    {name: "Bob", age: 25}, 
    {name: "Alice", age: 30}
];
let adults = people.filter(p => p.age > 28);
console.log(adults); // შედეგი: [{name: "Alice", age: 30}]


