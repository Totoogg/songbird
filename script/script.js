import birdsData from '../data/data.js'
import birdsDataEn from '../data/dataEN.js'

let languageGlobal = localStorage.getItem('language');

if(languageGlobal === null) {
  languageGlobal = `ru`;
};

const body = document.querySelector('.body');
const head = document.querySelector('.header');
const main = document.querySelector('.main');
const video = document.querySelector('.main__video');
const start = document.querySelector('.main__info');
const newGame = document.querySelector('.button__new-game');


const scoreText = document.createElement('div');
let score = 0;

scoreText.classList.add('header__score');

//-------------button select language-------------------

const language = document.createElement('div');
language.classList.add('language');
head.append(language);

const languageRU = document.createElement('button');
languageRU.classList.add('button');
languageRU.classList.add('language__button-ru');
languageRU.innerHTML = `RU`;
language.append(languageRU);

const languageEN = document.createElement('button');
languageEN.classList.add('button');
languageEN.classList.add('language__button-en');
languageEN.innerHTML = `EN`;
language.append(languageEN);


//-------------audio player---------------------

const audioPlayer = document.createElement('div');
audioPlayer.classList.add('audio-player');

const audioControls = document.createElement('div');
audioControls.classList.add('audio-player__controls');
audioPlayer.append(audioControls);

const audioControlsPlay = document.createElement('div');
audioControlsPlay.classList.add('audio-player__controls__play');
audioControlsPlay.classList.add('play');
audioControls.append(audioControlsPlay);

const audioInteraction = document.createElement('div');
audioInteraction.classList.add('audio-player__interaction');
audioPlayer.append(audioInteraction);

const audioInteractionLine = document.createElement('div');
audioInteractionLine.classList.add('audio-player__interaction__line');
audioInteraction.append(audioInteractionLine);

const audioInteractionLineProgress = document.createElement('div');
audioInteractionLineProgress.classList.add('audio-player__interaction__line__progress');
audioInteractionLine.append(audioInteractionLineProgress);

const audioInteractionTime = document.createElement('div');
audioInteractionTime.classList.add('audio-player__interaction__time');
audioInteraction.append(audioInteractionTime);

const audioInteractionTimeStart = document.createElement('div');
audioInteractionTimeStart.classList.add('audio-player__interaction__time__start');
audioInteractionTimeStart.innerHTML = `00:00`;
audioInteractionTime.append(audioInteractionTimeStart);

const audioInteractionTimeFinish = document.createElement('div');
audioInteractionTimeFinish.classList.add('audio-player__interaction__time__finish');
audioInteractionTime.append(audioInteractionTimeFinish);

const audioVolume = document.createElement('div');
audioVolume.classList.add('audio-player__volume');
audioPlayer.append(audioVolume);

const audioVolumeBtn = document.createElement('div');
audioVolumeBtn.classList.add('audio-player__volume__button');
audioVolume.append(audioVolumeBtn);

const audioVolumeBtnIcon = document.createElement('div');
audioVolumeBtnIcon.classList.add('audio-player__volume__button__icon');
audioVolumeBtnIcon.classList.add('volume');
audioVolumeBtn.append(audioVolumeBtnIcon);

const audioVolumeLevel = document.createElement('div');
audioVolumeLevel.classList.add('audio-player__volume__level');
audioVolume.append(audioVolumeLevel);

const audioVolumeLevelPercent = document.createElement('div');
audioVolumeLevelPercent.classList.add('audio-player__volume__level__percent');
audioVolumeLevel.append(audioVolumeLevelPercent);

//-------------nav---------------------

const birdsClass = document.createElement('div');
birdsClass.classList.add('main__birds-class');

const navQuest = document.createElement('ul');
navQuest.classList.add('main__birds-class__nav-list');
birdsClass.append(navQuest);

const warm = document.createElement('li');
warm.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  warm.innerHTML = `Разминка`;
} else {
  warm.innerHTML = `Warm up`;
}

navQuest.append(warm);

const passerines = document.createElement('li');
passerines.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  passerines.innerHTML = `Воробьиные`;
} else {
  passerines.innerHTML = `Passerines`;
}

navQuest.append(passerines);

const forest = document.createElement('li');
forest.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  forest.innerHTML = `Лесные птицы`;
} else {
  forest.innerHTML = `Forest birds`;
}

navQuest.append(forest);

const songbirds = document.createElement('li');
songbirds.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  songbirds.innerHTML = `Певчие птицы`;
} else {
  songbirds.innerHTML = `Songbirds`;
}

navQuest.append(songbirds);

const predator = document.createElement('li');
predator.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  predator.innerHTML = `Хищные птицы`;
} else {
  predator.innerHTML = `Predator birds`;
}

navQuest.append(predator);

