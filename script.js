console.log("Wecome to my playlist");

//initialize the Variable
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let songsItems = Array.from(document.getElementsByClassName('songItem'))
let songs = [
    {songName: "Shikayat", filePath: "songs/1.mp3", coverPath : "covers/1.jpg" },
    {songName: "Aam Jahe Munde", filePath: "songs/2.mp3", coverPath : "covers/2.jpg" },
    {songName: "Tu hai Kahan", filePath: "songs/3.mp3", coverPath : "covers/3.jpg" },
    {songName: "Teri Ho Na Saki", filePath: "songs/4.mp3", coverPath : "covers/4.jpg" },
    {songName: "Khawish", filePath: "songs/5.mp3", coverPath : "covers/5.jpg" },
    {songName: "Kahani Suno 2.0", filePath: "songs/6.mp3", coverPath : "covers/6.jpg" },
    {songName: "Hau Main", filePath: "songs/7.mp3", coverPath : "covers/7.jpg" },
    {songName: "Savera Ho Rha", filePath: "songs/8.mp3", coverPath : "covers/8.jpg" },
    {songName: "Leher", filePath: "songs/9.mp3", coverPath : "covers/9.jpg" },
    {songName: "Check it Out", filePath: "songs/10.mp3", coverPath : "covers/10.jpg" }
]
songsItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})
//audioElement.play()

//handle pause.play click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        //if audio is paused or reloaded then play
         audioElement.play();
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
         gif.style.opacity = 1;

    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

    })
})