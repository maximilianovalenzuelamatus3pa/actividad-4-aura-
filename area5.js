function getViewportSize(width) {
  if (width < 576) {
    return "xs";
  } else if (width < 768) {
    return "sm";
  } else if (width < 962) {
    return "md";
  } else {
    return "xl";
  }
}

if (typeof document !== "undefined") {
  const input = document.querySelector("#viewport-width");
  const button = document.querySelector("#check-button");
  const result = document.querySelector("#viewport-result");

  button.addEventListener("click", () => {
    const width = Number(input.value);

    if (!Number.isInteger(width) || width <= 0) {
      result.textContent = "Ingresa un número entero mayor que cero.";
      return;
    }

    result.textContent = `La pantalla es ${getViewportSize(width)}.`;
  });
}

if (typeof module !== "undefined") {
  module.exports = { getViewportSize };
}
