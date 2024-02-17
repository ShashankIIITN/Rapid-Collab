import ReactDOM from "react-dom";
import React, { ButtonHTMLAttributes } from "react";
import { IoClose } from "react-icons/io5";

type propTypes = {
    Heading: String;
    open: Boolean;
    onClose: React.MouseEventHandler;
    children: React.ReactNode;
};
function Modal({ Heading, open, onClose, children }: propTypes) {
    if (!open) return null;

    console.log("yay")

    return ReactDOM.createPortal(
        <>
            <div className="Modal_overlay absolute w-full h-full bg-[#00000097] top-0 left-0 right-0 bottom-0"></div>
            <div className="Modal_body fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  w-fit h-fit p-5 bg-slate-950 text-white border-dotted border-[1px] rounded-lg  shadow-[0_0px_10px] shadow-cyan-300 ">
            <IoClose className="absolute top-1 right-1 cursor-pointer" onClick={onClose} />
                {children}
            </div>
        </>,
        document.getElementById("portal")!
    );
}

export default Modal;