const sea = document.createElement('li');
sea.classList.add('main__birds-class__nav-list__item');
if(languageGlobal === `ru`) {
  sea.innerHTML = `Морские птицы`;
} else {
  sea.innerHTML = `Sea birds`;
}

navQuest.append(sea);

//-------------question---------------------

const question = document.createElement('div');
question.classList.add('main__question');

const questionImg = document.createElement('div');
questionImg.classList.add('main__question__img');
question.append(questionImg);

const questionTagImg = document.createElement('img');
questionTagImg.setAttribute('height', '126');
questionTagImg.setAttribute('weight', '176');
questionTagImg.setAttribute('src', '../assets/icons/plag.jpg');
questionTagImg.setAttribute('alt', 'bird');
questionImg.append(questionTagImg);

const questionInfo = document.createElement('div');
questionInfo.classList.add('main__question__info');
question.append(questionInfo);

const questionName = document.createElement('div');
questionName.classList.add('main__question__info__name');
questionName.innerHTML = `******************`;
questionInfo.append(questionName);

const questionSong = document.createElement('div');
questionSong.classList.add('main__question__info__song');
questionInfo.append(questionSong);

let audioPlayGame = audioPlayer.cloneNode(true);

questionSong.append(audioPlayGame);

//-------------answer---------------------

const answer = document.createElement('div');
answer.classList.add('main__answer');

const answerOptions = document.createElement('div');
answerOptions.classList.add('main__answer__options');
answer.append(answerOptions);

const aboutBird = document.createElement('div');
aboutBird.classList.add('main__answer__about-bird');
answer.append(aboutBird);

const selectText = document.createElement('p');
selectText.classList.add('main__answer__about-bird__select-text');

aboutBird.append(selectText);

const aboutBirdSelected = document.createElement('div');
aboutBirdSelected.classList.add('main__answer__about-bird__selected');
aboutBird.append(aboutBirdSelected);

const selectedBirdImg = document.createElement('div');
selectedBirdImg.classList.add('main__answer__about-bird__selected__img');
aboutBirdSelected.append(selectedBirdImg);

const selectedBirdTagImg = document.createElement('img');
selectedBirdTagImg.classList.add('main__answer__about-bird__selected__img__bird');
selectedBirdTagImg.setAttribute('height', '126');
selectedBirdTagImg.setAttribute('weight', '176');
selectedBirdTagImg.setAttribute('src', '');
selectedBirdTagImg.setAttribute('alt', 'bird');
selectedBirdImg.append(selectedBirdTagImg);

const selectedBirdDifference = document.createElement('div');
selectedBirdDifference.classList.add('main__answer__about-bird__selected__difference');
aboutBirdSelected.append(selectedBirdDifference);

const selectedBirdName = document.createElement('div');
selectedBirdName.classList.add('main__answer__about-bird__selected__difference__name');
selectedBirdDifference.append(selectedBirdName);

const selectedBirdLatName = document.createElement('div');
selectedBirdLatName.classList.add('main__answer__about-bird__selected__latin');
selectedBirdDifference.append(selectedBirdLatName);

const selectedBirdSong = document.createElement('div');
selectedBirdSong.classList.add('main__answer__about-bird__selected__song');
selectedBirdDifference.append(selectedBirdSong);

let audioPlayGameOption = audioPlayer.cloneNode(true);

selectedBirdSong.append(audioPlayGameOption);

const aboutBirdText = document.createElement('div');
aboutBirdText.classList.add('main__answer__about-bird__text');
aboutBird.append(aboutBirdText);

//-------------buttonNext---------------------

const buttonNext = document.createElement('button');

buttonNext.classList.add('main__button-next');

//-------------gallery---------------------

const galleryMain = document.querySelector('.button__galleria');

const galleryList = document.createElement('ul');
galleryList.classList.add('main__gallery');

const galleryListButton = document.createElement('button');
if(languageGlobal === `ru`) {
  galleryListButton.innerHTML = `Галерея птиц`;
} else {
  galleryListButton.innerHTML = `Birds gallery`;
}

galleryListButton.classList.add('button__galleria');
galleryListButton.classList.add('button');

const buttonNewGame = document.createElement('button');
if(languageGlobal === `ru`) {
  buttonNewGame.innerHTML = `Начинать новую игру`;
} else {
  buttonNewGame.innerHTML = `Start a new game`;
}
buttonNewGame.classList.add('button__new-game');
buttonNewGame.classList.add('button');

//-------------finally screen---------------------

const result = document.createElement('div');
result.classList.add('main__result');

const resultText = document.createElement('div');
resultText.classList.add('main__result__text');
result.append(resultText);

const resultTextСongratulation = document.createElement('div');
resultTextСongratulation.classList.add('main__result__text__сongratulation');

resultText.append(resultTextСongratulation);

