import { useState } from 'react'
import Controllers from "../components/controllers"
import Users from '../components/users'
import Modal from '../components/modal'

export default _ => {
    let [search, setSearch] = useState("Active")
    let [users, setUsers] = useState([
        {
            name: 'Leticia Lopes',
            user: 'leticia.lopes',
            profile: 'Office Support',
            status: true
        },
        {
            name: 'Maycon Cruz',
            user: 'maycon.cruz',
            profile: 'Bussiness Contact',
            status: true
        },
        {
            name: 'Tiago Tapparo',
            user: 'tiago.tapparo',
            profile: 'Driver',
            status: false
        },
    ])
    let [edit, setEdit] = useState({
    })
    
    const setUser = (index, value) => {
        users[index] = value
        console.log(users)
        setUsers([...users])
    }

    return <>
        <Controllers search={search} setSearch={setSearch}/>
        <Users users={users.filter(user => {
            if(search == 'Active'){
                return user.status == true
            } else if(search == 'Inactive') {
                return user.status == false
            } else {
                return true
            }
        })} setUser={setUser} setEdit={setEdit}/>
        <Modal user={edit}/>
    </>
}