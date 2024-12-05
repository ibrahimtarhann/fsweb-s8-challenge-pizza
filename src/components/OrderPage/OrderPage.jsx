import "./OrderPage.css";
import Check from "./Check.jsx";
import { useHistory } from "react-router-dom";

function OrderPage() {
  let history = useHistory();

  const handleSuccess = () => {
    history.push("/Success");
  };

  return (
    <>
      <div className="main-container">
        <header className="header">
          <h1>Teknolojik Yemekler</h1>
          <nav>
            <a href="/">Anasayfa -</a>
            <a href="/">Seçenekler -</a>
            <a>Sipariş Oluştur</a>
          </nav>
        </header>

        <div className="main">
          <h2>Position Absolute Acı Pizza</h2>

          <span className="oranlar">
            <h3>85.50₺</h3>
            <p>4.9</p> <p>(200)</p>
          </span>

          <p className="aciklama">
            Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı
            pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
            diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun
            ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
            yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan
            kökenli lezzetli bir yemektir.. Küçük bir pizzaya bazen pizzetta
            denir.
          </p>

          <div className="boyutSec-container">
            <div className="boyutSec">
              <h4>Boyut Seç*</h4>
              <br />

              <input type="radio" name="radio" id="Küçük" />
              <label htmlFor="Küçük" id="">
                Küçük
              </label>
              <br />
              <br />

              <input type="radio" name="radio" id="Orta" />
              <label htmlFor="Orta" id="">
                Orta
              </label>
              <br />
              <br />

              <input type="radio" name="radio" id="Büyük" />
              <label htmlFor="Büyük" id="">
                Büyük
              </label>
              <br />
            </div>

            <div className="hamur-turu">
              <h5>Hamur Seç*</h5>
              <select name="" id="">
                <option value="Hamur Kalınlığı">Hamur Kalınlığı</option>
              </select>
            </div>
          </div>

          <div className="ekMalzemeler">
            <h4>Ek Malzemeler</h4>
            <p>En Fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="check">
              <div className="check1">
                <Check htmlFor="Papperoni" id="Papperoni" label="Papperoni" />
                <br />
                <Check htmlFor="Sosis" id="Sosis" label="Sosis" />
                <br />
                <Check
                  htmlFor="Kanada Jambonu"
                  id="Kanada Jambonu"
                  label="Kanada Jambonu"
                />
                <br />
                <Check
                  htmlFor="Tavuk Izgara"
                  id="Tavuk Izgara"
                  label="Tavuk Izgara"
                />
                <br />
                <Check htmlFor="Soğan" id="Soğan" label="Soğan" />
                <br />
              </div>

              <div className="check2">
                <Check htmlFor="Domates" id="Domates" label="Domates" />
                <br />
                <Check htmlFor="Mısır" id="Mısır" label="Mısır" />
                <br />
                <Check htmlFor="Sucuk" id="Sucuk" label="Sucuk" />
                <br />
                <Check htmlFor="Jalepeno" id="Jalepeno" label="Jalepeno" />
                <br />
                <Check htmlFor="Sarımsak" id="Sarımsak" label="Sarımsak" />
                <br />
              </div>

              <div className="check3">
                <Check htmlFor="Biber" id="Biber" label="Biber" />
                <br />
                <Check htmlFor="Sucuk" id="Sucuk" label="Sucuk" />
                <br />
                <Check htmlFor="Ananas" id="Ananas" label="Ananas" />
                <br />
                <Check htmlFor="Kabak" id="Kabak" label="Kabak" />
              </div>
            </div>
          </div>

          <div className="sipariş-notu">
            <h6>Sipariş Notu</h6>
            <textarea
              cols="100"
              rows=""
              placeholder="Siparişine eklemek istediğin bir not var mı ?"
            ></textarea>
            <br />
            <br />
            <hr />
            <br />
          </div>

          <div className="siparis-bolumu">
            <div className="adet">
              <span>
                <button
                  className="miktar"
                  style={{
                    background: "#f8cc2b",
                    border: " 1px solid gray",
                    borderRadius: "10px 0px 0px 10px",
                  }}
                >
                  -
                </button>
              </span>

              <span>
                <button
                  className="miktar"
                  style={{
                    background: "white",
                    border: " 1px solid gray",
                    borderRadius: "0px",
                  }}
                >
                  1
                </button>
              </span>

              <span>
                <button
                  className="miktar"
                  style={{
                    background: "#f8cc2b",
                    border: " 1px solid gray",
                    borderRadius: "0px 10px 10px 0px",
                  }}
                >
                  +
                </button>
              </span>
            </div>

            <div className="siparis-tutari">
              <label>Sipariş Toplamı</label>

              <div className="secim">
                <p>Seçimler</p>
                <p>25.00₺</p>
              </div>

              <div className="toplam">
                <p>Toplam</p>
                <p>110.50₺</p>
              </div>

              <button type="button" onClick={handleSuccess}>
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderPage;
