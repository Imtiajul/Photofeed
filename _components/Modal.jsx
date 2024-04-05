"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { createPortal } from "react-dom"

const Modal = ({ children }) => {
  const modalRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (modalRef.current?.open) {
      modalRef.current?.showModal()
    }
  }, [])

  function onHideModal() {
    router.back()
    // modalRef.current?.close();
  }

  return createPortal(
    <dialog
      ref={modalRef}
      onClose={onHideModal}
      className="backdrop:bg-red-600 shadow-teal-700 shadow-md border border-teal-600 flex flex-col p-2 rounded-md dark:bg-black dark:bg-opacity-95 dark:text-gray-100"
    >
      <span
        className="inline-flex justify-end cursor-pointer"
        onClick={onHideModal}
      >
        <Image src="/xmark.svg" alt="close icon" width={30} height={30} />
      </span>

      {children}
    </dialog>,
    document.getElementById("modal-root-content")
  )
}

export default Modal
