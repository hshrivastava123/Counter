var counterElement = document.getElementById("counterText");

var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var resetBtn = document.getElementById("reset");

var counter = counterElement.innerText;

function increment() {
    if(counter<0){
        console.log('Error:cannot go  below 0');
        texterror.innerHTML = "<span style='color:red;margin:15px;'>Error : Cannot go below 0 </span>"
       
    }
    if(counter>=0)
    {
        texterror.innerHTML ="<span style='color:black;'></span>"
    }
  counter++;
  if(counter>=0)
  {
  console.log(counter);
 
  counterElement.innerText = counter;
  }
}

function decrement() {
    if(counter<=-1){
        console.log('Error:cannot go  below 0');
        texterror.innerHTML = "<span style='color:red;border:none;margin:15px;'>Error : Cannot go below 0 </span>"
       
    }
    if(counter>=0)
    {
        texterror.innerHTML ="<span style='color:black;'></span>"
    }
  counter--;
  if(counter>=0)
  {
  console.log(counter);
 
  counterElement.innerText = counter;
  }
 
}

function reset() {
    if(counter<0){
        console.log('Error:cannot go  below 0');
        texterror.innerHTML = "<span style='color:red;margin:15px;'>Error : Cannot go below 0 </span>"
       
    }
    if(counter>=0)
    {
        texterror.innerHTML ="<span style='color:black;'></span>"
    }
  counter = 0;
  console.log(counter);
  counterElement.innerText = counter;
 
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
resetBtn.onclick = reset;