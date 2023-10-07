let textAreaContent = document.querySelector('#fileXMLtext');
let output = document.querySelector('.outputArea');
let buttonSub = document.querySelector('.buttonSub');

buttonSub.onclick = () => {
  output.innerHTML = textAreaContent.value;
};
