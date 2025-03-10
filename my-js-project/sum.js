let arr = [
    {
        id:1,
        isValid:1,
        studentSum:20,
        nsetedArr:[2,4]
    },
    {
        id:2,
        isValid:0,
        studentSum:10,
        nsetedArr:[2,2]
    },
    {
        id:3,
        isValid:1,
        studentSum:25,
        nsetedArr:[6,4]
    },
    {
        id:4,
        isValid:0,
        studentSum:20,
        nsetedArr:[2,3]
    },
    {
        id:5,
        isValid:1,
        studentSum:45,
        nsetedArr:[5,4]
    }
]

function arrySum(){
    let sum = 0;
    arr.forEach(res=>{
        if(res.isValid == 1){
            sum = parseInt(sum + res.studentSum);
        debugger
        }
    });
    console.log("studentSum",sum);
    alert(sum)
}
arrySum();

function sumNestedArray(){

    let sum = arr
        .filter(item => item.isValid === 1) // Filter for valid items
        .flatMap(item => item.nsetedArr) // Flatten the nested arrays
        .reduce((acc, num) => acc + num, 0); // Sum all the numbers
    
    console.log("sumNestedArray",sum);
    prompt("sumNestedArray",sum)
}
sumNestedArray();