import react from "react";
import Playlist from "./componentes/playlist";

const playlist = [
  {
    nome: "ragatanga",
    imagem: "https://2.bp.blogspot.com/-pOri8w34vaQ/XA_CrtW3ttI/AAAAAAAAITM/xm1n_YOeFEMb3EbRPStId_a-kwq_pwtIgCLcBGAs/s1600/PwxP5SiL.jpg"
  },
  {
    nome: "slipknot",
    imagem: "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2021/11/slipknot-2021.jpg"
  },
  {
    nome: "guns & roses",
    imagem: "https://i1.wp.com/portalcbncampinas.com.br/wp-content/uploads/2019/07/guns.jpg?fit=1024%2C1024&ssl=1"
  },
  {
    nome: "justin bieber",
    imagem: "https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg"
  }
]

export default class PaginaInicial extends react.Component {
  state = {
    telaAtual: ""
  }


  escolheTela = () => {


  }


  render() {
    return (
      <div>
        {
          playlist.map((banda) => {
            return <Playlist
              nome={banda.nome}
              imagem={banda.imagem}
            />
          })
        }
      </div>
    )

  }


}
