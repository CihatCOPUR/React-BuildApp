import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home ">
      <h2>Kat İrtifakı Hesaplama Uygulamasına Hoş Geldiniz</h2>
      <p>
        Bu uygulama ile kat irtifakı hesaplamalarını kolayca yapabilir ve hisse
        dağılımını detaylı bir şekilde görebilirsiniz. Proje kapsamında, kat
        mülkiyetine konu olan taşınmazların paylaşımını ve hisse oranlarını
        hesaplayabilirsiniz.
      </p>
      <div className="info-sections">
        <div className="info-section">
          <img src="../assets/1.jpg" alt="Kat Planları" />
          <h3>Kat Planları</h3>
          <p>
            Her bir katın planlarını görüntüleyerek kat irtifakını daha kolay
            anlayabilirsiniz.
          </p>
        </div>
        <div className="info-section">
          <img src="../assets/2.jpg" alt="Mülkiyet Dağılımı" />
          <h3>Hisse Dağılımı</h3>
          <p>
            Taşınmaz üzerindeki hisse dağılımlarını ve yüzdelerini detaylı
            olarak görüntüleyin.
          </p>
        </div>
        <div className="info-section">
          <img src="../assets/3.jpg" alt="İletişim" />
          <h3>İletişim</h3>
          <p>
            Herhangi bir sorunuz veya destek talepleriniz için bizimle iletişime
            geçebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
