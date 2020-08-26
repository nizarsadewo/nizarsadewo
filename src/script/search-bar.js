import $ from 'jquery';

//Search bar
const searchBar = `<div class="input-group mt-5 mx-auto" style="width: 65%;" >
                     <input type="text" class="form-control searchBar" placeholder="Looking for most epic game..." aria-label="Search Game" aria-describedby="button-addon2">
                     <div class="input-group-append">
                        <button class="btn btn-outline-secondary searchButton" type="button" id="button-addon2">Search</button>
                     </div>
                  </div>`;
$('.search').html(searchBar);

//get data from search bar
$('.searchButton').click(function () {
    let searchValue = $('.searchBar').val();
    $.ajax({
        url: `https://api.rawg.io/api/games?search=${searchValue}`,
        type: 'GET',
        dataType: 'json',
        success: results => {
        if (results.results == 0){
          throw new Error(alert(`${searchValue} is not found`));
        };
        const games = results.results;
        let content = '';
        games.forEach(game => {
          content += `<div class="col-md-4 my-4">
                      <div class="card">
                        <img src="${game.background_image}" style="min-height: 250px; max-height: 250px; object-fit: cover; object-position: center;" class="card-img-top">
                        <div class="card-body">
                          <h5 class="card-title">${game.name}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Release Date : ${game.released}</h6>
                          <a href="#" class="btn btn-primary game-detail-button" data-toggle="modal" data-id="${game.id}" data-target="#gameDetails">Details</a>
                          <div class="modal fade" id="gameDetails" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-lg">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5 class="modal-title" id="exampleModalLabel">Game Details</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div class="modal-body">
                                 
                                </div>
                                <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>`;
        });
        $('#content').html(content);

        //when detail button clicked
        $('.game-detail-button').click(function () {
          $.ajax({
            url: 'https://api.rawg.io/api/games/' + $(this).data('id'),
            success: game => {
              const gameDetails = ` <div class='container-fluid'>
                                  <div class='row mb-5'>
                                    <div class='col-md-5'><img src="${game.background_image}" class="img-fluid"></div>
                                    <div class='col-md'>
                                      <h2>${game.name}</h2>
                                      <h5 class='text-muted'>${game.genres[0].name ? game.genres[0].name : "-"}</h5>
                                      <ul class="list-group list-group-horizontal-md">
                                        <li class="list-group-item"><img src="../src/img/star.png" style="width: 25px; height: 25px;"> ${game.rating} / ${game.rating_top}</li>
                                        <li class="list-group-item"><img src="../src/img/review.png" style="width: 25px; height: 25px;"> ${game.reviews_count} reviews</li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class='row'>
                                    <div class='col-md'>
                                      <ul class="list-group">
                                        <li class="list-group-item"><strong>Release Date : </strong>${game.released}</li>
                                        <li class="list-group-item"><strong>Developer : </strong>${game.developers[0].name}</li>
                                        <li class="list-group-item"><strong>Publisher : </strong>${game.publishers[0].name}</li>
                                        <li class="list-group-item"><strong>Website : </strong>${game.website ? game.website : "-"}</li>
                                        <li class="list-group-item"><strong>Description:</strong> <br> ${game.description}</li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>`
              $('.modal-body').html(gameDetails);
            },
            error: error => {
              alert("Something went wrong " + error);
            }
          });
        });
      },
      error: error => {
        alert("Something went wrong " + error);
      }
    });
});

