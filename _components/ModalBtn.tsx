"use client";

import { useState } from "react";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import MaskedInput from "./MaskedInput";

export default function ModalBtn(props: any) {
  const [open, setOpen] = useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button className={`circle-btn ${props.lined ? "lined" : ""} ${props.dark ? "dark" : ""} `} onClick={handleClickOpen}>
        оставить <br /> заявку
      </button>
      {open ? (
        <Dialog
          open={open}
          onClose={handleClose}
          disableScrollLock
          className="modal"
        >
          <button className="close-btn" onClick={handleClose}></button>
          <div className="form_wrapper wrapper ver dark-section">
            <div className="body_title-box">
              <div className="body_title">узнайте больше</div>
              <p>
                Заполните форму ниже, и мы свяжемся с вами в ближайшее время.
              </p>
            </div>
            <form action="" className="download_form">
              <input
                type="text"
                className="input"
                name="Имя"
                placeholder="Имя"
                required
              />
              <MaskedInput />
              <input
                type="email"
                className="input"
                name="Email"
                placeholder="Email"
                required
              />
              <Link href="/success" className="circle-btn lined">
                отправить
              </Link>
            </form>
          </div>
        </Dialog>
      ) : null}
    </>
  );
}
