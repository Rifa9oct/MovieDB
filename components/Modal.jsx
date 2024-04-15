"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { useEffect, useRef } from "react";
import close from "./gallery/close.svg"

import Image from "next/image";

const Modal = ({ children }) => {
    const modalRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        if (!modalRef.current?.open) {
            modalRef.current?.showModal();
        } else {
            document.body.style.overflow = "hidden";
        }
    }, []);

    function onHide() {
        router.back();
        document.body.style.overflow = "auto";
    }

    return createPortal(
        <dialog
            ref={modalRef}
            onClose={onHide}
            className="shadow-teal-700 shadow-md border w-[1200px] h-[700px] border-teal-600 flex flex-col p-8 rounded-md bg-black bg-opacity-95 text-gray-100"
        >
            <span onClick={onHide}
                className="flex justify-end cursor-pointer">
                <Image
                    className="mb-3"
                    src={close}
                    alt="close"
                    width={30}
                    height={30} />
            </span>
            {children}
        </dialog>
        ,
        document.getElementById("modal-root-content")
    );
};

export default Modal;