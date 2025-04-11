function calculateEquation(input) {
    // Example equation: y = 2 * x + 3
    return 2 * input + 3;
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const inputField = document.getElementById('numberInput');
    const outputDisplay = document.getElementById('outputDisplay');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = parseFloat(inputField.value);
        const result = calculateEquation(inputValue);
        outputDisplay.textContent = `Output: ${result}`;
    });
});