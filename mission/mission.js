const themeSelector =  document.getElementById("theme");// replace with code to select dropdown element out of the HTML (Hint: document.querySelector)
function changeTheme() {

    let byuiLogo = document.getElementById("logo");
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    if(themeSelector.value == "dark"){
        document.body.classList.add("dark");
        byuiLogo.src = "byui-logo_white.png";
    } else {
        document.body.classList.remove("dark");
        byuiLogo.src = "byui-logo_blue.webp";
    }
    

    
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);