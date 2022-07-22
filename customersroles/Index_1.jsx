import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import customers from "../json/customers";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";
import $ from "jquery";

let SlideToggle;

const Customers = () => {
    const [date, setDate] = useState(new Date());
    const [currencyOptions, setcurrencyOptions] = useState([
        { id: 1, text: "Select Currency" },
        { id: 2, text: "EUR Euro" },
        { id: 3, text: "INR Indoan Rupee" },
        { id: 4, text: "USD- US Dollar" },
    ]);
    const [countryOptions, setcountryOptions] = useState([
        { id: 1, text: "Select Country" },
        { id: 2, text: "Afghanistan" },
        { id: 3, text: "Albania" },
        { id: 4, text: "American Samoa" },
        { id: 5, text: "Algeria" },
        { id: 6, text: "Andorra" },
        { id: 7, text: "Angola" },
        { id: 8, text: "Anguilla" },
        { id: 9, text: "United States" },
    ]);
    useEffect(() => {
        SlideToggle = window.ReactSlideToggle;
        $("#customerstable").DataTable({
            bFilter: false,
            paging: true,
        });
        $("#filter_search").click(function () {
            $("#filter_inputs").slideToggle(500);
        });
    }, []);

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">Customers</li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <a
                                className="btn btn-primary mr-1"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                <i className="fas fa-plus"> </i>
                            </a>

                            <a
                                className="btn btn-primary filter-btn"
                                href="/customers#"
                                id="filter_search"
                            >
                                <i className="fas fa-filter"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div id="filter_inputs" className="card filter-card">
                    <div className="card-body pb-0">
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* container */}

                <div className="row">
                    <div className="col-sm-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table
                                        className="table table-center table-hover datatable"
                                        id="customerstable"
                                    >
                                        <thead className="thead-light">
                                            <tr>
                                                <th>User</th>
                                                <th>User Type</th>
                                                <th>User Tier</th>
                                                <th>KYC</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th className="text-right">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {customers.map((item, index) => {
                                                let status;
                                                if (item.status === "Active") {
                                                    status = (
                                                        <span className="badge badge-pill bg-success-light">
                                                            Active
                                                        </span>
                                                    );
                                                } else {
                                                    status = (
                                                        <span className="badge badge-pill bg-danger-light">
                                                            Inactive
                                                        </span>
                                                    );
                                                }
                                                return (
                                                    <tr key={index}>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <Link href="/profile">
                                                                    <a className="avatar avatar-sm mr-2">
                                                                        <Image
                                                                            className="avatar-img rounded-circle"
                                                                            width="40"
                                                                            height="40"
                                                                            src={item.customer_image}
                                                                            alt="User Image"
                                                                        />
                                                                    </a>
                                                                </Link>
                                                                <Link href="/profile">
                                                                    <a>
                                                                        {item.customer_name}
                                                                        <span>{item.customer_mobile}</span>
                                                                    </a>
                                                                </Link>
                                                            </h2>
                                                        </td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>{item.customer_email}</td>
                                                        <td>{item.amount_due}</td>
                                                        <td>{item.registered_on}</td>
                                                        <td>{status}</td>
                                                        <td className="text-right">
                                                            <Link href="/edit-customer">
                                                                <a className="btn btn-sm btn-white text-success mr-2">
                                                                    <i className="far fa-edit mr-1"></i> Edit
                                </a>
                                                            </Link>
                                                            <a
                                                                href="#"
                                                                className="btn btn-sm btn-white text-danger mr-2"
                                                            >
                                                                <i className="far fa-trash-alt mr-1"></i>
                                Delete
                              </a>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container demo">
                    <div
                        className="modal left fade"
                        id="exampleModal"
                        tabIndex
                        role="dialog"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <div className="nav flex-sm-column flex-row">
                                        <h4 className="card-title mt-2 ml-4">Add New User</h4>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Name"
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <input
                                                        type="email"
                                                        placeholder="Email"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Phone"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        placeholder="Referral Code"
                                                        className="form-control"
                                                    />
                                                </div>
                                            </div>
                                            <h4 className="card-title mt-2 ml-4">
                                                Roles and Priviges
                      </h4>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <Select2
                                                        className="w-100"
                                                        data={countryOptions}
                                                        options={{
                                                            placeholder: "User Type",
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <Select2
                                                        className="w-100"
                                                        data={countryOptions}
                                                        options={{
                                                            placeholder: "User Role",
                                                        }}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <Select2
                                                        className="w-100"
                                                        data={countryOptions}
                                                        options={{
                                                            placeholder: "User Tier",
                                                        }}
                                                    />
                                                </div>

                                                <div className="form-group">
                                                    <label className="d-block">Status:</label>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="gender_male"
                                                            value="option1"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="gender_male"
                                                        >
                                                            Active
                            </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="gender"
                                                            id="gender_female"
                                                            value="option2"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="gender_female"
                                                        >
                                                            Inactive
                            </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label className="d-block">KYC Required:</label>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="gender_male"
                                                    value="option1"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="gender_male"
                                                >
                                                    Yes
                        </label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="gender"
                                                    id="gender_female"
                                                    value="option2"
                                                />
                                                <label
                                                    className="form-check-label"
                                                    htmlFor="gender_female"
                                                >
                                                    No
                        </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-white">
                                    <div className="card-body">
                                        <button type="submit" className="btn btn-primary mr-1">
                                            Add Customer
                    </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary mr-1"
                                            data-dismiss="modal"
                                        >
                                            Close
                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Customers;
