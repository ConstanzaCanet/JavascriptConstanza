
        let pelis = localStorage.getItem("movie")
        const peliculas = JSON.parse(pelis)

        console.log(pelis)
        filtra=[];
        let preference = 'drama'

        function catafilter() {
            let preferFilter = peliculas.filter(Movie => Movie.gender.includes(preference))
            filtra=preferFilter;
        }

        function filterImpre(){
            let ar =document.getElementsByClassName('filtrado')
            filtra.forEach(e => {
              ar.innerHTML +=
              `<div class="card mb-3 container">
                  <img src="${e.image}" class="card-img-top img-fluid" alt="...">
                 <div class="card-body">
                    <h5 class="card-title">${e.namesMov}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button class="btn btn-primary me-md-2" type="button" onclick="myFunction(${e})">Lo quiero!</button>
                    </div>
                  </div>
               </div>`
            })
        }


        catafilter()
        filterImpre()
