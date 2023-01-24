import axios from "axios";

async function getHello() {
  console.log(process.env.API_BASE_URL);
  const response = await axios.get(process.env.API_BASE_URL || '');
  return response.data;
}

export default async function Home() {
  const hello = await getHello();
  return (
    <main>
      <div>
        Home
        {JSON.stringify(hello)}
      </div>
    </main>
  )
}
