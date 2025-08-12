async function getProductos() 
{
    try 
    {

        const respuesta = await fetch('http://localhost:3001/productos', 
        {


            method:'GET',
            headers : 
            {
                'Content-type': 'application/json'
            }

        })

        const productos = await respuesta.json();

        return productos; 



    } 
    catch (error) 
    {
        console.error("hay un error al obtener los productos", error)
        throw error
    }
}

async function postProductos(producto) 
{
    try 
    {

        const respuesta = await fetch('http://localhost:3001/productos', 
        {


            method:'POST',
            headers : 
            {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(producto)

        })

        const productos = await respuesta.json();

        return productos; 



    } 
    catch (error) 
    {
        console.error("hay un error al crear el producto", error)
        throw error
    }
}

async function deleteProductos() 
{
    try 
    {

        const respuesta = await fetch('http://localhost:3001/productos', 
        {


            method:'DELETE',
            headers : 
            {
                'Content-type': 'application/json'
            }

        })

        const productos = await respuesta.json();

        return productos; 



    } 
    catch (error) 
    {
        console.error("hay un error al eliminar el producto", error)
        throw error
    }
}

export {getProductos};
export {postProductos}
