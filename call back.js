function one(fn){
    console.log("10");
    fn();
}
function two(){
    console.log("1");
}
one(()=>{
    two()
})
 setTimeout(()=>{
    console.log("happy indepence day")
 },10)   
