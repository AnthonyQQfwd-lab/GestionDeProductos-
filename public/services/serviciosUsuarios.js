async function getUsers() 
{
    try 
    {

        const respoonse = await fetch('http://localhost:3001/usuarios', 
        {


            method:'GET',
            headers : 
            {
                'Content-type': 'application/json'
            }

        })

        const users = await respoonse.json();

        return users; 



    } 
    catch (error) 
    {
        console.error("hay un error al obtener los usuarios", error)
        throw error
    }
}

async function postUsers() 
{
    try 
    {

        const respoonse = await fetch('http://localhost:3001/usuarios', 
        {


            method:'POST',
            headers : 
            {
                'Content-type': 'application/json'
            }

        })

        const users = await respoonse.json();

        return users; 



    } 
    catch (error) 
    {
        console.error("hay un error al obtener los usuarios", error)
        throw error
    }
}

export {getUsers};
export {postUsers}