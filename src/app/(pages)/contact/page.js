import './style.scss';

export default function ContactPage() {
    return (
        <div className="contact-page">
            <div className="container">
                <form className="contact-form">
                    <h2 className='form-heading'>CONTACT US</h2>

                    <div className="form-group">
                        <div className="row">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="First Name" />
                            </div>
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Last Name" />
                            </div>
                        </div>
                    </div>

                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="text" className="form-control" placeholder="Phone" />
                    <textarea className="form-control" placeholder="Write your message..."></textarea>

                    <button className="btn-send">Send Message</button>
                </form>
            </div>
        </div>
    )
}
