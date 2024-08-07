import { Produto as Produtos } from '../App'
import Produto from '../components/Produto'

import * as S from './styles'

type Props = {
  produtos: Produtos[]
  favoritos: Produtos[]
}

const ProdutosComponent = ({ produtos, favoritos }: Props) => {
  const produtoEstaNosFavoritos = (produto: Produtos) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos?.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
