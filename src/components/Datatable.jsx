import { snacks } from '../data'
const Datatable = () => {
    const columns = Object.keys(snacks[0])
    console.log(columns)
    return (
        <table className='table'>
            <tr>
                {
                    columns.map((column) => (
                        <th className='table-head' >

                            {column}
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
                snacks.map((snack) => (
                    <tr>
                        <td className='table-data '>{snack.id}</td>
                        <td className='table-data '>{snack.product_name}</td>
                        <td className='table-data '>{snack.product_weight}</td>
                        <td className='table-data '>{snack.price}</td>
                        <td className='table-data '>{snack.calories}</td>
                        <td className='table-data '>{snack.ingredients.map((ingredient) => ingredient)}</td>

                    </tr>
                ))
            }
        </table>
    )
}
export default Datatable