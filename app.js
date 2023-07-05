const formSteps = document.querySelectorAll("#forms");
const nextButtons = document.querySelectorAll(".nextBtn");
const prevButtons = document.querySelectorAll(".prev-btn");
const details = document.querySelectorAll("#details")
const totalStep = formSteps.length;
currentStep = 0;

//Hide all other forms except the first one 
for(let i = 1; i < totalStep; i++){
  formSteps[i].style.display ="none";
}

//looping through the previous button to hide it 
prevButtons.forEach(button => {
  button.style.display = 'none';
});

//update button
UpdateButtonVisibility();

//add eventlistner for button 
nextButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    displayError(); // Call the displayError function before validating inputs
    if (!validateInputs()) {
      e.preventDefault();
    } else {
      if (currentStep < totalStep - 1) {
        formSteps[currentStep].style.display = "none";
        formSteps[currentStep + 1].style.display = "block";
        currentStep++;
        UpdateButtonVisibility();
      } else {
        nextButtons.forEach(button => {
          button.style.display = "none";
        });
        prevButtons.forEach(button => {
          button.style.display = "none";
        });
      }
    }
  });
});

//add eventlister for previous  (for button movement)
prevButtons.forEach(button => {
  button.addEventListener("click", () =>{
    if (currentStep > 0){
    formSteps[currentStep].style.display = "none"; 
    formSteps[currentStep - 1].style.display = "block"
    currentStep--;
    UpdateButtonVisibility();
    }else{
    
    }
  })
})



UpdateButtonVisibility();

 //Function update buton visisbility ( where button should be seen and where it should not be seen)\
 //This function call updates the visibility of the previous and next buttons based on the current step.
// It ensures that the appropriate buttons are displayed or hidden when the script is first run.

  function UpdateButtonVisibility( ){
    
  if (currentStep === 0 ){
  prevButtons.forEach(button => {
    button.style.display = "none";
  })
  }else{
    prevButtons.forEach(button => {
      button.style.display = "block";
    })
  }  

  if (currentStep === totalStep - 1){
    nextButtons.forEach(button => {
      button.style.display ="none"
    })
  
    prevButtons.forEach(button => {
      button.style.display = "none";
    });
  }else{ 
    nextButtons.forEach(button => {
      button.style.display = "block";
    })
  }
}

nextButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    if (!validateInputs()) {
      e.preventDefault();
    }
  });
  
});



//function  display error 
function displayError(){
  

  const isValid = validateInputs();

  if(!isValid){

  }
} 



// function validate input errors
function validateInputs() {
  let isValid = true;

  // Loop through details using forEach
  details.forEach(detail => {
    const value = detail.value.trim();

    if (!value) {
      detail.classList.add("error");
      detail.parentElement.classList.add("error_message");
      isValid = false;
    } else {
      detail.classList.remove("error");
      detail.parentElement.classList.remove("error_message");
    }
  });

  return isValid;
}

//activate toggle button 
// const toggleButton = document.querySelector(".switcher input");
// const monthlyLabel = document.querySelector(".monthly");
// const yearlyLabel = document.querySelector(".yearly");

// toggleButton.addEventListener("click", () => {
//   if (toggleButton.checked) {
//     monthlyLabel.classList.add("sw-active");
//     yearlyLabel.classList.remove("sw-active");
//   } else {
//     monthlyLabel.classList.remove("sw-active");
//     yearlyLabel.classList.add("sw-active");
//   }
// });


let toggler = document.querySelector(".round");
let price = document.querySelectorAll(".plan-price");
let duration = document.querySelectorAll(".duration");

toggler.addEventListener("click", () =>{
toggler.classList.toggle("active");
 
if(toggler.classList.contains("active")){
for(var i = 0; i <duration.length; i++){
duration[i].innerText = "/yr";
}
for(var k = 0; k < price.length; k++){
price[k].innerText =price[k].innerText * 10;
}

}else{
for(var i = 0; i < duration.length; i++){
price[i].innerText ="/mo";
}
for(var k = 0; k < price.length; k++){
price[k].innerText = price[k].innerText/10;
}

}
});
  