document.querySelector('.content-main-make-right-write-more').addEventListener('click', function(event) {  
  if (!event.target.matches('#closeVideo')) {
    var videoContainer = document.getElementById('video-container');
    videoContainer.style.display = 'block';
    var myVideo = document.getElementById('myVideo');
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
    }
  }
});
document.getElementById('closeVideo').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container');
  videoContainer.style.display = 'none';
  var myVideo = document.getElementById('myVideo');
  myVideo.pause();
  myVideo.currentTime = 0; 
});


document.getElementById('x2').addEventListener('click', function(event) {  
  if (!event.target.matches('#closeVideo-2')) {
    var videoContainer = document.getElementById('video-container-2');
    videoContainer.style.display = 'block';
    var myVideo = document.getElementById('myVideo-2');
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
    }
  }
});
document.getElementById('closeVideo-2').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container-2');
  videoContainer.style.display = 'none';
  var myVideo = document.getElementById('myVideo-2');
  myVideo.pause();
  myVideo.currentTime = 0; 
});





document.getElementById('x3').addEventListener('click', function(event) {  
  if (!event.target.matches('#closeVideo-3')) {
    var videoContainer = document.getElementById('video-container-3');
    videoContainer.style.display = 'block';
    var myVideo = document.getElementById('myVideo-3');
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
    }
  }
});
document.getElementById('closeVideo-3').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container-3');
  videoContainer.style.display = 'none';
  var myVideo = document.getElementById('myVideo-3');
  myVideo.pause();
  myVideo.currentTime = 0; 
});





document.getElementById('x4').addEventListener('click', function(event) {  
  if (!event.target.matches('#closeVideo-4')) {
    var videoContainer = document.getElementById('video-container-4');
    videoContainer.style.display = 'block';
    var myVideo = document.getElementById('myVideo-4');
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
    }
  }
});
document.getElementById('closeVideo-4').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container-4');
  videoContainer.style.display = 'none';
  var myVideo = document.getElementById('myVideo-4');
  myVideo.pause();
  myVideo.currentTime = 0; 
});




document.getElementById('x5').addEventListener('click', function(event) {  
  if (!event.target.matches('#closeVideo-5')) {
    var videoContainer = document.getElementById('video-container-5');
    videoContainer.style.display = 'block';
    var myVideo = document.getElementById('myVideo-5');
    if (myVideo.paused || myVideo.ended) {
      myVideo.play();
    }
  }
});
document.getElementById('closeVideo-5').addEventListener('click', function() {
  var videoContainer = document.getElementById('video-container-5');
  videoContainer.style.display = 'none';
  var myVideo = document.getElementById('myVideo-5');
  myVideo.pause();
  myVideo.currentTime = 0; 
});
