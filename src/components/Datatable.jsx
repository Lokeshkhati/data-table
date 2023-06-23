import { useState } from 'react'
import { snacks } from '../data'
const Datatable = () => {
    const columns = Object.keys(snacks[0])

    const [sortBy, setSortBy] = useState({
        column: columns[0],
        asc: false
    })

    const sortTable = (snacks) => {
        return snacks.sort((a, b) => {
            if (a[sortBy.column].toString() > b[sortBy.column].toString()) {
                return sortBy.asc ? -1 : 1
            }
            if (b[sortBy.column].toString() > a[sortBy.column].toString()) {
                sortBy.asc ? 1 : -1
            }
            return 0
        })
    }

    return (
        <table className='table'>
            <tr>
                {
                    columns.map((column) => (
                        <th className='table-head' onClick={() => setSortBy((prev) => ({ column, asc: !prev.asc }))} >

                            <div>{column}</div>
                        </th>
                    ))
                }
                {/* <th className='table-head' >ID</th>
                <th className='table-head' >Product Name</th>
                <th className='table-head' > Product Weight</th>
                <th className='table-head' > Price (INR)</th>
                <th className='table-head' >Calories</th>
                <th className='table-head' >Ingredients</th> */}

            </tr>

            {
                sortTable(snacks).map((snack) => (
                    <tr>
                        {
                            columns.map((column) => (
                                <td className='table-data' >

                                    {snack[column]}
                                </td>
                            ))
                        }
                        {/* <td className='table-data '>{snack.id}</td>
                        <td className='table-data '>{snack.product_name}</td>
                        <td className='table-data '>{snack.product_weight}</td>
                        <td className='table-data '>{snack.price}</td>
                        <td className='table-data '>{snack.calories}</td>
                        <td className='table-data '>{snack.ingredients.map((ingredient) => ingredient)}</td> */}



                    </tr>
                ))
            }
        </table>
    )
}
export default Datatable