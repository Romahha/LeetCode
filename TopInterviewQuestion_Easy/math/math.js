//Fizz Buzz
//my decision
var fizzBuzz = function(n) {
    let result = [];
    for(let i=1; i<=n; i++) {
        if(i%15==0) {
            result.push("FizzBuzz")
        } else if(i%5==0) {
            result.push("Buzz");
        } else if(i%3==0) {
            result.push("Fizz");
        } else {
            result.push(i.toString());
        }
    }
    return result;
}

//better solution
var fizzBuzz = function(n) {
    let cur = 1
    let output = []

    while(cur <= n){
        // console.log(cur)
        if(cur % 3 == 0 && cur % 5 == 0){
            output.push("FizzBuzz")
        } else if(cur % 5 == 0){
            output.push("Buzz")
        } else if(cur % 3 == 0){
            output.push("Fizz")
        } else {
            output.push(`${cur}`)
        }
        cur++
    }
    return output
};
//better solution with memory
var fizzBuzz = function(n) {
    return Array.from({length: n}, (v,i) => {
        i = i + 1;
        if(i % 15 === 0 ) return "FizzBuzz";
        if(i % 5 === 0) return "Buzz";
        if(i % 3 === 0) return "Fizz";
        return (i ) + "";
    })
