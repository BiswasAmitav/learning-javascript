//HERE IS THE PROGRAM FOR MAKING DNA TO RNA...TEXT LIKE "CATA" AND IN RNA T WOULD BE REPLACE BY U SO ANS IS : CAUA..
function DNAtoRNA(dna) {
    //   var text=dna;
    //   console.log(dna.replaceAt(dna.indexOf("T"),"U"));
      return dna.replace(/T/g, "U");
    }
    var Dna="GCAT";
    var text=DNAtoRNA(Dna);
    console.log(text);