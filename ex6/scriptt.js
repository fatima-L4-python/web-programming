const calculateButton = document.getElementById('calculateButton');
const totalPrice = document.getElementById('totalPrice');

calculateButton.addEventListener('click', () => {
    const petrolPrice = parseFloat(document.getElementById('petrolPrice').value);
    const litersPurchased = parseFloat(document.getElementById('litersPurchased').value);

    const result = petrolPrice * litersPurchased;
    totalPrice.textContent = `Total Price: $${result.toFixed(2)}`;
});