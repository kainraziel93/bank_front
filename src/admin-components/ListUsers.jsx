import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import api from '../components/api.js'
import WirePdf from '../user-components/WirePdf.jsx';
const ListUsers = () => {
    const [user,setUser]= useState({})
    const [users,setUsers]=useState([]);
    const navigate = useNavigate()
    const uuid = localStorage.getItem('uuid')
    
    const fetchUsers =async ()=>{
            
        console.log("uuid ==========>"+uuid)
        const axiosConfig = {
            headers: {
              Authorization: `Bearer ${uuid}`
            }
          };
       
        await axios.get(`${api}client`,axiosConfig)
        .then((response)=>{
            console.log("-----------------------------------------------------------------------")
            console.log("response",response.data)
            setUsers(response.data)})
        .catch(e=>console.log("err =>"+e))
    }
    useEffect( ()=>{
        
        if( localStorage.getItem('role')!=="ADMIN"){
           
            navigate('/')}

       else fetchUsers();
        
      },[])
      const deleteClient = async (id)=>{
        const res = await fetch(`${api}client/delete/${id}`,{
            headers: {
                'Content-Type':'application/json' ,
                'Authorization':`Bearer ${uuid}`
              },
        })
        const response = await res.json()
        await fetchUsers();
      }

  return (
    <div className='container'>
        <Link className='btn  btn-primary' to="add" style={{borderRadius:"20px"}}> Créer un nouveau client </Link>
        <h6 className='my-4 mx-4'>{users.length} utilisateur(s)</h6>
        <table className='table table-striped border'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>Fullname</th>
                    <th>Release</th>
                    <th>role</th>
                    <th>actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    users&&
                    users.map((element,key)=>{
                        
                        return (<tr key={key}>
                            <td>{element.id}</td>
                            <td style={{cursor:"pointer",textDecoration:"underline",color:"blue"}} onClick={()=>navigate("/admin/transaction/"+element.id,{state:{user:element}})}>{element.firstname+" "+element.lastname}</td>
                            <td>{element.balance}</td>
                            <td>{element.role}</td>
                            <td className='d-flex gap-5'> <span  style={{cursor:"pointer",textDecoration:"underline",color:"blue"}} onClick={()=>navigate("edit",{state:{user:element}})}>edit/modifier</span>
                            { element.id!==1 && < span data-bs-toggle="modal" data-bs-target="#deleteModal" style={{cursor:"pointer",textDecoration:"underline",color:"blue"}} onClick={()=>setUser(element)}>delete/supprimer</span>}</td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="deleteModalLabel">suppression de l t utilisateur</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                          <h6 className='fw-light'>l utilisateur {user.firstname +" "+user.lastname } sera supprimer,voulez vous continuer ?</h6>
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal"  onClick={()=>deleteClient(user.id)}>Supprimer</button>
                            
                          </div>
                        </div>
                      </div>
                   </div>
    </div>
  )
}

export default ListUsers