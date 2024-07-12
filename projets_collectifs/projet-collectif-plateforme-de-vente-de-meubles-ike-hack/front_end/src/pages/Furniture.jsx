import { Simulate } from 'react-dom/test-utils';
import furnituresData from '../assets/IkeHack.json'
import { useLocation } from 'react-router-dom'

function Furniture(){
    const sampleLocation = useLocation();
    const actualId = parseInt(sampleLocation.search.slice(1))
    const furniture = furnituresData.find(item => item.id === actualId);

    if (!furniture) {
        return <div>Meuble non trouvé</div>;
      }

        return (
            <div className='container'>
                <div className='carousel'>
                    <img src={furniture.pictures} alt="" />
                </div>
                <div className='furniture_infos'>
                    <h1>{furniture.name}</h1>
                    <h2>{furniture.type}, {furniture.price}€</h2>
                    {/* <p>data.type data.couleur de data.dimentions en data.matière</p> */}
                    <button>BUY</button>
                </div>
            </div>
        )
}

export default Furniture