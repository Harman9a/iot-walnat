import React, { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useFormik } from "formik";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useSelector } from "react-redux";
import { Spin } from "antd";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[0-9a-zA-Z].*/i.test(values.name)) {
    errors.name = "Invalid username";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (
    !/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/i.test(
      values.phone
    )
  ) {
    errors.phone = "Enter max 8 Characters";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.length < 8) {
    errors.password = "*Password must be 8 characters long.";
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(values.password)) {
    errors.password = "*Invaild Password";
  }
  return errors;
};

export default function ManageAdmin() {
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<FaRegEyeSlash />);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = React.useState(false);

  const state = useSelector((state) => state.auth);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/getAdmins`, {
        headers: {
          Authorization: state.jwt,
        },
      })
      .then((res) => {
        setError("");
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response.data.error);
      });
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<IoEyeOutline />);
      setType("text");
    } else {
      setIcon(<FaRegEyeSlash />);
      setType("password");
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      image: "",
    },
    validate,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleFormSubmit = (values) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("password", values.password);
    formData.append("role", values.role);
    if (values.image && values.image.length > 0) {
      console.log(values.image[0]);
      formData.append("image", values.image[0]); // Assuming single file upload. For multiple, loop through the array
    }

    axios
      .post(`${process.env.REACT_APP_API_URL}/addAdmin`, formData, {
        headers: {
          Authorization: state.jwt,
        },
      })
      .then((res) => {
        getUsers();
        document.getElementById("my_modal_3").close();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  const handleDeleteAdmin = (id) => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/deleteAdmin`,
        { id },
        {
          headers: {
            Authorization: state.jwt,
          },
        }
      )
      .then((res) => {
        console.log(res);
        getUsers();
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  return (
    <>
      <Spin spinning={loading} fullscreen />
      <div className="content-wrapper bg-base-200 h-screen">
        <div className="flex items-center justify-between">
          <div aria-label="Breadcrumbs" className="breadcrumbs p-0">
            <ul>
              <li className="text-[18px]">Manage Admin</li>
            </ul>
          </div>
          <div className="search-adminBox flex items-center justify-between w-96">
            <div className="searchBtn text-[22px] cursor-pointer">
              <CiSearch />{" "}
            </div>
            <div className="dropMenu">
              <select className="select select-bordered w-full max-w-xs rounded-[10px] focus:outline-none">
                <option disabled selected>
                  View By Category
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="adminBtn">
              {/* <button class="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px]">
                                Add Admin <FaPlus className='pl-2 text-[24px]' />
                            </button> */}
              <button
                className="btn btn-neutral font-bold py-2 px-4 rounded-[10px] flex items-center justify-between text-[14px]"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                Add Admin <FaPlus className="pl-1 text-[18px]" />
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-base-200 max-w-[50rem] h-full">
                  <form method="dialog">
                    <button className="btn text-[20px] btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="flex items-center justify-center flex-col">
                    <div className="profile-image">
                      <img
                        src="/images/avtar-3.avif"
                        alt="profile-avtar"
                        className="w-24 h-24 border border-1 border-current rounded-full"
                      />
                      <div className="tex-[15px] font-[700] landing-[15px] text-center mt-2">
                        {" "}
                        Add Photo
                      </div>
                    </div>
                    {/*------- Form start ------*/}
                    <div className="mt-3 w-3/4">
                      <form onSubmit={formik.handleSubmit}>
                        <input
                          type="file"
                          name="image"
                          className="file-input w-full max-w-xs"
                          onChange={(event) => {
                            const files = event.target.files;
                            let myFiles = Array.from(files);
                            formik.setFieldValue("image", myFiles);
                          }}
                        />
                        <div>
                          <div className="form-control">
                            <label className="label">
                              <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                                Full Name
                              </span>
                            </label>
                            <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                              <input
                                type="text"
                                className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                name="name"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                              />
                            </div>
                            <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                              {formik.errors.name ? (
                                <div>{formik.errors.name}</div>
                              ) : null}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="form-control mt-3 w-1/2 mr-4">
                              <label className="label">
                                <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                  Email
                                </span>
                              </label>
                              <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                <input
                                  className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                  name="email"
                                  type="email"
                                  onChange={formik.handleChange}
                                  value={formik.values.email}
                                />
                              </div>
                              <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                {formik.errors.email ? (
                                  <div>{formik.errors.email}</div>
                                ) : null}
                              </span>
                            </div>

                            <div className="form-control mt-3 w-1/2 ml-4">
                              <label className="label">
                                <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                  Phone
                                </span>
                              </label>
                              <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                <input
                                  className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                  id="telNo"
                                  name="phone"
                                  type="tel"
                                  size="20"
                                  minlength="9"
                                  maxlength="14"
                                  onChange={formik.handleChange}
                                  value={formik.values.phone}
                                />
                              </div>

                              <span className="h-[2px] mt-3 text-rose-600 text-[12px]">
                                {formik.errors.phone ? (
                                  <div>{formik.errors.phone}</div>
                                ) : null}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="form-control mt-3 w-1/2 mr-4">
                              <label className="label">
                                <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                  Set Password
                                </span>
                              </label>
                              <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                <input
                                  className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                  name="password"
                                  type="password"
                                  onChange={formik.handleChange}
                                  value={formik.values.password}
                                />
                              </div>
                              <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                {formik.errors.password ? (
                                  <div>{formik.errors.password}</div>
                                ) : null}
                              </span>
                            </div>

                            <div className="form-control mt-3 w-1/2 ml-4">
                              <label className="label">
                                <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                                  Confirm Password
                                </span>
                              </label>
                              <div className="form-control flex flex-row items-center rounded-[15px] h-12 bg-base-100 px-3 shadow">
                                <input
                                  className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                                  name="password"
                                  type={type}
                                  onChange={formik.handleChange}
                                  value={formik.values.password}
                                />
                                <span onClick={handleToggle}>{icon}</span>
                              </div>

                              <span className="h-[2px] mt-2 text-rose-600 text-[12px]">
                                {formik.errors.password ? (
                                  <div>{formik.errors.password}</div>
                                ) : null}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6">
                          <button
                            type="submit"
                            className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    {/*------- Form end ------*/}
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>

        {/* Table Start */}

        <div className="mt-6">
          <div className="col-12">
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead className="border-b-2">
                  <tr className="text-[#B1B1B1] text-[15px] font-[700] landing-[35px] ">
                    <th className="w-2">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>Admin</th>
                    <th>Email</th>
                    <th>Admin Phone</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <br />
                <tbody className="mt-3">
                  {users.map((x) => {
                    return (
                      <>
                        <tr className="shadow-[0_3.5px_5.5px_0_#00000005]">
                          <th className="shadow-none">
                            <label>
                              <input type="checkbox" className="checkbox" />
                            </label>
                          </th>
                          <td className="bg-base-100 rounded-l-[15px]">
                            <div className="flex items-center gap-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img
                                    src={`${process.env.REACT_APP_PROFILE_URL}/profile/${x.photo}`}
                                    alt="Avatar Tailwind CSS Component"
                                    className="border-2 border-[#CBCBCB] rounded-[18px]"
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="text-base-500 font-[500] text-[19px] landing-[35px]">
                                  {x.name}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-[16px] font-[500] landing-[35px] bg-base-100">
                            {x.email}
                          </td>
                          <td className="text-[16px] font-[500] landing-[35px] bg-base-100 ">
                            {x.phone}
                          </td>
                          <td className="bg-base-100 rounded-r-[15px] w-16">
                            <div className="flex">
                              <div className="flex items-center justify-start text-[14px] font-[500] landing-[35px] text-neutral-500 mx-3 cursor-pointer">
                                Edit
                                <span className="pl-1">
                                  <MdOutlineModeEdit />
                                </span>
                              </div>
                              <div
                                className="flex items-center justify-start text-[14px] font-[500] landing-[35px] text-neutral-500 cursor-pointer"
                                onClick={() => handleDeleteAdmin(x.id)}
                              >
                                Remove
                                <span className="pl-1">
                                  <RiDeleteBin6Line />
                                </span>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <br />
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* Table End */}
        </div>
      </div>
    </>
  );
}
