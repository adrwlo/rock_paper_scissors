const your_img_btns = document.querySelectorAll('.your-img');
const computer_img_btns = document.querySelectorAll('.computer-img');
const your_result = document.querySelector('.your-result');
const computer_result = document.querySelector('.computer-result');
const end_game_container = document.querySelector('.end-game-container.inactive');
const end_game_title = document.querySelector('.end-game-title');
const reset_btn = document.querySelector('.reset-btn');

const arr = ['rock', 'paper', 'scissors'];

let counter_y = 0;
let counter_c = 0;

resetGame();

function check() {
    clearColorBorder();
    clearBorderComputer();
    const computerOption = arr[Math.floor(Math.random()*arr.length)];
    const yourOption = this.getAttribute('data-type');

    if(yourOption === computerOption) {
        return
    }


    if (yourOption === 'paper' && computerOption === 'rock'){
        counter_y++;
        your_result.innerHTML = 'you: ' + counter_y;
        this.style['border-color'] = 'green';
        colorLossComputer('rock');
    }
    else if (yourOption === 'paper' && computerOption === 'scissors'){
        counter_c++;
        computer_result.innerHTML = 'computer: ' + counter_c;
        colorWinComputer('scissors');
        this.style['border-color'] = 'red';
    }
    else if (yourOption === 'rock' && computerOption === 'paper'){
        counter_c++;
        computer_result.innerHTML = 'computer: ' + counter_c;
        colorWinComputer('paper');
        this.style['border-color'] = 'red';
    }
    else if (yourOption === 'rock' && computerOption === 'scissors') {
        counter_y++;
        your_result.innerHTML = 'you: ' + counter_y;
        this.style['border-color'] = 'green';
        colorLossComputer('scissors');
    }
    else if (yourOption === 'scissors' && computerOption === 'paper') {
        counter_y++;
        your_result.innerHTML = 'you: ' + counter_y;
        this.style['border-color'] = 'green';
        colorLossComputer('paper');
    }
    else if (yourOption === 'scissors' && computerOption === 'rock') {
        counter_c++;
        computer_result.innerHTML = 'computer: ' + counter_c;
        colorWinComputer('rock');
        this.style['border-color'] = 'red';
    }    

    endGame();

    console.log('you: ' + counter_y);
    console.log('computer: ' + counter_c);
}

function endGame() {
    if(counter_y === 5 || counter_c === 5) {
        if (counter_y === 5) {
            for (let your_img_btn of your_img_btns) {
                your_img_btn.style['border-color'] = 'green';
            }
            for (let computer_img_btn of computer_img_btns) {
                computer_img_btn.style['border-color'] = 'red';
            }
            end_game_title.innerHTML = 'Gratulacje, wygrałeś!';
            end_game_container.classList.remove('inactive');
        }
        else {
            for (let computer_img_btn of computer_img_btns) {
                computer_img_btn.style['border-color'] = 'green';
            }
            for (let your_img_btn of your_img_btns) {
                your_img_btn.style['border-color'] = 'red';
            }
            end_game_title.innerHTML = 'Niestety, przegrałeś!';
            end_game_container.classList.remove('inactive');
        }
    }
}


function clearColorBorder() {
    your_img_btns.forEach((your_img_btn) => your_img_btn.style['border-color'] = 'black');
}

function colorWinComputer(el) {
    for (let computer_img_btn of computer_img_btns) {
        if(computer_img_btn.getAttribute('data-type') === el) {
            computer_img_btn.style['border-color'] = 'green';
        }
    }
}

function colorLossComputer(el) {
    for (let computer_img_btn of computer_img_btns) {
        if(computer_img_btn.getAttribute('data-type') === el) {
            computer_img_btn.style['border-color'] = 'red';
        }
    }
}

function clearBorderComputer() {
    for (let computer_img_btn of computer_img_btns) {
        computer_img_btn.style['border-color'] = 'black';
    }
}

function resetGame() {
    end_game_container.classList.add('inactive');
    counter_y = 0;
    counter_c = 0;
    your_result.innerHTML = 'you: ' + counter_y;
    computer_result.innerHTML = 'computer: ' + counter_c;
    for (let your_img_btn of your_img_btns) {
        your_img_btn.style['border-color'] = 'black';
    }
    for (let computer_img_btn of computer_img_btns) {
        computer_img_btn.style['border-color'] = 'black';
    }

}


// nasluchiwanie

your_img_btns.forEach((your_img_btn) => your_img_btn.addEventListener('click', check));

reset_btn.addEventListener('click', resetGame);