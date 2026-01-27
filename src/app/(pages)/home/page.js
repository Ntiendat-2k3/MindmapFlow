import Link from "next/link"
import Image from "next/image"
import img_hero from "@/assets/images/so-do-tu-duy.webp"
import "./style.scss"

export const metadata = {
    title: "Home Page",
    description: "Home Page"
}

export default function HomePage() {
    return (
        <main className="home-page">
            <div className="container">
                <h1 className="heading-hero">Học tập hiệu quả với bản đồ tư duy</h1>

                <div className="button-hero">
                    <Link href="/my-mindmap">Sử dụng miễn phí</Link>
                </div>

                <div className="img-hero">
                    <Image src={ img_hero } />
                </div>

                <div className="advantages">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="advantage">
                                <h3 className="advantage-heading">Dễ sử dụng</h3>
                                <div className="advantage-desc">
                                    <p>FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="advantage">
                                <h3 className="advantage-heading">Không giới hạn</h3>
                                <div className="advantage-desc">
                                    <p>FWR blocks are the cleanest pieces of HTML blocks, which are built with utmost care to quality and usability.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="advantage">
                                <h3 className="advantage-heading">Quản lý và chia sẻ</h3>
                                <div className="advantage-desc">
                                    <p>FWR blocks is a perfect tool for designers, developers and agencies looking to create stunning websites in no time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}