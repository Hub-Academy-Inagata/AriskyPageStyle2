var videoBtn = document.querySelector('.video-btn')
var videoModal = document.getElementById('videoModal')
var video = document.getElementById('video')
var videoSrc

videoBtn.addEventListener('click',function(e){
    videoSrc = videoBtn.getAttribute('data-bs-src')
})

videoModal.addEventListener('shown.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})

videoModal.addEventListener('hide.bs.modal',(e)=>{
    video.setAttribute('src', videoSrc)
})