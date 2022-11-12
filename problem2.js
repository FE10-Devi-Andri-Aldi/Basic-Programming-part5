function ubahHuruf(sentence) {


  let kamus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = '';
  let newSentence = [];
  
  for (var i = 0; i < sentence.length; i++) {
    let penampung = 0;
    penampung = kamus.indexOf(sentence[i])
    result = result + kamus[penampung + 1]
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("SEPULSA OKE"))     // COZEVCK YUO
console.log(ubahHuruf("ALTERRA ACADEMY")) // KVDOBBK KMKNOWI
console.log(ubahHuruf("INDONESIA"))       // SXNYXOCSK
console.log(ubahHuruf("GOLANG"))          // QYVKXQ
console.log(ubahHuruf("PROGRAMMER"))      // ZBYQBKWWOB
