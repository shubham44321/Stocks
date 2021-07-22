const form = document.getElementById("form");
const stockImg = document.getElementById("stock");
const stockUp = document.getElementById("stockUp");
const stockDown = document.getElementById("stockDown");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const purchasedPrice = parseFloat(
    document.getElementById("purchasedPrice").value
  );
  const quantity = parseInt(document.getElementById("quantity").value);
  const currentPrice = parseFloat(
    document.getElementById("currentPrice").value
  );

  const totalPurchasePrice = purchasedPrice * quantity;
  const totalCurrentPrice = currentPrice * quantity;

  let gained = 0;
  let totalGainedOrLoss = 0;

  if (totalPurchasePrice > totalCurrentPrice) {
    gained = -1;
    totalGainedOrLoss = totalPurchasePrice - totalCurrentPrice;
  } else if (totalCurrentPrice > totalPurchasePrice) {
    totalGainedOrLoss = totalCurrentPrice - totalPurchasePrice;
    gained = 1;
  } else {
    gained = 0;
    totalGainedOrLoss = 0;
  }
  let totalPercentGainedOrLoss = (totalGainedOrLoss / totalPurchasePrice) * 100;
  if (gained === 1 || gained === 0) {
    document.getElementById(
      "res"
    ).innerHTML = `You gained ${totalPercentGainedOrLoss.toFixed(
      2
    )}%. Your total profit is ₹${totalGainedOrLoss.toFixed(2)}`;
    if (totalPercentGainedOrLoss >= 50.0) {
      stockUp.classList.remove("hidden");
      stockImg.classList.add("hidden");
      stockDown.classList.add("hidden");
    } else {
      stockUp.classList.add("hidden");
      stockImg.classList.remove("hidden");
      stockDown.classList.add("hidden");
    }
  } else {
    document.getElementById(
      "res"
    ).innerHTML = `You lost ${totalPercentGainedOrLoss.toFixed(
      2
    )}%. Your total loss is ₹${totalGainedOrLoss.toFixed(2)}`;
    if (totalPercentGainedOrLoss >= 50.0) {
      stockUp.classList.add("hidden");
      stockImg.classList.add("hidden");
      stockDown.classList.remove("hidden");
    } else {
      stockUp.classList.add("hidden");
      stockImg.classList.remove("hidden");
      stockDown.classList.add("hidden");
    }
  }
});
