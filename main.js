document.getElementById("calculate").addEventListener("click", function () {
    const input = document.getElementById("numbers").value;
    const numberArray = input.split(":").map(Number); 
    const validNumbers = numberArray.filter(num => !isNaN(num));
    
    if (validNumbers.length === 0) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    const sum = validNumbers.reduce((total, num) => total + num, 0);
    const average = sum / validNumbers.length;


    document.getElementById("result").textContent = `Average: ${average}`;
});

