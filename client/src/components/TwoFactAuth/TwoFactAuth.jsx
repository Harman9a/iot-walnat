import React, { useState } from "react";
import { Button, Steps, theme } from "antd";
import { SiTicktick } from "react-icons/si";
import TwoFactEmailAuth from "./TwoFactEmailAuth";
import TwoFactGoogleAuth from "./TwoFactGoogleAuth";

export default function TwoFactAuth() {
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();
  const steps = [
    {
      title: "",
      content: <TwoFactEmailAuth />,
    },
    {
      title: "",
      content: <TwoFactGoogleAuth />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const next = () => {
    setCurrent(current + 1);
  };
  const contentStyle = {
    lineHeight: "20px",
    textAlign: "center",
    color: token.colorTextTertiary,
    borderRadius: token.borderRadiusLG,
    marginTop: 16,
  };

  return (
    <dialog id="my_modal_2" className="modal ">
      <div className="modal-box max-w-[34rem]">
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <div className="flex items-center justify-center flex-col max-w-[26.5rem] m-auto">
              <Button
                className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded"
                onClick={() => next()}
              >
                Submit
              </Button>
              <span className="countdown mt-4 text-base-content/70  text-[16px] landing-[19px] font-[500]">
                <span style={{ "--value": 0 }}></span>:
                <span style={{ "--value": 0 }}></span>
              </span>

              <div className="mt-3">
                <h3 className="text-base-content/70  ml-2 font-[500] text-[16px] landing-[19px]">
                  Didn’t Received OTP?{" "}
                  <span className="text-base-content ml-2 font-[500] text-[16px] landing-[19px]">
                    Resend
                  </span>
                </h3>
              </div>
            </div>
          )}
          {current === steps.length - 1 && (
            <div className="flex items-center justify-center flex-col max-w-[26.5rem] m-auto">
              <Button
                className="btn bg-[#000] w-full text-[#fff] text-[17px] font-[500] rounded"
                type="primary"
                onClick={() =>
                  document.getElementById("my_modal_adminSuccess").showModal()
                }
              >
                Submit
              </Button>
              <dialog id="my_modal_adminSuccess" className="modal">
                <div className="modal-box py-16 px-12 bg-[#30BF89] max-w-[40rem] h-[30rem] flex flex-col items-center justify-center">
                  <div className="text-[#fff]  text-[90px] flex items-center justify-center">
                    <SiTicktick />
                  </div>
                  <h3 className="font-bold text-center text-[27px] font-[700] text-[#fff] landing-[27px] mt-5">
                    Success
                  </h3>
                </div>
              </dialog>

              <span className="countdown mt-4 text-[#000] text-[16px] landing-[19px] font-[500]">
                <span style={{ "--value": 0 }}></span>:
                <span style={{ "--value": 0 }}></span>
              </span>

              <div className="mt-3">
                <h3 className="text-[#8C8C8C] ml-2 font-[500] text-[16px] landing-[19px]">
                  Didn’t Received OTP?{" "}
                  <span className="text-[#000] ml-2 font-[500] text-[16px] landing-[19px]">
                    Resend
                  </span>
                </h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </dialog>
  );
}
