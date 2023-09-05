
function getRandomNumber(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min

    )
}

function markupGallery() {
    let divContainerImage = document.createElement('div');
    let arrowLeftButton = document.createElement('button')
    let arrowRightButton = document.createElement('button')
    // let divDecoration = document.createElement('div')
    let divFooterImage = document.createElement('div');




    arrowRightButton.className = 'img-arrow-right';
    arrowLeftButton.className = 'img-arrow-left';    
    divContainerImage.style.position = 'relative';   
    divContainerImage.style.display = 'flex';   


    let RANDOM_MIN = 1;
    let RANDOM_MAX = 300;

    divContainerImage.style.alignSelf = 'center';
    divContainerImage.style.marginTop = '10vmin'

    divContainerImage.style.boxShadow = '2px 2px 10px #999';
    divContainerImage.style.padding = '3vmin';
    divContainerImage.style.background = '#ebe8f1';

    divFooterImage.style.display = 'grid';
    divFooterImage.style.gridTemplateColumns = 'repeat(3, 1fr)'
    divFooterImage.style.gap = '5vmin'
    divFooterImage.style.position = 'relative';
    divFooterImage.style.alignSelf = 'center';
    divFooterImage.style.marginTop = '5vmin';
    divFooterImage.style.padding = '1vmin';
    divFooterImage.style.background = '#ebe8f1';
    divFooterImage.style.boxShadow = '2px 2px 10px #999';
    // divDecoration.style.position = 'absolute';
    // divDecoration.style.background = 'rgba(255,115,255,0.1)'
    // divDecoration.style.backdropFilter = 'blur(5px)';
    // divDecoration.style.cursor = 'pointer';
    // divDecoration.style.transition = 'all 0.2s ease-in-out';
    document.getElementById('main').appendChild(divContainerImage);
    document.getElementById('main').appendChild(divFooterImage);

    let massiv = {

        'Image1':
        {
            HTML: '',
            id: getRandomNumber(RANDOM_MIN, RANDOM_MAX),
            URL: 'https://picsum.photos/',
            size: 800
        },


        'Image2':
        {
            HTML: '',
            id: getRandomNumber(RANDOM_MIN, RANDOM_MAX),
            URL: 'https://picsum.photos/',
            size: 800
        },

        'Image3':
        {
            HTML: '',
            id: getRandomNumber(RANDOM_MIN, RANDOM_MAX),
            URL: 'https://picsum.photos/',
            size: 800
        },

        'Image4':
        {
            HTML: '',
            id: getRandomNumber(RANDOM_MIN, RANDOM_MAX),
            URL: 'https://picsum.photos/',
            size: 800
        },
    }

    for (let i = 0; i < 4; i++) {
        let infoImage = massiv['Image' + `${i + 1}`];
        infoImage.HTML = document.createElement('img');
        let actualImage = infoImage.HTML;
        let id = infoImage.id;
        let body = document.getElementsByTagName('body')[0];

        actualImage.dataset.id = id;
        actualImage.setAttribute('alt', 'изображение');
        actualImage.style.display = 'block';
        actualImage.style.borderRadius = '10px 10px 0px 0px'
        actualImage.style.transition = 'all 0.2s ease-in-out';
        actualImage.style.boxShadow = '2px 2px 10px #999';
        actualImage.style.cursor = 'pointer';
        actualImage.style.borderRadius = '10px';
        actualImage.style.opacity = '0.1'
        actualImage.style.transition = 'opacity .5s'
        actualImage.addEventListener("error", () => {
            infoImage.id = getRandomNumber(RANDOM_MIN, RANDOM_MAX);
            id = infoImage.id;
            actualImage.dataset.id = id;
            console.log('error');
            actualImage.setAttribute('src', `${infoImage.URL}` + `id/` + `${id}` + `/` + `${Math.floor(body.offsetWidth * 1.8)}` + `/` + `${Math.floor(body.offsetWidth)}`);
            // actualImage.style.zIndex = '0'
        })



        if (i + 1 == 1) {

            actualImage.style.width = '80vmin';
            actualImage.style.height = '45vmin';
            actualImage.style.cursor = 'zoom-in';
            divContainerImage.appendChild(actualImage);
            actualImage.setAttribute('src', `${infoImage.URL}` + `id/` + `${id}` + `/` + `${Math.floor(body.offsetWidth * 1.8)}` + `/` + `${Math.floor(body.offsetWidth)}`);
            actualImage.style.transition = 'transform .5s'
     
     
            actualImage.addEventListener("load", () => {
                console.log('картинка загрузилась2')
                actualImage.style.opacity = '1'
            })


            let massivEvent = [['scale(1.255,1.255)', '0 0 0 max(100vh, 100vw) rgba(0, 0, 0, .3)', '3'], ['none', '2px 2px 10px #999', '0']]
            let countP = 0;
            actualImage.addEventListener("click", () => {
                console.log(massivEvent[countP][0])
                actualImage.style.transform = massivEvent[countP][0]
                divContainerImage.style.boxShadow = massivEvent[countP][1]
                divContainerImage.style.zIndex = massivEvent[countP][2]
                arrowLeftButton.style.transition = 'opacity .5s';
                arrowRightButton.style.transition = 'opacity .5s';
                if (countP == 0) {
                    actualImage.style.cursor = 'zoom-out';
                    arrowLeftButton.style.opacity = '0.2'
                    arrowRightButton.style.opacity = '0.2'
                    // arrowLeftButton.addEventListener("mousover", () => {
                    //     arrowLeftButton.style.backgroundColor = 

                    // })
                }
                else {
                    actualImage.style.cursor = 'zoom-in';
                    
                    arrowLeftButton.style.opacity = '1'
                    arrowRightButton.style.opacity = '1'
                }
                countP = (1 == countP) ? 0 : ++countP;


            })
            actualImage.addEventListener("hover", () => {
                actualImage.style.cursor = 'zoom-in';
            })



        } else {

            divFooterImage.appendChild(actualImage);
            actualImage.setAttribute('src', `${infoImage.URL}` + `id/` + `${id}` + `/` + `${Math.floor(body.offsetWidth * 1.8)}` + `/` + `${Math.floor(body.offsetWidth)}`);
 
            actualImage.style.width = '22vmin'

            actualImage.style.height = '14vmin';
            actualImage.style.filter = 'blur(0px)';
            actualImage.addEventListener("load", () => {
                console.log('картинка загрузилась')
                actualImage.style.opacity = '1'
            })

        }

    }


    // divFooterImage.appendChild(divDecoration);
    // divDecoration.className = 'decoration';
    // divDecoration.style.width = '28.3vmin';
    // divDecoration.style.height = '19vmin';
    // divDecoration.style.borderRadius = '0px 0px 10px 10px';
    // let divDecoration2 = divDecoration.cloneNode(true);
    // let divDecoration3 = divDecoration.cloneNode(true);
    // divDecoration.after(divDecoration2);
    // divDecoration.after(divDecoration3);

    let object = document.getElementsByTagName('img');
    let a = 0;

    for (let b = 1; b < object.length; b++) {
        const element = object[b];
        // let massiv = document.getElementsByClassName('decoration');
        // let decoratinHTML = massiv[a];
        // element.offsetWidth = Math.ceil(element.offsetWidth);
        // element.offsetHeight = Math.ceil(element.offsetHeight);
        // decoratinHTML.style.position = 'absolute';
        // decoratinHTML.style.width = `${element.offsetWidth}px`;
        // decoratinHTML.style.height = `${element.offsetHeight}px`;
        // decoratinHTML.style.left = `${element.offsetLeft}px`;
        // decoratinHTML.style.top = `${element.offsetTop}px`;
        ++a;
        element.addEventListener("mouseover", () => {
            // decoratinHTML.style.top = `${decoratinHTML.offsetTop - 10}px`;
            element.style.transform = 'translateY(-10px)';
            // decoratinHTML.style.backdropFilter = 'blur(0px)'

            element.style.boxShadow = '0px 0px 0px rgba(7,7,7,0)';
            element.style.filter = 'drop-shadow(5px 5px 5px rgba(7,7,7,0.69))'


        })
        element.addEventListener("click", () => {
            let imageOne = element.getAttribute('src');
            let imageNew = object[0].getAttribute('src');

            object[0].setAttribute(`src`, `${imageOne}`);
            element.setAttribute(`src`, `${imageNew}`);

        })
        element.addEventListener("mouseout", () => {
            // decoratinHTML.style.top = `${decoratinHTML.offsetTop + 10}px`;
            element.style.transform = 'none';
            // decoratinHTML.style.backdropFilter = 'blur(5px)'
            // element.style.filter = 'blur(1px)'

            // decoratinHTML.style.borderRadius = '0px'
            element.style.boxShadow = '2px 2px 10px #999';
            element.style.filter = 'blur(0px)';

        })

    }
    divContainerImage.appendChild(arrowLeftButton);
    divContainerImage.appendChild(arrowRightButton);
    arrowLeftButton.style.width = '6vmin'
    arrowRightButton.style.width = '6vmin'
    arrowLeftButton.style.height = '6vmin'

    arrowLeftButton.style.fill= 'rgba(7,7,7,0.16)'
    arrowRightButton.style.height = '6vmin'

    arrowRightButton.style.backgroundSize = 'cover';
    arrowLeftButton.style.backgroundSize = 'cover';
    


    arrowLeftButton.addEventListener("click", () => {
        console.log('123');
        let imageOne = object[0].getAttribute('src');
        let imageTwo = object[1].getAttribute('src');
        let imageThree = object[2].getAttribute('src');
        let imageFour = object[3].getAttribute('src');

        object[3].setAttribute(`src`, `${imageThree}`);
        object[0].setAttribute(`src`, `${imageFour}`);
        object[1].setAttribute(`src`, `${imageOne}`);
        object[2].setAttribute(`src`, `${imageTwo}`);

    })
    arrowRightButton.addEventListener("click", () => {
        console.log('123');
        let imageOne = object[0].getAttribute('src');
        let imageTwo = object[1].getAttribute('src');
        let imageThree = object[2].getAttribute('src');
        let imageFour = object[3].getAttribute('src');

        object[3].setAttribute(`src`, `${imageOne}`);
        object[0].setAttribute(`src`, `${imageTwo}`);
        object[1].setAttribute(`src`, `${imageThree}`);
        object[2].setAttribute(`src`, `${imageFour}`);

    })

    console.log(document.getElementsByTagName('img')[1])
    // window.addEventListener("resize", () => {
    //     // divDecoration.style.width = `${iterator.offsetWidth}px`;
    //     // divDecoration.style.height = `${iterator.offsetHeight}px`;
    //     let a = 0;
    //     for (let b = 1; b < object.length; b++) {
    //         // const element = object[b];
    //         // let massiv = document.getElementsByClassName('decoration');
    //         // let decoratinHTML = massiv[a];
    //         // element.offsetWidth = Math.ceil(element.offsetWidth);
    //         // element.offsetHeight = Math.ceil(element.offsetHeight);
    //         // decoratinHTML.style.width = `${element.offsetWidth}px`;
    //         // decoratinHTML.style.height = `${element.offsetHeight}px`;
    //         // decoratinHTML.style.left = `${element.offsetLeft}px`;
    //         // decoratinHTML.style.top = `${element.offsetTop}px`;
    //         ++a;
    //     }
    // })
}
markupGallery()