const resultTextDescription = document.createElement('div');
resultTextDescription.classList.add('main__result__text__description');
resultText.append(resultTextDescription);

const buttonNewGameResult = document.createElement('button');

buttonNewGameResult.classList.add('button__new-game__result');
buttonNewGameResult.classList.add('button');
buttonNewGameResult.classList.add('hidden');
result.append(buttonNewGameResult);

//-------------Events---------------------

let count = 0;

let idOption;

let eventPlay;

let birdsClassNumber = 0;
let play = true;
let winOption = randomInteger(0, 5);

let timerInterval = [];
let audioArr = [];

let timerIntervalGameQuestion = [];
let audioArrQuestion = [];

let timerIntervalGameAnswer = [];
let audioArrAnswer = [];

let arrItemGallery = [];

const audioTrue = new Audio();
audioTrue.src = '../assets/songs/true.mp3';
let isPlayTrue = true;

function languageResult() {
  if(languageGlobal === `ru`) {
    resultTextСongratulation.innerHTML = `Поздравляем!`;
    buttonNewGameResult.innerHTML = `Попробовать еще раз!`;
    resultTextDescription.innerHTML = `Вы прошли викторину и набрали ${score} из 30 возможных баллов`
  } else {
    resultTextСongratulation.innerHTML = `Congratulations!`;
    buttonNewGameResult.innerHTML = `To try one more time!`;
    resultTextDescription.innerHTML = `You passed the quiz and scored ${score} out of 30 possible points`
  }
}

function languageNav() {
  const arrNav = document.querySelectorAll(`.main__birds-class__nav-list__item`);
  const arrRU = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];
  const arrEN = ['Warm up', 'Passerines', 'Forest birds', 'Songbirds', 'Predator birds', 'Sea birds'];
  for(let i = 0; i < arrNav.length; i++) {
    if(languageGlobal === `ru`) {
      arrNav[i].innerHTML = arrRU[i];
    } else {
      arrNav[i].innerHTML = arrEN[i];
    } 
  }
}

function languageMain(languageGlobal) {
  if(languageGlobal === `ru`) {
    languageRU.classList.add('language__button__checked');
    if(document.querySelector('.main__info__text')) {
      document.querySelector('.main__info__text').innerHTML = `Songbird - викторина для распознавания птиц по их голосам.`;
    }
    document.querySelector('.button__new-game').innerHTML = `Начинать новую игру`;
    document.querySelector('.button__galleria').innerHTML = `Галерея птиц`;
  
  } else {
    languageEN.classList.add('language__button__checked');
    if(document.querySelector('.main__info__text')) {
      document.querySelector('.main__info__text').innerHTML = `Songbird - quiz to recognize birds by their voices.`;
    }
    
    document.querySelector('.button__new-game').innerHTML = `Start a new game`;
    document.querySelector('.button__galleria').innerHTML = `Birds gallery`;
  
  }
}

function languageInfoSelect() {
  if(languageGlobal === `ru`) {
    scoreText.innerHTML = `Счет: ${score}`;
    selectText.innerHTML = `Послушайте плеер. Выберите птицу из списка`;
  } else {
    scoreText.innerHTML = `Score: ${score}`;
    selectText.innerHTML = `Listen to the player. Select a bird from the list`;
  }
  
}

function languageButtonNext() {
  if(document.querySelector('.main__button-next')) {
    if(languageGlobal === `ru`) {
      document.querySelector('.main__button-next').innerHTML = `Cледующий уровень`;
    } else {
      document.querySelector('.main__button-next').innerHTML = `Next level`;
    }
  }
}

function playAudioTrue() {
   
  audioTrue.currentTime = 0;
    if(isPlayTrue){
      audioTrue.play();
    }
}


const audioFalse = new Audio();
audioFalse.src = '../assets/songs/false.mp3';
let isPlayFalse = true;

function playAudioFalse() {
   
  audioFalse.currentTime = 0;
    if(isPlayFalse){
      audioFalse.play();
    }
}

galleryMain.addEventListener('click', () => {
  

  body.style.height = '100%'
  video.classList.add('hidden');
  start.classList.add('hidden');
  result.classList.add('hidden');

  head.append(buttonNewGame);

  main.append(galleryList);
  
  songsPlayGallery();

  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();
});

galleryListButton.addEventListener('click', () => {
  

  body.style.height = '100%'
  scoreText.classList.toggle('hidden');
  birdsClass.classList.toggle('hidden');
  question.classList.toggle('hidden');
  answer.classList.toggle('hidden');
  buttonNext.classList.toggle('hidden');
  galleryListButton.classList.toggle('hidden');
  result.classList.add('hidden');

  head.append(buttonNewGame);
  buttonNewGame.classList.remove('hidden');

  main.append(galleryList);
  songsPlayGallery();

  stopSongAnswer();


  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();
})

