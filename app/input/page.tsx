'use client'
import { useState } from 'react'

export default function InputPage() {
  const [product, setProduct] = useState('')
  const [stock, setStock] = useState(0)

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch('/api/submit', {
      method: 'POST',
      body: JSON.stringify({ product, stock })
    })
    const data = await res.json()
    alert('Berhasil simpan data!')
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>Input Stock Opname</h1>
      <form onSubmit={handleSubmit}>
        <input value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Nama Produk" required />
        <input type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} placeholder="Jumlah" required />
        <button type="submit">Simpan</button>
      </form>
    </main>
  )
}