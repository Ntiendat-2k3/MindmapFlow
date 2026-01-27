import './style.scss'
import Image from 'next/image'
import price_1 from '@/assets/images/abstract-1.jpg'
import price_2 from '@/assets/images/abstract-2.jpg'
import price_3 from '@/assets/images/abstract-3.jpg'

export const metadata = {
    title: "Prices Page",
    description: "Know more about prices"
}

export default function PricesPage() {
    return (
        // <Suspense fallback={ <LoadingAnimation /> }>
        //     <main className='prices-page'>
        //         <div className="container">
        //             <h1 className='prices-page-heading'>
        //                 <span>Flexible </span>
        //                 Plans
        //             </h1>

        //             <div className='prices-advice'>
        //                 <p>Choose a plan that works best for you and your team.</p>
        //             </div>

        //             <div className="prices">
        //                 <div className="row">
        //                     <div className="col-12">
        //                         <div className="row">
        //                             <div className="col-12 col-lg-4">
        //                                 <div className="price">
        //                                     <div className="price-level">
        //                                         <Image src={price_1} alt="" />

        //                                         <div className="price-level-info">
        //                                             <h3>Basic</h3>
        //                                             <p>
        //                                                 <span className='dollar'>$ </span>
        //                                                 <span className='price-number'>
        //                                                     10
        //                                                     <span> / user</span>
        //                                                 </span>
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <div className="price-supports">
        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Get started with </span>
        //                                                 messaging
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Flexible </span>
        //                                                 team meetings
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Cloud storage </span>
        //                                                 5 TB
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <a href="" className='button-choose'>
        //                                         Choose Plan
        //                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                             <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        //                                         </svg>
        //                                     </a>
        //                                 </div>
        //                             </div>

        //                             <div className="col-12 col-lg-4">
        //                                 <div className="price">
        //                                     <div className="price-level">
        //                                         <Image src={price_2} alt="" />

        //                                         <div className="price-level-info">
        //                                             <h3>Startup</h3>
        //                                             <p>
        //                                                 <span className='dollar'>$ </span>
        //                                                 <span className='price-number'>
        //                                                     24
        //                                                     <span> / user</span>
        //                                                 </span>
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <div className="price-supports">
        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Get started with </span>
        //                                                 messaging
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Flexible </span>
        //                                                 team meetings
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Cloud storage </span>
        //                                                 5 TB
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <a href="" className='button-choose'>
        //                                         Choose Plan
        //                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                             <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        //                                         </svg>
        //                                     </a>
        //                                 </div>
        //                             </div>

        //                             <div className="col-12 col-lg-4">
        //                                 <div className="price">
        //                                     <div className="price-level">
        //                                         <Image src={price_3} alt="" />

        //                                         <div className="price-level-info">
        //                                             <h3>Enterprise</h3>
        //                                             <p>
        //                                                 <span className='dollar'>$ </span>
        //                                                 <span className='price-number'>
        //                                                     35
        //                                                     <span> / user</span>
        //                                                 </span>
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <div className="price-supports">
        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Get started with </span>
        //                                                 messaging
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Flexible </span>
        //                                                 team meetings
        //                                             </p>
        //                                         </div>

        //                                         <div className='price-support'>
        //                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                                 <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
        //                                             </svg>

        //                                             <p>
        //                                                 <span>Cloud storage </span>
        //                                                 5 TB
        //                                             </p>
        //                                         </div>
        //                                     </div>

        //                                     <a href="" className='button-choose'>
        //                                         Choose Plan
        //                                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                             <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
        //                                         </svg>
        //                                     </a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </Suspense>

        <main className='prices-page'>
            <div className="container">
                <h1 className='prices-page-heading'>
                    <span>Flexible </span>
                    Plans
                </h1>

                <div className='prices-advice'>
                    <p>Choose a plan that works best for you and your team.</p>
                </div>

                <div className="prices">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 col-lg-4">
                                    <div className="price">
                                        <div className="price-level">
                                            <Image src={price_1} alt="" />

                                            <div className="price-level-info">
                                                <h3>Basic</h3>
                                                <p>
                                                    <span className='dollar'>$ </span>
                                                    <span className='price-number'>
                                                        10
                                                        <span> / user</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="price-supports">
                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Get started with </span>
                                                    messaging
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Flexible </span>
                                                    team meetings
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Cloud storage </span>
                                                    5 TB
                                                </p>
                                            </div>
                                        </div>

                                        <a href="" className='button-choose'>
                                            Choose Plan
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="price">
                                        <div className="price-level">
                                            <Image src={price_2} alt="" />

                                            <div className="price-level-info">
                                                <h3>Startup</h3>
                                                <p>
                                                    <span className='dollar'>$ </span>
                                                    <span className='price-number'>
                                                        24
                                                        <span> / user</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="price-supports">
                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Get started with </span>
                                                    messaging
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Flexible </span>
                                                    team meetings
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Cloud storage </span>
                                                    5 TB
                                                </p>
                                            </div>
                                        </div>

                                        <a href="" className='button-choose'>
                                            Choose Plan
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="col-12 col-lg-4">
                                    <div className="price">
                                        <div className="price-level">
                                            <Image src={price_3} alt="" />

                                            <div className="price-level-info">
                                                <h3>Enterprise</h3>
                                                <p>
                                                    <span className='dollar'>$ </span>
                                                    <span className='price-number'>
                                                        35
                                                        <span> / user</span>
                                                    </span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="price-supports">
                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Get started with </span>
                                                    messaging
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Flexible </span>
                                                    team meetings
                                                </p>
                                            </div>

                                            <div className='price-support'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                </svg>

                                                <p>
                                                    <span>Cloud storage </span>
                                                    5 TB
                                                </p>
                                            </div>
                                        </div>

                                        <a href="" className='button-choose'>
                                            Choose Plan
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
