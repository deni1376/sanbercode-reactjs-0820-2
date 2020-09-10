import React, {useState, useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahForm = () =>{
  const [buah, setBuah, inputForm, setInputForm] = useContext(BuahContext)


  const handleSubmit = (event) =>{
    event.preventDefault()
    var newId = buah.length + 1
    if (inputForm.id === null){
      setBuah([...buah, {name: inputForm.name, price: inputForm.price,weight: inputForm.weight, id: newId}])
    }else{
      var singleBuah = buah.find(x=> x.id === inputForm.id)
      singleBuah.name = inputForm.name
      singleBuah.price = inputForm.price
      singleBuah.weight = inputForm.weight
      setBuah([...buah])
    }
    setInputForm({name: "", price: 0, weight:0, id: null})
  }


  const handleChangeName = (event) =>{
    setInputForm({...inputForm, name: event.target.value})
  }
  
  const handleChangePrice = (event) =>{
    setInputForm({...inputForm, price: event.target.value})
  }

  const handleChangeWeight = (event) =>{
    setInputForm({...inputForm, weight: event.target.value})
  }


  return(
    <>
      <form onSubmit={handleSubmit}>

        <strong>Name of Buah : </strong><input type="text" value={inputForm.name} onChange={handleChangeName} /><br/>
        <strong>Price of Buah : </strong><input type="number" value={inputForm.price} onChange={handleChangePrice} />
        <strong>Weight of Buah : </strong><input type="number" value={inputForm.weight} onChange={handleChangeWeight} />
        <br/>
        <button>submit</button>
      </form>
    </>
  )

}

export default BuahForm