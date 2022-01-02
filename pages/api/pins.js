// fetch cryptopunks data
export default async function handler(req, res) {
  // Get data from your database
  const punks = await fetch('https://api.pinterest.com/v3/pidgets/users/mingder78/pins/')
  const result = await punks.json()
  res.status(200).json(result.data.pins)
}