buttonNewGame.addEventListener('mouseup', () => {
  
  stopSong();

})

buttonNewGame.addEventListener('click', () => {
  
  stopSong();

  main.innerHTML = '';
  body.style.height = '100%'
  video.classList.add('hidden');
  start.classList.add('hidden');
  buttonNewGame.classList.add('hidden');

  head.append(galleryListButton);
  head.append(scoreText);
  main.append(birdsClass);
  main.append(question);
  main.append(answer);
  main.append(buttonNext);

  aboutBirdSelected.classList.add('hidden');
  aboutBirdText.classList.add('hidden');

  scoreText.classList.remove('hidden');
  birdsClass.classList.remove('hidden');
  question.classList.remove('hidden');
  answer.classList.remove('hidden');
  buttonNext.classList.remove('hidden');
  galleryListButton.classList.remove('hidden');

  reset();

  playSongGame(question);


  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();
})

buttonNewGameResult.addEventListener('click', () => {
  

  main.innerHTML = '';
  body.style.height = '100%'
  video.classList.add('hidden');
  start.classList.add('hidden');
  buttonNewGameResult.classList.add('hidden');

  head.append(galleryListButton);
  head.append(scoreText);
  main.append(birdsClass);
  main.append(question);
  main.append(answer);
  main.append(buttonNext);

  aboutBirdSelected.classList.add('hidden');
  aboutBirdText.classList.add('hidden');

  scoreText.classList.remove('hidden');
  birdsClass.classList.remove('hidden');
  question.classList.remove('hidden');
  answer.classList.remove('hidden');
  buttonNext.classList.remove('hidden');
  galleryListButton.classList.remove('hidden');

  reset();


  languageMain(languageGlobal);

  languageGallery();
  languageNav();
})

newGame.addEventListener('click', () => {
  

  body.style.height = '100%'
  video.classList.add('hidden');
  start.classList.add('hidden');

  head.append(galleryListButton);
  head.append(scoreText);
  main.append(birdsClass);
  main.append(question);
  main.append(answer);
  main.append(buttonNext);

  aboutBirdSelected.classList.add('hidden');
  aboutBirdText.classList.add('hidden');

  playSongGame(question);


  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();
});


function stopSongAnswer() {
  for(let a of timerIntervalGameAnswer) {
    clearInterval(a);
  }

  let controlPlay = selectedBirdSong.querySelectorAll('.audio-player__controls__play');

  for(let a of audioArrAnswer) {
    a.pause();
    a.currentTime = 0;
  }
  for(let a of controlPlay) {
    a.classList.remove("pause");
    a.classList.add("play");
  }
}

function stopSongQuestion() {
  for(let a of timerIntervalGameQuestion) {
    clearInterval(a);
  }

  let controlPlay = document.querySelectorAll('.audio-player__controls__play');

  for(let a of audioArrQuestion) {
    a.pause();
    a.currentTime = 0;
  }
  for(let a of controlPlay) {
    a.classList.remove("pause");
    a.classList.add("play");
  }
}

function stopSong() {


  for(let a of timerInterval) {
    clearInterval(a);
  }

  let controlPlay = document.querySelectorAll('.audio-player__controls__play');

  for(let a of audioArr) {
    a.pause();
    a.currentTime = 0;
  }
  for(let a of controlPlay) {
    a.classList.remove("pause");
    a.classList.add("play");
  }
}

function stopSongGallery() {

  let controlPlay = document.querySelectorAll('.audio-player__controls__play');

  for(let a of audioArr) {
    a.pause();
  }
  for(let a of controlPlay) {
    a.classList.remove("pause");
    a.classList.add("play");
  }
}

function options(birdsClassNumber) {
  answerOptions.innerHTML = '';
  for(let i = 0; i < birdsData[birdsClassNumber].length; i++) {
    let option = document.createElement('div');
    option.classList.add('main__answer__options__item');
    answerOptions.append(option);

    option.setAttribute('value', `${i}`)

    let circle = document.createElement('div');
    circle.classList.add('main__answer__options__item__circle');
    option.append(circle);

    let birdName = document.createElement('div');
    birdName.classList.add('main__answer__options__item__bird-name');
    if(languageGlobal === `ru`) {
      birdName.innerHTML = `${birdsData[birdsClassNumber][i].name}`;
    } else {
      birdName.innerHTML = `${birdsDataEn[birdsClassNumber][i].name}`;
    }
    
    option.append(birdName);
  }
}

function languageOption() {
  const option = document.querySelectorAll('.main__answer__options__item__bird-name');
  for(let i = 0; i < option.length; i++) {
    if(languageGlobal === `ru`) {
      option[i].innerHTML = `${birdsData[birdsClassNumber][i].name}`;
    } else {
      option[i].innerHTML = `${birdsDataEn[birdsClassNumber][i].name}`;
    }
    
  }
}

