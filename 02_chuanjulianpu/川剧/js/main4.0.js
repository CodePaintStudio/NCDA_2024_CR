document.addEventListener('DOMContentLoaded', function () {
  var molian = document.querySelector('.molian');
  var videoContainer = document.querySelector('.video-container');
  var shipin = document.querySelector('.shipin');

  molian.addEventListener('click', function () {
    // 切换透明度
    // videoContainer.style.opacity = '1';
    // shipin.style.opacity = '1';
    if (videoContainer.style.opacity === '1' && shipin.style.opacity === '1') {
      videoContainer.style.opacity = '0';
      shipin.style.opacity = '0';
    } else {
      videoContainer.style.opacity = '1';
      shipin.style.opacity = '1';
    }
  });
});