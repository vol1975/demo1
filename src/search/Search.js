import React, { useState } from 'react'
import { data } from './SearchData.js'
import './searchcss.css'

export default function Search() {
    const [item, setitem] = useState()
    const [filteredUsers, setFilteredUsers] = useState(data);

    const search = () => {
        const filtered =
            data.filter(user => user.username.includes(item))


        console.log(item)

        setFilteredUsers(filtered)
        console.log(filtered);
    }







    return (<>
        <div>
            <label >Search</label>
            <input type='text' placeholder='please enter username' onChange={(e) => setitem(e.target.value)}></input>
            <button onClick={search}> Search</button>
        </div>
        <div><br /><br />
            <table className="container">
                <tr className="row">
                    <th className='col'> Name</th>
                    <th className='col'> User Name</th>
                    <th className='col'> Phone Number</th>

                </tr>
                {data.map((user, ind) => {
                    return <div>  <tr key={ind} className='row'>
                        <td className='col'> {user.name}</td>
                        <td className='col'> {user.username}</td>
                        <td className='col' > {user.phone}</td>
                    </tr></div>

                })}
            </table>




        </div>





        <div></div>
        <div>
            you have entered {item}
        </div>
    </>)
}
