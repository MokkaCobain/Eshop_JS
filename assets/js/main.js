
import {Product} from './classes/product.js';

let product = $('#product');
let name = $('#name');
let unitPrice = $('#unitPrice');
let tentatives = document.getElementById(`tentatives`);

let boutons = document.querySelectorAll(".btn");

boutons.forEach((bouton) => {
    bouton.addEventListener(`click`, () => {
     
        let imgProduct = product;
        let nameProduct = name;
        let priceProduct = unitPrice;
        let nouveauProduit = new Product(imgProduct, nameProduct, priceProduct);
        console.log(nouveauProduit);

       // On crée le tableau
    let tr = document.createElement(`tr`);


    // Cellule ID
    let tdProduct = document.createElement(`td`);
    tdProduct.innerText = `${nouveauProduit.product}`;
    tr.appendChild(tdProduct);

    // Cellule opération
    let tdNameProduct = document.createElement(`td`);
    tdNameProduct.innerText = `${nouveauProduit.nameProduct}`;
    tr.appendChild(tdNameProduct);

    // Cellule résultat
    let tdUnitPrice = document.createElement(`td`);
    tdUnitPrice.innerText = `${nouveauProduit.unitPrice}`;
    tr.appendChild(tdUnitPrice);

    // //L'élément tr devient enfant de tbody
    // tentatives.appendChild(tr);
    });
});


