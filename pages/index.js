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
      <button class="inline-block px-4 py-3 text-sm font-semibold text-center text-white uppercase transition duration-200 ease-in-out bg-indigo-500 rounded-md cursor-pointer hover:bg-indigo-600">Tailwind Button</button>
      <button class="btn btn-primary">daisyUI Button</button>

      {users.map((user, i) => (
        <h1 class="text-1xl font-bold underline" key={i}>{user.id}, {user.name}</h1>
      ))}
    </div>
  )
}
