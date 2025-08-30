import greet, {nums} from './someModule.js';

/* ==================================================
   1) ფუნქციების სკოპინგი და კლოუჟერები
   ==================================================*/

// სკოუპის ტიპები JS-ში

// 1) Global Scope

// ცვლადი გამოცხადებულია ყველა ფუნქციის/ბლოკის გარეთ → ყველგან ხელმისაწვდომია.

let a = 10; // global

function test() {
    console.log(a); // ხედავს 10-ს
}
test();
// 2) Function Scope

// var არის function-scoped → ჩანს მთელ ფუნქციაში, თუნდაც ბლოკში გამოცხადდეს.

function demo() {
    if (true) {
        var x = 5;
    }
    console.log(x); // 5 (var მუშაობს ფუნქციის მასშტაბით)
}
demo();

// 3) Block Scope

// let და const არიან block-scoped → ცვლადი ხელმისაწვდომია მხოლოდ { } შიგნით.

if (true) {
    let y = 20;
    const z = 30;
}
// console.log(y); // ReferenceError

// 4) Lexical Scope

// JavaScript იყენებს ლექსიკალურ სკოუპინგს — ეს ნიშნავს, რომ ფუნქცია “ხედავს” ცვლადებს იმ გარემოდან, სადაც დაიწერა, და არა საიდანაც გამოიძახეს.

function outer() {
    let msg = "Hello";
    function inner() {
        console.log(msg); // ხედავს outer-ის ცვლადს
    }
    inner();
}
outer();

//  რისთვის არის მნიშვნელოვანი სკოუპინგი?

// თავიდან გვიცავს ცვლადების კონფლიქტებისგან (ორი ერთნაირი სახელის ცვლადი სხვადასხვა ბლოკში შეიძლება დამოუკიდებლად არსებობდეს).

// საშუალებას გვაძლევს ინკაპსულაცია გავაკეთოთ (private state).

// ------------------ სკოპინგი (var / let / const) ------------------
function scopeExamples() {
    // var არის function-scoped
    if (true) {
        var x = 1;
    }
    console.log('var x:', x); // 1 (x არ არის ბლოკ-ში დაბლოკილი)

    // let და const არიან block-scoped
    if (true) {
        let y = 2;
        const z = 3;
        console.log('inside block y, z:', y, z);
    }
    // console.log(y); // ReferenceError
    // console.log(z); // ReferenceError

    // function scope შეცდომები არ გვაქვს
    function inner() {
        var insideVar = 'i am inside';
    }
    // console.log(insideVar); // ReferenceError
}

scopeExamples();

// ------------------ კლოუჟერი (closure) ------------------
// კლოუჟერი — ფუნქცია რომელიც "ხსნის" გარე სკოპში არსებულ ცვლადს
function makeCounter(initial = 0) {
    let count = initial; // ეს არის დახურული (private) ცვლილება

    return {
        increment() {
            count += 1;
            return count;
        },
        decrement() {
            count -= 1;
            return count;
        },
        get() {
            return count;
        }
    };
}

const counter = makeCounter(10);
console.log('counter.get():', counter.get()); // 10
console.log('counter.increment():', counter.increment()); // 11
console.log('counter.decrement():', counter.decrement()); // 10

// სხვა მაგალითი — ფუნქცია რომელიც გენერირებს ფუნქციას
function greeter(prefix) {
    // `prefix` არის დახურული ცვლადი
    return function (name) {
        return `${prefix}, ${name}!`;
    };
}

const hi = greeter('გამარჯობა');
console.log(hi('მიხეილ'));

/* ==================================================
   2) Spread ოპერატორი და Rest პარამეტრები
   ==================================================*/

// Spread ოპერატორი გამოიყენება arrays-სა და objects-ში
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const combined = [...arr1, ...arr2, 6];
console.log('combined:', combined); // [1,2,3,4,5,6]

// Spread ობიექტებში
const objA = { a: 1, b: 2 };
const objB = { b: 20, c: 3 };
const merged = { ...objA, ...objB };
// თუ key ემთხვევა, ბოლო რჩება (objB.b => 20)
console.log('merged object:', merged);

