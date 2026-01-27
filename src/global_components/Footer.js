import Link from 'next/link'
import '@/global_components/styleFooter.scss'

export default function Footer() {
    return (
        <footer className='footer-main'>
            <div className="container">
                <div className="footer-top">
                    {/* Begin first row */}
                    <div className="row">
                        <div className="col-12 col-xl-8">
                            {/* Begin second row */}
                            <div className="row">
                                <div className="col-12 col-lg-3">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Features</h3>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Cool stuff</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Random feature</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Team feature</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Stuff for developers</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Another one</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Last time</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Resources</h3>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Resource</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Resource name</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Another resource</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Final resource</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>About</h3>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Team</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Locations</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Privacy</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Terms</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-3">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Help</h3>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Support</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Help Center</Link>
                                        </li>

                                        <li className="footer-item">
                                            <Link href="">Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End second row */}
                        </div>

                        <div className="col-12 col-xl-4">
                            <div className="footer-social-network">
                                <h3>Stay connected</h3>

                                <ul className='footer-social-list'>
                                    <li className="footer-social-item">
                                        <a href="">Facebook</a>
                                    </li>
                                    <li className="footer-social-item">
                                        <a href="">Twitter</a>
                                    </li>
                                    <li className="footer-social-item">
                                        <a href="">Google</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End first row */}
                </div>
    
                <div className="footer-bottom">
                    {/* Begin first row */}
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {/* Begin second row */}
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <div className="footer-info">
                                        <h3>FWR</h3>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="footer-info">
                                        <h3>Address</h3>
                                        <p>123 6th St.</p>
                                        <p>Melbourne, FL 32904</p>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="footer-info">
                                        <h3>Free Resources</h3>
                                        <p>Use our HTML blocks for <span>FREE</span>.</p>
                                        <p>All are MIT License</p>
                                    </div>
                                </div>
                            </div>
                            {/* End second row */}
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className='button-start'>
                                <Link href="" >Get Started</Link>
                            </div>
                        </div>
                    </div>
                    {/* End first row */}
                </div>
            </div>
        </footer>
    )
}