import { useState } from 'react'
import Header from './components/Header'
import Ringkasan from './components/Ringkasan'
import FormTambah from './components/FormTambah'
import DaftarPengeluaran from './components/DaftarPengeluaran'

export default function App() {
  const [daftarPengeluaran, setDaftarPengeluaran] = useState([]) 

  const tambahData = (dataBaru) => {
    setDaftarPengeluaran([...daftarPengeluaran, dataBaru])
  }

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', padding: '20px' }}>
      <Header />
      
      <Ringkasan totalItem={daftarPengeluaran.length} />
      
      <FormTambah onSimpan={tambahData} />
      
      <DaftarPengeluaran riwayat={daftarPengeluaran} />
    </div>
  )
}