// Rest პარამეტრები ფუნქციებში
function sum(...nums) { // ყველაფერი გადმოედგება მასივად nums-ში
    return nums.reduce((acc, n) => acc + n, 0);
}
console.log('sum(1,2,3,4):', sum(1, 2, 3, 4)); // 10

// Spread ემატება ელემენტებს როგორც ინდივიდუალურ არგუმენტებს
// const nums = [10, 20, 30];
console.log('sum(...nums):', sum(...nums)); // 60


/* ==================================================
   3) import / export (ES modules)
   ==================================================

   ქვემოთ არის ორი ფაილის მაგალითი: moduleA.js და main.js
   რეალურ პროექტში თუ მივა Node ან ბრაუზერი module-ებით,
   მომხმარებელი შექმნის ორ ცალკეულ .js ფაილს.

   === moduleA.js ===
   // named export
   export const PI = 3.14159;
   export function areaOfCircle(r) {
     return PI * r * r;
   }

   // default export
   export default function greet(name) {
     return `Hello, ${name}`;
   }

   === main.js ===
   // რომ ჩავტვირთოთ, main.js-ში
   import greet, { PI, areaOfCircle } from './moduleA.js';

   console.log(greet('ნინო'));
   console.log('PI:', PI);
   console.log('areaOfCircle(2):', areaOfCircle(2));

   შენიშვნა: Node-ში უნდა გამოიყენოთ ფაილების დასახელება და package.json-ში
   "type": "module" ან დაასახელოთ .mjs ფაილები, რათა გამოიყენოთ ES modules.
*/

/* ==================================================
   4) async JavaScript: Promises, async/await
   ==================================================*/




// პატარა მაგალითი (fakeFetch) რომელიც მოდელირებას უკეთებს ქსელურ მოთხოვნას


function fakeFetch(url, delay = 500, succeed = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (succeed) {
                resolve({ url, status: 200, data: `response from ${url}` });
            } else {
                reject(new Error(`Network error when fetching ${url}`));
            }
        }, delay);
    });
}

// Promise სინტაქსი
fakeFetch('/api/user', 300)
    .then(response => {
        console.log('then response:', response);
        return fakeFetch('/api/posts', 200);
    })
    .then(posts => {
        console.log('posts:', posts);
    })
    .catch(err => {
        console.error('promise error:', err);
    });



// async / await — უფრო სუფთა სინტაქსი
async function getUserAndPosts() {
    try {
        const user = await fakeFetch('/api/user', 200);
        const posts = await fakeFetch('/api/posts', 200);
        return { user, posts };
    } catch (err) {
        // მკაფიო შეცდომის დამუშავება
        console.error('getUserAndPosts error:', err);
        throw err; // გადაგვაქვს შეცდომა ზემოთ
    }
}

getUserAndPosts()
    .then(result => console.log('getUserAndPosts result:', result))
    .catch(() => { });

// პარალელური მოთხოვნები — Promise.all
async function loadDashboard() {
    try {
        // ეს გამოაგზავნის ორივე მოთხოვნას ერთდროულად
        const [user, stats, notifications] = await Promise.all([
            fakeFetch('/api/user', 300),
            fakeFetch('/api/stats', 150),
            fakeFetch('/api/notifications', 100)
        ]);

        console.log('dashboard data:', { user, stats, notifications });
    } catch (err) {
        console.error('loadDashboard error:', err);
    }
}

loadDashboard();

// async/await
async function loadManyUrls(urls) {
    const promises = urls.map(u => fakeFetch(u, 200, true));
    const results = await Promise.allSettled(promises);
    console.log('loadManyUrls results:', results);
    results.forEach((r, i) => {
        if (r.status === 'fulfilled') {
            console.log(`url ${urls[i]} succeeded:`, r.value);
        } else {
            console.warn(`url ${urls[i]} failed:`, r.reason);
        }
    });
}

loadManyUrls(['/a', '/b', '/c']);
