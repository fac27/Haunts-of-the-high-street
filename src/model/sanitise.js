const sanitise = (userInput) => {
  const riskInputs = {
    '<': '&lt;',
    '>': '&gt;',
  };
  const cleanData = userInput.replace(/<|>/gi, (match) => riskInputs[match]).toString();
  return cleanData;
}
module.exports = { sanitise };
