import Title from "./Title"
import TeamItem from "./TeamItem"

const TeamList = () => {
    const title = {
        text: "Cetinkaya Kargo",
        description: "Sektörün Önde Gelenlerinden"
    }
    return (
        <section className="section-teams">
            <div className="container">
                <Title title={title.text} description={title.description} />
                <div className="row">
                    <TeamItem img={"https://cdn.pixabay.com/photo/2020/12/06/22/51/ship-5810249_1280.jpg"} title="Hızlı Sevkiyat" description="Gönderileriniz donanımlı araçlarımız ile tam zamanında adrese ulaşsın" />
                    <TeamItem img={"https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_1280.jpg"} title="Güvenli Gönderi" description="Gönderileriniz sigorta güvencesi kapsamında adres teslimi, seri bir şekilde teslim edilir" />
                    <TeamItem img={"https://cdn.pixabay.com/photo/2023/05/18/07/59/cargo-8001610_1280.jpg"} title="Koşulsuz Memnuniyet" description="Müşterilerimizin talep ve ihtiyaçlarını ön planda tutarak koşulsuz memnuniyeti hedefliyoruz" />
                </div>
            </div>
        </section>
    )
}

export default TeamList;