function galleryItem() {
  const arr = birdsData.flat(Infinity);
  const arrEN = birdsDataEn.flat(Infinity);
  for(let i = 0; i < arr.length; i++) {
    let item = document.createElement('li');
    item.classList.add('main__gallery__item');
    galleryList.append(item);

    let itemName = document.createElement('div');
    itemName.classList.add('main__gallery__item__name');
    item.append(itemName);

    let itemNameImg = document.createElement('img');
    itemNameImg.classList.add('main__gallery__item__name__img');
    itemNameImg.setAttribute('height', '126');
    itemNameImg.setAttribute('weight', '176');
    itemNameImg.setAttribute('src', `${arr[i].image}`);
    itemNameImg.setAttribute('alt', 'bird');
    itemName.append(itemNameImg);

    let itemBirdNames = document.createElement('div');
    itemBirdNames.classList.add('main__gallery__item__name__bird');
    itemName.append(itemBirdNames);

    let birdNames = document.createElement('div');
    birdNames.classList.add('main__gallery__item__name__bird__name');
    if(languageGlobal === `ru`) {
      birdNames.innerHTML = `${arr[i].name}`;
    } else {
      birdNames.innerHTML = `${arrEN[i].name}`;
    }
    
    itemBirdNames.append(birdNames);

    let latBirdNames = document.createElement('div');
    latBirdNames.classList.add('main__gallery__item__name__bird__lat-name');
    latBirdNames.innerHTML = `${arr[i].species}`;
    itemBirdNames.append(latBirdNames);

    let birdSong = document.createElement('div');
    birdSong.classList.add('main__gallery__item__name__bird__song');
    itemBirdNames.append(birdSong);

    let song = audioPlayer.cloneNode(true);
    
    birdSong.append(song);
    

    let itemText = document.createElement('div');
    itemText.classList.add('main__gallery__item__text');
    if(languageGlobal === `ru`) {
      itemText.innerHTML = arr[i].description;
    } else {
      itemText.innerHTML = arrEN[i].description;
    }
    item.append(itemText);

    arrItemGallery.push(item);
  }
}

function languageGallery() {
  const arr = birdsData.flat(Infinity);
  const arrEN = birdsDataEn.flat(Infinity);
  const names = document.querySelectorAll(`.main__gallery__item__name__bird__name`);
  const descriptions = document.querySelectorAll(`.main__gallery__item__text`);

  if(languageGlobal === `ru`) {
    for(let i = 0; i < names.length; i++) {
      names[i].innerHTML = arr[i].name;
    }
    for(let i = 0; i < names.length; i++) {
      descriptions[i].innerHTML = arr[i].description;
    }
  } else {
    for(let i = 0; i < names.length; i++) {
      names[i].innerHTML = arrEN[i].name;
    }
    for(let i = 0; i < names.length; i++) {
      descriptions[i].innerHTML = arrEN[i].description;
    }
  }
}

