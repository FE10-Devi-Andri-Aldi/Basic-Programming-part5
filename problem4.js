function caesarCipher(offset, input) {
    
  let kamus = 'abcdefghijklmnopqrstuvwxyz'
  let result = " ";
  for (let i = 0; i < kata.length; i++) {
    var penampung = 0;
    penampung = kamus.indexOf(kata[i])
    result = result + kamus[penampung + 1]
  }
  return result
  
  }
  
  console.log(caesarCipher(3, "abc")); // def
  console.log(caesarCipher(2, "alta")); // cnvc
  console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz"));
  // bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz"));
  // mnopqrstuvwxyzabcdefghijkl