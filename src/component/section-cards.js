class ContentCards extends HTMLElement{
    constructor(){
        super();
        this.render();
    }

    render(){
        this.innerHTML = `
                    <div class="container ">
                        <div class="row my-5 mx-5" >
                            <div class="col-sm-6 mt-4">
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">What are the most popular games in 2019?</h5>
                                    <p class="card-text">The most popular game in 2019 for your gaming reference.</p>
                                    <a href="#" class="btn btn-secondary button1">Gimme that</a>
                                </div>
                                </div>
                            </div>
                            <div class="col-sm-6 mt-4" >
                                <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">What are the highest rated games from 2001?</h5>
                                    <p class="card-text">Looking for the highest rated game so far? you will find here!</p>
                                    <a href="#" class="btn btn-secondary button2">Gimme that</a>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>    `
    }
}

customElements.define('content-cards', ContentCards);