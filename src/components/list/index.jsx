import Card from '../card/index'
import imagem from '../../images/rick.jpg'


function List ({list, alternar, count}){


    return (
        <>
            <div className='menu'>
                <img className='title' src={imagem} alt='rick e morth'/>
                <button onClick={() => alternar('prox')}>{`Proximo >>`}</button>
                <p>{`Page ${count} of 42`}</p>
                <button onClick={() => alternar('ant')}>{`<< Anterior`}</button>
            </div>
            <div className='box'>
                
                {list.map((personagem)=> <Card personagem={personagem} key={personagem.id}/>)}
            </div>
        </>



    )
}


export default List