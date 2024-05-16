import css from "./TransactionHistory.module.css"

export default function TransactionHistory ({ transactions }) {
    return (
      <table className={css.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index} id={transaction.id}>
              <td>{transaction.type.toUpperCase()}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }