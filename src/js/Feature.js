const FeatureSpeackerBox = document.querySelector('.FeatureSpeackerBox');

const data = [
  {
    img: './src/img/speaker_01 1.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },
  {
    img: './src/img/speacker_3.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },
  {
    img: './src/img/speake_2.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },
  {
    img: './src/img/speaker_4.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },
  {
    img: './src/img/speaker_5.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },
  {
    img: './src/img/speaker_6.png',
    title: 'Yochai Benkler',
    subTitile: 'Profesor de Estudios Legales Empresariales en la Facultad de Derecho de Harvard',
    info: 'Benkler estudia la producción basada en bienes comunes y publicó su libro seminal, The Wealth of Networks, en 2006',
  },

];

function componentDynamic(data) {
  return data.map((orador) => {
    const {
      img, title, subTitile, info,
    } = orador;
    return `
      <div class="FeaturePeopleSpeacker">
        <div class="FeatureImg">
          <img src="${img}" alt="">
        </div>
        <div class="FeatureInfo">
          <div class="FeatureTitle">
            <h2>${title}</h2>
            <p>${subTitile}</p>
          </div>
          <div class="FeatureP">
            <p>${info}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

FeatureSpeackerBox.innerHTML = componentDynamic(data);
