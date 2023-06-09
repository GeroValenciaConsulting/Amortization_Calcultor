// function calculateMonthlyInstallment(loanAmount, months, interestRate) {
   
//     const monthlyInterestRate = interestRate / 100 / 12;

//     const numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months);
//     const denominator = Math.pow(1 + monthlyInterestRate, months) - 1;
//     const monthlyInstallment = numerator / denominator;

//     return monthlyInstallment;
//   }

//   function displayMonthlyInstallment() {
    
//     const loanAmount = parseFloat(document.getElementById("loanAmount").value);
//     const months = parseInt(document.getElementById("months").value);
//     const interestRate = parseFloat(document.getElementById("interestRate").value);

    
//     const monthlyInstallment = calculateMonthlyInstallment(loanAmount, months, interestRate);

//     document.getElementById("result").innerHTML = "Monthly Installment: ₱" + monthlyInstallment.toFixed(2);
//   }

//   function resetForm() {
  
//     document.getElementById("loanAmount").value = "100000.00";
//     document.getElementById("months").value = "12";
//     document.getElementById("interestRate").value = "3.5";
//     document.getElementById("result").innerHTML = "";
//   }