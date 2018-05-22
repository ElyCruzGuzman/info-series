<template>
  <div class="container-fluid" id="featuredImage" >
   	<img class="img-background img-fluid" :src='imagenBackdrop' alt="">
   	<div class="row serie-header">
   		<div class="col-3">
   			<div class="card-group pt-2 pl-4 pb-2">
	      	<div class="card">
	       		<img :src='imagenPoster' alt="">
	        	<div class="card-body">
	          	<h5 class="card-title text-center">{{serie.name}}</h5>
	        	</div>
	        	<div>
	        		<button @click="agregarSerie" type="button" class="btn btn-outline-secondary col-12">Seguir</button>
	        		<button type="button" class="btn btn-outline-secondary col-12">Dejar de seguir</button>
	        	</div>
	      	</div>  
   			</div>
   		</div>
   		
   		<div class="titulo col-6">
     			<h1> <span class="title">{{serie.name}}</span></h1>
     		</div>
				
				<div class="rating col-3">
     			<h1 class="val-rating">{{serie.rating}}</h1>
     		</div>
   	</div>
  </div> 
</template>

<script>
  import {token} from '../token.js'
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
  	var urlFicha = 'https://cors-anywhere.herokuapp.com/http://api.tviso.com/v2/media/full_info?auth_token=' + token + '&mediaType=1&idm=' + this.id;
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
      db.ref('users/' + auth.currentUser.uid + '/series').child(this.id).set(true)
      console.log(this.id)
    }
  }
};

</script>

<style>
	.card-group {
		
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
</style>