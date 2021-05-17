
function FIRE() {
    const networth = document.getElementById("networth").value
    const age = document.getElementById("age").value
    const income = document.getElementById("income").value
    const saving = document.getElementById("saving").value
    const expense = document.getElementById("expense").value
    
    const fire = expense * 25;
    const year = (fire - networth) / saving;
    const futureAge = (parseInt(age) + parseInt(year));
    const yearo =  (year.toFixed(0));
    const futureAgeo = (futureAge.toFixed(0))

    document.getElementById("result").innerHTML="あなたは、" + yearo + "年後の" + futureAgeo + "歳までにリタイアできます。"
}

// annual expenses * 25 = amount you need for FIRE 
// (FIRE - current networth) / annual savings = years till FIRE
// annual income - annual savings = annual expenses
// annual income - annual expenses = annual savings
// current age + years till FIRE = age you reach FIRE