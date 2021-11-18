import greys from "../../data/database"
import './cardStyle.css'

const Card = () => {
    return (
        <>
        {greys.map(personagem => 
            <div key={personagem.id}>
                 <h2 className="nome">{personagem.nome}</h2>
                 <p className="personalidade">{personagem.personalidade}</p>
                 <img className="img" width="50%" src={personagem.foto} alt={personagem.foto} />
            </div>
            )}
        </>
    )
}

export default Card