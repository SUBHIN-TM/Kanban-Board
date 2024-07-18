import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate=useNavigate()
  return (
    <div>Home Page <br />
      <button className="border p-1" onClick={()=>navigate('/login')}>Login</button>
    </div>
  )
}

export default Home