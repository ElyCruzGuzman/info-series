<template>
  <nav class="navbar navbar-expand-md navbar-dark ">
    <div class="navbar-collapse collapse" id="collapsingNavbar">
      <ul class="navbar-nav">
        <li class="nav-item active">
            <a href="/" class="navbar-brand"><i class="fas fa-tv"></i></a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{name: 'loginLink'}" class="ml-2 navbar-text nav-item"><span>Login</span></router-link>  
        </li>
        <li class="nav-item" v-if="!isLoggedIn">
          <router-link :to="{name: 'registerLink'}" class="ml-2 navbar-text nav-item"><span>Registrate</span></router-link>  
        </li>
        <li class="nav-item" v-if="isLoggedIn">
          <router-link :to="{name: 'misSeriesLink'}" class="ml-2 navbar-text nav-item"><span>Mis Series</span></router-link>  
        </li>
        <li v-if="isLoggedIn"><span class="ml-2 navbar-text nav-item email">{{currentUser}}</span></li>
        <li class="nav-item">
          <button v-if="isLoggedIn" @click="logout" type="button"class="btn btn-outline-dark ml-2 nav-item">Cerrar Sesión</button>  
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import Firebase from 'firebase'
  export default {
    data(){
      return {
        isLoggedIn: false,
        currentUser: false
      }
    },
    created(){
      if(Firebase.auth().currentUser) {
        this.isLoggedIn = true;
        this.currentUser = Firebase.auth().currentUser.email
      }
    },
    methods: {
      logout: function(){
        Firebase.auth().signOut().then(()=> {
            this.$router.go({path: this.$router.path})
        })
      }
    }
  }
</script>

<style>
	.navbar {
    background-color: #ff5500 !important;
  }
  .navbar-custom .navbar-brand,
  .navbar-custom .navbar-text {
    color: rgba(255,255,255,.8);
  }
  .navbar-custom .navbar-nav .nav-link {
    color: rgba(255,255,255,.5);
  }
  .navbar-custom .nav-item.active .nav-link,
  .navbar-custom .nav-item:hover .nav-link {
    color: #ffffff;
  }
  i {
    font-size: 30px;
  }
  .email {
    color: black !important;
  }
</style>