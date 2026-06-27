import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseSync("artisan.db");



// Crear tabla
export const crearTabla = () => {

  db.execSync(`

    CREATE TABLE IF NOT EXISTS productos (

      id INTEGER PRIMARY KEY AUTOINCREMENT,

      nombre TEXT,

      categoria TEXT,

      precio REAL,

      descripcion TEXT,

      artesano TEXT

    );

  `);

};




// Insertar producto
export const insertarProducto = () => {


  db.runSync(

    `
    INSERT INTO productos
    (nombre,categoria,precio,descripcion,artesano)

    VALUES (?,?,?,?,?)

    `,

    [
      "Vasija artesanal",
      "Ceramica",
      250,
      "Producto hecho a mano",
      "Juan"
    ]

  );


};





// Obtener productos
export const obtenerProductos = () => {


  return db.getAllSync(

    "SELECT * FROM productos"

  );


};





// Actualizar producto
export const actualizarProducto = () => {


 db.runSync(

  `
  UPDATE productos

  SET precio = 300

  WHERE id = 1

  `

 );


};






// Eliminar producto
export const eliminarProducto = () => {


 db.runSync(

  `
  DELETE FROM productos

  WHERE id = 1

  `

 );


};