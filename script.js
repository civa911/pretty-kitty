
//  Создаю вторую функцию генерации
// Создаем массив картинок
var imagess = [
  {src: 'happy/2ee79a.jpg', alt: '1 изображение'},
  {src: 'happy/1653640320_1-kartinkof-club-p-veselie-kotiki-kartinki-1.jpg', alt: '2 изображение'},
  {src: 'happy/ece03d.jpg', alt: '3 изображение'},
  {src: 'happy/c93b40.jpg', alt: '4 изображение'},
  {src: 'happy/ad342c.jpg', alt: '5 изображение'},
  {src: 'sleep/5cf07a5fd1499d64f7a8-2.jpg', alt: '6 изображение'},
  {src:  'gif/cat-sleep.gif', alt: '23 изображение'},
  {src: 'sleep/5e60c8e1f1aa22ca3088.jpg', alt: '7 изображение'},
  {src: 'sleep/8df8d87f100dfed435ca.jpg', alt: '8 изображение'},
  {src: 'sleep/579d6f2457ca16c5be83-2.jpg', alt: '9 изображение'},
  {src: 'sleep/9b0baf211fc6960e2c9e.jpg', alt: '10 изображение'},
  {src: 'gif/cat-cute.gif', alt: '24 изображение'},
  {src: 'sad/1662521683_19-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-29.jpg', alt: '11 изображение'},
  {src: 'sad/1662521690_38-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-57.jpg', alt: '12 изображение'},
  {src: 'sad/1662521703_15-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-22.jpg', alt: '13 изображение'},
  {src: 'sad/1662521732_20-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-30.jpg', alt: '14 изображение'},
  {src: 'angry/1443418043_014.jpg', alt: '15 изображение'},
  {src: 'angry/04806995413dba42dde116b2e3dda930.jpg', alt: '16 изображение'},
  {src: 'angry/dJ8pJc6GEWo.jpg', alt: '17 изображение'},
  {src: 'gif/cat-clean.gif', alt: '25 изображение'},
  {src: 'surprised/1641525145_13-krasivosti-pro-p-koti-v-shoke-krasivo-foto-15.jpg', alt: '18 изображение'},
  {src: 'surprised/1641525125_11-krasivosti-pro-p-koti-v-shoke-krasivo-foto-13.jpg', alt: '19 изображение'},
  {src: 'surprised/1641525137_46-krasivosti-pro-p-koti-v-shoke-krasivo-foto-50.jpg', alt: '20 изображение'},
  {src: 'surprised/1641525191_23-krasivosti-pro-p-koti-v-shoke-krasivo-foto-27.jpg', alt: '21 изображение'},
  {src: 'surprised/1641525180_58-krasivosti-pro-p-koti-v-shoke-krasivo-foto-67.jpg', alt: '22 изображение'},
  {src: 'gif/huh.gif', alt: '26 изображение'}
 ];
//  переменные `hideButton`, `container`, и `selectedContainer`, 
// содержат ссылки на элементы HTML с идентификаторами "hide-button", "imageContainer1", 
// и "selectedContainer". 
var hideButton = document.getElementById('hide-button');
 var container = document.querySelector('#imageContainer1');
 var selectedContainer = document.querySelector('#selectedContainer');
//  переменные `currentIndex` и `selected`,
//    хранят текущий индекс и выделенные изображения соответственно. 
 var currentIndex = 0;
 var selected = [];
