import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Teklif = () => {
    return (
        <section className="about">
            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src="https://media.istockphoto.com/id/1182778655/photo/delivery-man-holding-parcel-boxes-and-ring-the-doorbell-on-the-clients-door-in-the-morning.webp?b=1&s=612x612&w=0&k=20&c=Ds9gCy2cahju8ujggIu3vAVUL6J0l5LNYGjrXvgaNeU=" alt="product" className="w-100" />
                        </div>
                        <div className="col-lg-6">
                            <div className="about-item">
                                <div className="title">
                                    Ekonomik ve hızlı lojistik çözümlerimiz ile tasarruf edin
                                </div>
                                <div className="about-text">

                                    Konusunda uzman profesyonel ekibimiz size ihtiyacınız olan kargo hizmetiyle ilgili en uygun fiyat teklifini sunsun, hem zamandan hem bütçenizden tasarruf edin!                            </div>

                                <Link to={'/contact'}>
                                    <button className="teklif btn btn-secondary">
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