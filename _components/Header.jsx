import LangDropDown from "./LangDropDown"
import Logo from "./Logo"

const Header = () => {
  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        {/* <!-- Logo --> */}
        <Logo />
        {/* <!-- Logo Ends --> */}

        <div className="flex gap-4 items-center">
          {/* <!-- Language Dropdown --> */}
          <LangDropDown />
        </div>
      </div>
    </nav>
  )
}

export default Header
