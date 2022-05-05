window.onload = function () {
    const inputField = document.querySelector("#password");
    const buttonShow = document.querySelector("span i");

    buttonShow.onclick = () => {
        if (inputField.type === "password") {
            inputField.type = "text";
            buttonShow.classList.add("showed");
            buttonShow.classList.remove("fa-eye");
            buttonShow.classList.add("fa-eye-slash");
        } else {
            inputField.type = "password";
            buttonShow.classList.remove("fa-eye-slash");
            buttonShow.classList.remove("showed");
            buttonShow.classList.add("fa-eye");
        }
    };
};
