import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import {api} from "../services/api";

interface Transacao {
    id: number,
    titulo: string,
    valor: number,
    tipo: string,
    categoria: string,
    createdAt: string
}

type TransacaoInput = Omit<Transacao, 'id' | 'createdAt'>;

interface TransacaoProviderProps {
    children: ReactNode
}

interface TransacoesContextDados {
    transacoes: Transacao[];
    criarTransacao: (transacao: TransacaoInput) => Promise<void>;
}

const TransacaoContext = createContext<TransacoesContextDados>(
    {} as TransacoesContextDados
);

export function TransacaoProvider({children}: TransacaoProviderProps) {

    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    async function criarTransacao(transacaoInput: TransacaoInput) {
        const response = await api.post('transacoes', {
            ...transacaoInput,
            createdAt: new Date()
        })
        const data = response.data.transacoes;

        setTransacoes([
            ...transacoes,
            data
        ]);
    }

    useEffect(() => {
        api.get('transacoes')
            .then((response) => setTransacoes(response.data.transacoes))
    }, [])

    return (
        <TransacaoContext.Provider value={{transacoes, criarTransacao}} >
            {children}
        </TransacaoContext.Provider>
    )
}

export function useTransacoes() {
    return useContext(TransacaoContext)
}