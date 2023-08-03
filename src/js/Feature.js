const FeatureSpeackerBox = document.querySelector('.FeatureSpeackerBox');

const data = [
  {
    img: './src/img/speaker_01 1.png',
    title: 'Yochai Benkler',
    subTitle: 'Computer Science Professor at Harvard Law School',
    info: 'Yochai Benkler is an expert in commons-based production and published his seminal book, The Wealth of Networks, in 2006.',
  },
  {
    img: './src/img/speacker_3.png',
    title: 'Kilnam Chon',
    subTitle: 'Computer Science Professor at Harvard Law School',
    info: 'Kilnam Chon is a renowned computer scientist and one of the pioneers of the internet in South Korea.',
  },
  {
    img: './src/img/speake_2.png',
    title: 'SohYeong Noh',
    subTitle: 'Computer Science Professor at Harvard Law School',
    info: 'SohYeong Noh is an esteemed computer science professor at Harvard Law School. Her research focuses on artificial intelligence, data privacy, and human-computer interaction.',
  },
  {
    img: './src/img/speaker_4.png',
    title: 'Julia Leda',
    subTitle: 'Computer Science Professor at Harvard Law School',
    info: 'Julia Leda is a respected computer science professor at Harvard Law School. She specializes in software engineering, algorithm design, and computational theory.',
  },
  {
    img: './src/img/speaker_5.png',
    title: 'Lila Tretikov',
    subTitle: 'Software Engineer and Open Source Advocate',
    info: 'Lila Tretikov is a highly accomplished software engineer and advocate for open-source software. She served as the Executive Director of the Wikimedia Foundation, where she played a pivotal role in expanding the reach of Wikipedia and other Wikimedia projects. ',
  },
  {
    img: './src/img/speaker_6.png',
    title: 'Ryan Merkley',
    subTitle: 'Technology Policy Expert and Educator',
    info: 'Ryan Merkley is a renowned expert in technology policy and education. As the former CEO of Creative Commons, he worked to promote the use and sharing of creative works through open licenses.',
  },

];

function componentDynamic(data) {
  return data.map((orador) => {
    const {
      img, title, subTitle, info,
    } = orador;
    return `
      <div class="FeaturePeopleSpeacker">
        <div class="FeatureImg">
          <img src="${img}" alt="">
        </div>
        <div class="FeatureInfo">
          <div class="FeatureTitle">
            <h2>${title}</h2>
            <p>${subTitle}</p>
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
