export default function KartuPengeluaran({ data }) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
      <h4 style={{ margin: '0 0 5px 0' }}>{data.keperluan}</h4>
      <p style={{ margin: '0 0 5px 0' }}>Jumlah: Rp {data.jumlah}</p>
      <small style={{ color: 'gray' }}>Tanggal: {data.tanggal}</small>
    </div>
  )
}