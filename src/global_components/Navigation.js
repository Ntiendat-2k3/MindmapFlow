import '@/global_components/styleNavigation.scss'

import Link from "next/link"
import { Fragment } from "react"
import { getServerSession } from "next-auth/next"
import options from '@/app/api/auth/[...nextauth]/options'
import NavLink from './NavLink'
import ButtonSignOut from './ButtonSignOut'

export default async function Navigation() {
    const session = await getServerSession(options);

    return (
        <header className='header-main'>
            <div className="container">
                <input type="checkbox" id="input-toggle-nav" className='input-toggle-nav' hidden />
                <label htmlFor='input-toggle-nav' className="overlay"></label>

                <div className="nav-main">
                    <div className="row">
                        <div className="col-8 col-lg-2">
                            <div className="logo">
                                <Link href="/home">Mindmap Flow</Link>
                            </div>
                        </div>

                        <div className="col-4 col-lg-10">
                            <div className="right-side">
                                <div className="nav-wrap-right">

                                    <div className="nav-wrap-background">
                                        <label htmlFor="input-toggle-nav" className="button-cancel">Thoát</label>

                                        <NavLink />

                                        <div className="other-options">
                                            {
                                                session ? (
                                                    <Fragment>
                                                        <p>Hi, { session.user.name }</p>
                                                        <Link href="/my-mindmap" className='button-mindmap'>My mindmap</Link>
                                                        <ButtonSignOut />
                                                    </Fragment>
                                                ) : (
                                                    <Link href="/login" className="button-login">Đăng nhập</Link>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>

                                <div className="nav-toggle">
                                    <label htmlFor='input-toggle-nav'>
                                        <svg xmlns="http:www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                                        </svg>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}