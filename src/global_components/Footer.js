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
                                <div className="col-12 col-lg-4">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Sản phẩm</h3>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/features">Tính năng</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/my-mindmap">Tạo sơ đồ</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Mẫu sơ đồ</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Tài nguyên</h3>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Tài nguyên thiết kế</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Blog & Kiến thức</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Cộng đồng</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <ul className='footer-list'>
                                        <li className="footer-item">
                                            <h3>Trợ giúp</h3>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/contact">Hỗ trợ khách hàng</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Điều khoản dịch vụ</Link>
                                        </li>
                                        <li className="footer-item">
                                            <Link href="/">Cam kết bảo mật</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End second row */}
                        </div>

                        <div className="col-12 col-xl-4">
                            <div className="footer-social-network">
                                <h3>Kết nối với chúng tôi</h3>

                                <ul className='footer-social-list'>
                                    <li className="footer-social-item">
                                        <a href="/">Facebook</a>
                                    </li>
                                    <li className="footer-social-item">
                                        <a href="/">Twitter</a>
                                    </li>
                                    <li className="footer-social-item">
                                        <a href="/">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* End first row */}
                </div>
    
                <div className="footer-bottom">
                    {/* Begin first row */}
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-8">
                            {/* Begin second row */}
                            <div className="row">
                                <div className="col-12 col-lg-6">
                                    <div className="footer-info">
                                        <h3>MindmapFlow</h3>
                                        <p>Giải pháp lập bản đồ tư duy trực quan, giúp bạn phát triển ý tưởng và quản lý công việc hiệu quả.</p>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-6">
                                    <div className="footer-info">
                                        <h3>Bản quyền</h3>
                                        <p>&copy; 2026 MindmapFlow. Nền tảng miễn phí.</p>
                                        <p>Giấy phép hoạt động: MIT License.</p>
                                    </div>
                                </div>
                            </div>
                            {/* End second row */}
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className='button-start'>
                                <Link href="/my-mindmap">Bắt đầu ngay</Link>
                            </div>
                        </div>
                    </div>
                    {/* End first row */}
                </div>
            </div>
        </footer>
    )
}