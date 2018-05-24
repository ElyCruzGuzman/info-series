<template>
  <div class="container-fluid pr-0" id="featuredImage" >
   	<img class="img-background img-fluid" :src='imagenBackdrop' alt="">
   	<div class="row serie-header">
   		<div class="col-2 pr-0">
   			<div class="card-group pt-2 pl-4 pb-2">
	      	<div class="card">
	       		<img :src='imagenPoster' alt="">
	        	<div>
	        		<button @click="agregarSerie" type="button" class="btn btn-secondary col-sm-12">Seguir</button>
	        		<button @click="borrarSerie" type="button" class="btn btn-secondary col-sm-12">Dejar de seguir</button>
	        	</div>
	      	</div>  
   			</div>
   		</div>
   		
   		<div class="titulo col-7 pl-0">
     			<h1 class="serie-tit"><span class="title">{{serie.name}}</span></h1>
     	</div>
				
			<div class="rating col-3">
   			<h1 class='value-rat'><span class="val-rating">{{serie.rating}}</span></h1>
   		</div>
    </div>

    <div class="container-fluid">
      <div class="row info">
        <nav class="col-12 pl-0 pr-0 justify-content-center">
          <div class="nav nav-tabs text-align-center" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active col-6 text-center" id="nav-info-tab" data-toggle="tab" href="#nav-info" role="tab" aria-controls="nav-info" aria-selected="true">Información</a>
            <a class="nav-item nav-link col-6 text-center" id="nav-chapter-tab" data-toggle="tab" href="#nav-chapter" role="tab" aria-controls="nav-chapter" aria-selected="false">Capítulos</a>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-info" role="tabpanel" aria-labelledby="nav-info-tab">
            <h3>Descripción</h3>
            <p>{{serie.plot}}</p></div>
          <div class="tab-pane fade" id="nav-chapter" role="tabpanel" aria-labelledby="nav-chapter-tab">
            <!-- <a :href="{{season.seasonNum}}" v-for="season in serie.seasons">T {{season.seasonNum}}</a> -->
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist" v-for="season in serie.seasons">
                <h5 class="season"><strong>Temporada {{season.seasonNum}}</strong></h5> 
                <p class="col-2" v-for="episode in season.episodes">{{episode.episodeNum}}.  {{episode.name}}</p>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div> 
  </div> 
</template>

<script>
  import { token, cors } from '../token.js'
  import { auth } from "../firebase.js";
  import { db } from "../firebase.js";

  const usersRef = db.ref('users');

  export default {

  data() {
    return {
      serie: {},
      imagenPoster: '',
      imagenBackdrop: ''
    };
  },

  created: function() {
  	var urlFicha = cors + 'https://api.tviso.com/v2/media/full_info?auth_token=' + token + '&mediaType=1&idm=' + this.id;
    $.getJSON(
      urlFicha,
     
      function(response) {
       
        this.serie = response;
        this.imagenPoster = "https://img.tviso.com/ES/poster/w200" + this.serie.images.poster;
        this.imagenBackdrop = this.serie.artwork.backdrops.large;
         console.log(this.serie)
      }.bind(this)
    );

  },
  props: ['id'],
  methods: {  
    agregarSerie: function(serie){
      if(auth.currentUser){
        db.ref('users/' + auth.currentUser.uid + '/series').child(this.id).set(true)
        alert('Ahora sigues esta serie')
    } else {
      alert('Necesitas iniciar la sesión para administrar series')
    }
      
    },
    borrarSerie: function(serie){
      if(auth.currentUser){
        db.ref('users/' + auth.currentUser.uid + '/series').child(this.id).remove()
        alert('Has dejado de seguir esta serie')
      } else {
      alert('Necesitas iniciar la sesión para administrar series')
    }
      
      // .catch(error => {
      //   alert('Necesitas iniciar la sesión para administrar series')
      // })
    }
  }
}
</script>

<style>
  .serie-tit {
    padding-top: 15px;
    text-shadow: 2px 2px black;
  }
	.value-rat {
		text-align: right;
    padding-top: 15px;
    text-shadow: 2px 2px black;
	}
	.img-background {
		z-index: 0;
		width: 100%;
	}
	.title {
		color: white;
		background: #ff55002e;
		padding: 5px 10px;
	}
	.titulo {
    padding-left: 5px;
    padding-right: 5px;
	}
	.val-rating {
    background: #ff55002e;
    color: white;
	}
	.serie-header {
		width: 98%;
    position: absolute;
		z-index: 2;
    top: 80px;
    left: 38px;
	}
  img {
    height: 100%;
  }
  .info {
    color: white;
    background-color: #000000b8;
  }
  #nav-info-tab {
    font-size: 25px;
  }
  #nav-chapter-tab {
    font-size: 25px;
  }
  .nav-tabs .nav-link.active {
    color: #ca3201;
  }
  a {
    color: yellow;
  }
  a:hover {
    color: orange;
  }
  .season {
    width: 100%;
    font-size: 22px;
    text-align: center;
    color: #ef6c20;
    background-color: white;;
  }
  h3 {
    text-decoration: underline;
    padding-left: 15px;
    padding-top: 15px;
  }
  p {
    margin-top: 15px;
    margin-bottom: 15px;
    padding-left: 30px;
    padding-right: 30px;
  }
</style>