
import React from 'react'
import Art from '../../images/isometric-art-tecnology.svg'


const seccionMejoresTecnologias = () => (

    <div className="container">
        <div className="content h-100v">
            <div className="g-30-70">
                <div className="content__right">
                    <pre>
                        PARA UN MUNDO CONECTADO
                    </pre>
                    <h2 className="biggerTitle">
                        Usamos<br></br>las mejores<br></br> tecnologías.
                    </h2>
                </div>

                <div className="content__left">
                    <img className="seccionMejoresTecnologias__img" src={Art} alt="Mejores tecnologías arte"></img>
                </div>
            </div>
        </div>
    </div>

)


export default seccionMejoresTecnologias