import {
  getRandomIntegerFromRange,
  getRandomUniqueElementFromArray
} from './util.js';

const MIN_COMMENTS_COUNT = 1;
const MAX_COMMENTS_COUNT = 5;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const DESCRIPTIONS = [
  'Если смогу, я сделаю это. Конец истории.',
  'Смейтесь как только умеете, любите столько, сколько живете.',
  'Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.',
  'Я полностью уверена, что я — диснеевская принцесса, которую еще не придумали.',
  'Не позволяйте кому-то затушить ваши искры только потому, что их свет сияет в чьих-то глазах.',
  'Делайте в вашей жизни то, что меньше заставляет вас смотреть в свой телефон.',
  'Улыбка — единственный тренд в моде, который актуален всегда.',
  'Никогда не ищите свое счастье там, где вы его однажды потеряли.',
  'Жизнь похожа на фотокамеру: вам просто нужно смотреть на нее с улыбкой.',
  'Моя жизнь меняется, потому что меняю ее я.',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const COMMENTATORS_NAMES = [
  'Андрей',
  'Николай',
  'Александр',
  'Виктор',
  'Олег',
  'Дмитрий',
  'Василий',
  'Владимир',
];

const commentsIdArray = [];
for (let id = 0; id < MAX_COMMENTS_COUNT; id++) {
  commentsIdArray[id] = id + 1;
}

const createComment = () => ({
  id: getRandomUniqueElementFromArray(commentsIdArray),
  avatar: `img/avatar-${getRandomIntegerFromRange(1, 6)}.svg`,
  message: MESSAGES[getRandomIntegerFromRange(0, MESSAGES.length - 1)],
  name: COMMENTATORS_NAMES[getRandomIntegerFromRange(0, COMMENTATORS_NAMES.length - 1)],
});

const createPost = (counter = 1) => {
  const url = `photos/${counter}.jpg`;
  const randomDescription = DESCRIPTIONS[getRandomIntegerFromRange(0, DESCRIPTIONS.length - 1)];
  const randomLikes = getRandomIntegerFromRange(MIN_LIKES, MAX_LIKES);
  const comments = new Array(getRandomIntegerFromRange(MIN_COMMENTS_COUNT, MAX_COMMENTS_COUNT)).fill('').map(() => createComment());
  return {
    id: counter,
    url,
    description: randomDescription,
    likes: randomLikes,
    comments,
  };
};

export {createPost};


