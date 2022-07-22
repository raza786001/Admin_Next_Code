import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../layouts/Header";
import Sidebar from "../layouts/Sidebar";
import Select2 from "react-select2-wrapper";

const AddCustomer = () => {
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

    return (
        <div className="page-wrapper">
            <div className="content container-fluid">
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Customers</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link href="/">
                                        <a>Dashboard</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link href="/customers">
                                        <a>Customers</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">Add Customers</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Basic Info</h4>
                                <form action="#">
                                    <div className="row"></div>
                                </form>
                                <h4 className="card-title mt-4">Billing Address</h4>
                                <form action="#">
                                    <div className="row"></div>
                                </form>
                                <h4 className="card-title mt-4">Shipping Address</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container demo">
                        <div className="text-center">
                            <button
                                type="button"
                                className="btn btn-demo"
                                data-toggle="modal"
                                data-target="#exampleModal"
                            >
                                Sidebar Modal
              </button>
                        </div>
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
                    {/* container */}
                </div>
            </div>
        </div>
    );
};
export default AddCustomer;
