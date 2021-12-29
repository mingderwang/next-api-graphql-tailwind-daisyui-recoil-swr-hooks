// fetch cryptokitties data
export default async function handler(req, res) {
  // Get data from your database
  const kitties = await fetch('https://api.cryptokitties.co/kitties?limit=20')
  const result = await kitties.json()
  res.status(200).json(result.kitties)
}
