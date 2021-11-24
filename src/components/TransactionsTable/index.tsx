import {Container} from "./style";

export function TransactionsTable() {
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
                <tr>
                    <td>Desenvolvimento de WebSite</td>
                    <td className="deposito">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>23/11/2021</td>
                </tr>
                <tr>
                    <td>Desenvolvimento de WebSite</td>
                    <td className="retirada">R$12.000</td>
                    <td>Desenvolvimento</td>
                    <td>23/11/2021</td>
                </tr>
              </tbody>
          </table>
      </Container>
    );
}