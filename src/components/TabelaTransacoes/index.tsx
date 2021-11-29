import {Container} from "./style";
import {useTransacoes} from "../../hooks/TransacaoContext";

export function TransactionsTable() {

    const {transacoes} = useTransacoes();

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
                  <tr key={transacao.titulo}>
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