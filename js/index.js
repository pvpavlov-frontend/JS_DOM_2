'use strict';

const news = [
  {
    title: 'Minecraft\'s new frogs were briefly swallowing goats whole',
    headerBgSrc: 'https://cdn.mos.cms.futurecdn.net/yS8AdDkWFHzDhEjycLwkc9-970-80.jpg',
    category: 'Minecraft',
    body: "As part of the experimental features in Minecraft Bedrock version 1.18.10, Mojang has revealed some of the abilities of the frog mobs coming in this year's Wild Update. They can eat small Slimes and small Magma Cubes, which is a goofy enough habit. As Mojang shared during today's Minecraft Live presentation, frogs had a brief period as apex predators capable of swallowing entire goats. Players started noticing this savage frog behavior in the beta version of Minecraft for Windows back in January. Their hunger was, as some players realized, insatiable.",
    date: '2022-02-01',
  },
  {
    title: `Portal Companion Collection marks Valve's first foray into Nintendo territory`,
    headerBgSrc: 'https://cdn.mos.cms.futurecdn.net/4YPvYtD2rZqGcEPSvbZtLh-1024-80.jpg',
    category: 'Nintendo',
    body: "Nintendo hosted one of its regular Nintendo Direct showcases today, and aside from the frankly troubling new Kirby game coming later this year, which should be of concern to everyone, it was a pretty unexciting affair for PC gamers. Aside from one big announcement: Valve is bringing both Portal games to the handheld later this year, marking the very first time a Valve-developed game has featured on a Nintendo platform. Yes, Bridge Constructor Portal exists on Switch, but that was developed by ClockStone and, according to its Steam page, wasn't even published by Valve. The Portal: Companion Collection marks Valve's Nintendo debut proper, and features both the original Portal and its sequel, both ported in collaboration with NVIDIA Lightspeed Studios. As the name implies, that's an internal NVIDIA studio that has, among other things, worked on the Quake 2 RTX project.",
    date: '2022-02-02',
  },
  {
    title: `Minecraft is experimenting with frogs ahead of the next update`,
    headerBgSrc: 'https://cdn.mos.cms.futurecdn.net/GfuKjTgFtFNzWcTRdbiiEU-1024-80.jpg',
    category: 'Minecraft',
    body: "Ahead of the Wild Update arriving sometime in 2022, Minecraft Bedrock is testing out those fun new frog mobs that will be joining officially in version 1.19. The new version of Minecraft for Windows includes frogs, their tiny tadpole babies, and several of their new features to test out. From what we know about the frog mobs so far, they spawn in swamp biomes where they'll spend time snapping fireflies out of the air and hopping on Dripleafs. We already knew some other neat things about frogs, like how they hatch as tadpoles and grow into one of three frog varieties based on the biome they mature in. Mojang had also let on that frogs would be useful to players in some fashion, but didn't initially let on how.",
    date: '2022-02-03',
  },
  {
    title: `You can now be a wookiee in Fortnite, but not Chewie`,
    headerBgSrc: 'https://cdn.mos.cms.futurecdn.net/C2cxkttvDWTSbMYPuSmgGh-1024-80.jpg',
    category: 'Fortnite',
    body: "The latest live action series set in a galaxy far, far away, The Book of Boba Fett, has introduced us to some cool new Star Wars characters, including Ming-Na Wen's Fennec Shand and new-wookiee-in-town Krrsantan, an arm-ripping fiend who towers over everybody else. Now you can play as both of them in Fortnite thanks to yet another crossover between Disney and the battle royale game. Boba Fett himself previously joined Fortnite earlier last month, and he's also back in the item shop so you can fill out your own Book of Boba.",
    date: '2022-02-03',
  },
  {
    title: `This Minecraft replica of Final Fantasy 14's Sharlayan is so good I thought it was an in-game screenshot`,
    headerBgSrc: 'https://cdn.mos.cms.futurecdn.net/hkhr3YJhakUEfdFFUik3vV-1024-80.jpg',
    category: 'Minecraft',
    body: "I am undeniably an absolute sucker for people recreating cool stuff in Minecraft, and nothing has hit my interests more than this fantastic Minecraft replica of Final Fantasy 14's Old Sharlayan. The Grecian-inspired city is the first new area you visit in Endwalker, the game's latest expansion. It's become one of my favourite zones in the game and this replica has done a great job at capturing how gosh-darn pretty the whole place is. The creation comes courtesy of a BiliBili user, who posted a two-minute video of their build to the Chinese social media site. It shows off the giant statue/fountain seen in the Endwalker trailer, the sage council building and the city's main aetheryte which is even spinning in the recreation. Sadly, there doesn't seem to be a way to check this out in Minecraft ourselves, so we'll just have to admire the trailer a few times.",
    date: '2022-02-04',
  },
  ];

