const Contact = () => {
    return (
        <section className="contact">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">İletişim</h1>
                            <h2 className="page-description">İletişim</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <h5>Mail</h5>
                                        <h6>info@cetinkayacargo.com</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-map-marker-alt"></i>
                                        <h5>Adres</h5>
                                        <h6>Nişanca Mahallesi Asya Sokak No:31/A Laleli Fatih/İstanbul</h6>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item">
                                        <i className="fas fa-phone-alt"></i>
                                        <h5>Phone</h5>
                                        <h6>0530 124 43 13</h6>
                                        <h6>0532 164 30 99</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="row mt-5">
                                <div className="col-lg-6">
                                    <label>Ad & Soyad</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-6">
                                    <label>Telefon</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Konu</label>
                                    <input type="text" className="inp-contact" />
                                </div>
                                <div className="col-lg-12">
                                    <label>Mesaj</label>
                                    <textarea type="text" className="ta-contact" rows="4"></textarea>
                                </div>
                                <div className="col-lg-12">
                                    <button className="btn-contact">Mesaj Gönder</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact