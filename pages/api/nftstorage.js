// fetch nft.storage records data
import { apiKey } from '../APIKEYS'

export default async function handler(req, res) {
  // Get data from your database
  const cids = await fetch('https://api.nft.storage?limit=100', {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
  })
  const result = await cids.json()
  const newResult = result.value.map((cid)=>{
    fetch(
      `https://ipfs.io/ipfs/${cid.cid}/metadata.json`,
    ).then(console.log)})
  res.status(200).json(newResult)
    }