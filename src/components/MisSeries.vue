<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card-group pt-2 pb-2 col-md-2">
        <div class="card">
          <!-- <router-link :to= "{name: 'fichaLink', params: {id: serie.idm}}"><img :src='imagenPoster' alt=""></router-link> -->
          <div class="card-body">
            <h5 class="card-title text-center">{{serie.name}}</h5>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>

<script>
 import {token} from '../token.js'
 import { auth } from "../firebase.js";
 import { db } from "../firebase.js";


  export default {
  

  data() {
    return {
      serie: {},
      imagenPoster: '',
      imagenBackdrop: ''
    };
  },

  created: function() {
    // traerse las series de la bd
      db.ref('users/' + auth.currentUser.uid + '/series').on("value", function(snapshot) {
        //console.log(snapshot.val());
        let misSeries = snapshot.val();
         for (var serie in misSeries){
         var urlFicha = 'https://cors-anywhere.herokuapp.com/http://api.tviso.com/v2/media/full_info?auth_token=' + token + '&mediaType=1&idm=' + serie;
         console.log(urlFicha)
         
          $.getJSON(
            urlFicha,
            function(response){
              let responseList = []
                  responseList = response
                
                console.log(responseList)
              }
            // function(response) {
              
            
            //   // this.serie = response;
            //   // console.log("soy poster    "+this.response.images.poster)
            //   // this.imagenPoster = "https://img.tviso.com/ES/poster/w200"  //this.serie.images.poster;
            //   // console.log(this.serie)
            //    // return this.serie
            // }.bind(this)
          );
        }
        

      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    
  },
  props: ['id']
};

</script>