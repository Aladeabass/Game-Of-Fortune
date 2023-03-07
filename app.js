
// target all the required DOM elements
let get_started = document.querySelector('.get-started')
let start_btn = document.querySelector('.start')
let game_env = document.querySelector('.game-env')
let get_started_form = document.querySelector('form')
let play_btn = document.querySelector('.play')
let menu_btn = document.querySelector('.menu');
let play_again_btn = document.querySelector('.play-again');
let theme_btn = document.querySelector('.theme-btn');
let theme_ball = document.querySelector('.theme-ball');

// hiding the play again button
play_again_btn.style.display = "none"

// adding animation to the theme-btn (sliding left to right )
theme_btn.addEventListener('click', (e)=>{
     e.preventDefault();
     theme_ball.classList.toggle('move-right')
    //  target header
    document.querySelector('header').classList.toggle('dark-theme')

     //  target nav
     document.querySelector('nav').classList.toggle('dark-theme-nav')

       //  target menu icon
       document.querySelector('.menu').classList.toggle('inverter')
    // target main
    document.querySelector('main').classList.toggle('dark-theme')

    // target game environment
    document.querySelector('.game-env').classList.toggle('dark-theme-nav')

        // target player numbers basket
        document.querySelector('.player-numbers-basket').classList.toggle('dark-theme')

          // target lucky numbers basket
          document.querySelector('.lucky-numbers-basket').classList.toggle('dark-theme')

           // target prize box
           document.querySelector('.prize').classList.toggle('dark-theme-prize')

    // target footer
    document.querySelector('footer').classList.toggle('dark-theme')

    // target footer
    let a_tags =  document.querySelectorAll('a')
      a_tags.forEach((a_tag)=>{
          a_tag.classList.toggle('dark-theme-link')

    })

})





// show nav menu 
menu_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    document.querySelector('nav').classList.toggle('show')
})


// the get started button
get_started.addEventListener('click',(anything)=>{

     anything.preventDefault()
     get_started_form.style.display = "flex"

})

// the start button starts here

start_btn.addEventListener('click', (event)=>{

    event.preventDefault();
    let player_name = document.querySelector('.player-name').value
    let bet_amount = Number(document.querySelector('.bet-amount').value)

    if(player_name === ''){
        alert("Pls enter your name in the player field")
    }else{
        if(bet_amount < 5){
            alert("pls enter stake amount must be 5 and above")
        }
        else{
            game_env.style.display = "flex"
            get_started_form.style.display = "none"
        }
    }
   
    
})

// global variable
let lucky_balls = []
let player_balls = []
let counter = 0;


// play game logic starts here
play_btn.addEventListener('click', (event)=>{
    event.preventDefault();
    let stake_amount = Number(document.querySelector('.bet-amount').value)
    
    // generating the random lucky numbers for the computer
    for(let i=0; i<5; i++){
        let randomBall = Math.floor(Math.random() * 90) + 1
        if(!lucky_balls.includes(randomBall)){
            lucky_balls.push(randomBall)
        }else{
           if(randomBall < 90){
              randomBall = randomBall + 1
              lucky_balls.push(randomBall)
           }
        }

        let lucky_ball = document.createElement('span');
        lucky_ball.classList.add('ball')
        lucky_ball.textContent = randomBall
        document.querySelector('.lucky-balls').appendChild(lucky_ball)
    }

    // generating the random balls for the player

    for(let i=0; i<5; i++){
        let randomBall_player = Math.floor(Math.random() * 90) + 1
        if(!player_balls.includes(randomBall_player)){
            player_balls.push(randomBall_player)
           
        }else{
           if(randomBall_player < 90){
              randomBall_player = randomBall_player + 1
              player_balls.push(randomBall_player)
           }
        }

        let player_ball = document.createElement('span');
        if(lucky_balls.includes(randomBall_player)){
            player_ball.classList.add('ball')
            counter++;
        }else{
            player_ball.classList.add('ball2')
        }
        player_ball.textContent = randomBall_player
        document.querySelector('.player-balls').appendChild(player_ball)
    }

    play_btn.style.display = "none"
    play_again_btn.style.display = "block"
    document.querySelector('.stake-amount').textContent = (counter * stake_amount )

   
    
})