import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Teklif = () => {
    return (
        <section className="about">
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="/img/product1.jpeg" alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Ekonomik ve hızlı lojistik çözümlerimiz ile tasarruf edin
                                </div>
                                <div className="about-text">

                                    Konusunda uzman profesyonel ekibimiz size ihtiyacınız olan kargo hizmetiyle ilgili en uygun fiyat teklifini sunsun, hem zamandan hem bütçenizden tasarruf edin!                            </div>

                                <Link to={'/contact'}>
                                    <button className="teklif">
                                        Hemen Teklif Al
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teklif