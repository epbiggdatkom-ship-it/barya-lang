let totalSavings = 0;

function addSavings() {
    const input = document.getElementById("savings");
    const amount = Number(input.value);

    if (input.value.trim() === "" || !Number.isFinite(amount) || amount <= 0) {
        alert("Please enter a valid savings amount.");
        return;
    }

    totalSavings += amount;

    document.querySelector(".amount").textContent =
        "₱" + totalSavings.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });

    input.value = "";
    alert("Savings added successfully!");
}