//create either a constructor or class called Timer. 
//It should have two methods startTime & stopTime.
//startTime should start a counter.
//stopTime should stop and return the "counter"(total time).
//this key word being used with CONTEXT

// class Timer {
//     constructor(){
//         this.interval;
//         this.totalTime = 0;
//     }
//     start(){
//         this.interval = setInterval(() => {
//             this.totalTime++
//         }, 1000)
//     }
//     stop(){
//         clearInterval(this.interval)
//         return this.totalTime;
//     }
// }





// this is the test section of the solution up above 

// const mainTimer = new Timer();

// mainTimer.start();

//use of callbacks to test data. LEARN THIS
// setTimeout(()=>{
//     const timePassed = mainTimer.stop();
//     console.log(timePassed)
// }, 5000)




//The practical use of Timer would be to see how long something takes by calling start then stop.