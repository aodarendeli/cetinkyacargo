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
                    <TeamItem title="Hızlı Sevkiyat" description="Gönderileriniz donanımlı araçlarımız ile tam zamanında adrese ulaşsın" />
                    <TeamItem title="Güvenli Gönderi" description="Gönderileriniz sigorta güvencesi kapsamında adres teslimi, seri bir şekilde teslim edilir" />
                    <TeamItem title="Koşulsuz Memnuniyet" description="Müşterilerimizin talep ve ihtiyaçlarını ön planda tutarak koşulsuz memnuniyeti hedefliyoruz" />
                </div>
            </div>
        </section>
    )
}

export default TeamList;