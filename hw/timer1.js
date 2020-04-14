let count = 0;

function printTime(msg) {
    console.log(msg, new Date());
    count++;
    if(count == 10){
        clearInterval(repeat);
    }
  }
  
  let repeat = setInterval(printTime, 1000, "1초 간격");