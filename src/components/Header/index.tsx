import logo from '../../assets/imgs/logo.svg';
import { Container, Content } from "./style";

interface HeaderProps {
    onAbrirNovaTransacaoModal: () => void;
}

export function Header({onAbrirNovaTransacaoModal}: HeaderProps) {


    return (
        <Container>
            <Content>
                <img src={logo} alt="BL Money"/>
                <button type="button" onClick={onAbrirNovaTransacaoModal}>
                    Nova transação
                </button>

            </Content>
        </Container>
    )
}