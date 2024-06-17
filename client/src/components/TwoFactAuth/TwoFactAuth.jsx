import React, { useState } from "react";
import { Steps, theme } from "antd";
import TwoFactEmailAuth from "./TwoFactEmailAuth";
import TwoFactGoogleAuth from "./TwoFactGoogleAuth";

export default function TwoFactAuth({ handle2FA }) {
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();

  const next = () => {
    setCurrent(current + 1);
  };

  const handleSubmitfinal = (value) => {
    handle2FA(value);
    setCurrent(0);
    document.getElementById("my_modal_2").close();
  };

  const steps = [
    {
      title: "",
      content: <TwoFactEmailAuth next={next} />,
    },
    {
      title: "",
      content: <TwoFactGoogleAuth handleSubmitfinal={handleSubmitfinal} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

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
      </div>
    </dialog>
  );
}
