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
      <div class="avatar">
      </div>
      {users.map((user, i) => (
        <div class="avatar">
          <div class="mb-8 rounded-btn w-24 h-24">
            <img src={`https://i.pravatar.cc/150?img=/${user.id}`}></img>
          </div>
        </div>
      ))}
    </div>
  )
}
