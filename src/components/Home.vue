<template>
  <div class="container-fluid">
    <div class="row">
      <div class="card-group pt-2 pb-2 col-md-2" v-for= "serie in this.list">
        <div class="card p-0">
          <router-link :to= "{name: 'fichaLink', params: {id: serie.idm}}"><img :src='"https://img.tviso.com/ES/poster/w200" + serie.images.poster 'alt=""></router-link>
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

  var urlMostViewed = 'https://cors-anywhere.herokuapp.com/http://api.tviso.com/v2/media/browse?auth_token=' + token + '&mediaType=1&order=most_viewed'

  export default {

  data() {
    return {
      list: []
    };
  },

  created: function() {
    $.getJSON(
      urlMostViewed,
      function(response) {
       
        this.list = response.results.medias;
         console.log(this.list)
      }.bind(this)
    );
  }
  
};
</script>

<style>
  .card-group {
    
  }
  .card {

    border: none;
  }
  img {
    width: 100%;
  }
</style>