import Button from 'components/GeneralUI/Button'
import { NavLink } from 'react-router-dom'
export default function Error() {
    return (
        <div className="error-page">
            <div className="error-page-container">
                <h3>Ops! página não encontrada.</h3>
                <p>Não conseguimos encontrar a página de você está tentando acessar. Clique abaixo para voltar para a página inicial</p>
                <NavLink to="/">Página inicial</NavLink>
            </div>
        </div>
    )
}