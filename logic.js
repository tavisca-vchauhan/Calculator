function Numbers(d){
d=document.getElementById("viewer").innerHTML+""+d;
document.getElementById("viewer").innerHTML=d;
}

function Result()
{
  var stringDOM=document.getElementById("viewer").innerHTML;
    stringDOM+="";
    document.getElementById("viewer").innerHTML=eval(stringDOM);
}
function SetNull(){
  document.getElementById("viewer").innerHTML="";
}

