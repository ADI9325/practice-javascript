
// without paramenter function
function my_function() {
    console.log("This is the first function");
    console.log(":)");
}

my_function();


// with paramater function
function sum(a, b) {
    return a + b;
}
console.log("This is sum a + b = ", sum(1, 2));


// arrwo function
const multiplication = (a, b) => {
    return a * b;
}

console.log("This is the multiplication od a*b = ", multiplication(2, 2));


//Cretae a function that return tne volues in the string
const returnVolues = (str) => {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'u' || str[i] == 'o' || str[i] == 'i' || str[i] == 'e') {
            ans = ans.concat(str[i]);

        }
    }
    return ans;
}

console.log("This is the volues in the strings : ",returnVolues("aaeeiidjhffbskdkf"));


// CallBack function
let arr = [1,2,3,4,5];

arr.forEach(element => {
    console.log(element*element);
    
});

// use filter method to reduct the size of arr with condition
let arr1 = [90,93,67,87,100];

 let output = arr1.filter((val)=>{
    return val>90;
 });

 console.log(output);