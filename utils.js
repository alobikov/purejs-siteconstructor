function wrapValue(n) {
  let local = n;
  return () => n;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
