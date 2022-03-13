// fetch posts sample data
export default async function handler(req, res) {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const result = await posts.json();
  res.status(200).json(result);
}
