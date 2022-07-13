
var height = document.getElementById("height_data").value;
var weight = document.getElementById("weight_data").value;
let BMI = 0;
let BmiCategory = " "
let result = document.getElementById("result")
const calcButton= document.getElementById("calc_btn");


function calculate(){

    //get data from input
    height = document.getElementById("height_data").value;
    weight = document.getElementById("weight_data").value;

    //imperical to metric conversion
    height = height*0.0254;
    weight = weight/2.205;
    
    //BMI Calculation
   BMI = weight/(Math.pow(height, 2))

    //Trunchate BMI to two decial places
    BMI = BMI.toFixed(2)

   //Determine BMI Category
   if (BMI <= 18.5) {
    BmiCategory = "underweight"

   } else if (BMI > 18.5 && BMI <= 24.9){
    BmiCategory = "in a healthy weight range"

   } else if (BMI > 24.9 && BMI <= 29.9){
    BmiCategory= "overweight"

   }else {
    BmiCategory= "obese"
   }

   //display BMI and BMI Category on site
   result.innerHTML = "Your BMI is "+ BMI + ". " + "You are " + BmiCategory
   

};
// 
