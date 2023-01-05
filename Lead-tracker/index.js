let myleads=[];
let ulel=document.getElementById("out");
let inputbutton=document.getElementById("input-btn");
const inputEl=document.getElementById("input-el");
let del=document.getElementById("del-btn");
del.addEventListener("dblclick",function()
{
    localStorage.clear();  
    myleads=[];
    render(myleads);
})

const l=JSON.parse(localStorage.getItem("myleads"));

const tabBtn=document.getElementById("tab-btn");


tabBtn.addEventListener("click",function()
{
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
          myleads.push(tabs[0].url);
  // console.log(tabs[0].url);  
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads);   
    })
    
})
if(l)
{
    myleads=l;
    render(myleads);
}

inputbutton.addEventListener("click",function()
{
    myleads.push(inputEl.value);
    inputEl.value=""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    render(myleads);  
   
 })
function render(leads)
{
    let list=""
    for(let i=0;i<leads.length;i++)
    {
          list+=`<li><a target='_blank' href='${leads[i]}'>${leads[i]}</a></li>`;
    }
    ulel.innerHTML=list;
}
