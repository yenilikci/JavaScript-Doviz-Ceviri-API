//API URL Bilgisi
const api = "https://api.exchangeratesapi.io/";

//Elementlerin Seçimi
const el_currency_one = document.getElementById('currency_one');
const el_currency_two = document.getElementById('currency_two');
const amount = document.getElementById('amount');
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


    el_currency_one.innerHTML += options; 
    el_currency_two.innerHTML += options;
    
    
}) 