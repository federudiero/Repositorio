import React from "react";
import Card from "./Card";

import image1 from "../imagenes/Captura de pantalla 2022-06-08 180104.png";
import image2 from '../imagenes/Captura de pantalla 2022-06-08 180620.png';
import image3 from '../imagenes/Captura de pantalla 2022-06-08 180215.png';


const cards = [
  {
    id: 1,
    title: "Final Project Web Development ",
    image: image1,
    url: "https://federudiero.github.io/proyecto-final/",
    text: 'final project of the Web Development Course .First design for the RJA ARIDOS ',
  },
  {
    id: 2,
    title: "Portfolio",
    image: image2,
    url: "https://federudiero.github.io/Repositorio/",
    text: 'This is my personal website, wich contains a portfolio and resume.',
  },
  {
    id: 3,
    title: "Final JavaScript Project",
    image: image3,
    url: "https://federudiero.github.io/proyecto-final-js/",
    text: 'final project of the website of the company RJA ARIDOS, built in JavaScript',
  },
];

function Cards() {
  return (
    <>
   <div className="hola">
     <div className="container d-flex justify-content-center align-items-center ">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} texto={text} />
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Cards;
      

