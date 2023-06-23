import { useState } from 'react'
import { snacks } from '../data'
const Datatable = () => {
    const columns = Object.keys(snacks[0])

    const [sortBy, setSortBy] = useState({
        column: columns[0],
        asc: false
    })
    const [query, setQuery] = useState('')

    const sortTable = (snacks) => {
        const { column, asc } = sortBy
        return snacks.sort((a, b) => {
            if (a[column].toString() > b[column].toString()) {
                return asc ? -1 : 1
            }

            if (b[column].toString() > a[column].toString()) {
                return asc ? 1 : -1
            }

            return 0
        })
    }

    const filter = (rows) => {
        return rows.filter(row =>
            columns?.some(column =>
                row[column].toString().toLowerCase().indexOf(query.toLowerCase()) > -1))
    }

    return (
        <div>
            <input aria-label='search' type='text' placeholder='search here...' value={query} onChange={(event) => setQuery(event.target.value)} />
            <table className='table'>
                <tr>
                    {
                        columns.map((column) => (
                            <th className='table-head' onClick={() => setSortBy((prev) => ({ column, asc: !prev.asc }))} >

                                <div>{column}</div>
                            </th>
                        ))
                    }


                </tr>

                {
                    sortTable(filter(snacks)).map((snack) => (
                        <tr>
                            {
                                columns.map((column) => (
                                    <td className='table-data' >

                                        {snack[column]}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
export default Datatable