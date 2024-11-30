
/*

import fs from 'fs'
const ruta = 'ejemplo.txt'

SINCRONICO
fs.writeFileSync(ruta, 'Hola!')  //Genero un txt nuevo si no existe, si no lo reemplazo

if(fs.existsSync(ruta)) {
   
    let datos = fs.readFileSync(ruta, 'utf8') //Lectura de archivos con x formato
    console.log(datos);

    fs.appendFileSync(ruta, "Hola!\n") //Agregar al final del archivo el siguiente texto (\n este es salto de linea)
    
    fs.unlinkSync(ruta) //Eliminar un archivo
}

//Callbacks
fs.writeFile(ruta, 'Hola!', (error) => {
    if(error) 
        console.log("Error en escritura de archivo")
    fs.readFile(ruta, 'utf8', (error) => {
        if(error)
            console.log("Error en lectura de archivo")
        fs.appendFile(ruta, 'Hola\n', (error) => {
            if(error) 
                console.log("Error en modificar archivo")
            fs.unlink(ruta, (error) =>{
                if(error)
                    console.log("Error en eliminacion de archivo")
            })
        })
    })
})


await fs.writeFile(ruta, 'Hola!')  //Genero un txt nuevo si no existe, si no lo reemplazo

let datos = await fs.readFile(ruta, 'utf8') //Lectura de archivos con x formato
console.log(datos);
    
await fs.appendFile(ruta, "Hola!\n") //Agregar al final del archivo el siguiente texto (\n este es salto de linea)
        
await fs.unlink(ruta) //Eliminar un archivo
*/

import fs from 'fs/promises'
import crypto from 'crypto'
const ruta = 'productos.json'

const leerProductos = async () => {
    try {
        const data = await fs.readFile(ruta, 'utf8') //Lo leo como un JSON
        console.log(data);
        const productos = JSON.parse(data)
        console.log(productos);
        
        return productos
        
    }catch(error) {
        console.log("Error en lectura de productos", error)
    }
}

const agregarProducto = async (nuevoProducto) => {
    try {
        const prods = await leerProductos()
        prods.push(nuevoProducto) //Al transformarlo de JSON a objeto, lo puedo tratar como un array de js
        await fs.writeFile(ruta, JSON.stringify(prods)) //Para guardarlo, lo vuelvo a transformar en JSON
        console.log("Producto almacenado");
    }catch(error) {
        console.log("Error al agregar producto: ",  error)
    }
}

const newProduct = {
    id: crypto.randomBytes(5).toString('hex'), //Genero id unico
    nombre: "Chocolate",
    marca: "Chocolin",
    precio: 150,
    stock: 12
}

agregarProducto(newProduct)