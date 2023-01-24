import axios from "axios";

async function getHello() {
  try{
    const response = await axios.get(process.env.API_BASE_URL || '');
    return response.data;
  }catch(e){
    return e;
  }
}

export default async function Home() {
  const hello = await getHello();
  return (
    <main>
      <div
        className="flex flex-col items-center justify-center bg-red-400"
      >
        Home
        {JSON.stringify(hello)}
      </div>
    </main>
  )
}
