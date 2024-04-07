import { twMerge } from "tailwind-merge"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/cars",
    label: "Cars",
  },
  {
    href: "/tracks",
    label: "Tracks",
  },
  {
    href: "/esports",
    label: "Esports",
  },
  {
    href: "/about",
    label: "About Us",
  },
]

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <header className="h-[86px] flex items-center">
      <nav className="max-container flex items-center justify-between">
        <Link to="/">
          <img src="logo-full.png" alt="Logo" className="invert h-8" />
        </Link>
        <div className="flex items-center gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={twMerge(
                "text-lg text-gray-400 hover:text-red-500 transition-colors",
                link.href === pathname && "text-black font-medium"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
