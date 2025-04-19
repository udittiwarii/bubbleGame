let timer = 60;
let scoreval = 0;
let hitrn = 0;


function makebubble() {
    let store = ' '

    for (let i = 0; i <= 200; i++) {
        let rndm = Math.floor(Math.random() * 10)
        store += `<div class="bubble">${rndm}</div>`
    }

    document.querySelector('.pbtm').innerHTML = store


};


function newhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector('#sethit').textContent = hitrn
}

function runtimmer() {
    let tm = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector('#settimer').textContent = timer
        }
        else {
            document.getElementById('timeout').play();
            clearInterval(tm)
            document.querySelector('.pbtm').innerHTML = ` <div class="row">
     <h1 class="over">Time Over<h1></h1>
     <div class="score">score
         <span class="number">${scoreval}</span>
     </div>
     <button class="button">Replay</button>`

        }
        document.querySelector('.button').addEventListener('click', function () {
            document.getElementById('restart').play();
            setTimeout(() => {
                window.location.reload();
            }, 500);
        });
    }, 1000)
};

function score() {
    scoreval += 10
    document.querySelector('#setscore').textContent = scoreval
}
document.querySelector('.pbtm').addEventListener('click', function (dets) {
    if (Number(dets.target.textContent) === hitrn) {
        document.getElementById('popsound').play();
        score();
        newhit();
        makebubble();
    }
    else {
        if (timer > 0) {
            document.getElementById('wrngpop').play();
        }
    }
})

runtimmer();
newhit();
makebubble();
