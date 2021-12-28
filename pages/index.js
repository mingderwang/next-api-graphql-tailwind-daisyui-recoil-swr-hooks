import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSWR('/api/users', fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const users = data
  console.log(data)
  return (
    <div>
      {users.map((user, i) => (
        <h1 className="text-3xl font-bold underline"  key={i}>{user.id}</h1>
      ))}
    </div>
  )
}
