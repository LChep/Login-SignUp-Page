function setFormText(formElement, type, message){
    /*
    if (!formElement) {
        console.error("Form element is null or undefined.");
        return;
    }
    console.log(formElement);
    */

    const messageElement = formElement.querySelector(".form_message");

    /*
    if (!messageElement) {
        console.error("Element with class 'form_message' not found.");
        return;
    }
    */

    messageElement.textContent = message;
    messageElement.classList.remove("form_message--success",  "form_message--error");
    messageElement.classList.add(`form_message--${type}`);
}

function inputError(inputElement, message){
    inputElement.classList.add("input_errorMessageBox");
    inputElement.parentElement.querySelector(".input_errorMessage").textContent = message;
}

function clearError(inputElement){
    inputElement.classList.remove("input_errorMessageBox");
    inputElement.parentElement.querySelector(".input_errorMessage").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const login = document.querySelector("#login_form");
    const createAccount = document.querySelector("#createAccount_form");

    document.querySelector("#linkCreateAccount").addEventListener("click", (e) =>{
        e.preventDefault();
        login.classList.add("hidden");
        createAccount.classList.remove("hidden");
    })

    document.querySelector("#linkLogin").addEventListener("click", (e) =>{
        e.preventDefault();
        createAccount.classList.add("hidden");
        login.classList.remove("hidden");
    })

    login.addEventListener("submit", e =>{
        e.preventDefault();
        setFormText(login, "error", "Invalid username/password combination");
    })

    document.querySelectorAll(".form_element").forEach(inputElement =>{
        inputElement.addEventListener("blur", e =>{
            if (e.target.nodeName === "INPUT" && e.target.value.length > 0 && e.target.value.length < 6){
                inputError(inputElement, "Invalid Input");
            }
        });
        inputElement.addEventListener("input", e =>{
            clearError(inputElement);
        })
    });
    
});




