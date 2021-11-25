import {Container} from "./style";
import {useEffect, useState} from "react";
import { api } from '../../services/api'

interface Transacao {
    id: number,
    titulo: string,
    valor: number,
    tipo: 'deposito' | 'retirada',
    categoria: string,
    createdAt: string
}

export function TransactionsTable() {

    const [transacoes, setTransacoes] = useState<Transacao[]>([]);

    useEffect(() => {
        api.get('transacoes')
            .then((response) => setTransacoes(response.data.transacoes))
    }, [])

    return (
      <Container>
          <table>
              <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
              </thead>
              <tbody>
              {transacoes.map( transacao => (
                  <tr key={transacao.id}>
                      <td>{transacao.titulo}</td>
                      <td className={transacao.tipo}>
                          {new Intl.NumberFormat('pt-BR', {
                              style: 'currency',
                              currency: 'BRL'
                          }).format(transacao.valor)}
                      </td>
                      <td>{transacao.categoria}</td>
                      <td>
                          {new Intl.DateTimeFormat('pt-BR').format(new Date(transacao.createdAt))}
                      </td>
                  </tr>
              ))}
              </tbody>
          </table>
      </Container>
    );
}