const newsListEl = document.querySelector('.news-list');

const newsListItems = news.map(u => createNewsListItems(u));

newsListEl.append(...newsListItems);

function createNewsListItems({ title, headerBgSrc, category, body, date }) {

  const newsListItem = document.createElement('li');
  newsListItem.classList.add('li');
  newsListItem.append(
    createLiTop(headerBgSrc, title),
    createLiBottom(category, body, date),
  );

  return newsListItem;
}

function createLiTop(src, title){
  const liTop = document.createElement('div');
  liTop.classList.add('li__top');

  const liImg = document.createElement('div');
  liImg.classList.add('li__img');
  liTop.append(
    createliImg(src),
    createTitle(title),
    createLiLike(),
  );
  return liTop;
}
function createliImg(src){
  const liImg = document.createElement('div');
  liImg.classList.add('li__img');
  const Img = document.createElement('img');
  Img.src = src;
  Img.alt = " ";
  liImg.append(
    Img
  )
  return liImg;
}
function createTitle(title){
  const Title = document.createElement('div');
  Title.classList.add('li__title');
  Title.innerHTML= title ;
  return Title;
}
function createLiLike(){
  const LiLike = document.createElement('div');
  LiLike.classList.add('li__like');
  LiLike.innerHTML = "<a href='/'><i class='fas fa-heart'></i></a>";
  LiLike.addEventListener('click', function(e){
    e.preventDefault();
    this.classList.toggle('active');
  })
  return LiLike;
}

function createLiBottom(category, text, date){
  const liBottom = document.createElement('div');
  liBottom.classList.add('li__bottom');
  liBottom.append(
    createliCategory(category),
    createliText(text),
    createliFlex(date)

  );
  return liBottom;
}

function createliCategory(text) {
  const liCategory = document.createElement('h2');
  liCategory.classList.add('li__category');
  liCategory.innerHTML= text ;
  return liCategory;
}
function createliText(text) {
  const liText = document.createElement('p');
  liText.classList.add('li__text');
  liText.innerHTML= text ;
  return liText;
}
function createliDate(date) {
  const liDate = document.createElement('p');
  liDate.classList.add('li__date');
  liDate.innerHTML= date ;
  return liDate;
}
function createBtnDel() {
  const createBtnDel = document.createElement('div');
  createBtnDel.classList.add('btn__del');
  createBtnDel.innerHTML="<a href='/'><i class='fas fa-trash'></i></a>" ;
  createBtnDel.addEventListener('click', function(e){
    e.preventDefault();
    
    e.target.closest("li").classList.add('change-size');
    setTimeout(function () { 
      e.target.closest("li").remove();
    }, 1000)
      
  }, {capture: true})
  return createBtnDel;
}
function createliFlex(date) {
  const liFlex = document.createElement('div');
  liFlex.classList.add('li__flex');
  liFlex.append(
    createBtnDel(),
    createliDate(date),
  );
  return liFlex;
}