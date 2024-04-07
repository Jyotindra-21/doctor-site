import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

function AHome() {

    const [users, setUsers] = useState([])
    const [appointments, setAppointments] = useState([])

    const fetchUser = async () => {
        const result = await axios.get("http://localhost:3000/users");
        setUsers((prev) => result.data)
    }

    const fetchAppointment = async () => {
        const result = await axios.get("http://localhost:3000/appointments");
        setAppointments((prev) => result.data)
    }

    const handleDelete = async (id) => {
        const isTrue = confirm("Are you sure ? You want to delete this user");
        if (!isTrue) return;
        const response = await axios.delete(`http://localhost:3000/users/${id}`);

        if (response.status === 200) {
            toast.success("User deleted successfully.")
            fetchUser()
        } else {
            toast.error("Something went wrong while delete user !!")
        }
    }

    useEffect(() => {
        fetchUser()
        fetchAppointment()
    }, [])
    return (
        <div className="content-wrapper">
            <div className="row">
                <div className="col-xl-6 grid-margin stretch-card flex-column">
                    <h5 className="mb-2 text-titlecase mb-4">Status statistics</h5>
                    <div className="row">
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <p className="mb-0 text-muted">Total User</p>
                                        <p className="mb-0 text-muted">+1.37%</p>
                                    </div>
                                    <h4>{users.length}</h4>
                                    <canvas id="transactions-chart" className="mt-auto" height={65} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <div>
                                            <p className="mb-2 text-muted">Sales</p>
                                            <h6 className="mb-0">563</h6>
                                        </div>
                                        <div>
                                            <p className="mb-2 text-muted">Orders</p>
                                            <h6 className="mb-0">720</h6>
                                        </div>
                                        <div>
                                            <p className="mb-2 text-muted">Revenue</p>
                                            <h6 className="mb-0">5900</h6>
                                        </div>
                                    </div>
                                    <canvas id="sales-chart-a" className="mt-auto" height={65} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row h-100">
                        <div className="col-md-6 stretch-card grid-margin grid-margin-md-0">
                            <div className="card">
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <p className="text-muted">Total Appointments</p>
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <h3 className="mb-">{appointments.length}</h3>
                                        <h3 className="mb-">78%</h3>
                                    </div>
                                    <canvas id="sales-chart-b" className="mt-auto" height={38} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row h-100">
                                        <div className="col-6 d-flex flex-column justify-content-between">
                                            <p className="text-muted">CPU</p>
                                            <h4>55%</h4>
                                            <canvas id="cpu-chart" className="mt-auto" />
                                        </div>
                                        <div className="col-6 d-flex flex-column justify-content-between">
                                            <p className="text-muted">Memory</p>
                                            <h4>123,65</h4>
                                            <canvas id="memory-chart" className="mt-auto" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 grid-margin stretch-card flex-column">
                    <h5 className="mb-2 text-titlecase mb-4">User statistics</h5>
                    <div className="row h-100">
                        <div className="col-md-12 stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                                        <div>
                                            <p className="mb-3">Monthly Increase</p>
                                            <h3></h3>
                                        </div>
                                        <div id="income-chart-legend" className="d-flex flex-wrap mt-1 mt-md-0" />
                                    </div>
                                    <canvas id="income-chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-12">
                    <h5 className="mb-2 text-titlecase mb-4">User Table</h5>
                    <div className="card">
                        <div className="table-responsive pt-3">
                            <table className="table table-striped project-orders-table">
                                <thead>
                                    <tr>
                                        <th className="ml-5">ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.length > 0 && users.map((user) => (
                                        <tr key={user.id}>
                                            <td>#{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.username}</td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                        Edit
                                                        <i className="typcn typcn-edit btn-icon-append" />
                                                    </button>
                                                    <button type="button" onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm btn-icon-text">
                                                        Delete
                                                        <i className="typcn typcn-delete-outline btn-icon-append" />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AHome