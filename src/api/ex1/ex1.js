import react,{useEffect, useState} from "react";
import axios from "axios";
import "./style.css"
const InputId=()=>{
    const [id,setId]=useState("");
    const [idUtilisateur,setIdUtilisateur]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{setIdUtilisateur(res.data)})
    },[])
    return(
        <>
            <form>
                <h1>Details Utilisateur</h1>
                <label>Donner le id : </label>
                <input type="text" id="id" onChange={e=>setId(e.target.value)}/>
                {id=="" ?(
                    <div className="erreur">svp choisir un id valide !! </div>
                ):(
                    <div className="child">
                        {idUtilisateur.filter(u=>u.id==id)
                        .map((e)=>
                        <>
                            <h2>Id : {e.id} Nom : {e.name}</h2>
                            <p>Email : {e.email}</p>
                            <p>Telephone : {e.phone}</p>
                            <p>Site Web : {e.website}</p>
                            <p>Rue : {e.address.street}</p>
                            <p>Ville : {e.address.city}</p>
                        </>
                        )}
                    </div>
                )}
            </form>
        </>
    )
}
export default InputId;