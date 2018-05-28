<template>
  <div class="container-fluid series">
    <div v-if="anySeries" class="row">
      <div class="card-group pt-2 pb-2 col-md-2" v-for="item in seriesList">
        <div class="card">
          <router-link :to= "{name: 'fichaLink', params: {id: item.idm}}"><img :src='item.artwork.posters.small' alt=""></router-link>
          <div class="card-body">
            <h5 class="card-title text-center">{{item.name}}</h5>
          </div>
        </div>  
      </div>
    </div>
    <div v-else class="row">
      <div class="emptySeries col-12">
        <h1 class="tituloEmpty text-center pt-5"><strong>No sigues ninguna serie</strong></h1>
      </div>
    </div>
  </div>
</template>

<script>
  import { token, cors } from '../token.js'
  import { auth } from "../firebase.js";
  import { db } from "../firebase.js";

  export default {
    
    data() {
      return {
        seriesList: [],
      };
    },

    computed: {
      anySeries: function() {
        return (this.seriesList.length > 0)
      }
    },

    created: function() {

      db.ref('users/' + auth.currentUser.uid + '/series').on("value", (snapshot) => {
        let misSeries = snapshot.val();
        for (var serie in misSeries){
          var urlFicha = cors +'https://api.tviso.com/v2/media/full_info?auth_token=' + token + '&mediaType=1&idm=' + serie;
         
          $.getJSON(
            urlFicha,
            (response) => {
                  this.seriesList.push(response)            
            }
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
  .emptySeries {
    height: 577px;
  }
  .tituloEmpty {
    color: white;
    text-shadow: 2px 2px black;
  }
  .series {
    min-height: 557px;
  }
</style>