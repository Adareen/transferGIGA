function myFunction(stringa, lettera) {
  let cnt = 0;
  let stringaSplittata = stringa.split("");
  stringaSplittata.forEach((element) => {
    if (element == lettera) cnt++;
  });
  return cnt; 
}
