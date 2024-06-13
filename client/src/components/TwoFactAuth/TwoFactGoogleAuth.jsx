import React from "react";

export default function TwoFactGoogleAuth() {
  return (
    <>
      <h3 className="text-center text-[29px] font-[500] text-[#1E2328] landing-[19px] mb-3">
        User Verification
      </h3>
      <p className="py-1 text-center text-[14px] font-[500] text-[#898B8F] landing-[19px] w-80 m-auto">
        Enter the confirmation code displayed in the google autenticator app
      </p>
      <div className="modal-action flex items-center justify-center max-h-96">
        <form
          method="dialog"
          className="flex items-center justify-center flex-col"
        >
          <div className="sets mb-5">
            <input
              type="text"
              value="5"
              className="mx-2 bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
            <input
              type="text"
              value="0"
              className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
            <input
              type="text"
              value="3"
              className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
            <input
              type="text"
              value="1"
              className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
            <input
              type="text"
              value="8"
              className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
            <input
              type="text"
              value="3"
              className="mx-2  bg-base-200 text-base-content border border-[#EAEAEA] text-center rounded-[20px] text-[52px] font-[700]"
              style={{ width: "58px", height: "80px" }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
