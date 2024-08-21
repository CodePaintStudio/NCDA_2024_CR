
let isScrolling = false;
function yanseScroll(event) {
  if (isScrolling) return;
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 100);

  const yanse = document.querySelector('.yanse-pic');
  const yanseScrollAmount = 192;
  if (event.deltaY > 0) {
    yanse.scrollBy({
      left: yanseScrollAmount,
      behavior: 'smooth'
    });
  } else {
    yanse.scrollBy({
      left: -yanseScrollAmount,
      behavior: 'smooth'
    });
  }
}

function yanbuScroll(event) {
  if (isScrolling) return;
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 200);

  const yanbu = document.querySelector('.yanbu-pic');
  const yanbuScrollAmount = 192;
  if (event.deltaY > 0) {
    yanbu.scrollBy({
      left: yanbuScrollAmount,
      behavior: 'smooth'
    });
  } else {
    yanbu.scrollBy({
      left: -yanbuScrollAmount,
      behavior: 'smooth'
    });
  }
}

function tuibuScroll(event) {
  if (isScrolling) return;
  isScrolling = true;

  setTimeout(() => {
    isScrolling = false;
  }, 200);

  const tuibu = document.querySelector('.tuibu-pic');
  const tuibuScrollAmount = 192;
  if (event.deltaY > 0) {
    tuibu.scrollBy({
      left: tuibuScrollAmount,
      behavior: 'smooth'
    });
  } else {
    tuibu.scrollBy({
      left: -tuibuScrollAmount,
      behavior: 'smooth'
    });
  }
}

// 获取所有yanse-1盒子元素
var yanseBoxes = document.querySelectorAll('.yanse-1');
// 获取放大图片容器
var enlargedImagesContainer1 = document.querySelector('.enlarged-images-container-1');
// 遍历每个yanse-1盒子元素
yanseBoxes.forEach(function (box) {
  // 添加点击事件监听器
  box.addEventListener('click', function () {
    // 获取当前点击盒子内的图片
    var clickedImage = box.querySelector('img');
    // 创建放大图片元素
    var enlargedImage = document.createElement('img');
    enlargedImage.src = clickedImage.src;
    enlargedImage.classList.add('enlarge-image');
    // 清空放大图片容器并添加放大图片
    enlargedImagesContainer1.innerHTML = '';
    enlargedImagesContainer1.appendChild(enlargedImage);
  });
});
var yanbuBoxes = document.querySelectorAll('.yanbu-1');
var enlargedImagesContainer2 = document.querySelector('.enlarged-images-container-2');
yanbuBoxes.forEach(function (box) {
  box.addEventListener('click', function () {
    var clickedImage = box.querySelector('img');
    var enlargedImage = document.createElement('img');
    enlargedImage.src = clickedImage.src;
    enlargedImage.classList.add('enlarge-image');
    enlargedImagesContainer2.innerHTML = '';
    enlargedImagesContainer2.appendChild(enlargedImage);
  });
});
var tuibuBoxes = document.querySelectorAll('.tuibu-1');
var enlargedImagesContainer3 = document.querySelector('.enlarged-images-container-3');
tuibuBoxes.forEach(function (box) {
  box.addEventListener('click', function () {
    var clickedImage = box.querySelector('img');
    var enlargedImage = document.createElement('img');
    enlargedImage.src = clickedImage.src;
    enlargedImage.classList.add('enlarge-image');
    enlargedImagesContainer3.innerHTML = '';
    enlargedImagesContainer3.appendChild(enlargedImage);
  });
});
