function genCharArray(charA, charZ) {
  let a = [],
    i = charA.charCodeAt(0),
    j = charZ.charCodeAt(0);

  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
    console.log(String.fromCharCode(i));
  }

  //   return a;
}
genCharArray("a", "z");