function languageAboutBird(birdsClassNumber, idOption) {
  if(idOption) {
    if(languageGlobal === `ru`) {
      aboutBirdText.innerHTML = `${birdsData[birdsClassNumber][idOption].description}`;
  
      selectedBirdTagImg.src = `${birdsData[birdsClassNumber][idOption].image}`;
    
      selectedBirdName.innerHTML = `${birdsData[birdsClassNumber][idOption].name}`;
  
      selectedBirdLatName.innerHTML = `${birdsData[birdsClassNumber][idOption].species}`;
    } else {
      aboutBirdText.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].description}`;
  
      selectedBirdTagImg.src = `${birdsDataEn[birdsClassNumber][idOption].image}`;
    
      selectedBirdName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].name}`;
  
      selectedBirdLatName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].species}`;
    }
  }
}

function updateAboutBird(birdsClassNumber, idOption) {
  if(languageGlobal === `ru`) {
    aboutBirdText.innerHTML = `${birdsData[birdsClassNumber][idOption].description}`;

    selectedBirdTagImg.src = `${birdsData[birdsClassNumber][idOption].image}`;
  
    selectedBirdName.innerHTML = `${birdsData[birdsClassNumber][idOption].name}`;

    selectedBirdLatName.innerHTML = `${birdsData[birdsClassNumber][idOption].species}`;
  } else {
    aboutBirdText.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].description}`;

    selectedBirdTagImg.src = `${birdsDataEn[birdsClassNumber][idOption].image}`;
  
    selectedBirdName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].name}`;

    selectedBirdLatName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].species}`;
  }
  
  //-------------------------------------------------
  stopSongAnswer();
  audioArrAnswer = [];

  selectedBirdSong.innerHTML = ``;

  let audioPlayGame = audioPlayer.cloneNode(true);
  selectedBirdSong.append(audioPlayGame);
  
  let audio = new Audio(`${birdsData[birdsClassNumber][idOption].audio}`);

  audioArrAnswer.push(audio);

  let nodes = selectedBirdSong.querySelectorAll('.audio-player');
  
  for(let i = 0; i < nodes.length; i++) {
    audio.addEventListener("loadeddata", () => {
      selectedBirdSong.querySelectorAll('.audio-player__interaction__time__finish')[i].textContent = getTime(audio.duration);
      audio.volume = .75;
    });
  
    selectedBirdSong.querySelectorAll('.audio-player__interaction__line')[i].addEventListener("click", (event) => {
      let widthTime = window.getComputedStyle(selectedBirdSong.querySelectorAll('.audio-player__interaction__line')[i]).width;
      let time = event.offsetX / parseInt(widthTime) * audio.duration;
      audio.currentTime = time;
    });
  
    selectedBirdSong.querySelectorAll('.audio-player__volume__level')[i].addEventListener('click', (event) => {
      let widthVolumeLevel = window.getComputedStyle(selectedBirdSong.querySelectorAll('.audio-player__volume__level')[i]).width;
      let newVolumeLevel = event.offsetX / parseInt(widthVolumeLevel);
      audio.volume = newVolumeLevel;
      selectedBirdSong.querySelectorAll('.audio-player__volume__level__percent')[i].style.width = newVolumeLevel * 100 + '%';
    })
  
    let timer = setInterval(() => {
      selectedBirdSong.querySelectorAll('.audio-player__interaction__line__progress')[i].style.width = audio.currentTime / audio.duration * 100 + "%";
      selectedBirdSong.querySelectorAll('.audio-player__interaction__time__start')[i].textContent = getTime(audio.currentTime);
    }, 400);
  
    timerIntervalGameAnswer.push(timer);
  
    selectedBirdSong.querySelectorAll('.audio-player__controls__play')[i].addEventListener("click", () => {
      if (audio.paused) {
        selectedBirdSong.querySelectorAll('.audio-player__controls__play')[i].classList.remove("play");
        selectedBirdSong.querySelectorAll('.audio-player__controls__play')[i].classList.add("pause");
        audio.play();
      } else {
        selectedBirdSong.querySelectorAll('.audio-player__controls__play')[i].classList.remove("pause");
        selectedBirdSong.querySelectorAll('.audio-player__controls__play')[i].classList.add("play");
        audio.pause();
      }
    });
  
    selectedBirdSong.querySelectorAll('.audio-player__volume__button')[i].addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (audio.muted) {
        selectedBirdSong.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("volume");
        player.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("mute");
      } else {
        selectedBirdSong.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("volume");
        selectedBirdSong.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("mute");
      }
    });
  }
}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getTime(time) {
  let sec = parseInt(time);
  let min = parseInt(sec / 60);
  sec -= min * 60;

 return `${String(min).padStart(2, 0)}:${String(sec % 60).padStart(2, 0)}`;
}

function updateNav() {
  for(let a of navQuest.childNodes) {
    a.classList.remove('item__check');
  }
  if(birdsClassNumber < 6) {
    navQuest.childNodes[birdsClassNumber].classList.add('item__check');
  }
}

function updateQuestion(birdsClassNumber, idOption) {
  questionTagImg.setAttribute('src', `${birdsData[birdsClassNumber][idOption].image}`);
  if(languageGlobal === `ru`) {
    questionName.innerHTML = `${birdsData[birdsClassNumber][idOption].name}`;
  } else {
    questionName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].name}`;
  }
  
}

function languageQuestion(birdsClassNumber, idOption) {
  if(idOption) {
    if(languageGlobal === `ru`) {
      questionName.innerHTML = `${birdsData[birdsClassNumber][idOption].name}`;
    } else {
      questionName.innerHTML = `${birdsDataEn[birdsClassNumber][idOption].name}`;
    }
  }
  
}

function reset() {
  score = 0;
  languageInfoSelect();
  birdsClassNumber = 0;
  play = true;
  winOption = randomInteger(0, 5);
  answerOptions.innerHTML = '';

  options(birdsClassNumber);
  updateNav();
  
  questionTagImg.setAttribute('src', '../assets/icons/plag.jpg');
  questionName.innerHTML = `******************`;
  buttonNext.classList.remove('button-next__win');
  selectText.classList.remove('hidden');
}

function songsPlayGallery() {
  stopSongQuestion();
  stopSong();
  timerInterval = [];
  
  let nodes = galleryList.querySelectorAll('.audio-player');
  if(count === 0) {
    for(let i = 0; i < nodes.length; i++) {
      let data = birdsData.flat(Infinity);
  
      let audio = new Audio(`${data[i].audio}`);
  
      audio.currentTime = 0;
  
      audioArr.push(audio);
  
      audio.addEventListener("loadeddata", () => {
        galleryList.querySelectorAll('.audio-player__interaction__time__finish')[i].textContent = getTime(audio.duration);
        audio.volume = .75;
      });
    
      galleryList.querySelectorAll('.audio-player__interaction__line')[i].addEventListener("click", (event) => {
        let widthTime = window.getComputedStyle(galleryList.querySelectorAll('.audio-player__interaction__line')[i]).width;
        let time = event.offsetX / parseInt(widthTime) * audio.duration;
        audio.currentTime = time;
      });
    
      galleryList.querySelectorAll('.audio-player__volume__level')[i].addEventListener('click', (event) => {
        let widthVolumeLevel = window.getComputedStyle(galleryList.querySelectorAll('.audio-player__volume__level')[i]).width;
        let newVolumeLevel = event.offsetX / parseInt(widthVolumeLevel);
        audio.volume = newVolumeLevel;
        galleryList.querySelectorAll('.audio-player__volume__level__percent')[i].style.width = newVolumeLevel * 100 + '%';
      })
    
      let timer = setInterval(() => {
        galleryList.querySelectorAll('.audio-player__interaction__line__progress')[i].style.width = audio.currentTime / audio.duration * 100 + "%";
        galleryList.querySelectorAll('.audio-player__interaction__time__start')[i].textContent = getTime(audio.currentTime);
      }, 400);
  
      timerInterval.push(timer);
    
      galleryList.querySelectorAll('.audio-player__controls__play')[i].addEventListener("click", (event) => {
        
        if (event.target.closest('.audio-player__controls__play') === eventPlay) {
          if (audio.paused) {
            galleryList.querySelectorAll('.audio-player__controls__play')[i].classList.remove("play");
            galleryList.querySelectorAll('.audio-player__controls__play')[i].classList.add("pause");
            audio.play();
          } else {
            galleryList.querySelectorAll('.audio-player__controls__play')[i].classList.remove("pause");
            galleryList.querySelectorAll('.audio-player__controls__play')[i].classList.add("play");
            audio.pause();
          }
        } else {
          stopSongGallery();
          eventPlay = event.target.closest('.audio-player__controls__play');
          eventPlay.classList.remove("play");
          eventPlay.classList.add("pause");
          audio.play();
        }
        
        
      });
    
      galleryList.querySelectorAll('.audio-player__volume__button')[i].addEventListener("click", () => {
        audio.muted = !audio.muted;
        if (audio.muted) {
          galleryList.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("volume");
          galleryList.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("mute");
        } else {
          galleryList.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("volume");
          galleryList.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("mute");
        }
      });
    }
    count++;
  } else {
    for(let i = 0; i < nodes.length; i++) {
      let timer = setInterval(() => {
        galleryList.querySelectorAll('.audio-player__interaction__line__progress')[i].style.width = audioArr[i].currentTime / audioArr[i].duration * 100 + "%";
        galleryList.querySelectorAll('.audio-player__interaction__time__start')[i].textContent = getTime(audioArr[i].currentTime);
      }, 400);
  
      timerInterval[i] = timer;
    }
    
  }
}

function playSongGame(player) {
  stopSongQuestion();
  audioArrQuestion = [];

  let el = document.querySelector('.main__question__info__song');
  el.innerHTML = ``;

  let audioPlayGame = audioPlayer.cloneNode(true);
  questionSong.append(audioPlayGame);
  
  let audio = new Audio(`${birdsData[birdsClassNumber][winOption].audio}`);

  audioArrQuestion.push(audio);

  let nodes = player.querySelectorAll('.audio-player');
  
  for(let i = 0; i < nodes.length; i++) {
    audio.addEventListener("loadeddata", () => {
      player.querySelectorAll('.audio-player__interaction__time__finish')[i].textContent = getTime(audio.duration);
      audio.volume = .75;
    });
  
    player.querySelectorAll('.audio-player__interaction__line')[i].addEventListener("click", (event) => {
      let widthTime = window.getComputedStyle(player.querySelectorAll('.audio-player__interaction__line')[i]).width;
      let time = event.offsetX / parseInt(widthTime) * audio.duration;
      audio.currentTime = time;
    });
  
    player.querySelectorAll('.audio-player__volume__level')[i].addEventListener('click', (event) => {
      let widthVolumeLevel = window.getComputedStyle(player.querySelectorAll('.audio-player__volume__level')[i]).width;
      let newVolumeLevel = event.offsetX / parseInt(widthVolumeLevel);
      audio.volume = newVolumeLevel;
      player.querySelectorAll('.audio-player__volume__level__percent')[i].style.width = newVolumeLevel * 100 + '%';
    })
  
    let timer = setInterval(() => {
      player.querySelectorAll('.audio-player__interaction__line__progress')[i].style.width = audio.currentTime / audio.duration * 100 + "%";
      player.querySelectorAll('.audio-player__interaction__time__start')[i].textContent = getTime(audio.currentTime);
    }, 400);
  
    timerIntervalGameQuestion.push(timer);
  
    player.querySelectorAll('.audio-player__controls__play')[i].addEventListener("click", () => {
      if (audio.paused) {
        player.querySelectorAll('.audio-player__controls__play')[i].classList.remove("play");
        player.querySelectorAll('.audio-player__controls__play')[i].classList.add("pause");
        audio.play();
      } else {
        player.querySelectorAll('.audio-player__controls__play')[i].classList.remove("pause");
        player.querySelectorAll('.audio-player__controls__play')[i].classList.add("play");
        audio.pause();
      }
    });
  
    player.querySelectorAll('.audio-player__volume__button')[i].addEventListener("click", () => {
      audio.muted = !audio.muted;
      if (audio.muted) {
        player.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("volume");
        player.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("mute");
      } else {
        player.querySelectorAll('.audio-player__volume__button__icon')[i].classList.add("volume");
        player.querySelectorAll('.audio-player__volume__button__icon')[i].classList.remove("mute");
      }
    });
  }
    
  
}

answerOptions.addEventListener('click', (event) => {
  let option = event.target.closest('.main__answer__options__item');
  let circle = option.childNodes[0];
  let select = +option.getAttribute('value');

  idOption = +option.getAttribute('value');

  aboutBirdSelected.classList.remove('hidden');
  aboutBirdText.classList.remove('hidden');
  selectText.classList.add('hidden');
  //---------------------------------------
  
  updateAboutBird(birdsClassNumber, idOption);

  if(play) {
    if(winOption === select) {
      playAudioTrue();
      circle.classList.add('circle__true');
      updateQuestion(birdsClassNumber, idOption);
      play = false;
      buttonNext.classList.add('button-next__win');
      let falseOption = document.querySelectorAll('.circle__false')
      .length;
      score = score + 5 - falseOption;
      languageInfoSelect();

      for(let a of audioArrQuestion) {
        a.pause();
      }

      let controlPlay = document.querySelectorAll('.audio-player__controls__play');

      for(let a of controlPlay) {
        a.classList.remove("pause");
        a.classList.add("play");
      }
    } else {
      playAudioFalse();
      circle.classList.add('circle__false');
    }
  }
  
})

buttonNext.addEventListener('click' , () => {
  stopSongAnswer();
  stopSongQuestion();
  stopSong();
  if(!(birdsClassNumber === 5) && !play ) {
    birdsClassNumber++;
    play = true;
    winOption = randomInteger(0, 5);
    answerOptions.innerHTML = '';
    questionTagImg.setAttribute('src', '../assets/icons/plag.jpg');
    questionName.innerHTML = `******************`;
    updateNav();
    options(birdsClassNumber);
    buttonNext.classList.remove('button-next__win');
    aboutBirdSelected.classList.add('hidden');
    aboutBirdText.classList.add('hidden');
    selectText.classList.remove('hidden');

    playSongGame(question);
    stopSongAnswer();

    languageButtonNext();
    languageInfoSelect();
    languageGallery();
    languageNav();

    
  } else if(birdsClassNumber === 5) {
    main.innerHTML = '';
    main.append(result);
    result.classList.remove('hidden');

    languageResult();

    if (score < 30) {
      buttonNewGameResult.classList.remove('hidden');
    } else {
      buttonNewGameResult.classList.add('hidden');
    }
  }
})

languageRU.addEventListener('click', () => {
  localStorage.setItem('language', `ru`);
  languageGlobal = localStorage.getItem('language');

  languageRU.classList.add('language__button__checked');
  languageEN.classList.remove('language__button__checked');

  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();

  languageOption();
  languageAboutBird(birdsClassNumber, idOption);
  languageQuestion(birdsClassNumber, idOption);

  languageResult();
})

languageEN.addEventListener('click', () => {
  localStorage.setItem('language', `en`);
  languageGlobal = localStorage.getItem('language');

  languageRU.classList.remove('language__button__checked');
  languageEN.classList.add('language__button__checked');

  languageMain(languageGlobal);
  languageButtonNext();
  languageInfoSelect();
  languageGallery();
  languageNav();

  languageOption();
  languageAboutBird(birdsClassNumber, idOption);
  languageQuestion(birdsClassNumber, idOption);

  languageResult();
})

languageMain(languageGlobal);
options(birdsClassNumber);
updateNav();
galleryItem();

