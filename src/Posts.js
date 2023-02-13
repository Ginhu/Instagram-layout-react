import Post from "./Post"
import postagens from "./postagens"

export default function Posts() {
    return (
        <div class="posts">
          {postagens.map((u) => <Post fotoUsuario={u.fotoUsuario} nomeUsuario={u.nomeUsuario} imagemPostagem={u.imagemPostagem} altPostagem={u.altPostagem} curtidoPor={u.curtidoPor} outrasCurtidas={u.outrasCurtidas }/>)}
        </div>
    )
}