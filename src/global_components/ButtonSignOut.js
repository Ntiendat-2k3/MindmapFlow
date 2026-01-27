"use client"

import { signOut } from "next-auth/react"

const handleClickSignOut = async () => {
    await signOut({
        callbackUrl: `${window.location.origin}/home`
    });
    window.location.origin
}

export default function ButtonSignOut() {
    return (
        <button className="button-logout" onClick={ handleClickSignOut }>Đăng xuất</button>
    )
}