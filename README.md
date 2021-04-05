# ShoppingCart

Shopping Cart es un demo de un proceso de compra de articulos, llenado de un carro y realizanción  de ordenes, desarrollado con angular 11, manejador de estados ngrx y PrimeNg 
y todo conectado con la base de datos de firebase. 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.3.

## Link Deploy
Mediante Github Pages = https://ingmachine.github.io/ShoppingCart/#/home y netlify = https://kind-golick-a2c182.netlify.app/#/home

## Pasos para deplegar el proyecto de forma local

Descargar el proyecto o utilizar git clone https://github.com/IngMachine/ShoppingCart.git

En la terminal en la carpeta del proyecto ejecutar los siguientes comando.

```bash
npm install
ng serve -o
```
## Funcionamiento y vistas del Shopping Cart
El usuario (No registrado) podra ver la pestaña home donde solo podra ver algunos de los productos y la pestaña Products donde se encuentran
todos los productos que pueden ser agregados al cart.
![](/home.png)
![](/products.png)
El usuario (No registrado) al darle click en comprar un producto, en la pestaña Carts, Orders lo redirecciionara al login donde si tiene una cuenta se podraa loguear si no 
debera registrarse
| Login | SignUp |
| --- | --- |
| ![](/login.png) | ![](/signUp.png) |
