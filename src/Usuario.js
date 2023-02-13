import { useState } from "react"

export default function Usuario(props) {
  const [nome, setNome] = useState(props.nome)
  const [foto, setFoto] = useState(props.imagem)

  function onclickpencil () {
    let nomeDigitado = prompt('Digite seu nome: ')
    if(nomeDigitado != "") {
      setNome(nomeDigitado)
    }
  }

  function onclickfoto () {
    let fotoEndereco = prompt('Digite o link da sua foto: ')
    console.log(fotoEndereco)
    if (fotoEndereco != "" && fotoEndereco != null) {
      setFoto(fotoEndereco)
    }
  }


    return (
        <div class="usuario">
          <img src={foto} alt={props.alt} onClick={onclickfoto} data-test="profile-image"/>
          <div class="texto">
            <span>
              <strong data-test="name">{nome}</strong>
              <ion-icon name="pencil" onClick={onclickpencil} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
}