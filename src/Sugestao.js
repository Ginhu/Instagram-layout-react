import UsuariosSugeridos from "./UsuariosSugeridos"
import usuarios from "./usuarios"

export default function Sugestao() {
    return (
        <div>

            {usuarios.map((u) => <UsuariosSugeridos imagem={u.imagem} alt={u.imagem} nome={u.nome} razao={u.razao}/>)}
            
        </div>
    )
}

