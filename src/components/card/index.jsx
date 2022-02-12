function Card({personagem}){


  

    return(
        
        <div className={personagem.status === "Alive"? ("card"): ('card dead')}>
            <h2>{`${personagem.name.slice(0, 15)} ...`}</h2>
            <p>{personagem.species}</p>
            <img src={personagem.image} alt={personagem.name}></img>

        </div>

    )


}

export default Card