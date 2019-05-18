const imagesWrapper = document.getElementById('images-wrapper');
const inputTitle = document.getElementById('input-title');
const inputUrl = document.getElementById('input-url');
const addBtn = document.getElementById('add-btn');
const uncorrectiveUrl = document.getElementById('error');

const getImg = () => {
  let counter = 0;
  const div = document.createElement('div');
  div.className = 'image';
  div.id = counter;
  const img = document.createElement('img');
  img.alt = inputTitle.value;
  img.src = inputUrl.value;
  img.onload = () => {
    inputUrl.value = '';
    inputTitle.value = '';
    div.innerHTML = `<div id="delete" class="deleteBtn">
                       <div class='close'>
                          <span></span>
                          <span></span>
                       </div>
                     </div>`;

    // eslint-disable-next-line no-plusplus
    counter++;
    imagesWrapper.appendChild(div);
    div.appendChild(img);
  };
  div.addEventListener('click', () => {
    img.parentNode.removeChild(img);
    div.parentNode.removeChild(div);
  });

  img.onerror = () => {
    if (inputUrl.value.search('http:\\/\\/\\S+\\.[jJ][pP][eE]?[gG]') === -1) {
      uncorrectiveUrl.style.display = 'block';
      setTimeout(() => {
        uncorrectiveUrl.style.display = 'none';
      }, 2000);
    }
  };
};

inputUrl.addEventListener('keypress', (event) => {
  const key = event.keyCode;
  if (key === 13) {
    event.preventDefault();
    getImg();
  }
});

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getImg();
});
