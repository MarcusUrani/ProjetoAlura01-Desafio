const BASE_URL = "https://economia.awesomeapi.com.br/last/";

const fetchData = async (firstOption, secondOption) => {
  const requisition = await fetch(`${BASE_URL}${firstOption}-${secondOption}`);
  const response = await requisition.json();
  return response;
};

const convertSelected = async () => {
  const firstOption = document.querySelector("#moeda1").value;
  const secondOption = document.querySelector("#moeda2").value;
  const inputValue = document.querySelector("#valor").value;
  const resultArea = document.querySelector("#conversao");
  const optionsValue = firstOption + secondOption;

  if (firstOption && inputValue && secondOption) {
    const fetchApi = await fetchData(firstOption, secondOption);

    const data = fetchApi[optionsValue];
    const values = data.high;

    const result = calculateResult(inputValue, values);

    resultArea.innerHTML = `O valor de ${inputValue} ${firstOption} em ${secondOption} é: ${result}`;
  } else {
    resultArea.innerHTML = "É Necessário o preenchimento de todos os campos.";
    alert("Por favor, preencha todos os campos");
  }
};

const calculateResult = (inputValue, value) => {
  const result = inputValue * value;
  return result.toFixed(2);
};
