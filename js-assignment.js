// 1.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;

for(let key in salaries){
    sum += salaries[key]
}

console.log(sum)


//2
function multipleNumeric(obj){
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] *= 2
        }
    }
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

multipleNumeric(menu)
console.log(menu);

//3

function checkEmailId(str){
    str = str.toLowerCase();

    let atIndex = str.indexOf('@');
    let dotIndex = str.indexOf('.');

    if(atIndex > -1 && dotIndex > atIndex + 1){
        return true;
    }
    return false;
}
console.log(checkEmailId("test@example.com"))
console.log(checkEmailId("test.example@com"))
console.log(checkEmailId("testexample.com"))
console.log(checkEmailId("test@example.com"))

//4.

function truncate(str, maxlength){
    if(str.length > maxlength){
        return str.slice(0, maxlength -3) + '...';

    }
    return str;
}
console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te..."
console.log(truncate("Hi everyone!", 20)); // "Hi everyone!"

//5 
let styles = ['James', "Brennie"];
console.log(styles);


styles.push("Robert");

let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = "Calvin";
console.log(styles);

let removedValue = styles.shift();
console.log(removedValue);
console.log(styles);

styles.unshift('Rose', 'Regal')
console.log(styles);