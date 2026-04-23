import { Link } from "react-router-dom";
import bulldoglogo from "../assets/img/NU-Bulldogs-Logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t-2 border-primary bg-primary px-4 pb-16">
      {/* Background logo */}
      <img
        src={bulldoglogo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 w-[28rem] -translate-y-1/2 opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_auto] lg:items-start">
          {/* Left: Brand */}
          <div className="max-w-md">
            <p className="text-2xl font-bold text-white">BulldogEx Shop</p>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-primary-soft)]">
              Campus essentials, simple ordering, and easy access to store pages
              for students and staff.
            </p>
          </div>

          {/* Right: Link groups */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-6 justify-self-end">
            <nav aria-label="Main footer navigation">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-soft)]">
                Explore
              </p>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link to="/products" className="footer-link">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="footer-link">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link to="/pickup" className="footer-link">
                    Pickup
                  </Link>
                </li>
              </ul>
            </nav>

            <nav aria-label="Authentication">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--color-primary-soft)]">
                Account
              </p>
              <ul className="flex flex-col gap-3 text-sm">
                <li>
                  <Link to="/profile" className="footer-link">
                    Profile
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-[var(--color-primary-soft)]/30 pt-4">
          <p className="text-xs text-[var(--color-primary-soft)]">
            © {new Date().getFullYear()} BulldogEx Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;