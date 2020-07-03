//API URL Bilgisi
const api = "https://api.exchangeratesapi.io/";

//Elementlerin Seçimi
const el_currency_one = document.getElementById('currency_one');
const el_currency_two = document.getElementById('currency_two');
const el_amount = document.getElementById('amount');
const el_btn_calculate = document.getElementById('btn_calculate');
const el_result = document.getElementById('result');

//Sembolleri Yükle
fetch('./birim.json')
.then(res => res.json())
.then(data => {
    const keys = Object.keys(data); //gönderidğimiz data içerisinden anahtarları alacağız
    const values = Object.values(data); //gönderdiğimiz data içerisinden değerleri alacağız

    let options;

    for (let i = 0; i < keys.length; i++) {

        options += `
        <option value=${keys[i]}>
        ${values[i]}
        </option>
        `;

    }

    el_currency_one.innerHTML += options; //seçenekler eklendi ilk kur'a
    el_currency_two.innerHTML += options; //seçenekler eklendi ikinci kur'a
    
}) 

el_btn_calculate.addEventListener('click',function(){
    const base_currency = el_currency_one.value; //esas alınan ilk kur anahtar değeri
    const to = el_currency_two.value; //çevrilecek olan ikinci kur anahtar değeri
    const amount = el_amount.value; //miktar değeri


    fetch(`${api}latest?base=${base_currency}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[to];
        el_result.className = 'alert alert-success p-2 text-center mt-3';
        el_result.innerHTML = `${amount} ${base_currency} = ${amount * rate} ${to}`
    })
    el_result.style.display = 'block';

    console.log(el_currency_one.value);
    
});