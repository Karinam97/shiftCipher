let shiftNum = document.querySelector('.shifting input');
const encryptTextValue = document.querySelector('.encrypt-string input');
const decryptTextValue = document.querySelector('.decrypt-string input');


//retrieving value from shifter and converting it to integer
function getShiftValue(){
  return parseInt(shiftNum.value);
}

/*event listener for encryption*/
document.getElementById('encrypt-button').addEventListener('click', () => {
  let cipher = new ShiftCipher(getShiftValue());
  if(encryptTextValue.value === ''){
    alert('type something');
  }else{
    document.getElementById('encryptedText').innerHTML = cipher.encrypt(encryptTextValue.value);
  }
})

/*event listener for decryption*/
document.getElementById('decrypt-button').addEventListener('click', () => {
  let cipher = new ShiftCipher(getShiftValue());
  if(decryptTextValue.value === ''){
    alert('type something');
  }else{
    document.getElementById('decryptedText').innerHTML = cipher.decrypt(decryptTextValue.value);
  }
})

/*shift left*/
document.getElementById('left-arrow').addEventListener('click', () =>{
  if(getShiftValue() > 0){
    shiftNum.value = parseInt(shiftNum.value ) - 1;
  }
  else shiftNum.value=shiftNum.value;
})

/*shift right*/
document.getElementById('right-arrow').addEventListener('click', () =>{
  if(getShiftValue() < 25){
    shiftNum.value = parseInt(shiftNum.value ) + 1;
  }
  else shiftNum.value=shiftNum.value;
})
