let track_index = 0;
let curr_track = document.createElement('audio');
curr_track.volume = 0.5;
let seek_slider = document.querySelector('.seek_slider');
let seekPosition = 0;
let isPlaying = false;
let track_name = document.querySelector('#title_name');
let track_artist = document.querySelector('#title_artist');
let track_art = document.querySelector('#board');
let updateTimer;
let chasingTrack = document.querySelector('.run_track');
let progress = document.querySelector('.progress');
let icon = document.querySelector('#icon');
let count = 0;


seek_slider.oninput = function(){

    progress.style.width = this.value + "%";

}

const music_list=[

    {
        img: 'noinaycoanh.jpg',
        name: "Noi nay co anh",
        artist: "Son Tung MTP",
        music: 'noinaycoanh.mp3'
    },
    {
        img: 'emoi.jpg',
        name: "Em oi",
        artist: "Vu Cat Tuong",
        music: 'emoi.mp3'
    },
    {
        img: 'nothinggonna.jpg',
        name: "Nothing gonna change my love for you",
        artist: "Justin Bieber",
        music: 'nothinggonnachange.mp3'
    },
    {
        img: 'coemcho.jpg',
        name: "Co em cho",
        artist: "Min",
        music: 'coemcho.mp3'
    },
    {
        img: 'dunglamtraitimanhdau.jpg',
        name: "Dung lam trai tim anh dau",
        artist: "Son Tung MTP",
        music: 'dunglamtraitimanhdau.mp3'
    },
    {
        img: 'phonecert.jpg',
        name: "Phonecert",
        artist: "10CM",
        music: 'phonecert.mp3'
    },
    {
        img: 'nightchange.jpg',
        name: "Night Changes",
        artist: "One Direction",
        music: 'nightchanges.mp3'
    },
    {
        img: 'nothingonyou.jpg',
        name: "Nothing on you",
        artist: "B.o.B",
        music: 'nothingonyou.mp3'
    },
    {
        img: 'cohenvoithanhxuan.jpg',
        name: "Co hen voi thanh xuan",
        artist: "MONSTAR",
        music: 'cohenvoithanhxuan.mp3'
    },
    {
        img: 'nangtho.jpg',
        name: "Nang tho",
        artist: "Hoang Dung",
        music: 'nangtho.mp3'
    },
    {
        img: 'henmotmai.webp',
        name: "Hen mot mai",
        artist: "Bui Anh Tuan",
        music: 'henmotmai.mp3'
    },
    
]


console.log(music_list[1].music);


loadTrack(track_index);


//curr_track.src = music_list[0].music;
//curr_track.play();

function loadTrack(track_index){

    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")"
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;

    updateTimer = setInterval(setUpdate,1000);

    
    curr_track.addEventListener('ended',nextTrack);

    //playTrack();
}

function reset(){

    seek_slider.value = 0;
}

function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}

function playTrack(){

    count+= 1;
    curr_track.play();
    isPlaying = true;
    //icon
    
    icon.innerHTML = '<i class="fa-sharp fa-light fa-pause fa-xl" style="color: white;transform: translateX(2px);"></i>'
}

function pauseTrack(){

    curr_track.pause();
    isPlaying = false;
    //icon
    icon.innerHTML = '<i class="fa-sharp fa-light fa-play fa-xl" style="color: white;transform: translateX(2px);"></i>'
}

function nextTrack(){

    if(track_index < music_list.length - 1){
        track_index += 1;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack()
}

function prevTrack(){

    if(track_index >0){
        track_index -= 1;

    }else{

        track_index = music_list.length-1;
    }
    loadTrack(track_index);
    playTrack();

}

function seekTo(){

    let seekto = curr_track.duration * (seek_slider.value/100);
    curr_track.currentTime = seekto;
}

function setUpdate(){

    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){

        seekPosition = curr_track.currentTime*(100/curr_track.duration);
        seek_slider.value = seekPosition;
    }
}

function updateBar(){

    const progressPercent = (curr_track.currentTime / curr_track.duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

curr_track.addEventListener('timeupdate',updateBar);

function click(){

    
}