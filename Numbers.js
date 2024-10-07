// CHALLENGE 1
function displayInsight1(){
    let myDisplay1 = document.getElementById("Insight-1");
  
    if (myDisplay1.style.display == "none") { myDisplay1.style.display = "inline"; }
    else { myDisplay1.style.display = "none"; }
}

function calculation1(){
    let myInput = document.getElementById("Input-1").value;
    document.getElementById("Answer-1").innerText = "Sum of all multiples of 3 or 5 = " + multiplesOf3Or5(myInput);
}

function multiplesOf3Or5(input) {
    let listMultiplesOf3 = [];
    let listMultiplesOf5 = [];
    let listMultiplesOf3Or5 = [];
    let sum = 0;

    /* Checking the number is multiples of either 3 or 5 */
    for(let i=1; i<input; i++){
        if (i%3 === 0 || i%5 === 0){
            listMultiplesOf3Or5.push(i);
            if (i%3 === 0) { listMultiplesOf3.push(i); }
            if (i%5 === 0) { listMultiplesOf5.push(i); }
        };
    };
    document.getElementById("Display-1-Multiples3").innerText = "Multiples of 3 = " + listMultiplesOf3;
    document.getElementById("Display-1-Multiples5").innerText = "Multiples of 5 = " + listMultiplesOf5;
    document.getElementById("Display-1-Multiples3Or5").innerText = "Multiples of 3 or 5 = " + listMultiplesOf3Or5;

    /* Sum of all multiples 3 or 5 below input number */
    for(let i=0; i<listMultiplesOf3Or5.length; i++){
        sum += listMultiplesOf3Or5[i];
    };
    return sum;
};