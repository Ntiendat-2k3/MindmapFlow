import './style.scss';

export const metadata = {
    title: "Features Page",
    description: "Know more about Features"
}

export default function FeaturesPage() {
    return (
        // <Suspense fallback={ <LoadingAnimation /> }>
        //     <main className="features-page">
        //         <div className="container">
        //             <h1 className="features-heading">Features</h1>
        //             <div className="features-overral">
        //                 <p>The main aim of creating FWR blocks is to help designers, developers and agencies create websites and web apps quickly and easily. Each and every block uses minimal custom styling and is based on the utility first Tailwind framework.</p>
        //             </div>
        //             <a href="" className="button-learn-more">Learn More</a>

        //             <div className="block-features">
        //                 <div className="row">
        //                     <div className="col-12 col-lg-4">
        //                         <div className="block">
        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                 <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
        //                             </svg>
        //                             <h3>Fresh Design</h3>
        //                             <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
        //                         </div>
        //                     </div>

        //                     <div className="col-12 col-lg-4">
        //                         <div className="block">
        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                 <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
        //                             </svg>
        //                             <h3>Clean Code</h3>
        //                             <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
        //                         </div>
        //                     </div>

        //                     <div className="col-12 col-lg-4">
        //                         <div className="block">
        //                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
        //                                 <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 0 1-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 1 1-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 0 1 5.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 0 0-.11.494 3.01 3.01 0 0 0 1.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
        //                             </svg>
        //                             <h3>Perfect Tool</h3>
        //                             <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </main>
        // </Suspense>

        <main className="features-page">
            <div className="container">
                <h1 className="features-heading">Features</h1>
                <div className="features-overral">
                    <p>The main aim of creating FWR blocks is to help designers, developers and agencies create websites and web apps quickly and easily. Each and every block uses minimal custom styling and is based on the utility first Tailwind framework.</p>
                </div>
                <a href="" className="button-learn-more">Learn More</a>

                <div className="block-features">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className="block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path d="M11.983 1.907a.75.75 0 0 0-1.292-.657l-8.5 9.5A.75.75 0 0 0 2.75 12h6.572l-1.305 6.093a.75.75 0 0 0 1.292.657l8.5-9.5A.75.75 0 0 0 17.25 8h-6.572l1.305-6.093Z" />
                                </svg>
                                <h3>Fresh Design</h3>
                                <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M6.28 5.22a.75.75 0 0 1 0 1.06L2.56 10l3.72 3.72a.75.75 0 0 1-1.06 1.06L.97 10.53a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Zm7.44 0a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L17.44 10l-3.72-3.72a.75.75 0 0 1 0-1.06ZM11.377 2.011a.75.75 0 0 1 .612.867l-2.5 14.5a.75.75 0 0 1-1.478-.255l2.5-14.5a.75.75 0 0 1 .866-.612Z" clipRule="evenodd" />
                                </svg>
                                <h3>Clean Code</h3>
                                <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="block">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M19 5.5a4.5 4.5 0 0 1-4.791 4.49c-.873-.055-1.808.128-2.368.8l-6.024 7.23a2.724 2.724 0 1 1-3.837-3.837L9.21 8.16c.672-.56.855-1.495.8-2.368a4.5 4.5 0 0 1 5.873-4.575c.324.105.39.51.15.752L13.34 4.66a.455.455 0 0 0-.11.494 3.01 3.01 0 0 0 1.617 1.617c.17.07.363.02.493-.111l2.692-2.692c.241-.241.647-.174.752.15.14.435.216.9.216 1.382ZM4 17a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clipRule="evenodd" />
                                </svg>
                                <h3>Perfect Tool</h3>
                                <p className="features-desc">FWR blocks bring in an air of fresh design with their creative layouts and blocks, which are easily customizable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}