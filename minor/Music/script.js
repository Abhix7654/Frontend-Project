var arr=[
        { songName: "Hamari Adhuri kahani", url: "./Hamari Adhuri Kahani.mp3", img: "./hamari.jpg",Dur:"6:30" },
         { songName: "Aye Dil Hai Mushkil", url: "./dil.mp3", img: "./dil.jpg",Dur:"4:30"  },
        { songName: "Tera Zikr", url: "./Tera Zikr.mp3", img: "./zikr.jpg",Dur:"5:30"  },
        { songName: "Ajj Bhi", url: "./Aaj Bhi.mp3", img: "./aaj.jpg",Dur:"4:20"  },
        { songName: "Pehle Bhi main", url: "./Pehle Bhi Main.mp3", img: "./pahale.png",Dur:"5:00"  },
        { songName: "Hush", url: "./Husn.mp3", img: "./husn.jpg",Dur:"3:10"  }
]

var allSongs = document.querySelector("#all-songs")
var poster = document.querySelector("#left")

var play=document.querySelector("#play")
var back=document.querySelector("#back")
var forw=document.querySelector("#forw")

var audio=new Audio();
var selectedsong=0;

function mainfunction(){
        var clutter="";
arr.forEach(function(song,idx){
        clutter+=` <div class="song-card" id="${idx}">
                                       
        <div class="part1"> 
         <img src="${song.img}" alt="">
         <h2>${song.songName}</h2></div>
         <div>
                 <h6>${song.Dur}</h6>
         </div>

 </div>`;


})
allSongs.innerHTML=clutter;
audio.src=arr[selectedsong].url;

poster.style.backgroundImage = `url(${arr[selectedsong].img})`

}
mainfunction();
var flag=0

document.querySelector("#all-songs").addEventListener("click",function(dets){
       
           selectedsong=dets.target.id;
           
           mainfunction();
           play.innerHTML = `<i class="ri-pause-mini-line"></i>`
          flag=0
           audio.play();
})


play.addEventListener("click",function(){
        if(flag==0){
                play.innerHTML = `<i class="ri-play-fill"></i>`
        
        audio.pause()
         flag=1
        }else{
         play.innerHTML = `<i class="ri-pause-mini-line"></i>`
            audio.play()
            flag=0

        }

})

forw.addEventListener("click",function(){
if(selectedsong<arr.length-1){
        selectedsong++
        mainfunction();
        audio.play()
} 
else{
        forw.style.opacity=0.4
}  
})
back.addEventListener("click",function(){
        if(selectedsong>0){
                selectedsong--
                mainfunction();
                audio.play()
        }  
        else{
                back.style.opacity=0.4
        }  
        })