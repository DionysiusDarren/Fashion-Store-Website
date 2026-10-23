function validatedata(){
    console.log("flag")
    var fullname = document.getElementById("fullname");
    var email = document.getElementById("email");
    var birthdate = document.getElementById("birthdate");
    var male = document.getElementById("male");
    var female = document.getElementById("female");
    var terms = document.getElementById("terms");

    if(fullname.value.length < 5){
        alert("Full name length must be at least 5 characters");
    }
    else if(!email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
    }
    else if (!birthdate.value){
        alert("Birthdate must be filled!");
    }
    else {
        const today = new Date();
        const birthDate = new Date(birthdate.value);

        let ageFromBirthdate = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            ageFromBirthdate--;
        }

        if (ageFromBirthdate < 18) {
            alert("You must be at least 18 years old.");
        } 
        else if (!male.checked && !female.checked) {
            alert("The gender must be selected!");
        } 
        else if (!terms.checked) {
            alert("Terms & condition must be checked");
        } 
        else {
            var gendervalue = male.checked ? "Male" : "Female";

            const result =
                `<h3> Submitted Data </h3><br>

                <div>
                    <p> <strong> Fullname : </strong> ${fullname.value}</p>
                    <p> <strong> Email : </strong> ${email.value}</p>
                    <p> <strong> Birthdate : </strong> ${birthdate.value}</p>
                    <p> <strong> Gender : </strong> ${gendervalue}</p>
                </div>`;

            const resultdiv = document.getElementById("result");
            resultdiv.innerHTML = result;
            resultdiv.style.display = "flex";
            setTimeout(() => {
                resultdiv.classList.add("show");
            }, 10);

            alert("Success submit!");
        }
    }
}

function checkalphanum(password){
    var isalpha = false;
    var isnum = false;

    for(let i = 0; i < password.length; i++){
        if(isNaN(password[i])){
            isalpha = true
        }
        else{
            isnum = true
        }

        if(isalpha && isnum){
            return true;
        }
    }

    return false;
}


//  NAVIGATION BAR
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


// NOTIFICATION
const addBtn = document.getElementById("addBtn");
const buy = document.getElementById("buy")
const product = document.getElementById("product-value");
const notification = document.getElementById("notification");
const sizeSelect = document.getElementById("size-select");

buy.addEventListener("click", () => {
    const quantity = parseInt(product.value);
    const selectedSize = sizeSelect.value;

    if (quantity < 1 || isNaN(quantity)) {
        alert("Add a number!");
        return;
    }
    if (selectedSize === "") {
        alert("Please select a size.");
        return;
    }

    alert("Order Placed!");
});

addBtn.addEventListener("click", () => {
  const quantity = parseInt(product.value);
  const selectedSize = sizeSelect.value;

  if (quantity < 1 || isNaN(quantity)) {
    alert("Add a number!");
    return;
  }
  if (selectedSize === "") {
    alert("Please select a size.");
    return;
  }

  alert("Added to cart!");

//   notification.classList.add("show");

//   setTimeout(() => {
//     notification.classList.remove("show");
//   }, 2000);
});
