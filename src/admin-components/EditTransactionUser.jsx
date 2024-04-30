import React, { useState } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker";
import { useLocation } from 'react-router-dom';
const EditTransactionUser = () => {
    const update = useLocation().state.transaction
    const [accountNumber,setAccountNumber] = useState(update.accountNumber);
    const [iban,setIban] = useState(update.iban)
    const [swift,setSwift] = useState(update.swift)
    const [reference,setReference] = useState(update.reference)
    const [beneficiary,setBeneficiary] = useState(update.beneficiary)
    const [beneficiaryBank,setBeneficiaryBank] = useState(update.beneficiaryBank)
    const [amount,setAmount] = useState(update.amount)
    const [date,setDate] = useState(update.date)
    const uuid =localStorage.getItem('uuid')
    const clientId = localStorage.getItem("id")
    const editClientTransaction=()=>{

    }
  return (
    <div className='container mt-5'>
            <h1 className='text-danger fw-bold mt-4 text-center'> Modifier transaction </h1>
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2'   style={{fontSize:"12px",fontWeight:"300",color:"300"}} > ACCOUNT NUMBER </h6>
            <input type="text"  value={accountNumber} onChange={(e)=>setAccountNumber( e.currentTarget.value)}   style={{width:"95%"}} className="form-control col-9 w-75" required id="accountNumber" placeholder=""/>
            
        </div>
        <div className="row mt-4">
        <h6 className='pt-3  col-2 fw-light' > IBAN </h6>
            <input type="text"   onChange={(e)=> setIban(e.currentTarget.value)} className="form-control col-9 w-75" id="ibna" required placeholder=""/>
        </div>

    
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> SWIFT </h6>
            <input type="text" value={swift}  onChange={(e)=> setSwift( e.currentTarget.value)}    className="form-control w-75 col-9" required id="swift" placeholder=""/>
        </div>
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}} > REFERENCE </h6>
            <input type="text" value={reference} onChange={(e)=> setReference(e.currentTarget.value)}    class="form-control w-75 col-9"  required id="reference" placeholder=""/>
        </div>
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2' style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> BENEFICIARY BANK </h6>
            <input type="text " value={beneficiaryBank} onChange={(e)=>setBeneficiaryBank( e.currentTarget.value)} required   class="form-control col-9 w-75" id="beneficiaryBank" placeholder=""/>
        </div>
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> Amount </h6>
            <input type="text" value={amount} onChange={(e)=> setAmount( e.currentTarget.value)}  required  class="form-control col-9 w-75" id="amount" placeholder=""/>
        </div>
        <div className="row mt-4">
            <h6 className='pt-3 fw-light col-2'   style={{fontSize:"12px",fontWeight:"300",color:"#666666"}}> VALUE DATE </h6>
            <div className='col-9 w-75'> <DatePicker
             minDate={new Date()}
              required 
              value={date}
              selected={date} onChange={(e)=> {
                console.log("daaaate",e)
                setDate(e.toUTCString())}}/></div>
           
            
        </div>
        <div className="d-flex justify-content-end pe-0">
        <button  className='btn btn-danger rounded-0 text-decoration-none mt-2 '  data-bs-target="#staticBackdrop" onClick={()=>editClientTransaction()} data-bs-toggle="modal"> Continue</button>
        </div>

    </div>
  )
}

export default EditTransactionUser