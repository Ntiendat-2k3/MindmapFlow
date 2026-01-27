import './style.scss';
import Image from 'next/image';
import about_image from '@/assets/images/about-img.png'
import person_1_image from '@/assets/images/person-1.png';
import person_2_image from '@/assets/images/person-2.png';
import person_3_image from '@/assets/images/person-3.png';
import person_4_image from '@/assets/images/person-4.png';

export const metadata = {
    title: "About Page",
    description: "Know more about us"
}

export default function AboutPage() {
  return (
        // <Suspense fallback={ <LoadingAnimation /> }>
        //     <main className='about-page'>
        //         <div className="container">
        //             <div className="about">
        //                 <div className="row">
        //                     <div className="col-12 col-xl-6">
        //                         <div className="about-content">
        //                             <h2>About Us</h2>
        //                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        //                         </div>
        //                     </div>
    
        //                     <div className="col-12 col-xl-6">
        //                         <Image src={about_image} alt="image" />
        //                     </div>
        //                 </div>
        //             </div>

        //             <div className="story">
        //                 <div className="row">
        //                     <div className="col-12 col-xl-6">
        //                         <div className="story-content">
        //                             <h2>Our Story</h2>
        //                             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
        //                         </div>
        //                     </div>

        //                     <div className="col-12 col-xl-6">
        //                         <div className="group-images">
        //                             <Image src={person_1_image} alt="image" />
        //                             <Image src={person_2_image} alt="image" />
        //                             <Image src={person_3_image} alt="image" />
        //                             <Image src={person_4_image} alt="image" />
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </Suspense>

        <main className='about-page'>
            <div className="container">
                <div className="about">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <div className="about-content">
                                <h2>About Us</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                            </div>
                        </div>

                        <div className="col-12 col-xl-6">
                            <Image src={about_image} alt="image" />
                        </div>
                    </div>
                </div>

                <div className="story">
                    <div className="row">
                        <div className="col-12 col-xl-6">
                            <div className="story-content">
                                <h2>Our Story</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
                            </div>
                        </div>

                        <div className="col-12 col-xl-6">
                            <div className="group-images">
                                <Image src={person_1_image} alt="image" />
                                <Image src={person_2_image} alt="image" />
                                <Image src={person_3_image} alt="image" />
                                <Image src={person_4_image} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}