import entradasImg from '../../assets/imgs/entradas.svg';
import saidasImg from '../../assets/imgs/saidas.svg';
import totalImg from '../../assets/imgs/total.svg';

import {Container} from "./style";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas"/>
                </header>
                <strong>-R$500,00</strong>
            </div>
            <div className="background-brilhante">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    )
}