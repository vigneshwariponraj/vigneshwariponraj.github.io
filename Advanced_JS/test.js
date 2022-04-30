/*switch
const extension = '.css';

const extensionObj = {
    'css': 'text/css',
    'js': 'text/javascript',
    'json': 'application/json',
    'jpg': 'image/jpge',
    'png': 'image/png',
    '.txt': 'text/plain'
}

const myMap = new Map();
myMap.set('.css', 'text/css')
myMap.set('json', 'application/json')

console.log(myMap.get(extension) || 'text/html');


//checking for empty arrays
let myArray = [];
//Arrays have a length property
console.log(myArray.length);

//Mistake I've made too often!
console.log(myArray.length ? true : false)

//here's why:
myArray = undefined; //same if null
//Error:
//console.log(myArray.length ? true : false)
//So we have learned to do this:
console.log(myArray && myArray ? true : false)
*/
//we now have a more concise way
myArray = [];

//optional chaining
console.log(myArray?.length ? true : false);

//? is the optional chaining operator
//You can use more than one
myArray = [{ "id": 1 }];

console.log(myArray?.[0]?.id ? true : false)
console.log(myArray?.[0]?.name ? true : false)

//You can use it with the null coalescing operator, too

console.log(myArray?.[0]?.id ?? "No id property");
console.log(myArray?.[0]?.name ?? "No name property");

//If need to find out if it is an array
myArray = "Dave";

//This does not work
console.log(myArray && myArray.length ? true : false);

//Neither does this
console.log(myArray?.length ? true : false);

//This is the way to be sure
console.log(Array.isArray(myArray));

//So if you are completely unsure
myArray = [{ "id": 1}];
console.log(Array.isArray(myArray) && myArray.length ? true : false);

//or to check for a property also
console.log(Array.isArray(myArray) && myArray[0]?.id ? true : false);
console.log(Array.isArray(myArray) && myArray[0]?.name ? true : false);


/*Debounce function
const initApp = () => {
    const button = document.querySelector('button');
    button.addEventListener('click', () => {
        clickLog();
        button.disabled = true;
        setTimeout(() => button.disabled = false, 2000);
    });
}

const clickLog = () => console.log('clicked');
document.addEventListener('DOMContentLoaded', initApp);

const debounce = (fn, delay) => {
    let id;
    console.log('id at immediate load: ${id});
    return (...args) => {
        console.log('previous id: ${id}');
        if (id) clearTimeout(id);
        id = setTimeout(() => {
            fn(..args);
        }, delay);
    }
}



document.getElementById('filterText').addEventListener
('input', debounce(e => filterPosts(e.target.value), 250));


//thorttle function
const initApp = () => {
    const button = document.querySelector('#throttle');

    tbutton.addEventListener('click', thorttle(clickLog, 2000));

    window.addEventListener('scroll',thorttle(scrollLog, 2000));
    
}

const clickLog = () => console.log('click');
const scrollLog = () => console.log('scrolling');
document.addEventListener('DOMContentLoaded', initApp);


const thorttle = (fn, delay) => {
    let lastTime = 0;
    console.log('called Throttle immediately');
    let id = 0;
    return (...args) => {
        const now = new Date().getTime();
        id++;
        if(now - lastTime < delay) return;
        lastTime = now;
        console.log(`event id: ${id}`);
        fn(...args);
    }
}


//Debounce at end of wait time
// final state
//throttle at intervals
//intermediate state


//for each
const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const initApp = async () => {
    getPostsSerialized(ids);

}
document.addEventListener('DOMContentLoaded', initApp);

const getPost = async (id) => {
    return await (await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)).json();

}

const getPostsSerialized = async (ids) => {for (const id of ids) {
    const data = await getPost(id);
    console.log(data);
}
console.log("I'll wait on you");
}


/*const useForEach =  (ids) => {
    ids.forEach(async (id) => {
        const data = await getPost(id);
        console.log(data);
    });
    console.log("I'll wait on you");
}

const getPostsSerialized = async (ids) => {
    await ids.reduce(async (acc, id) => {
        //waits for the previous item to complete
        await acc;
        //get the nxt item
        const post = await getPost(id);
        console.log(post);
    }, Promise.resolve());
    console.log("I'll wait on you");
}
 

const getPostConcurrently = async (ids) => {
    const posts = await Promise.all(ids.map(async (id) => getPost (id)));
    console.log(posts)
    console.log("I'll wait on you");
}

//Memoization to memoize

const initApp = async () => {
    const memoizedFib = memoize(fib);
    console.log(memoizedFib(40))
    console.log(memoizedFib(40))
   
    console.log(memoizedFib(40))
    console.log(memoizedFib(40))
    /*console.log(fib(40))
    console.log(fib(40))
    console.log(fib(40))
}
document.addEventListener('DOMContentLoaded', initApp);

const fib = (pos) => {
    if (pos < 2) return pos;
    return fib(pos - 1) + fib(pos - 2);
}



/*const multiplyBy10 = (num) => {
    return num * 10;
}
const add3 = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
const addMany = (...args) => {
    return args.reduce((acc, num) => acc + num);
}
const memoize = (fn) => {
    const cache = {};

    return (...args) => {
        if (args.toString() in cache) {
            console.log(cache);
            return cache[args.toString()];
        }
        const result = fn(...args);
        cache[args.toString()] = result;
        return result;
    }
}


const memoizedMultiplyBy10 = () => {
    const cache = {};

    return (num) => {
        if (num in cache) {
            console.log(cache);
            return cache[num];
        }
        const result = num * 10;
        cache[num] = result;
        return result;
    }
}
*/

//innerHTML