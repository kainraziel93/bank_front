import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import api from '../components/api.js'
const UpdateClientForm = () => {
    const navigator = useNavigate()
    const update = useLocation().state.user
    const id = update.id
    update.firstname=update.firstname?update.firstname:''
    update.email=update.email?update.email:''
    update.lastname=update.lastname?update.lastname:''
    update.balanceJoin=update.balanceJoin?update.balanceJoin:''
    update.balanceIsa=update.balanceIsa?update.balanceIsa:''
    update.balanceAdvance=update.balanceAdvance?update.balanceAdvance:''
    update.username= update.username?update.username:''
    update.password=update.password?update.password:''
    update.newPassword=update.newPassword?update.newPassword:''
     update.adress=update.adress?update.adress:''
     update.city=update.city?update.city:''
    update.role=update.role?update.role:'ADMIN'
    let [firstname,setFirstname]=useState(update.firstname);
    let [email,setEmail]=useState(update.email);
    let [lastname,setLastname] = useState(update.lastname);
    let [balanceJoin,setBalanceJoin] = useState(update.balanceJoin)
    let [balanceIsa,setBalanceIsa] = useState(update.balanceIsa)
    let [balanceAdvance,setBalanceAdvance] = useState(update.balanceAdvance)
    let [account,setAccount] = useState(update.account)
    let [username,setUsername] =useState(update.username)
    let [password,setPassword] = useState(update.password)
    let [newPassword,setNewPassword] = useState(update.password)
    let [adress,setAdress] = useState(update.adress)
    let[city,setCity]=useState(update.city)
    let [role,setRole] = useState(update.role)
        
        useEffect(()=>{
                
        },[])
    const handleSubmit = async ()=>{

        const client = {
            id,firstname,lastname,email,balanceJoin,balanceIsa,adress,city,
            balanceAdvance,account:account,username,role,password,newPassword
        }
        const uuid = localStorage.getItem("uuid");
        console.log("uuid=====>",uuid)
        console.log(client)
        try {
            
            const response = await fetch(`${api}client/update`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json' ,
                    'Authorization':`Bearer ${uuid}`
                  },
                body: JSON.stringify(client)
              });
              const res = await response.json()
            console.log("hadi response f sucess =>",res)
            navigator("/admin")

        } catch (error) {
            console.log("errr =>"+error)
        }
      
    }
    
  return (
    <div className='container user-wire-wrapper position-relative'>
        <div className="d-flex align-items-center  justify-content-between  mt-4 gap-100">
            <h6 className='pt-3 fw-light' > FIRSTNAME </h6>
            <input type="text" value={firstname}  onChange={
                (e)=>{ setFirstname(e.currentTarget.value)
                    console.log(firstname)}
            } class="form-control" id="firstname" placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-4   gap-100">
            <h6 className='pt-3 fw-light ' > LASTNAME </h6>
            <input 
            type="text" 
            value={lastname}
            class="form-control" 
            onChange={
                (e)=>{ setLastname(e.currentTarget.value)
                    console.log(lastname)}} 
                    id="accountNumber"
                     placeholder=""/>
            
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light'> Account </h6>
            <select  class="form-control" id="ibna" value={account} 
            
            onChange={
                (e)=>{ setAccount(e.currentTarget.value)
                    console.log(account)}}   placeholder=""> 
                 <option value="DOLLAR"> DOLLARS</option>  <option value="EURO"> EUROS</option>  <option value="LIVRE">LIVRES</option>
            </select>
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'> EMAIL </h6>
            <input 
            value={email}
            type="text" 
            class="form-control"
             id="email"
              placeholder=""
              onChange={
                (e)=>{ setEmail(e.currentTarget.value)
                    console.log(email)}} />
        </div>
        <div className="d-flex align-items-center mt-2 justify-content-between gap-100">
            <h6 className='pt-3 fw-light'> USERNAME </h6>
            <input 
            value={username}
            type="text" 
            class="form-control"
             id="username"
              placeholder=""
              onChange={
                (e)=>{ setUsername(e.currentTarget.value)
                    console.log(username)}} />
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> PASSWORD </h6>
            <input type="text"
             class="form-control" 
             value={password}
             onChange={
                (e)=>{ setPassword(e.currentTarget.value)
                    console.log(password)}} 
            id="password"
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> RETYPE PASSWORD </h6>
            <input 
            value={newPassword}
            type="text" 
            onChange={
                (e)=>{ setNewPassword(e.currentTarget.value) 
                    console.log(newPassword)}} 
            class="form-control" 
            id="newPassword" 
            placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2   gap-100">
        <h6 className='pt-3 fw-light'> ROLE </h6>
            <select
             type="text"
             class="form-control"
             value={role}
             
             onChange={
                (e)=>{ setRole(e.currentTarget.value)
                    console.log(role)}} 
             id="ibna"  placeholder=""> 
                 <option value="ADMIN"> ADMIN</option>  <option value="CLIENT"> CLIENT</option>  
            </select>
        </div>    
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> Adress </h6>
            <input
             type="text"
             value={adress}
             onChange={
                (e)=>{ setAdress(e.currentTarget.value)
                    console.log(balanceAdvance)}} 
             class="form-control" 
             id="balanceAdvance" 
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> CITY </h6>
            <input
             type="text"
             value={city}
             onChange={
                (e)=>{ setCity(e.currentTarget.value)
                    console.log(city)}} 
             class="form-control" 
             id="balanceAdvance" 
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center mt-2  gap-100">
            <h6 className='pt-3 fw-light'> BALANCE ADVANCE </h6>
            <input
             type="text"
             value={balanceAdvance}
             onChange={
                (e)=>{ setBalanceAdvance(e.currentTarget.value)
                    console.log(balanceAdvance)}} 
             class="form-control" 
             id="balanceAdvance" 
             placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> BALANCE ISA </h6>
            <input
            value={balanceIsa}
             type="text"
             onChange={
                (e)=>{ setBalanceIsa(e.currentTarget.value)
                    console.log(balanceIsa)}} 
             class="form-control"
              id="amount"
               placeholder=""/>
        </div>
        <div className="d-flex align-items-center  mt-2 gap-100">
            <h6 className='pt-3 fw-light'> BALANACE JOIN </h6>
            <input
            value={balanceJoin}
             type="text" 
             class="form-control" 
             onChange={
                (e)=>{ setBalanceJoin(e.currentTarget.value) 
                    console.log(balanceJoin)}} 
             id="balanceJoin" 
             placeholder=""/>
        </div>
        <div className="d-flex justify-content-end pe-4">
        <button  className='btn login-btn mt-5' onClick={handleSubmit}> update/modifier</button>
        </div>
        
    </div>
  )
}

export default UpdateClientForm