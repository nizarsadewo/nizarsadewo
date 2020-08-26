class JumbotronSection extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
     this.innerHTML = `
        <div class="container">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="../src/img/thewitcher.jpg" class="d-block w-100">
                    <div class="carousel-caption d-none d-block">
                    <h2>Welcome visitors!</h2>
                    <p>Search your game, and get your game information then</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../src/img/gta.jpg" class="d-block w-100">
                    <div class="carousel-caption d-none d-block">
                    <h2>Looking for new game?</h2>
                    <p>We have serve to you some new game from 2019, let's take a look below</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../src/img/pubg.jpg" class="d-block w-100">
                    <div class="carousel-caption d-none d-block">
                    <h2>Explore more</h2>
                    <p>Enjoy yourself and find some game you looking for</p>
                    </div>
                </div>
                </div>
                <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
     `
    }
}

customElements.define("header-section", JumbotronSection);