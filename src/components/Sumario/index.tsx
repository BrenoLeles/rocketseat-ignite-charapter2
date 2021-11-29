import entradasImg from '../../assets/imgs/entradas.svg';
import saidasImg from '../../assets/imgs/saidas.svg';
import totalImg from '../../assets/imgs/total.svg';

import {Container} from "./style";
import { useTransacoes } from "../../hooks/TransacaoContext";

export function Summary() {

    const {transacoes} = useTransacoes();

    const sumario = transacoes.reduce((acc, transacao) => {
        if(transacao.tipo == 'deposito') {
            acc.depositos += transacao.valor;
            acc.total += transacao.valor;
        } else {
            acc.retiradas += transacao.valor;
            acc.total -= transacao.valor;
        }
        return acc;
    }, {
        depositos: 0,
        retiradas: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradasImg} alt="Entradas"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.depositos)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidasImg} alt="Saídas"/>
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.retiradas)}
                </strong>
            </div>
            <div className="background-brilhante">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(sumario.total)}
                </strong>
            </div>
        </Container>
    )
}