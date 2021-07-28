function game() {

    let count = 0;
    let user = 0;
    let computer = 0;
    let compChoice;

    // 0 => Rock
    // 1 => Scissor
    // 2 => Paper

    function playGame() {

        let rock = document.getElementById("rock");
        let scissor = document.getElementById("scissor");
        let paper = document.getElementById("paper");
        let show = document.getElementById("show");
        let result = document.getElementById("result");
        let results = document.getElementById("results");
        const playerOptions = [rock, paper, scissor];

        playerOptions.forEach(option => {
            option.addEventListener('click', function () {
                count++;
                if (count < 10 && count > 0) {
                    show.innerText = `Rounds Left Are ${10 - count}`;
                }
                if (count === 10) {
                    show.innerText = 'Game Over! New Game Is Reloaded.';
                    setTimeout(function () {
                        window.location.reload();
                    }, 2500);
                }
            })
        });

        function logic() {
            let userScore = document.getElementById("user-score");
            let computerScore = document.getElementById("computer-score");

            rock.addEventListener('click', function () {
                compChoice = Math.floor(Math.random() * 3);

                if (compChoice === 0) {
                    user = user;
                    computer = computer;
                    result.innerText = 'Round Tied!';
                }
                else if (compChoice === 1) {
                    user = user + 1;
                    result.innerText = 'You Won This Round! Your Rock Broke Computer\'s Scissor.';
                }
                else if (compChoice === 2) {
                    computer = computer + 1;
                    result.innerText = 'You Lost This Round! Your Rock Is Captured By Computer\' s Paper.';
                }
                userScore.innerText = user;
                computerScore.innerText = computer;

                if (user > computer) {
                    results.innerText = 'You Are Winning The Game!';
                    results.style.color = '#50CB93';
                }
                else if (user < computer) {
                    results.innerText = 'You Are Loosing The Game';
                    results.style.color = '#DA0037';
                }
                else {
                    results.innerText = 'The Game Is In Balance!';
                    results.style.color = '#7DEDFF';
                }
            });

            scissor.addEventListener('click', function () {

                compChoice = Math.floor(Math.random() * 3);

                if (compChoice === 0) {
                    computer = computer + 1;
                    result.innerText = 'You Lost This Round! Your Scissor Is Broken By Computer\' s Rock.';
                }
                else if (compChoice === 1) {
                    user = user;
                    computer = computer;
                    result.innerText = 'Round Tied!';
                }
                else if (compChoice === 2) {
                    user = user + 1;
                    result.innerText = 'You Won This Round! Your Scissor Torned Away Computer\'s Paper.';
                }

                userScore.innerText = user;
                computerScore.innerText = computer;

                if (user > computer) {
                    results.innerText = 'You Are Winning The Game!';
                    results.style.color = '#50CB93';
                }
                else if (user < computer) {
                    results.innerText = 'You Are Loosing The Game';
                    results.style.color = '#DA0037';
                }
                else {
                    results.innerText = 'The Game Is In Balance!';
                    results.style.color = '#7DEDFF';
                }
            });

            paper.addEventListener('click', function () {

                compChoice = Math.floor(Math.random() * 3);

                if (compChoice === 0) {
                    user = user + 1;
                    result.innerText = 'You Won This Round! Your Paper Captured Computer\'s Rock.';
                }
                else if (compChoice === 1) {
                    computer = computer + 1;
                    result.innerText = 'You Lost This Round! Your Paper Is Torned By Computer\' s Scissor.';
                }
                else if (compChoice === 2) {
                    user = user;
                    computer = computer;
                    result.innerText = 'Round Tied!';
                }

                userScore.innerText = user;
                computerScore.innerText = computer;

                if (user > computer) {
                    results.innerText = 'You Are Winning The Game!';
                    results.style.color = '#50CB93';
                }
                else if (user < computer) {
                    results.innerText = 'You Are Loosing The Game';
                    results.style.color = '#DA0037';
                }
                else {
                    results.innerText = 'The Game Is In Balance!';
                    results.style.color = '#7DEDFF';
                }
            });
        }
        logic();
    }
    playGame();
}

game();