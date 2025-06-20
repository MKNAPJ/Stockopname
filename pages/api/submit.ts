import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  const { product, stock } = await req.json()
  const { data, error } = await supabase.from('stockopname').insert([{ product, stock }])
  if (error) return new Response(JSON.stringify({ error }), { status: 500 })
  return new Response(JSON.stringify({ success: true, data }))
}
