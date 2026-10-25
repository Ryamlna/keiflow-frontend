import KartuPengeluaran from './KartuPengeluaran'

export default function DaftarPengeluaran({ riwayat }) {
  if (riwayat.length === 0) {
    return <h4 style={{ color: 'red' }}>Belum ada data Pengeluaran</h4>
  }

  return (
    <div>
      <h3>Riwayat Pengeluaran:</h3>
      {riwayat.map((item) => (
        <KartuPengeluaran key={item.id} data={item} /> 
      ))}
    </div>
  )
}