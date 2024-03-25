let grossSalary = 0.0;
let netSalary = 0.0;
let NHIFDeductions = 0.0;
let NSSFDeductions = 0.0;
let KRA = 0.0;
let payeRate = 0.0;
let payeAmount = 0.0;
let baseSalary = 0.0;
let NSSFTier = 0.0;

//get salary from user
baseSalary = prompt("Please eneter total yearly salary before taxes and before deductions(in Ksh): ");

//calculate gross salary
grossSalary = baseSalary;

//calculate paye rate
if(baseSalary <= 24000)
{
    payeRate = 10
} else if (baseSalary <= 32333) {
    payeRate = 25
} else if (baseSalary <= 500000) {
    payeRate =30
} else if (baseSalary <= 800000) {
    payeRate =32.5
} else {
    payeRate =35
}

//calculate payeAmount
payeAmount = baseSalary * payeRate/100;

//calculate kra (fringe benefit tax)
KRA = baseSalary * 15/100;

//calculate nhif deduction
if (baseSalary <= 5999)
{
    NHIFDeductions = 150
} else if (baseSalary <=7999){
    NHIFDeductions =300
} else if (baseSalary <=11999){
    NHIFDeductions =400
} else if (baseSalary <=14999){
    NHIFDeductions =500
} else if (baseSalary <=19999){
    NHIFDeductions =600
} else if (baseSalary <=24999){
    NHIFDeductions =750
} else if (baseSalary <=29999){
    NHIFDeductions =850
} else if (baseSalary <=34999){
    NHIFDeductions =900
} else if (baseSalary <=39999){
    NHIFDeductions =950
} else if (baseSalary <=44999){
    NHIFDeductions =1000
} else if (baseSalary <=49999){
    NHIFDeductions =1100
} else if (baseSalary <=59999){
    NHIFDeductions =1200
} else if (baseSalary <=69999){
    NHIFDeductions =1300
} else if (baseSalary <=79999){
    NHIFDeductions =1400
} else if (baseSalary <=89999){
    NHIFDeductions =1500
} else if (baseSalary <=99999){
    NHIFDeductions =1600
} else {
    NHIFDeductions =1700
}

//calculate nssf deduction
NSSFDeductions = baseSalary * 6/100;

netSalary =baseSalary - payeAmount -KRA -NSSFDeductions -NHIFDeductions;

console.log("Gross Salary: Ksh" + grossSalary);
console.log("PAYE Rate:" + payeRate + "%");
console.log("PAYE Amount: Ksh " + payeAmount);
console.log("Fringe Benefit Tax (KRA) amount: Ksh" + KRA);
console.log("NSSFDeduction: Ksh" + NSSFDeductions);
console.log("NHIFDdeduction: Ksh" + NHIFDeductions);
console.log("NET salary: Ksh " + netSalary);

 
