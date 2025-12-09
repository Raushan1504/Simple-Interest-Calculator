const button = document.getElementById('submit');
const result = document.getElementById('result');

document.addEventListener('click', ()=>
{
    let PA = parseFloat(document.getElementById('principle').value);
    let r  = parseFloat(document.getElementById('rate').value);
    let t = parseFloat(document.getElementById('time').value);
    let SI = (PA*r*t)/100;
    result.innerHTML = `After ${t} years your investment would be worth of $${SI.toFixed(2)}`;
});