function generateTable() {
    const number = document.getElementById("multiInput").value;
    const output = document.getElementById("tableOutput");
    output.innerHTML = ""; // Clear previous output
  
    if (number === "" || isNaN(number)) {
      output.innerHTML = "<li>Please enter a valid number.</li>";
      return;
    }
  
    // Loop to create multiplication table
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = `${number} × ${i} = ${number * i}`;
      output.appendChild(li);
    }
  }
  
  function checkPrime() {
    const num = parseInt(document.getElementById("primeInput").value);
    const result = document.getElementById("primeResult");
  
    // Clear previous result
    result.textContent = "";
  
    if (num === "" || isNaN(num) || num <= 0) {
      result.textContent = "Please enter a positive number.";
      return;
    }
  
    if (num === 1) {
      result.textContent = "1 is neither prime nor composite.";
      return;
    }
  
    let isPrime = true;
    // Loop to check if number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    result.textContent = isPrime ? `${num} is a Prime Number!` : `${num} is NOT a Prime Number.`;
  }
  