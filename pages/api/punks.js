// fetch cryptopunks data
export default async function handler(req, res) {
  // Get data from your database
  const punks = await fetch('https://cryptopunks.herokuapp.com/api/punks')
  const result = await punks.json()
  res.status(200).json(result)
}
