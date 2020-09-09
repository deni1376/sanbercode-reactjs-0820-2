import React, {Component} from "react"
class Lists extends Component{
        constructor(props){
          super(props)
          this.state = {
            namaBuah : [ 'Semangka', 'Anggur', 'Strawberry', 'Jeruk','Mangga' ],
            HargaBuah :[10000,40000,30000,30000,30000],
            BeratBuah :[1000,500,400,1000,500],   
            inputNama: "",
            inputHarga:"",
            inputBerat:"",
            index: -1
          }
          // bind method if method using normal function
          this.submitFormNama = this.submitFormNama.bind(this);
          this.submitFormHarga = this.submitFormHarga.bind(this);
          this.submitFormBerat = this.submitFormBerat.bind(this);
          this.deleteNama = this.deleteNama.bind(this);
          this.deleteHarga = this.deleteHarga.bind(this);
          this.deleteBerat = this.deleteBerat.bind(this);
        }
      
        // method with normal function
        submitFormNama(event){
          event.preventDefault()
          var index = this.state.index
          if ( index === -1){
            this.setState({
              namaBuah: [...this.state.namaBuah, this.state.inputNama],
              inputNama: ""
            })
          }else{
            var newnamaBuah = this.state.namaBuah 
            newnamaBuah[index] = this.state.inputNama
      
            this.setState({
              namaBuah: [...newnamaBuah],
              inputNama: "",
              index: -1
            })
          }
        }
        submitFormHarga(event){
            event.preventDefault()
            var index = this.state.index
            if ( index === -1){
              this.setState({
                HargaBuah: [...this.state.HargaBuah, this.state.inputHarga],
                inputHarga: ""
              })
            }else{
              var newHargaBuah = this.state.HargaBuah 
              newHargaBuah[index] = this.state.inputHarga
        
              this.setState({
                HargaBuah: [...newHargaBuah],
                inputHarga: "",
                index: -1
              })
            }
          }
          submitFormBerat(event){
            event.preventDefault()
            var index = this.state.index
            if ( index === -1){
              this.setState({
                BeratBuah: [...this.state.BeratBuah, this.state.inputBerat],
                inputBerat: ""
              })
            }else{
              var newBeratBuah = this.state.BeratBuah 
              newBeratBuah[index] = this.state.inputBerat
        
              this.setState({
                BeratBuah: [...newBeratBuah],
                inputBerat: "",
                index: -1
              })
            }
          }
      
        deleteNama(event){
          var index= event.target.value
          var newnamaBuah = this.state.namaBuah
          newnamaBuah.splice(index, 1)
          this.setState({
            namaBuah: [...newnamaBuah],
            inputNama: "",
            index: -1
          })
        }

        deleteHarga(event){
            var index= event.target.value
            var newHargaBuah = this.state.HargaBuah
            newHargaBuah.splice(index, 1)
            this.setState({
              HargaBuah: [...HargaBuah],
              inputHarga: "",
              index: -1
            })
          }

          deleteBerat(event){
            var index= event.target.value
            var newBeratBuah = this.state.BeratBuah
            newBeratBuah.splice(index, 1)
            this.setState({
              BeratBuah: [...newBeratBuah],
              inputBerat: "",
              index: -1
            })
          }
      
      
      
        // method with arrow function
        changeInputNama = (event) =>{
          var value= event.target.value
          this.setState({inputNama: value})
        }
      
        editFormNama = (event) =>{
          var index= event.target.value
          var namaBuahEdit = this.state.namaBuah[index]
          this.setState({
            inputNama: namaBuahEdit,
            index
          })
      
        }
        changeInputHarga = (event) =>{
            var value= event.target.value
            this.setState({inputHarga: value})
          }
        
          editFormHarga = (event) =>{
            var index= event.target.value
            var HargaBuahEdit = this.state.HargaBuah[index]
            this.setState({
              inputHarga: HargaBuahEdit,
              index
            })
        
          }

          changeInputBerat = (event) =>{
            var value= event.target.value
            this.setState({inputBerat: value})
          }
        
          editFormBerat = (event) =>{
            var index= event.target.value
            var BeratBuahEdit = this.state.BeratBuah[index]
            this.setState({
              inputBerat: BeratBuahEdit,
              index
            })
        
          }
      
      
        render(){
          return(
            <>
              <div style={{width: "70vw", margin: "0 auto"}}>
                <h1 style={{textAlign: "center"}}>Daftar Tabel Harga Buah</h1>
                <table>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Nama</th>
                      <th>Harga</th>
                      <th>Berat</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                      {
                        this.state.namaBuah.map((val, index)=>{
                          return(                    
                            <tr key={index}>
                              <td>{index+1}</td>
                              <td>{val}</td>
                              <td>

                              </td>
                              <td>
                                  
                              </td>
                              <td>
                                <button value={index} style={{marginRight: "5px"}} onClick={this.editForm}>Edit</button>
                                <button value={index} onClick={this.deleteNama}>Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                  </tbody>
                </table>
                <br/>
                <br/>
                <form style={{textAlign: "center"}} onSubmit={this.submitFormNama}>
                    <strong style={{marginRight: "10px"}}>Nama</strong>
                    <input required type="text" value={this.state.inputNama} onChange={this.changeInputNama}/>
                    <button>Save</button>
                </form>
                <form style={{textAlign: "center"}} onSubmit={this.submitFormHarga}>
                    <strong style={{marginRight: "10px"}}>Harga</strong>
                    <input required type="text" value={this.state.inputHarga} onChange={this.changeInputHarga}/>
                    <button>Save</button>
                </form>
                <form style={{textAlign: "center"}} onSubmit={this.submitFormBerat}>
                    <strong style={{marginRight: "10px"}}>Berat</strong>
                    <input required type="text" value={this.state.inputBerat} onChange={this.changeInputBerat}/>
                    <button>Save</button>
                </form>
                

              </div>
            </>
          )
        }
      }
export default Lists