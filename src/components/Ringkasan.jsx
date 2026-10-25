export default function Ringkasan({ totalItem }) {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0', marginBottom: '15px' }}>
      <strong>Total data tercatat: {totalItem} pengeluaran</strong>
    </div>
  )
}