import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { deleteUser, getAllUsers } from '../actions/userActions'
import Adminscreen from "./Adminscreen";

export default function Userslist() {
    const dispatch = useDispatch()
    const usersstate = useSelector(state => state.getAllUsersReducer)
    const { error, loading, users } = usersstate
    useEffect(() => {

        dispatch(getAllUsers())

    }, [])
    return (
        <div>
           <Adminscreen/>
            <h1>Users list</h1>
            {loading && <Loading />}
            {error && <Error error="Something went wrong" />}
            <table className='table table-striped table-bordered table-responsive-sm'>
                <thead className='thead-dark'>
                    <tr>
                        <th>User Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button style={{color:'white'}} onClick={() => { dispatch(deleteUser(user._id)) }}> Delete Btn</button></td>
                        </tr>
                    })}
                </tbody>

            </table>

        </div>
    )
}