//  в `renderImages()` происходит очищение контейнера и добавление 
// пары изображений из массива `imagess`.
 function renderImages() {
  container.innerHTML = '';
  var pair = imagess.slice(currentIndex, currentIndex + 2);
  if (pair.length < 2) {
   return;
  }
  //  Для каждого изображения создается элемент `img` и добавляются его атрибуты. 
  // Созданные элементы добавляются в контейнер и присваивается класс "imager". 
  // Если индекс пары уже выделен, то добавляется класс "selected" для одного изображения 
  // в паре.
  pair.forEach((imager, index) => {
   var imgElem = document.createElement('img');
   imgElem.setAttribute('src', imager.src);
   imgElem.setAttribute('alt', imager.alt);
   imgElem.setAttribute('onclick', `selectImage(${currentIndex + index})`);
   imgElem.classList.add('imager');
   container.appendChild(imgElem);
  });

  if (selected.includes(currentIndex) || selected.includes(currentIndex + 1)) {
   var selectedImg = selected.includes(currentIndex) ? currentIndex : currentIndex + 1;
   document.querySelectorAll('.imager')[selectedImg].classList.add('selected');
  }

  currentIndex += 2;
 }
// Функция `selectImage()` добавляет либо удаляет индекс выбранного изображения из 
// массива `selected` и добавляет или удаляет класс "selected" для соответствующего 
// элемента `img`. 
 function selectImage(index) {
  if (selected.includes(index)) {
   selected.splice(selected.indexOf(index), 1);
   document.querySelectorAll('.imager')[index - currentIndex].classList.remove('selected');
  } else {
   selected.push(index);
   document.querySelectorAll('.imager')[index - currentIndex].classList.add('selected');
  }
 }


//  Функция `nextPair()` отрисовывает следующую пару 
//  изображений вызывая функцию `renderImages()`. 
 function nextPair() {
  renderImages();
 }

 
 
// Функция `showSelected()` очищает контейнер `selectedContainer` и 
// добавляет изображения выбранных элементов из массива `selected`.
 function showSelected() {
  selectedContainer.innerHTML = '';
  selected.forEach((index) => {
   var imgElem = document.createElement('img');
   imgElem.setAttribute('src', imagess[index].src);
   imgElem.setAttribute('alt', imagess[index].alt);
   imgElem.classList.add('imager');
   selectedContainer.appendChild(imgElem);
  });
  // Оба контейнера скрыты или показаны с помощью добавления либо удаления класса 
  // "hidden". Когда эта функция вызывается, элемент с идентификатором "results" 
  // также показывается.
  container.classList.add('hidden');
  selectedContainer.classList.remove('hidden');
  document.getElementById("results").style.display = "block";
 }

//  отрисовка изображений.
 renderImages();



// Создаю первую генерации
    // Создаем массив картинок
var images = [
  'gif/koteyka.gif',
  'happy/ece03d.jpg', 
  'sad/1662521743_12-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-19.jpg',
  'happy/c93b40.jpg', 
  'angry/1443418043_014.jpg',
  'sleep/579d6f2457ca16c5be83-2.jpg',
  'happy/ad342c.jpg',
  'gif/Kot_est_chipsy.gif',
  'angry/1443418043_014.jpg',
  'surprised/1641525145_13-krasivosti-pro-p-koti-v-shoke-krasivo-foto-15.jpg',
  'sleep/579d6f2457ca16c5be83-2.jpg', 
  'sad/Luhu-the-saddest-cat-in-the-world-6.jpg',
  'sleep/9b0baf211fc6960e2c9e.jpg',
  'happy/ad342c.jpg',
  'sleep/5cf07a5fd1499d64f7a8-2.jpg',
  'sad/i9RHzMDoTFQ.jpg',
  'surprised/1641525128_54-krasivosti-pro-p-koti-v-shoke-krasivo-foto-60.jpg',
  'sad/cf241a9s-960.jpg',
  'surprised/1641525115_34-krasivosti-pro-p-koti-v-shoke-krasivo-foto-38.jpg',
  'gif/cat-sleep.gif',
  'gif/cat-cute.gif',
  'gif/cat-clean.gif',
  'gif/kotyonok_zhosk_tryasyot_popoy.gif',
];

// Находим кнопки и контейнер для картинки
var randomizeButton = document.getElementById('randomize-button');
var hideButton = document.getElementById('hide-button');
var imageContainer = document.getElementById('image-container');
var currentImage = null;

