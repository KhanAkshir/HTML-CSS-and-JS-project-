let count=0;
let I=  document.getElementById("count-el");
function increment()
{
    count++;
  I.innerText=count
}

function decrement()
{
    if(count==0)
    {
       count++;
    }
    count--;
 I.innerText=count
}
let P=document.getElementById("save-el");
function save()
{
     let pos= +count +" - ";  
    P.textContent+=pos; 
       count=0;
       I.innerText=count; 
   
}



