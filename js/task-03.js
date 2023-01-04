const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// =============== option 1 ============================

// const listItems = document.querySelector('.gallery');

// const makeItem = ({ alt, url }) => {
//   const item = document.createElement('li');
//   const img = document.createElement('img');

//   item.classList.add('gallery__item');

//   img.classList.add('gallery__img');
//   img.alt = alt;
//   img.src = url;

//   item.appendChild(img);

//   return item;
// };

// const elements = images.map(makeItem);

// listItems.append(...elements);

// =============== option 2 ============================

const listItems = document.querySelector('.gallery');

const element = images
  .map(({ url, alt }) => {
    return `<li class='gallery__item'><img src=${url} class='gallery__img' alt='${alt}' width='330'></li>`;
  })
  .join('');

listItems.insertAdjacentHTML('afterbegin', element);
