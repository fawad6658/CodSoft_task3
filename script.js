
let result = document.getElementById('result');

// funtion to display number on screen
function display (number) {
    result.value +=number; // one then another
}

// Function to calculate numbers.
function calculate() {
    let final_number = result.value;
    
    let final_result = eval(final_number); //eval is predefined function
    result.value = final_result;
}

// funtion to clear or erase the result
function clrs(){
    result.value = "";
}

//funtion to delete value
function del(){
    result.value = result.value.slice(0, -1); // slice is predefined function of js.
}