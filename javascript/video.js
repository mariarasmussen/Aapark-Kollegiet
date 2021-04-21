/* Denne kode får videoen til at starte når man er indenfor 250 px */
var video_div = document.getElementById('videoMix'); 
document.addEventListener('scroll', function myFunction()
{
    var video_div = document.getElementById('videoMix'); 
    if(video_div.getBoundingClientRect().bottom < 250 || video_div.getBoundingClientRect().top > 250)
    video_div.pause();
    else video_div.play(); 
}
)