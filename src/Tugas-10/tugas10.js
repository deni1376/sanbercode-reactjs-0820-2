import React from 'react';

let dataHargaBuah = [
    {nama: "Semangka", harga: 10000, berat: 1000},
    {nama: "Anggur", harga: 40000, berat: 500},
    {nama: "Strawberry", harga: 30000, berat: 400},
    {nama: "Jeruk", harga: 30000, berat: 1000},
    {nama: "Mangga", harga: 30000, berat: 500}
  ]

class PropsBuah extends React.Component {
  render() {
      const DaftarBuah=this.props.dataHargaBuah
    return (
        <div>
            <h1 style = {{textAlign:"center"}}>Tabel Harga Buah </h1>
        <table border="1px" classname="tb1">
            <thead>
                <tr>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Berat</th>
                </tr>
            </thead>
            <tbody>
                {dataHargaBuah.map(el=>{
                    return(
                        <tr>
                            <td>{el.nama}</td>
                            <td>{el.harga}</td>
                            <td>{el.berat/1000} Kg</td>
                        </tr>
                    )
        })}
            </tbody>
            </table>
    </div>
    )
  }
}





export default PropsBuah