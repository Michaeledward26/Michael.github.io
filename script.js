const myImage = document.querySelector("#myImage");
const textTitle = document.querySelector(".text");
const boxBtnPlay = document.querySelector(".box-btn");

textTitle.innerHTML = '"HaI...Angel..!"';


const btnPlay = () => {
    console.log("diclick");
    boxBtnPlay.style.display = "none";

    var audio = new Audio("karna.mp3");

    audio.play();
    
    

    setTimeout(() => {
        textTitle.innerHTML = '"Btw... Terima kasih ya. Sudah mau kenalan dan berteman denganku😆😆"'
        setTimeout(() => {
            myImage.src = "weee.gif";
            textTitle.innerHTML = '"Maaf, selama ini sudah menggangumu🙏🙏"'
        }, 5000);
        setTimeout(() => {
            myImage.src = "emawh.gif"
            textTitle.innerHTML = '"Semoga tahun depan kita bisa ketemu"'
        }, 10000);
        setTimeout(() => {
            myImage.src = "mikir.gif"
            textTitle.innerHTML = '"Dan semoga tahun depan semua cita citamu terwujud🏥👩🏻‍⚕️😇"'
        }, 15000);
        setTimeout(() => {
            myImage.src = "pandaketawa2.gif"
            textTitle.innerHTML = '"Selamat Tahun Baru 2024🎉🎉"'
        }, 20000);
    }, 3000);
}