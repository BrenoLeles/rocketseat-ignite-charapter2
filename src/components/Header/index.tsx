import logo from '../../assets/imgs/logo.svg';
import { Container, Content } from "./style";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt="BL Money"/>
                <button>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}