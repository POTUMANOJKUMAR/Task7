const form = document.querySelector("#form");
const FirstName = document.querySelector("#firstname");
const LastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");
const Phoneno = document.querySelector("#phoneno");
const Address = document.querySelector("#Address");
const dob = document.querySelector("#dob");
const pin=document.querySelector("#pin");
// const check=document.querySelector("#check")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInputs();
 
});
function validateInputs() {
  const FirstNamevalue = FirstName.value.trim();
  const LastNamevalue = LastName.value.trim();
  const emailvalue = email.value.trim();
  const passwordvalue = password.value.trim();
  const cpasswordvalue = cpassword.value.trim();
  const Phonenovalue = Phoneno.value.trim();
  const Addressvalue = Address.value.trim();
  const dobvalue = dob.value.trim();
  const pinvalue=pin.value.trim();
 
  if (FirstNamevalue === "") {
    setError(FirstName, "first name is required");
  } else {
    setSuccess(FirstName);
  }
  if (LastNamevalue === "") {
    setError(LastName, "last name is required");
  } else {
    setSuccess(LastName);
  }
  if (emailvalue === "") {
    setError(email, "Email is required");
  } else if (!validateEmail(emailvalue)) {
    setError(email, "please Enter a valid email");
  } else {
    setSuccess(email);
  }
  if (passwordvalue === "") {
    setError(password, "password required");
  } else if (passwordvalue.length < 8) {
    setError(password, "password must be 8 characters");
  } else {
    setSuccess(password);
  }
  if (cpasswordvalue === "") {
    setError(cpassword, "confirm password required");
  } else if (cpasswordvalue !== passwordvalue) {
    setError(cpassword, "password does'nt match");
  } else {
    setSuccess(cpassword);
  }
  if (Phonenovalue === "") {
    setError(Phoneno, "phone no required");
  } else if (!validatephoneno(Phonenovalue)) {
    setError(Phoneno, "please enter valid mobile no");
  } else {
    setSuccess(Phoneno);
  }
  if (Addressvalue === "") {
    setError(Address, "Enter the Address");
  } else {
    setSuccess(Address);
  }
  if (dobvalue === "") {
    setError(dob, "Enter D-O-B");
  } else if (!dobvalidate(dobvalue)) {
    setError(dob, " Enter valid DOB");
  } else {
    setSuccess(dob);
  }
  if(pinvalue==="")
  setError(pin,"Enter the pincode")
else if(!validatePin(pinvalue)){
  setError(pin,"should be 6 digits ")
}
else{
  setSuccess(pin)}
  
 
  }




function setError(element, message) {
  const inputField = element.parentElement;
  const errorElement = inputField.querySelector(".error");
  errorElement.innerText = message;
  inputField.classList.add("error");
  inputField.classList.remove("success");
}
function setSuccess(element) {
  const inputField = element.parentElement;
  const errorElement = inputField.querySelector(".error");
  errorElement.innerText = "";
  inputField.classList.add("success");
  inputField.classList.remove("error");
}
const validateEmail = (email) => {
  return email.toLowerCase().match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};
const validatephoneno = (Phoneno) => {
  return Phoneno.match(/^(\+\d{1,3}[- ]?)?\d{10}$/);
};
const dobvalidate = (dob) => {
  return dob.match(
    /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
  );
};
const validatePin=(pin)=>{
  return pin.match(/^[1-9][0-9]{5}$/)
}


