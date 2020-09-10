import React, {useContext} from "react"
import {BuahContext} from "./BuahContext"

const BuahList = () =>{
  const [Buah, setBuah, inputForm ,setInputForm] = useContext(BuahContext)

  const handleDelete=(event)=>{
    var idBuah = parseInt(event.target.value)
    var newBuah = buah.filter(x=> x.id !== idBuah)
    setBuah([...newBuah])
  }

  const handleEdit=(event)=>{
    var idBuah = parseInt(event.target.value)
    var singleBuah = buah.find(x=> x.id === idBuah)
    setInputForm({...inputForm, name: singleBuah.name, price: singleBuah.price,weight: singleBuah.weight, id: idBuah})
  }

  useEffect( () => {
    if (Buah === null){
      axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
      .then(res => {
        setDaftarBuah(res.data.map(el=>{ return {id: el.id, name: el.name, price: el.price, weight: el.weight }} ))
      })
    }
  }, [daftarBuah])

  return(
    <table>
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>price</th>
          <th>weight</th>
          <th>Action</th>
        </tr>        
      </thead>
      <tbody>

      {buah.map((el, idx)=>{
        return(
          <tr key={el.id}>
            <td>{idx+1}</td>
            <td>{el.name} </td>
            <td>{el.price} </td>
            <td>{el.weight} </td>
            <td>
              <button value={el.id} style={{marginRight: "10px"}} onClick={handleEdit}>Edit</button>
              <button value={el.id} onClick={handleDelete}>Delete</button>
            </td>
          </tr>
        ) 
      })}
      </tbody>
    </table>
  )

}

export default BuahList