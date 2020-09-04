import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Formbuah">
      <h1 style= {{textAlign:"center"}}><b>Form Pembelian Buah</b></h1>
      <br/>
      <div>
        <table style={{textAlign:"left"}}>
          <tr>
            <th><label for= "fname">Nama Pelanggan</label></th>
            <th><input type="text" id="fname" name="fname"></input></th>
          </tr>
          <tr>
            <th><label for="Daftbuah">Daftar Item</label></th>
            <th><input type="checkbox" id="buah1" name="semangka" value="semangka"></input>
                  <label for= "buahS">Semangka</label><br/>
                  <input type="checkbox" id="buah2" name="jeruk" value="jeruk"></input>
                  <label for= "buahJ">Jeruk</label><br/>
                  <input type="checkbox" id="buah3" name="nanas" value="nanas"></input>
                  <label for= "buahN">Nanas</label><br/>
                  <input type="checkbox" id="buah4" name="salak" value="salak"></input>
                  <label for= "buahSA">Salak</label><br/>
                  <input type="checkbox" id="buah5" name="anggur" value="anggur"></input>
                  <label for= "buahA">Anggur</label><br/>            
            </th>
          </tr>
          <tr>
            <th><input type="submit" class="sendbutton" value="Kirim"></input></th>
          <th></th>
          </tr>
        </table>
      </div>
    </div>  
  );
}

export default App;
