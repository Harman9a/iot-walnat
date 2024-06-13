import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Profile() {
  const state = useSelector((state) => state.auth);
  return (
    <div>
      <div className="content-wrapper bg-base-200">
        <div>
          <div className="flex items-center">
            <div aria-label="Breadcrumbs" className="breadcrumbs p-0 sm:inline">
              <ul>
                <li className="text-base-content/60 text-[18px]">
                  <Link to="/manage-admin">Home</Link>
                </li>
                <li className="text-[18px]">My Profile</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <div className="col-12 flex items-center justify-center">
              <div className="profile-group flex items-center justify-center flex-col min-w-[600px]">
                <div className="profile-image">
                  <img
                    src={`${process.env.REACT_APP_PROFILE_URL}/profile/${state.image}`}
                    alt="profile-avtar"
                    className="w-32 h-32 border border-1 border-current rounded-full"
                  />
                </div>

                <div className="mt-10 w-full">
                  <form>
                    <div>
                      <div className="form-control">
                        <label className="label">
                          <span className="text-[#B6B8BB] dark:white text-[17px] font-[500] landing-[19px]">
                            Full Name
                          </span>
                        </label>
                        <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                          <input
                            type="text"
                            className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                            name="f-name"
                            value={state.name}
                          />
                        </div>
                        <span className="h-[20px] mt-3 text-[12px]"></span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="form-control mt-3 w-1/2 mr-4">
                          <label className="label">
                            <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                              Email
                            </span>
                          </label>
                          <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                            <input
                              className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                              name="email"
                              type="email"
                              value={state.email}
                            />
                          </div>
                          <span className="h-[20px] mt-3 text-[12px]"></span>
                        </div>

                        <div className="form-control mt-3 w-1/2 ml-4">
                          <label className="label">
                            <span className="text-[#B6B8BB] text-[17px] font-[500] landing-[19px]">
                              Phone
                            </span>
                          </label>
                          <div className="form-control flex flex-row items-center rounded-[15px] h-14 bg-base-100 px-3 shadow">
                            <input
                              className="input w-full focus:border-none focus:outline-none input-sm focus:outline-offset-none"
                              id="telNo"
                              name="telNo"
                              type="tel"
                              size="20"
                              minlength="9"
                              maxlength="14"
                              value={state.phone}
                            />
                          </div>

                          <span className="h-[20px] mt-3 text-[12px]"></span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button
                        type="submit"
                        className="btn text-white gap-2 btn-neutral btn-block rounded text-[17px] font-[500] landing-[19px]"
                      >
                        Edit
                      </button>
                    </div>
                  </form>
                  <div className="passlink text-center m-8">
                    <Link
                      to="/change-password"
                      className="text-[#6B6B6B] dark:white text-[17px] font-[500] landing-[19px] "
                    >
                      Change Password
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
