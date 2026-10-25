import { useState } from 'react'

export default function FormTambah({ onSimpan }) {
  const [tanggal, setTanggal] = useState('')
  const [keperluan, setKeperluan] = useState('')
  const [jumlah, setJumlah] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!tanggal || !keperluan || !jumlah) {
      alert("Data Tidak Bisa Kosong")
      return
    }

    const dataBaru = {
      id: Date.now(),
      tanggal: tanggal,
      keperluan: keperluan,
      jumlah: jumlah
    }

    onSimpan(dataBaru)

    setTanggal('')
    setKeperluan('')
    setJumlah('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px dashed black', padding: '15px', marginBottom: '20px' }}>
      <h3>Tambah Pengeluaran Baru</h3>
      
      <div>
        <label>Tanggal: </label>
        <input type="date" value={tanggal} onChange={(e) => setTanggal(e.target.value)} />
      </div>
      <br/>

      <div>
        <label>Keperluan: </label>
        <input type="text" value={keperluan} onChange={(e) => setKeperluan(e.target.value)} placeholder="Contoh: Makan siang" />
      </div>
      <br/>

      <div>
        <label>Jumlah (Rp): </label>
        <input type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
      </div>
      <br/>

      <button type="submit">Tambah Data</button>
    </form>
  )
}