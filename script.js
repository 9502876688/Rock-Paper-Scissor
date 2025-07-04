let score=JSON.parse( localStorage.getItem('score'));

        if(score===null){
            score={
                wins:0,
                losses:0,
                ties:0
            }
        }


        updatescore();







        function playGame(palayerMove){
             const compguess= pickComputerMove();

            let result='';

            if(palayerMove==='scissors'){
                 if (compguess==='rock'){
                    result='You Loss';
                 }else if(compguess==='paper'){
                     result='You Win';
                 }else if (compguess==='scissors'){
                     result='Tie';
                 }



            }else if(palayerMove==='paper'){
                

                if (compguess==='rock'){
                  result='You Win';
                }else if(compguess==='paper'){
                   result='Tie';
                }else if (compguess==='scissors'){
                 result='You Loss';
                }


            }else if(palayerMove==='rock'){
                 

                if (compguess==='rock'){
                    result='Tie';
                }else if(compguess==='paper'){
                 result='You Loss';
                }else if (compguess==='scissors'){
                    result='You Win';
                }

            }
                if(result==='You Win'){
                    score.wins+=1;
                }else if(result==='You Loss'){
                    score.losses+=1;
                }else if(result==='Tie'){
                    score.ties+=1;
                }

                localStorage.setItem('score',JSON.stringify(score));

                document.querySelector('.js-result').innerHTML=result;
                document.querySelector('.js-moves').innerHTML=`You <img class="move-img" src="images/${palayerMove}-emoji.png" alt=""> 
                                                               computer <img class="move-img" src="images/${compguess}-emoji.png" alt="">`;

                updatescore();

           
            


            
            
        }

        function updatescore(){
            document.querySelector(".js-score").innerHTML=`wins: ${score.wins } ,losses: ${score.losses } ,ties: ${score.ties}.`;
            

        }




        let compguess=" ";
        function pickComputerMove(){
             const randomNumber=Math.random();
          
            if (randomNumber>=0 && randomNumber<1/3){
                 compguess='rock';
            }else if(randomNumber>=1/3 && randomNumber<2/3){
                 compguess='paper';
            }
            else if(randomNumber>=2/3 && randomNumber<=1){
                 compguess='scissors';
            }

            return(compguess);
          

        }

