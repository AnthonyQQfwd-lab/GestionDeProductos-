console.log("hola")


import {getUsers} from "../services/serviciosUsuarios.js"

console.log(getUsers())

async function datosUsuarios() 
{
    const datosrecibidos = await getUsers()
    console.log(datosrecibidos)    
}

datosUsuarios() 


const nombre = document.getElementById("nombre")
const edad = document.getElementById("edad")
const correo = document.getElementById("correo")
const btnguardar = document.getElementById("guardar")


btnguardar.addEventListener("click", async function()
{
    const user =
    {
        nombre: nombre.value,
        edad: edad.value,
        correo: correo.value
    }

    console.log(user)

})
