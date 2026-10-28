/*let a=15
function add(){
    let a;
    const c=a+5
    console.log(c)
}
add()*/
    // let a =1;
    // console.log(a)
    // let b =++a;
    // console.log(a+b)
    // let c = a++;
    // console.log(c)
    // console.log(a+b+c)
    //  const a= "5"
    //  const b= 5
    //  const c=a-b; 
    //  const d=c;
    //  console.log(d)
    //console.log(typeof [])
    // let user = {name:"varshini",age:20} 
    // const {name,age} = user  // this is called destructuring
    // console.log(name)


    // const a = "5"
    // const b = "10"
    // const c= (b+a)+(a+b)
    // console.log(c)


    // const a = "5"
    // const b = "10"
    // const c= (Number(b)+a)+(a+b)
    // console.log(c)

    //  const a = "5"
    // const b = "10"
    // const c= (Number(b)*a)+(a*b)
    // console.log(c)




    //  const a = "5"
    // const b = "10"
    // const c= (Number(b)+a)/(a+b)
    // console.log(c)


    // const a = "5"
    // const b = "10"
    // const c= a ===b
    // console.log(c)
    //console.log("1"===String(1))


// javascript run in a three different loop is called event loop

   // 1 sync -- let a,let a=5,console.log
   // 2 micro -- Promise,async ,await
   // 3 macro -- setTimeout,setInterval,requestAnimationFrame
   //always sync code will be executed first then micro task and then macro task
   //        setTimeout	                  |          setInterval
   //Runs once after the timer expires    |  Runs repeatedly at every specified time interval.




console.log("a");
setTimeout(()=>{
    console.log("b");
},0);
Promise.resolve().then(()=>{
    console.log("c");
});
 console.log("d");

 setTimeout(()=>{
    console.log("e");
 },0);