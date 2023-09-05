
function chessPlay() {

    let containerDiv = document.createElement('div');
    let mainDiv = document.getElementById('main');
    let boardUl = document.createElement('ul');
    let count = 1;
    let hAMassiv = [
    ['h','https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg','https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg'],
    ['g','https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg','https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'],
    ['f', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg', 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'],
    ['e', 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg'],
    ['d', 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg'],
    ['c', 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg','https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg'],
    ['b', 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg','https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg'],
    ['a', 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg','https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg']
]; 



    
    containerDiv.className = 'container';
    mainDiv.appendChild(containerDiv);
    containerDiv.appendChild(boardUl);
    boardUl.className = 'board';
    

    console.log(containerDiv);

    for (let b = 0; b < 4; b++) {
        
        for(let i = 0; i < 8; i++){
            let cageLi = document.createElement('li');
            boardUl.appendChild(cageLi);
            cageLi.className = 'cage';
            if (i % 2 == 1){
                cageLi.style.backgroundColor = '#333';
                cageLi.style.color = '#fff';
    
                console.log('123');
            }
            if (i == 7) {
                cageLi.style.display = 'flex';
                cageLi.style.justifyContent = 'end';
                let textP = document.createElement('p');

                cageLi.appendChild(textP);
                textP.innerText = count;
                count++;

                
            }
            if (b == 0){
                let textP = document.createElement('p');
                let figure = document.createElement('span');

                
                cageLi.appendChild(textP);
                cageLi.style.display = 'flex';
                cageLi.style.alignItems = 'start';
                // textP.innerText += hAMassiv[i][0];
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(${hAMassiv[i][2]})`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

                // if (i == 7){
             
                //     cageLi.style.justifyContent = 'space-between';
                //     textP.style.alignSelf = 'end';
                // }

            }
            if (b == 3){
                let figure = document.createElement('span');
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg)`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

            }
            
    
    
        }
        for(let i = 0; i < 8; i++){
            let cageLi = document.createElement('li');
            boardUl.appendChild(cageLi);
            cageLi.className = 'cage'
            if (i % 2 == 0){
                cageLi.style.backgroundColor = '#333';
                cageLi.style.color = '#fff'
    
                console.log('123')
            } 
            if (i == 7) {
                cageLi.style.display = 'flex';
                cageLi.style.justifyContent = 'end';
                let textP = document.createElement('p');

                cageLi.appendChild(textP);
                textP.innerText = count;
                count++;

            }
            if (b == 0){
                let figure = document.createElement('span');
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg)`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

            }
            
            if (b == 3){
                let textP = document.createElement('p');
                let figure = document.createElement('span');

                
                cageLi.appendChild(textP);
                cageLi.style.display = 'flex';
                cageLi.style.alignItems = 'end';
                textP.innerText += hAMassiv[i][0];
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(${hAMassiv[i][1]})`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

                if (i == 7){
                    cageLi.style.flexDirection = 'column';
                    cageLi.style.justifyContent = 'space-between';
                    textP.style.alignSelf = 'start';
                }

            }
    
    
        }
        
    }
    console.log(boardUl.children.length) ;
    let arrow = document.createElement('div'); 
    console.log(arrow)
    containerDiv.appendChild(arrow);
    arrow.className = 'arrow';
    arrow.id = 'arrow'
    document.getElementById('arrow').addEventListener('click', function(){
        mainDiv.removeChild(containerDiv);
        containerDiv = document.createElement('div');
        
        boardUl = document.createElement('ul');

    containerDiv.className = 'container';
    mainDiv.appendChild(containerDiv);
    containerDiv.appendChild(boardUl);
    boardUl.className = 'board';
    
    count = 8;

    for (let b = 0; b < 4; b++) {
        
        for(let i = 0; i < 8; i++){
            let cageLi = document.createElement('li');
            boardUl.appendChild(cageLi);
            cageLi.className = 'cage';
            if (i % 2 == 0){
                cageLi.style.backgroundColor = '#333';
                cageLi.style.color = '#fff';
    
                console.log('123');
            }
            if (i == 7) {
                cageLi.style.display = 'flex';
                cageLi.style.justifyContent = 'end';
                let textP = document.createElement('p');

                cageLi.appendChild(textP);
                textP.innerText = count;
                count--;

                
            }
            if (b == 0){
                let textP = document.createElement('p');
                let figure = document.createElement('span');

                
                cageLi.appendChild(textP);
                cageLi.style.display = 'flex';
                cageLi.style.alignItems = 'start';
                // textP.innerText += hAMassiv[i][0];
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(${hAMassiv[i][1]})`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

                // if (i == 7){
             
                //     cageLi.style.justifyContent = 'space-between';
                //     textP.style.alignSelf = 'end';
                // }

            }
            if (b == 3){
                let figure = document.createElement('span');
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg)`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

            }
            
    
    
        }
        for(let i = 0; i < 8; i++){
            let cageLi = document.createElement('li');
            boardUl.appendChild(cageLi);
            cageLi.className = 'cage'
            if (i % 2 == 1){
                cageLi.style.backgroundColor = '#333';
                cageLi.style.color = '#fff'
    
                console.log('123')
            } 
            if (i == 7) {
                cageLi.style.display = 'flex';
                cageLi.style.justifyContent = 'end';
                let textP = document.createElement('p');

                cageLi.appendChild(textP);
                textP.innerText = count;
                count--;

            }
            if (b == 0){
                let figure = document.createElement('span');
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg)`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

            }
            
            if (b == 3){
                let textP = document.createElement('p');
                let figure = document.createElement('span');

                
                cageLi.appendChild(textP);
                cageLi.style.display = 'flex';
                cageLi.style.alignItems = 'end';
                let object = [... hAMassiv].reverse();
   
                textP.innerText += object[i][0];
                cageLi.appendChild(figure);
                cageLi.style.position = `relative`;
                figure.style.top = `0px`;
                figure.style.left = `0px`
                figure.style.position = `absolute`;
                figure.style.background = `url(${hAMassiv[i][2]})`;
                figure.style.backgroundRepeat = `no-repeat`;
                figure.style.backgroundPosition = `center`;
                figure.style.backgroundSize = `90%`;
                figure.style.width = `100%`;
                figure.style.height = `100%`;

                if (i == 7){
                    cageLi.style.flexDirection = 'column';
                    cageLi.style.justifyContent = 'space-between';
                    textP.style.alignSelf = 'start';
                }

            }
    
    
        }
        
    }


   arrow = document.createElement('div'); 
    console.log(arrow)
    containerDiv.appendChild(arrow);
    arrow.className = 'arrow';
    arrow.id = 'arrow2'
    console.log(arrow)
    document.getElementById('arrow2').addEventListener('click', function(){
        mainDiv.removeChild(containerDiv);
        chessPlay()
    })

})
}
// chessPlay();
