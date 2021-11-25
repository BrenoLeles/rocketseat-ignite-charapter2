import { GlobalStyle } from "./styles/global";
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {useState} from "react";
import {NovaTransacaoModal} from "./components/NovaTransacaoModal";
import Modal from "react-modal";

// Modal.setAppElement('root');

export function App() {

    const [seNovaTransacaoModalAberto, setSeNovaTrancacaoModalAberto] = useState(false);

    function handleAbrirNovaTransacaoModal () {
        setSeNovaTrancacaoModalAberto(true);
    }
    function handleFecharNovaTransacaoModal () {
        setSeNovaTrancacaoModalAberto(false);
    }
  return (
    <>
        <Header onAbrirNovaTransacaoModal={handleAbrirNovaTransacaoModal}/>
        <Dashboard />
        <GlobalStyle />
        <NovaTransacaoModal
            seAberto={seNovaTransacaoModalAberto}
            onRequestFechar={handleFecharNovaTransacaoModal}
        />
    </>
  );
}

