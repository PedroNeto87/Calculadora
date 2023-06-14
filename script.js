function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function calculateResult() {
    const display = document.getElementById('display').value;
    const result = eval(display);
    document.getElementById('display').value = result;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }