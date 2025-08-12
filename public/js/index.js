import { getProductos } from "../services/servicesProductos.js"
import {postProductos} from "../services/servicesProductos.js"

console.log(getProductos())



const itemName = document.getElementById("itemName");
const itemPrice = document.getElementById("itemPrice");
const itemStock = document.getElementById("itemStock");
const btninputItem = document.getElementById("inputItem");
const itemsFatherContainer = document.getElementById("itemsFatherContainer")

btninputItem.addEventListener("click", async function()
{
    const producto =
    {
        itemName: itemName.value,
        itemPrice: itemPrice.value,
        itemStock: itemStock.value
    }

    const respuestaConfirmada = await postProductos(producto)

    console.log(producto)
    datosproductos() 
})

async function datosproductos() 
{
    const itemTextName = document.createElement("p")

    const productosRecibidos = await getProductos()
    productosRecibidos.map(producto => itemTextName.textContent(producto) )
    
    itemsFatherContainer.appendChild(itemTextName)

} 

datosproductos() 
