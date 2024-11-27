function validateForm() {
    let isValid = true;

    // Country validation
    const country = document.getElementById("country").value;
    const countryError = document.getElementById("country-error");
    if (country === "") {
        countryError.textContent = "Please select a country.";
        isValid = false;
    } else {
        countryError.textContent = "";
    }

    // Hobbies validation
    const hobbies = document.getElementById("hobbies").value.trim();
    const hobbiesError = document.getElementById("hobbies-error");
    if (hobbies === "") {
        hobbiesError.textContent = "Hobbies field cannot be empty.";
        isValid = false;
    } else {
        hobbiesError.textContent = "";
    }

    // Newsletter checkbox validation
    const newsletterChecked = document.getElementById("newsletter").checked;
    const newsletterError = document.getElementById("newsletter-error");
    if (!newsletterChecked) {
        newsletterError.textContent = "Please select if you want to receive the newsletter.";
        isValid = false;
    } else {
        newsletterError.textContent = "";
    }

    return isValid; // Form will only submit if isValid remains true
}
