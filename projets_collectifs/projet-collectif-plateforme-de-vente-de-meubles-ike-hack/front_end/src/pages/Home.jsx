import furnituresData from '../assets/IkeHack.json'
import { useNavigate } from 'react-router-dom';

function Home() {
  return (
    <div className="grid">
    {furnituresData.map((furniture, index) => (
      <AllFurnitures key={index} data={furniture} />
    ))}
  </div>
)
}


function AllFurnitures({ data }){
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/Furniture?'+data.id); // Navigue vers la page "/about"
  };
return (
  <div className="card">
    <div className='img_container'>
      <img src={data.pictures}/>
    </div>
    <h1>{data.name}</h1>
    <p>{data.type}</p>
    <p>{data.price}€</p>
    <button onClick={handleClick}>Buy</button>
  </div>
)
}

export default Home
