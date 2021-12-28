import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const users = data
  console.log(data)
  return (
    <div class="flex flex-wrap">
      {users.map((user, i) => (
        <div class="flex flex-nowrap">
          <div class="card w-72 card-bordered card-compact lg:card-normal">
            <figure>
              <img src={`https://i.pravatar.cc/150?img=/${user.id}`}></img>
            </figure>
            <div class="card-body">
              <h2 class="card-title">{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
