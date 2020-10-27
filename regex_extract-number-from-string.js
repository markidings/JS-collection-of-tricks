<script>

let txt = "#div-name-1234-characteristic:561613213213";
let numb = txt.match(/\d/g);
let allNumb = numb.join("");

console.log(numb[0]) // 1
console.log(allNumb) //1234561613213213

</script>
