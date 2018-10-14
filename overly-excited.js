// STACKING

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let buildMeUp = ""

function addExcitement (theWordArray) {
  for (let i = 0; i < theWordArray.length; i++) {
  buildMeUp += theWordArray[i] + " ";
  console.log(buildMeUp);
  }
}

// EXCITING WORDS

function addExcitement (theWordArray, punc) {
  for (let i = 0; i < theWordArray.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      buildMeUp += theWordArray[i] + punc + " ";
    } else {
      buildMeUp += theWordArray[i] + " "
    }
    console.log(buildMeUp);
  }
}

// ----

// ARROW FUNC

addExcitement = (theWordArray, punc) => {
  for (let i = 0; i < theWordArray.length; i++) {
    if (i !== 0 && i % 3 === 0) {
      buildMeUp += theWordArray[i] + punc + " ";
    } else {
      buildMeUp += theWordArray[i] + " "
    }
    console.log(buildMeUp);
  }
}
