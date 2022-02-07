// Write class below
class ShiftCipher{
  constructor(shift){
    this.shift=shift;
  }
  // takes plain text, shifts each letter in alphabet forward and capitalize it
  encrypt(plainString){
    let cipheredWord ='';
    //converting string to uppercase so won't need to work with small and capital ASCII codes separetely
    const tempString = plainString.toUpperCase();
    for(let chr of tempString){

    	//letter decimal Number
    	let letter = chr.charCodeAt(0);
    	let predictedShiftedValue = letter+this.shift;
    	let remainder = this.shift;

    	/*Boundaries: A-Z {65-90}*/
    	if(letter >= 65 && letter <= 90){
    		if(predictedShiftedValue > 90 && letter <= 90){
    			do{
    				letter++;
    				remainder--;
    			}while(letter <= 90 && remainder!=0);
    			cipheredWord += String.fromCharCode(65 + remainder);
    		}
    		else{
    			cipheredWord += String.fromCharCode(letter+this.shift);
    		}
      /*if its off boundaries then keep the same character*/
    	}else cipheredWord += String.fromCharCode(letter);
    }
	  return cipheredWord;
  }

	decrypt(plainString){
    let cipheredWord ='';
    const tempString = plainString.toLowerCase();
    for(let chr of tempString){
    	//letter decimal Number
    	let letter = chr.charCodeAt(0);
      // predictedValue
    	let predictedShiftedValue = letter-this.shift;
    	let remainder = this.shift;
    	/*Boundaries: for a-z {97-122}*/
    	if(letter <= 122 && letter >= 97){

    		if(predictedShiftedValue < 97 && letter >= 97){
    			do{
    				letter--;
    				remainder--;
    			}while(letter >= 97);

    			cipheredWord += String.fromCharCode(122-remainder);
    		}else{
    			cipheredWord += String.fromCharCode(letter-this.shift);
    		}
    	}else cipheredWord += String.fromCharCode(letter);
    }
	return cipheredWord;
	}
}
//const cipher = new ShiftCipher(0);
//console.log(cipher.encrypt('abcdefg')); // returns 'ZABCDEF'
//console.log(cipher.decrypt('ABCDEFG')); // returns 'i <3 my puppy'
