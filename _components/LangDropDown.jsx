"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const LangDropDown = () => {
  const [showMenu, setShowMenu] = useState(false)
  console.log(showMenu)
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <Image
          className="max-w-8"
          src="/bd.png"
          width={32}
          height={32}
          alt="bangla"
        />
        Bangla
      </button>

      {/* <!-- dropdown --> */}
      {showMenu && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={()=> setShowMenu(false)}>
            <Link className="w-full flex gap-2" href="/bn">
              <Image
                className="max-w-8"
                src="/bd.png"
                alt="bangla"
                width={32}
                height={32}
              />
              Bangla
            </Link>
          </li>
          <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100" onClick={()=> setShowMenu(false)}>
            <Link className="flex items-center gap-2" href="/en">
              <Image
                className="max-w-8"
                src="/usa.png"
                alt="usa icon"
                width={32}
                height={32}
              />
              English
            </Link>
          </li>
        </div>
      )}
    </div>
  )
}

export default LangDropDown
