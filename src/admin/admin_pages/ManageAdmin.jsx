import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function ManageAdmin() {
    const [admins, setAdmins] = useState([])

    const navigate = useNavigate()

    const fetchAdmin = async () => {
        const res = await axios.get("http://localhost:3000/admin");
        setAdmins(() => res.data)
    }
    const handleDelete = async (id) => {
        const isDeleted = confirm("Are you sure ? You want to delete Admin.");
        if (!isDeleted) return;
        const response = await axios.delete(`http://localhost:3000/admin/${id}`)
        // console.log(response);
        if (response.status === 200) {
            toast.success("Admin Deleted !!");
            fetchAdmin()

        }
    }

    const handleChangeStatus = async (id) => {
        const res = await axios.get(`http://localhost:3000/admin/${id}`)

        if (res.data.status === "1") {
            const result = await axios.patch(`http://localhost:3000/admin/${id}`, { status: "0" })
            if (result.status === 200) {
                toast.success(`${result.data.username} now Admin`)
                fetchAdmin()
            }
            return;
        }
        const result = await axios.patch(`http://localhost:3000/admin/${id}`, { status: "1" })
        if (result.status === 200) {
            toast.success(`${result.data.username} now Administrator`)
            fetchAdmin()
        }

    }

    const getAdmin = () => {
        const loggedAdmin = localStorage.getItem("admin")
        if (loggedAdmin !== null) {
            if (JSON.parse(loggedAdmin)[0].status === "0") {
                navigate("/admin/")
            }
            return;
        }
        navigate("/")
    }
    useEffect(() => {
        getAdmin()
        fetchAdmin()
    }, [])
    return (
        <div className='content-wrapper'>
            <div className="row">
                <div className="col-md-12">
                    <h5 className="mb-2 text-titlecase mb-4">Admin Table</h5>
                    <div className="card">
                        <div className="table-responsive pt-3">
                            <table className="table table-striped project-orders-table">
                                <thead>
                                    <tr>
                                        <th className="ml-5">ID</th>
                                        <th>Email</th>
                                        <th>Username</th>
                                        <th>Status</th>
                                        <th>Profile</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {admins.length > 0 && admins.map((admin) => (
                                        <tr key={admin.id}>
                                            <td>#{admin.id}</td>
                                            <td>{admin.email}</td>
                                            <td>{admin.username}</td>
                                            <td>
                                                <div className="d-flex align-items-center justify-content-center form-switch">
                                                    <input className="form-check-input" type="checkbox" onClick={() => handleChangeStatus(admin.id)} role="switch" defaultChecked={(admin.status == 1) ? true : false} disabled={(admin.id == 1 ? true : false)} />
                                                </div>
                                            </td>
                                            <td><img src={admin.img} alt={admin.username} /></td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <button type="button" className="btn btn-success btn-sm btn-icon-text mr-3">
                                                        Edit
                                                        <i className="typcn typcn-edit btn-icon-append" />
                                                    </button>
                                                    <button type="button" onClick={() => handleDelete(admin.id)} className="btn btn-danger btn-sm btn-icon-text">
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

export default ManageAdmin