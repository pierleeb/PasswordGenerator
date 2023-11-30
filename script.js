<!--
    Copyright (c) 2023 Pierleeb
    SPDX-License-Identifier: MIT
-->

function generatePassword() {
    const length = 12; // Altere o comprimento da senha conforme necessário
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    displayPassword(password);
}

function displayPassword(password) {
    const passwordDisplay = document.getElementById('passwordDisplay');
    passwordDisplay.textContent = password;
}
