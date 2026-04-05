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
                                    <p>Giao diện trực quan và thao tác kéo thả mượt mà giúp bạn tạo bản đồ tư duy ngay lập tức mà không cần học cách sử dụng.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="advantage">
                                <h3 className="advantage-heading">Không giới hạn</h3>
                                <div className="advantage-desc">
                                    <p>Thỏa sức sáng tạo với không gian làm việc vô hạn. Thêm vô số nhánh, nút và tái cấu trúc ý tưởng một cách tự do nhất.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="advantage">
                                <h3 className="advantage-heading">Quản lý và chia sẻ</h3>
                                <div className="advantage-desc">
                                    <p>Dễ dàng lưu trữ toàn bộ bản đồ trên đám mây, cho phép bạn chia sẻ với đồng nghiệp và truy cập mọi lúc mọi nơi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}