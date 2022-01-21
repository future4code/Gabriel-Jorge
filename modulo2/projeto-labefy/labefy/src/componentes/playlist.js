import React from 'react'

export default function Playlist(props) {
    return (
        <div>
            <p>{props.nome}</p>
            <img src={props.imagem}/>
        </div>
    )
}