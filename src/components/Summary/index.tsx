import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";

import { SummaryContainer, SummaryCard } from './styles';
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
  const { transactions } = useContext(TransactionsContext)

  return(
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Total</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
      
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>

        <strong>R$ 17.000,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}