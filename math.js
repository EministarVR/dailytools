let currentInput = "";
let previousInput = "";
let operation = "";

// Funktion zum Hinzufügen von Zahlen zur Anzeige
function appendNumber(number) {
    if (currentInput.length < 12) { // Begrenzung der Länge der Eingabe
        currentInput += number.toString();
        updateDisplay();
    }
}

// Funktion zum Setzen der Operation
function setOperation(op) {
    if (currentInput === "") return; // Nichts zu tun, wenn kein Input vorhanden
    if (previousInput !== "") {
        calculateResult();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

// Funktion zur Berechnung des Ergebnisses
function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return; // Fehlerbehandlung

    switch (operation) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operation = "";
    previousInput = "";
    updateDisplay();
}

// Funktion zur Aktualisierung der Anzeige
function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = currentInput || "0"; // Zeige "0", wenn keine Eingabe vorhanden ist
}

// Funktion zum Löschen der Anzeige
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = "";
    updateDisplay();
}
