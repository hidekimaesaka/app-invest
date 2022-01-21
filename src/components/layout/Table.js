import styles from "./Table.module.css"

export default function Table({product, qtd, bp, cp, handleRemove}) {
    return(
        <div>
            <table>
                <tr>
                    <td>Produto</td>
                    <td>QTD</td>
                    <td>Preço de compra</td>
                    <td>Preço atual</td>
                    <td>Valor atual</td>
                </tr>
            </table>
        </div>
    )
}