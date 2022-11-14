var app = new Vue(
    {
        el: "#app",
        data:   {
            actualElement: 0,
            sliderInterval: false,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'spider-man',
                    text: 'vai ragnatela!',
                },
                {
                    image: 'img/02.webp',
                    title: 'racket clack',
                    text: 'MAI GIOCATO MEGLIO JACK AND DEXTER.',
                },
                {
                    image: 'img/03.webp',
                    title: 'charaters',
                    text: 'potrebbe essere una versione alternativa di super smash bros ultimate',
                },
                {
                    image: 'img/04.webp',
                    title: 'gatto',
                    text: 'ho la ps5 ma preferisco i cani',
                },
                {
                    image: 'img/05.webp',
                    title: 'avengers',
                    text: 'NAAAAAAAA NAA NAAA NAAA NAAAAAAAA NAAAAAAA NAAAAA(scena epica in cui la videocamera gira attorno agli eroi)',
                }
            ],
        },
        methods: {
            nextElement(){
                if(this.actualElement === 4){
                    this.actualElement = 0;
                } else{
                    this.actualElement += 1;
                }
            },
            previousElement(){
                if(this.actualElement === 0){
                    this.actualElement = 4;
                } else{
                    this.actualElement -= 1;
                }
            },
            setActualElement(index){
                this.actualElement = index;
            },
            carouselStop(){
                clearInterval(sliderInterval);
            },
            carouselStart(){
                sliderInterval = setInterval(this.nextElement, 1000);
            }
        },
        mounted() {
            sliderInterval = setInterval(this.nextElement, 1000);
        }
    }
)