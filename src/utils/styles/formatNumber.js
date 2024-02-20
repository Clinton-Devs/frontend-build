//For formatting amount
const formatCurrency = function (number) {
  // Convert number to string
  const strNumber = String(number);

  // Split the number into whole and decimal parts
  const [wholePart, decimalPart] = strNumber.split(".");

  // Format the whole part with commas
  let formattedNumber = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  // Add currency symbol
  formattedNumber = "₦" + formattedNumber;

  // Round up the decimal part to 2 decimal places
  if (decimalPart) {
    const roundedDecimal =
      Math.ceil(parseFloat("0." + decimalPart) * 100) / 100;
    formattedNumber += "." + roundedDecimal.toFixed(2).slice(-2);
  } else {
    formattedNumber += ".00";
  }
  return formattedNumber;
};

export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
};

export const formatNumber = {
  formatCurrency,
  formatTime,
};
