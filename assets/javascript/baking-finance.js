function copyPublicKey() {
  let publicKeyInput = document.querySelector("#public-key");
  publicKeyInput.type = 'text';
  publicKeyInput.select();
  document.execCommand("copy");
  publicKeyInput.type = 'hidden';

  printCopy();
}

const publicKeyLabel = document.querySelector("#public-key-button");
const publicKeyLabelText = publicKeyLabel.innerHTML;
function printCopy() {
    publicKeyLabel.innerHTML = "Copié !"

    setTimeout(function(){
      publicKeyLabel.innerHTML = publicKeyLabelText;
    }, 700);
}
