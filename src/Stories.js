import Story from "./Story"
import storyConteudos from "./storyConteudos"

export default function Stories() {
    return (
        <div class="stories">
          {storyConteudos.map((u) => <Story imagem={u.imagem} nome={u.nome}/>)}

          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
    )
}