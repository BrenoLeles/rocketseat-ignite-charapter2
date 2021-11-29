import {useState} from "react";

import {NovaTransacaoModal} from "./components/NovaTransacaoModal";
import { GlobalStyle } from "./styles/global";
import {Dashboard} from "./components/Dashboard";
import {Header} from "./components/Header";
import {TransacaoProvider} from './hooks/TransacaoContext';


export function App() {

    const [seNovaTransacaoModalAberto, setSeNovaTrancacaoModalAberto] = useState(false);

    function handleAbrirNovaTransacaoModal () {
        setSeNovaTrancacaoModalAberto(true);
    }
    function handleFecharNovaTransacaoModal () {
        setSeNovaTrancacaoModalAberto(false);
    }
  return (
    <TransacaoProvider>
        <Header onAbrirNovaTransacaoModal={handleAbrirNovaTransacaoModal}/>
        <Dashboard />
        <GlobalStyle />
        <NovaTransacaoModal
            seAberto={seNovaTransacaoModalAberto}
            onRequestFechar={handleFecharNovaTransacaoModal}
        />
    </TransacaoProvider>
  );
}

