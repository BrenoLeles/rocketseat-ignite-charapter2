import {Container} from "./style";
import { Summary } from "../Sumario";
import {TransactionsTable} from "../TabelaTransacoes";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}