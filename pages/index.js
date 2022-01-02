import { getClientBuildManifest } from 'next/dist/client/route-loader'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/pins', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const punks = data.slice(0,21) // only show first 20 punks

  const jsony = (a) => {
    console.log('a', a)
    return Object.entries(a)
      .map(([k, v]) => `${k}: ${v}`) // stringfy an json object a
      .join(`,\n `)
  }

  return (
    <div className="flex flex-wrap">
      {punks.map((punk, i) => (
        <div className="flex flex-nowrap">
          <div className="card w-72 card-bordered card-compact lg:card-normal">
            <figure>
              <img src={`${punk.images['237x'].url}`}></img>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{punk.pinner.full_name}</h2>
              <p>{punk.description}</p>
              <div class="justify-end card-actions">
      <button class="btn btn-secondary">convert to NFT</button>
    </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