// Назначаем обработчики нажатия на кнопки
randomizeButton.addEventListener('click', function() {
  // Если уже есть картинка, скрываем ее
  if (currentImage !== null) {
    currentImage.classList.add('hidden');
  }

  // Получаем случайный индекс картинки из массива
  var randomIndex = Math.floor(Math.random() * images.length);

  // Создаем элемент img и задаем ему атрибуты src и alt
  var image = document.createElement('img');
  image.src = images[randomIndex];
  image.alt = 'Random Image';
 

  // Очищаем контейнер от предыдущих картинок и добавляем в него новую
  imageContainer.innerHTML = '';
  imageContainer.appendChild(image);


  // Сохраняем ссылку на текущую картинку
  currentImage = image;
  
  
  // Когда изображение загрузится, произойдет вызов этой функции.
  image.onload = function() {
    var width = this.naturalWidth;
    var height = this.naturalHeight;
    if (width > 500 || height > 500) {
      var ratio = width / height;
      if (width > 500) {
        width = 500;
        height = width / ratio;
      }
      if (height > 500) {
        height = 500;
        width = height * ratio;
      }
      this.width = width;
      this.height = height;
    }
  }
  
});

hideButton.addEventListener('click', function() {
  // Если есть картинка, скрываем ее 
  if (currentImage !== null) {
    currentImage.classList.add('hidden');
  }
});



