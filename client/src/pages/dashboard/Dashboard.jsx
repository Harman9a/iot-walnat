import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
  // plugins: {
  //   legend: {
  //     position: 'top',
  //   },
  //   title: {
  //     display: true,
  //     text: 'Chart.js Bar Chart',
  //   },
  // },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#51DCA8",
    },
    {
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "#DDDDDD",
    },
  ],
};

export default function Dashboard() {
  return (
    <>
      {/* <div className="main-wrapper overflow-auto">
        <div className="flex h-full flex-col "> */}
      {/* <div role="navigation" aria-label="Navbar" className="navbar z-10 border-b border-base-200 px-3">
            <div className="gap-3 navbar-start">
              <button aria-label="Leftmenu toggle" className="btn btn-sm btn-square btn-ghost">
                <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="true" role="img" className="inline-block">
                  <path d="M10 1.5C10 0.671573 9.32843 0 8.5 0H1.5C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H8.5C9.32843 3 10 2.32843 10 1.5Z" fill="black" />
                  <path d="M21 9.5C21 8.67157 20.3284 8 19.5 8H1.5C0.671574 8 0 8.67157 0 9.5C0 10.3284 0.671574 11 1.5 11H19.5C20.3284 11 21 10.3284 21 9.5Z" fill="black" />
                  <path d="M17 17.5C17 16.6716 16.3284 16 15.5 16H1.5C0.671574 16 0 16.6716 0 17.5C0 18.3284 0.671574 19 1.5 19H15.5C16.3284 19 17 18.3284 17 17.5Z" fill="black" />
                </svg>
              </button>

            </div>
            <div className="navbar-center"></div>
            <div className="gap-1.5 navbar-end">
              <button aria-label="Theme toggler" className="btn btn-sm btn-circle btn-ghost">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 1C8.37283 2.12717 7.73959 3.65594 7.73959 5.25C7.73959 6.84406 8.37283 8.37283 9.5 9.5C10.6272 10.6272 12.1559 11.2604 13.75 11.2604C15.3441 11.2604 16.8728 10.6272 18 9.5C18 11.1811 17.5015 12.8245 16.5675 14.2223C15.6335 15.6202 14.306 16.7096 12.7528 17.353C11.1996 17.9963 9.49057 18.1646 7.84174 17.8367C6.1929 17.5087 4.67834 16.6991 3.4896 15.5104C2.30085 14.3217 1.4913 12.8071 1.16333 11.1583C0.835355 9.50943 1.00368 7.80036 1.64703 6.24719C2.29037 4.69402 3.37984 3.3665 4.77766 2.43251C6.17547 1.49852 7.81886 1 9.5 1Z" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
              <div>
                <div className="dropdown dropdown-bottom dropdown-end">
                  <label tabIndex='0' className="btn btn-circle btn-ghost btn-sm">
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M14.9487 11.4386L14.9388 11.4286C14.4787 10.9956 13.4531 9.28799 13.3878 7.29246V5.06123C13.3878 2.26599 11.1184 0 7.99998 0C4.88162 0 2.61223 2.26599 2.61223 5.06123V7.1596C2.57959 8.89537 1.73218 10.7971 1.06121 11.4286L1.05114 11.4387C0.954385 11.5354 0.843397 11.6161 0.732588 11.6967L0.664703 11.7463C0.261535 12.0436 0 12.5218 0 13.0612C0 13.963 0.730956 14.6939 1.63265 14.6939H14.3673C15.2691 14.6939 16 13.963 16 13.0612C16 12.5218 15.7384 12.0436 15.3353 11.7463L15.2674 11.6967C15.1566 11.6161 15.0456 11.5354 14.9487 11.4386ZM4.24459 7.19031L4.24489 7.1596V5.06123C4.24489 3.2347 5.7148 1.63265 7.99998 1.63265C10.2852 1.63265 11.7551 3.2347 11.7551 5.06123V7.29246C11.7551 7.30092 11.7551 7.30938 11.7553 7.31782C11.7554 7.32718 11.7556 7.33653 11.7559 7.34589C11.7971 8.59906 12.1362 9.73162 12.5213 10.6052C12.8811 11.4213 13.3507 12.1661 13.7979 12.5966C13.9984 12.7963 14.2387 12.9687 14.3352 13.0379L14.3664 13.0604L1.63265 13.0612L1.66487 13.0379C1.76106 12.9688 2.00072 12.7969 2.20101 12.5977C2.78668 12.0364 3.26709 11.1506 3.59785 10.2997C3.94982 9.3941 4.22386 8.29291 4.24459 7.19031Z" fill="black" />
                      <path d="M6.05095 17.0388C5.93607 16.7615 5.87695 16.4643 5.87695 16.1641H10.4484C10.4484 16.4643 10.3893 16.7615 10.2744 17.0388C10.1595 17.3161 9.99116 17.5681 9.77892 17.7804C9.56667 17.9926 9.31469 18.161 9.03738 18.2757C8.76006 18.3907 8.46283 18.4498 8.16267 18.4498C7.86251 18.4498 7.56528 18.3907 7.28796 18.2757C7.01065 18.161 6.75867 17.9926 6.54642 17.7804C6.33418 17.5681 6.16582 17.3161 6.05095 17.0388Z" fill="black" />
                    </svg>
                  </label>
                  <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box card card-compact m-1 w-96 p-3 shadow" role="menu">
                    <div className="flex items-center justify-between px-2">
                      <p className="flex items-center justify-between px-2"> Notification</p> */}
      {/* <button className="btn gap-2 btn-sm btn-circle btn-ghost">
                        <svg width="10" height="10" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.9138 1L1.55273 20.3611" stroke="#404040" />
                          <path d="M1.00022 1L20.3613 20.3611" stroke="#404040" />
                        </svg>
                      </button> */}
      {/* </div>

                    <div className="flex items-center justify-center">
                      <div className="rounded-full border  border-base-content/10 px-3 text-center">
                        <p className="text-xs  text-base-content/80"> Today</p>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]"> 
                      <img loading="lazy" width='128' height='128' srcSet="/images/avtar-1.avif 1x, /images/avtar-1.avif 2x" src="/images/avtar-1.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{color:'transparent'}} />

                      <div className="grow">
                        <p className="text-sm">Customer has requested a return for item</p>
                        <p className="text-xs text-base-content/60">1 Hour ago</p>
                      </div>
                      </div>
                    </div>

                    <div className="mt-3">
                      <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]"> 
                      <img loading="lazy" width='128' height='128' srcSet="/images/avtar-2.avif 1x, /images/avtar-2.avif 2x" src="/images/avtar-2.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{color:'transparent'}} />

                      <div className="grow">
                        <p className="text-sm">Customer has requested a return for item</p>
                        <p className="text-xs text-base-content/60">1 Hour ago</p>
                      </div>
                      </div>
                    </div>

                    <div className="mt-2 flex items-center justify-center">
                      <div className="rounded-full border  border-base-content/10 px-3 text-center">
                        <p className="text-xs  text-base-content/80"> Yesterday</p>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="my-0.5 flex cursor-pointer items-center gap-3 rounded-box p-1.5 transition-all hover:bg-base-content/5 active:scale-[.98]"> 
                      <img loading="lazy" width='128' height='128' srcSet="/images/avtar-3.avif 1x, /images/avtar-3.avif 2x" src="/images/avtar-3.avif" alt="avtar-error" decoding="async" data-nimg='1' className="size-9 bg-base-content/10 p-0.5 mask mask-circle" style={{color:'transparent'}} />

                      <div className="grow">
                        <p className="text-sm">Customer has requested a return for item</p>
                        <p className="text-xs text-base-content/60">1 Hour ago</p>
                      </div>
                      </div>
                    </div>

                      <hr className="-mx-2 mt-2 border-base-content/10"/>

                      <div className="flex items-center justify-between pt-2">
                        <button className="btn text-primary hover:bg-primary/10 btn-sm btn-ghost"> View All</button>
                        <button className="btn text-base-content/80 hover:bg-base-content/10 btn-sm btn-ghost">Mark as Read</button>
                      </div>

                  </ul>
                </div>
              </div>

              <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex='0' className="btn btn-ghost rounded-btn px-1.5 hover:bg-base-content/20">
                  <div className="flex items-center gap-2">
                    <div className="flex flex-col items-start">
                      <p className="text-sm/none"> Harwinder Kaur</p>
                      <p className="mt-1 text-xs/none text-primary"> Super Admin</p>
                    </div>
                    <div aria-label="Avatar photo" className="avatar">
                      <div className="mask mask-squircle" style={{width:'35px', height:'35px'}}>
                        <img src="/images/avtar-2.avif" alt="admin-avtar" />
                      </div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div> */}
      <div className="content-wrapper">
        <div>
          <div className="flex items-center">
            <div
              aria-label="Breadcrumbs"
              className="breadcrumbs  p-0 sm:inline"
            >
              <ul>
                <li className="text-base-content/60 text-[18px]">
                  <a href="/">Pages</a>
                </li>
                <li className="text-[18px]">Dashboard</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3 gap-3">
              <div aria-label="Card" className="card bg-base-100 shadow">
                <div className="card-body gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <p className="font-medium text-base-content/70">
                        Lorem Ipsum
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <h5 className="inline text-2xl/none font-semibold">
                          Dolor
                        </h5>
                        <div
                          aria-label="Badge"
                          className="badge rounded gap-1 border-0 bg-success/10 py-3 text-xs font-semibold text-success badge-sm"
                        >
                          +55%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div aria-label="Card" className="card bg-base-100 shadow">
                <div className="card-body gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <p className="font-medium text-base-content/70">
                        Lorem Ipsum
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <h5 className="inline text-2xl/none font-semibold">
                          Dolor
                        </h5>
                        <div
                          aria-label="Badge"
                          className="badge rounded gap-1 border-0 bg-success/10 py-3 text-xs font-semibold text-success badge-sm"
                        >
                          +55%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div aria-label="Card" className="card bg-base-100 shadow">
                <div className="card-body gap-2">
                  <div className="flex items-center gap-2 text-sm">
                    <div>
                      <p className="font-medium text-base-content/70">
                        Lorem Ipsum
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <h5 className="inline text-2xl/none font-semibold">
                          Dolor
                        </h5>
                        <div
                          aria-label="Badge"
                          className="badge rounded gap-1 border-0 bg-success/10 py-3 text-xs font-semibold text-success badge-sm"
                        >
                          +55%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid gap-6 xl:grid-cols-12 sm:grid-cols-12">
              <div className="xl:col-span-12 sm:col-span-12">
                <div
                  aria-label="Card"
                  className="card bg-base-100 card-bordered"
                >
                  <div className="card-body py-6 px-3 ">
                    <div className="px-1">
                      <div className="mt-2 flex items-center gap-3">
                        <span className="text-[18px] font-[700] landing-[25px] text-[#2D3748] font-semibold">
                          Lorem Ipsum
                        </span>
                      </div>
                      <div className="text-sm text-base-content/70">
                        Dolor Amet++
                      </div>
                    </div>
                    <div className="overflow-hidden rounded-xl">
                      <div
                        options="[object Object]"
                        height="100"
                        width="100%"
                        style={{ minHeight: "150px" }}
                      >
                        <Bar data={data} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
}
