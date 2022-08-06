var element=document.getElementById("password");
function pgenerate(){
    var pass='';
var string='ABCDEFGHIJKLMNOPQRSTUVWXYZ'+'abcdefghijklmnopqrstuvwxyz'+'!@#$%^&*';
for(let i=1;i<9;i++)
{
    var char=Math.floor(Math.random()*string.length+1);
    pass+=string.charAt(char);
}
return pass;
}
function run(){
    element.innerHTML=pgenerate();
}