// Создаю третью функцию генерации
var moodOptions = {
  happy: [
    "gif/D.gif",
    "happy/c93b40.jpg",
    "happy/2ee79a.jpg",
    "happy/3d2c58.jpg",
    "happy/8ad99a.jpg",
    "happy/52e905c12f9ab1a5234ef94221ff6536.jpg",
    "happy/72aeee.jpg",
    "happy/narvh5ztyac.jpg",
    "happy/prikolnye-kotiki-8.jpg",
    "happy/80c6e7.jpg",
    "happy/83c4d3.jpg",
    "happy/4Lw_uFK_cc8.jpg",
    "gif/kotyonok_zhosk_tryasyot_popoy.gif",
    "happy/prikolnye-kotiki-26.jpg",
    "happy/3123132.jpg",
    "happy/prikolnye-kotiki-53.jpg",
    "happy/7564cdcfa38c201e022968b4c0c6b320.jpg",
    "happy/8161a3.jpg",
    "happy/1619790714_23-oir_mobi-p-veselii-kotik-zhivotnie-krasivo-foto-23.jpg",
    "happy/1653640320_1-kartinkof-club-p-veselie-kotiki-kartinki-1.jpg",
    "happy/AhgJNWdA0EA.jpg",
    "happy/MG--7_66N54.jpg",
    "happy/prikolnye-kotiki-16.jpg",
    "happy/cd00dd.jpg",
    "happy/ece03d.jpg",
    "happy/faf17e.jpg",
    "happy/Uia71SSb-is.jpg",
    "happy/prikolnye-kotiki-6.jpg",
    "happy/prikolnye-kotiki-11.jpg"

  ],
  sad: [
    "sad/1662521732_20-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-30.jpg",
    "sad/1662521683_19-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-29.jpg",
    "gif/Kotenok_vzorvalsya.gif",
    "sad/1662521690_38-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-57.jpg",
    "sad/1662521703_15-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-22.jpg",
    "sad/4.jpg",
    "sad/5f3905553b48ec3044b4a17b4a0f108e.jpg",
    "sad/1662521663_14-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-21.jpg",
    "sad/1662521733_11-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-18.jpg",
    "sad/1662521671_22-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-35.jpg",
    "sad/1662521674_10-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-17.jpg",
    "sad/1662521674_21-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-32.jpg",
    "sad/1662521677_41-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-62.jpg",
    "sad/1662521684_40-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-59.jpg",
    "sad/1662521697_37-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-56.jpg",
    "sad/1662521700_45-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-66.jpg",
    "sad/1662521703_15-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-22.jpg",
    "sad/1662521704_43-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-64.jpg",
    "sad/1662521709_18-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-28.jpg",
    "sad/1662521724_25-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-40.jpg",
    "sad/1662521733_11-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-18.jpg",
    "sad/1662521733_13-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-20.jpg",
    "sad/1662521733_28-gamerwall-pro-p-kotik-s-grustnimi-glazami-vkontakte-45.jpg",
    "sad/i9RHzMDoTFQ.jpg",
    "sad/fbf09644514b6c816ffb00a77feea248.jpg",
    "sad/insta-of-the-week-sad-cat-luhu-17.jpg"


  ],
  angry: [
    "angry/1443418043_014.jpg",
    "angry/04806995413dba42dde116b2e3dda930.jpg",
    "angry/dJ8pJc6GEWo.jpg",
    "gif/Kotyata.gif",
    "angry/3-manul.jpg",
    "angry/5_1562663348-e1562932631513-630x315.jpg",
    "angry/11_1562674424-e1562934710412-630x315.jpg",
    "angry/47dGkyGhJcg.jpg",
    "angry/0341514_angry-cat.jpg",
    "angry/609913634_0_0_0_0_600x0_80_0_0_87acd2b6ba268935641c811fca76c3ff.jpg",
    "angry/1113942893_0_0_965_547_600x0_80_0_0_e71105ed690cb96745c2709f8d1e0556.jpg",
    "angry/1119385694_0_50_960_590_600x0_80_0_0_0d616ce6ca8ad7e93c828ae399e95507.jpg",
    "angry/1662311487_34-gamerwall-pro-p-zlaya-koshka-vkontakte-56.jpg",
    "angry/153538939618630425.jpg",
    "angry/agressivnoe-povedenie-kota-3.jpg",
    "angry/aSZgUFwq5wQ.jpg",
    "angry/gNgqgSp-5qM.jpg",
    "angry/hereiscatmain.jpg",
    "angry/Om-2xxb4aRs.jpg",
    "angry/img-public2-31-01-2018.jpg",
    "angry/kot-agressor-1.jpg",
    "angry/NAPADAET9.jpg",
    "angry/оска-кота-агрессии-69459478.jpg",
    "angry/zloi-kot-strashnyi-kotik-kotenok.jpg",
    "angry/zlaya-koshka.jpg",
    "angry/Z1zZFi_DIwI.jpg"

  ],
  sleep: [
    "sleep/579d6f2457ca16c5be83-2.jpg",
    "gif/Son.gif",
    "sleep/5e60c8e1f1aa22ca3088.jpg",
    "sleep/8df8d87f100dfed435ca.jpg",
    "sleep/0c8fb8cd997d1949055c-1.jpg",
    "sleep/2dec9c2f8206e43b8b50.jpg",
    "sleep/3bad4321abfb55a70c63.jpg",
    "sleep/3eaa596cb69ba5d24f5c.jpg",
    "sleep/4b0eb80a707e853ea831.jpg",
    "sleep/4cc9f6bee1cc55ea2275.jpg",
    "sleep/5cf07a5fd1499d64f7a8.jpg",
    "sleep/5cf07a5fd1499d64f7a8-2.jpg",
    "sleep/5eefcfacda8d0d456043-1.jpg",
    "sleep/06a1da4991743234840b-1.jpg",
    "sleep/6f53c8b259d3dd0dc057.jpg",
    "sleep/6f53c8b259d3dd0dc057-2.jpg",
    "sleep/f4e7affbc1a3acfaa279-1.jpg",
    "sleep/f7e9fd41a551d774c858.jpg",
    "sleep/koshka-kotenok-chernyi-lezhit-otdykh-spit.jpg",
    "sleep/db42fd9652ef79579bae-1.jpg",
    "sleep/db42fd9652ef79579bae.jpg",
    "sleep/b5941dcc525f04b9550c-700x525.jpg",
    "sleep/b250d34b0c81c848e5da.jpg",
    "sleep/ab52548522e75f0f2902.jpg"
  ],
  surprised: [
    "surprised/1641525116_1-krasivosti-pro-p-koti-v-shoke-krasivo-foto-1.jpg",
    "surprised/1641525097_14-krasivosti-pro-p-koti-v-shoke-krasivo-foto-16.jpg",
    "gif/huh.gif",
    "surprised/1641525161_6-krasivosti-pro-p-koti-v-shoke-krasivo-foto-6.jpg",
    "surprised/1641525093_9-krasivosti-pro-p-koti-v-shoke-krasivo-foto-10.jpg",
    "surprised/1641525103_21-krasivosti-pro-p-koti-v-shoke-krasivo-foto-25.jpg",
    "surprised/1641525106_16-krasivosti-pro-p-koti-v-shoke-krasivo-foto-19.jpg",
    "surprised/1641525110_32-krasivosti-pro-p-koti-v-shoke-krasivo-foto-36.jpg",
    "surprised/1641525111_24-krasivosti-pro-p-koti-v-shoke-krasivo-foto-28.jpg",
    "surprised/1641525115_34-krasivosti-pro-p-koti-v-shoke-krasivo-foto-38.jpg",
    "surprised/1641525116_1-krasivosti-pro-p-koti-v-shoke-krasivo-foto-1.jpg",
    "surprised/1641525117_31-krasivosti-pro-p-koti-v-shoke-krasivo-foto-35.jpg",
    "surprised/1641525122_19-krasivosti-pro-p-koti-v-shoke-krasivo-foto-22.jpg",
    "surprised/1641525125_11-krasivosti-pro-p-koti-v-shoke-krasivo-foto-13.jpg",
    "surprised/1641525126_15-krasivosti-pro-p-koti-v-shoke-krasivo-foto-17.jpg",
    "surprised/1641525126_26-krasivosti-pro-p-koti-v-shoke-krasivo-foto-30.jpg",
    "surprised/1641525128_54-krasivosti-pro-p-koti-v-shoke-krasivo-foto-60.jpg",
    "gif/cat-sus.gif",
    "surprised/1641525137_29-krasivosti-pro-p-koti-v-shoke-krasivo-foto-33.jpg",
    "surprised/1641525169_36-krasivosti-pro-p-koti-v-shoke-krasivo-foto-40.jpg",
    "surprised/1641525149_4-krasivosti-pro-p-koti-v-shoke-krasivo-foto-4.jpg",
    "surprised/1641525149_12-krasivosti-pro-p-koti-v-shoke-krasivo-foto-14.jpg",
    "surprised/1641525180_58-krasivosti-pro-p-koti-v-shoke-krasivo-foto-67.jpg",
    "surprised/1641525201_27-krasivosti-pro-p-koti-v-shoke-krasivo-foto-31.jpg",
    "surprised/1641525192_20-krasivosti-pro-p-koti-v-shoke-krasivo-foto-23.jpg",
    "surprised/1641525212_48-krasivosti-pro-p-koti-v-shoke-krasivo-foto-53.jpg",
    "surprised/1641525210_35-krasivosti-pro-p-koti-v-shoke-krasivo-foto-39.jpg"
  ]

};

// создаю переменные для генерации картинки по id (querySelector)
var moodOption = document.querySelector("#mood-option");
var generateBtn = document.querySelector("#generate-btn");
var generatedImg = document.querySelector("#generated-img");

generateBtn.addEventListener("click", function() {
  // Выбираем случайную картинку из массива для выбранных параметров

  var mood = moodOption.value;
 
  var moodImages = moodOptions[mood];
  var imgUrl = moodImages[Math.floor(Math.random() * moodImages.length)]
    // + "&"
    // + moodImages[Math.floor(Math.random() * moodImages.length)].split("?")[5];
  
  // Загружаем картинку
  generatedImg.src = imgUrl;
});