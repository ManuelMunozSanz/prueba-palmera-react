import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (

    <div className="tarjeta">
      <div className="imgDiv">
        <img className="imgProducto" src="https://s3-eu-west-1.amazonaws.com/carritus.com/images_pms/70/59391570.jpg" />
      </div>
      <p className="titulo">Palmera de cacao</p>
      <p className="peso">Pieza 425 g</p>
      <p><span className="negrita">1,75 €</span> <span className="precio">/ud.</span></p>
      <button id="anadirCarritoBtn" class="anadirCarritoBtn" onClick={anadirCarrito}>Añadir al carrito</button>



      <div id="productoAdd" class="productoAdd">

        <div class="productoAddContenedor">
          <div class="enCarro">
            <p class="peso">En carro</p>
            <p><span id="unidad"></span> ud.</p>
          </div>
          <div class="botonesAdd">
            <button onClick={remUnidad}>DEL</button>
            <button onClick={addUnidad}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

var unidades = 0;
var productoAdd = document.getElementById("productoAdd");
var anadirCarritoBtn = document.getElementById("anadirCarritoBtn");
ProductCard.propTypes = {};

ProductCard.defaultProps = {};

export default ProductCard;



function anadirCarrito(){
    console.log("displayUnidades");
    document.getElementById("productoAdd").style.display = "block";
    document.getElementById("anadirCarritoBtn").style.display = "none";
    addUnidad();  
}

function addUnidad(){
    console.log("addUnidad");
    unidades++;
    document.getElementById("unidad").textContent = unidades;
    checkUnidad();
}

function remUnidad(){
    console.log("remUnidad");
    unidades--;
    document.getElementById("unidad").textContent = unidades;
    checkUnidad();
}

function checkUnidad(){
    if(unidades>0){
      document.getElementById("productoAdd").style.display = "block";
    }else{
      document.getElementById("productoAdd").style.display = "none";
      document.getElementById("anadirCarritoBtn").style.display = "block";
    }
}
