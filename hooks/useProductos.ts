import { useState, useEffect } from "react";

export const useProductos = () => {

  // Guarda la lista de productos
  const [productos, setProductos] = useState<any[]>([]);

  // Controla si los datos todavía están cargando
  const [cargando, setCargando] = useState(true);

  // Se ejecuta al iniciar el hook para cargar los datos
  useEffect(() => {

    const cargarProductos = async () => {

      try {

        // Aquí después conectaremos tu servicio de productos
        // por ahora dejamos una prueba

        const datos = [
          {
            id:1,
            nombre:"Producto prueba",
            artesanoId:1
          }
        ];


        setProductos(datos);


      } catch(error){

        console.log(error);

      } finally {

        setCargando(false);

      }

    };


    cargarProductos();


  }, []);



  // Busca el artesano relacionado con un producto
  const getArtesano = (artesanoId:number) => {


    const artesanos = [
      {
        id:1,
        nombre:"Artesano prueba"
      }
    ];


    return artesanos.find(
      artesano => artesano.id === artesanoId
    );


  };



  // Retorna los datos que usará HomeScreen
  return {

    productos,
    cargando,
    getArtesano

  };


};