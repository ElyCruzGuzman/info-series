<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card-group pt-2 pb-2 col-md-2" v-for="item in seriesList">
        <div class="card">
          <router-link :to= "{name: 'fichaLink', params: {id: item.idm}}"><img :src='item.artwork.posters.small' alt=""></router-link>
          <div class="card-body">
            <h5 class="card-title text-center">{{item.name}}</h5>
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
      seriesList: [],
    };
  },

  created: function() {
    // traerse las series de la bd
      db.ref('users/' + auth.currentUser.uid + '/series').on("value", (snapshot) => {
        //console.log(snapshot.val());
        let misSeries = snapshot.val();
         for (var serie in misSeries){
         var urlFicha = 'https://cors-anywhere.herokuapp.com/http://api.tviso.com/v2/media/full_info?auth_token=' + token + '&mediaType=1&idm=' + serie;
         
          $.getJSON(
            urlFicha,
            (response) => {
                  this.seriesList.push(response)            
              }
            //   // this.imagenPoster = "https://img.tviso.com/ES/poster/w200"  //this.serie.images.poster;
            //    // return this.serie
          );
        }
      },
       function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    
  },
  props: ['id']
};

</script>

<style>
  img {
    width: 100%;
  }
</style>