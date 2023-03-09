 

function outcome() {

    let num1 = parseFloat(document.getElementById ('num-one').value);
    let num2 = parseFloat(document.getElementById ('num-two').value);
    let total = 0
    

    if (document.getElementById('box1').checked) 
        total = num1 + num2
    else if (document.getElementById('box2').checked) 
        total = num1 - num2
    else if (document.getElementById('box3').checked) 
        total = num1 * num2
    else 
        total = num1 / num2

    document.getElementById('resultArea').innerHTML = 'Resultado: ' + total;
    
}