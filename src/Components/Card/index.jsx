import './cards.css'
import { useState } from 'react'

export const Card = ({
  name,
  status,
  species,
  image,
  location,
  gender,
  type,
  origin
}) => {
  const [isOpen, setOpen] = useState(false)

  return (<>

  <div className="card" onClick={() => {
    setOpen(true)
  }}>
    <img className='img' src={image} alt="" />
          <p className="contentName">{name}</p>
      <br/>
      <div>
        <p className="contentTittle">Ultimo lugar en el que fue visto:</p>
        <p className="fs-5">{location.name}</p>
      </div>
      <br/>
      <div>
        <p className="contentTittle">Estatus:</p>
        <p className="fs-5">{status}</p>
      </div>
      <br/>

</div>

{
        isOpen && (

        <div className="modal">
            <button onClick={() => {
              setOpen(false)
            }} className="closeButton">Close</button>
            <img src={image} alt="loading" className="characterImage"/>

            <div className="informationCharacter">
              <span>Nombre: {name}</span>
              <span>Especie: {species}</span>
              <span>Estado: {status}</span>
              <span>Genero: {gender}</span>
              <span>Localizacion: {location.name}</span>
              <span>Dimension de origen: {origin.name}</span>
            </div>
          </div>
        )}

  </>)
}
