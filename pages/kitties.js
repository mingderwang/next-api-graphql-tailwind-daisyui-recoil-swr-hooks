import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/kitties', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const kitties = data
  const exceptGeo = (k) => {
    return !k.startsWith('geo'); // ignore geo field for display
  }
  const jsony = (a) => {
    return Object.entries(a)
      .map(([k, v]) => `${k}: ${v}`) // stringfy an json object a
      .filter(exceptGeo)
      .join(`,\n `)
  }

  return (
    <div class="flex flex-wrap">
      {kitties.map((kitty, i) => (
        <div class="flex flex-nowrap">
          <div class="card w-72 card-bordered card-compact lg:card-normal">
            <figure>
              <img src={`${kitty.image_url_png}`}></img>
            </figure>
            <div class="card-body">
              <h2 class="card-title">{kitty.name}</h2>
              <button class="btn btn-info btn-wide btn-sm">{kitty.email}</button>
              <p> 🐝 </p>
              <pre>{jsony(kitty.status)}</pre>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
