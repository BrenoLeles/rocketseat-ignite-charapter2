import Modal from "react-modal";

import {Container, TipoTransacaoContainer, RadioBox} from './style';
import fecharImg from '../../assets/imgs/fechar.svg';
import entradaImg from '../../assets/imgs/entradas.svg';
import saidaImg from '../../assets/imgs/saidas.svg';
import {FormEvent, useState} from "react";
import {api} from "../../services/api";

interface novaTransacaoModalProps {
    seAberto: boolean,
    onRequestFechar: () => void
}

// Modal.setAppElement("root");

export function NovaTransacaoModal({seAberto, onRequestFechar}: novaTransacaoModalProps) {

    const [titulo, setTitulo] = useState('');
    const [valor, setValor] = useState(0);
    const [categoria, setCategoria] = useState('');

    const [tipo, setTipo] = useState('deposito');

    function handleCriarNovaTransacao (event: FormEvent) {
        event.preventDefault();

        const data = {
            titulo,
            valor,
            categoria,
            tipo
        }

        api.post('transacoes', data)
    }

    return (

        <Modal
            isOpen={seAberto}
            onRequestClose={onRequestFechar}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestFechar} className="react-modal-fechar">
                <img src={fecharImg} alt="Fechar Modal"/>
            </button>

            <Container onSubmit={handleCriarNovaTransacao}>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Título" value={titulo} onChange={e => setTitulo(e.target.value)}/>

                <input type="number" placeholder="Valor" value={valor} onChange={e => setValor(Number(e.target.value))}/>

                <TipoTransacaoContainer>
                    <RadioBox
                        type="button"
                        onClick={()=>setTipo('deposito')}
                        seAtivo={tipo === 'deposito'}
                        corAtiva="verde"
                    >
                        <img src={entradaImg} alt="Entrada"/>
                        <span>Entrada</span>

                    </RadioBox>
                    <RadioBox
                        type="button"
                        onClick={()=> setTipo('retirada')}
                        seAtivo={tipo === 'retirada'}
                        corAtiva="vermelha"
                    >
                        <img src={saidaImg} alt="Saída"/>
                        <span>Saída</span>
                    </RadioBox>
                </TipoTransacaoContainer>

                <input type="text" placeholder="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)}/>

                <button type="submit">
                    Cadastrar
                </button>
            </Container>


        </Modal>
    );
}