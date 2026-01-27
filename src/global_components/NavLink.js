"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function NavLink() {
    const pathname = usePathname();

    return (
        <ul className="nav-list">
            <li className="nav-item">
                <Link href="/home" className={ pathname === "/home" ? "nav-link active" : "nav-link" }>Trang chủ</Link>
            </li>

            <li className="nav-item">
                <Link href="/about" className={ pathname === "/about" ? "nav-link active" : "nav-link" }>Giới thiệu</Link>
            </li>

            <li className="nav-item">
                <Link href="/features" className={ pathname === "/features" ? "nav-link active" : "nav-link" }>Tính năng</Link>
            </li>

            <li className="nav-item">
                <Link href="/prices" className={ pathname === "/prices" ? "nav-link active" : "nav-link" }>Bảng giá</Link>
            </li>

            <li className="nav-item">
                <Link href="/contact" className={ pathname === "/contact" ? "nav-link active" : "nav-link" }>Liên hệ</Link>
            </li>
        </ul>
    )
}