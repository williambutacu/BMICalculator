var weight=prompt("What is your weight?");
var height=prompt("What is your height? In centimeters")/100;
var interpretation;
function bmiCalculator (weight, height) {
    var bmi=(weight/(height*height));
    var round= Math.floor(bmi*100)/100;
    if (round<18.5) {
        interpretation="Your BMI is " + round + ", so you are underweight.";
    }
    if (round>=18.5 && bmi<24.9) {
        interpretation="Your BMI is "+ round+ ", so you have a normal weight.";
    }
    if (round>24.9){
        interpretation="Your BMI is "+round+ ", so you are overweight.";
    }
    return interpretation;
}
document.querySelector("h3").innerHTML=bmiCalculator(weight,height);
