let liEu, li, ul;

ul = document.querySelector('ul');
li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li =  document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

liEu = document.querySelector('li#EU');
liEu.remove();

document.querySelectorAll('h2')[1].textContent = '7つの大陸';

let h2sevenOcean = document.querySelector('h2#sevenOcean');
let oceanAry = [
    '北極海',
    '北大西洋',
    '南大西洋',
    'インド洋',
    '北太平洋',
    '南太平洋',
    '南極海'
  ]

ul = document.createElement('ul');
h2sevenOcean.insertAdjacentElement('afterend', ul);
for(let o of oceanAry) {
    li = document.createElement('li');
    li.textContent = o;
    ul.insertAdjacentElement('beforeend', li);
}

let h1 = document.querySelector('h1');
h1.style.color = '#0000FF';
h1.style.fontSize = '10pt';

let h2Ary = document.querySelectorAll('h2');
for(let o of h2Ary) {
    //o.style.color = 'red';
    //o.style.fontSize = '50pt';
    o.style.backgroundColor = 'palegreen';
}