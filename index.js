
function FIRE() {
    const i=document.getElementById('i').value;
    const e=document.getElementById('e').value;
    const n=document.getElementById('n').value;
    const total=(e*25);
    const save=(i-e)*25;
    const need =(total - save + );

    
    document.getElementById("result").innerHTML="You need $ " + total + " to get FIRE";
    document.getElementById("info").innerHTML="You need $ " + need;


}