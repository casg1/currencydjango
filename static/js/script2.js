//declare
const c1 = document.getElementById("currency-one");
const c2 = document.getElementById("currency-two");
const amount1 = document.getElementById("amount-one");
const amount2 = document.getElementById("amount-two");
const swap = document.getElementById("swap");
const convRate = document.getElementById("rate");


// get exchange rate form api
function calculate() {
    const  curr1 = c1.value;
    const  curr2 = c2.value;
    fetch(`http://localhost:8000/api/convert/${curr1}/${curr2}/${amount1.value}`)
    fetch(`https://v6.exchangerate-api.com/v6/dcb835e796ca1133b4c8f6e4/latest/${curr1}`)
        .then((res) => res.json())
        .then((data) => {
            const rate = data.conversion_rates[curr2];
            const rspon= data;
            convRate.innerText = `1 ${curr1} = ${rate} ${curr2}`;
            amount2.value = (amount1.value * rate). toFixed(2)
        });

}
// event listen

c1.addEventListener("change", calculate);
c2.addEventListener("change", calculate);
amount1.addEventListener("input", calculate);
amount2.addEventListener("input", calculate);
swap.addEventListener("click", () => {
    const via = c1.value;
    c1.value = c2.value;
    c2.value = via;
    calculate();

})