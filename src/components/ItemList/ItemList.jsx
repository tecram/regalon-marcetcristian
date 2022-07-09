import { useState, useEffect } from "react";
import Item from "../Item/Item";

const ItemList = (items) => {
  const products = [
    {
      id: 1,
      title: "Botella Deportiva",
      descripcion: "Botella de excelente calidad, para que lleves tu agua a todas tus actividades diarias. También es ideal para llevar tu hidratación al gimnasio o actividades outdoor",
      price: 1970,
      pictureUrl: "../../assets/products/botella-deportiva.jpg"
    },
    {
      id: 2,
      title: "Bolsillo con adhesivo",
      descripcion: "Práctico compartimento organizador para colocar en lugares estratégicos cerca del alcance. Viene con adhesivo.",
      price: 860,
      pictureUrl: "../../assets/products/bolsillo-adhesivo.jpg"
    },
    {
      id: 3,
      title: "Lámpara atardecer",
      descripcion: "Perfecta decoración para tu hogar, los colores mejorarán enormemente la estética de tus ambientes. Además, los colores suaves proyectados crearán un ambiente relajado en tu habitación y la llenarán de energía positiva, lo que te ayudará a relajar tu mente y aliviar el estrés.",
      price: 3800,
      pictureUrl: "../../assets/products/lampara-atardecer.jpg"
    }
  ];
  
  const [loading, setLoading] = useState(false);
  const condition = true;

  const promise = new Promise((resolve, reject) => {
    if (condition) {
      setTimeout(() => resolve({ user: "userName" }), 3000);
    } else {
      setTimeout(() => reject("El usuario no se encontró"), 3000);
    }
  });

  useEffect(() => {
    promise
      .then((res) => console.log("Promesa cumplida", res))
      .catch((error) => console.log("Promesa rechazada", error))
      .finally(() => {
        console.log("Esto se ejecuta se cumpla o no la promesa");
        setLoading(false);
      });
  }, []);


  return ( 
    <Item />
   );
}
 
export default ItemList;