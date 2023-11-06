import React from "react";
import "./style.css"
const Users=(props)=>{
    return(
        <>
        <h1>Nombre s'Utilisateurs : {props.users.length}</h1>
        {props.users.map((e)=>
            <div className="divParent">
                <h2> nom : {e.name} {e.username} </h2>
                <p>email : {e.email} </p>
                <p>Ville : {e.address.city}</p>
                <button type="button" onClick={()=>{props.PostsId(e.id)}}>Details Posts</button>
                {props.userId==e.id ?(
                    <>
                    <h3>Nombre de Posts : {props.posts.length} </h3>
                    {props.posts.map((p)=>
                        <>
                        <div className="posts">
                        <h4>{p.title}</h4>
                        <p>{p.body}</p>
                        </div>
                        </>
                    )}
                    </>
                ):null}
            </div>
        )}

        </>
    )
}
export default Users;
