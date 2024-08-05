import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate=useNavigate()
  return (
    <div>Home Pagench modified in development branch <br />
      <button className="border p-1" onClick={()=>navigate('/login')}>Login</button>
    </div>
  )
}

export default Home