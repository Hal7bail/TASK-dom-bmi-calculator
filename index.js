function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  
let BMI = ( weight / (height/100)^2);
alert(BMI);

  if ( BMI < 18.5){
    alert("underweight")
  } else if ( BMI > 18.15 && BMI < 24.9) {
    alert("healthy weight")
  } else if ( BMI > 24.9 && BMI <= 29.9) {
    alert ("overweight")
  } else if ( BMI >= 30.0) {alert ("obesity")}

// const bmi = weight / (height/100 **2;)
// let bmistatus;

// if (bmi < 20) {
//   bmistatus = "thin";
// }
// else if (bmi < 25) {
//   bmistatus = "normal";
// }
// else { bmistatus = "fat";}
// }

// let gender;
// if (male) { gender = "male";}
// else {gender = "female";}
// - or
// const or let gender = male ? "male" : "female";


// alert(
//   `weight: ${weight}
//   Height:${height}
//   age:${age}
//   male:${male}
//   female:${female}
//   ---
//   BMI is: ${bmi}
//   your body status  is ${bmistatus}
//   `);
}
