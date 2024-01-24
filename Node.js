async function myAsyncFunction(){
    return new Promise(function(resolve){
        setTimeout(function()
        {
            resolve("This is the second statement")
        },2000);
    }
    )
}
async function myDisplay(){
    let myPromise =new Promise(function(resolve){
        setTimeout(function(){
            resolve("this is first statement");
        },5000);
    });
    const [result1,result2]=await Promise.all([myPromise,myAsyncFunction()]);
    console.log(result1);
    console.log(result2);
}
myDisplay();