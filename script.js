var Weight = parseFloat(document.getElementById('Weight').value)
var Height = parseFloat(document.getElementById('Height').value)

function calculateBMI()
{
var BMIFloat=Weight/Height ** 2
var BMI=parseFloat(BMIFloat).toFixed(2)

if(BMI<18.5)
{
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYou are underweight"
}

else if(BMI>=18.5 && BMI<=24.9)
{
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYour BMI is Normal"
}

else if(BMI>=25 && BMI<=29.9)
{
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYou are Over Weight"
}

else if(BMI>=30 && BMI<=34.9)
{
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYou are Obese and under Obese class I"
}

else if(BMI>=35 && BMI<=39.9)
{
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYou are Obese and under Obese class II"
}

else if(BMI>=40)
 {
    document.getElementById('BMI').innerHTML= "Your BMI is " + BMI + " \n\nYou are Obese and under Obese class III"
}
else
{
    document.getElementById('BMI').innerHTML= "Try Again"
}
}