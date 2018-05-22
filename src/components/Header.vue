<template>
	<nav class="navbar navbar-expand-sm navbar-custom">
    <a href="/" class="navbar-brand">Mis Series</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCustom">
        <i class="fa fa-bars fa-lg py-1 text-white"></i>
    </button>
    <div class="navbar-collapse collapse" id="navbarCustom">
        <ul class="col-9 navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Ultimas Noticias</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
        </ul>
        <router-link :to="{name: 'loginLink'}" class="ml-2 navbar-text"><span>Login</span></router-link>
        <router-link :to="{name: 'registerLink'}" class="ml-2 navbar-text"><span>Registrate</span></router-link>
        <button type="button"class="btn btn-outline-dark ml-2">Log Out</button>
    </div>
</nav>
</template>

<!-- <script>
    import Firebase from 'firebase'
    export default {
        name: 'navbar',
        data(){
            return {
                isLoggedIn: false,
                currentUser: false
            }
        },
        methods: {
            logout: function(){
                firebase.auth()signOut().then(()=> {
                    this.$router.push('/login')
                })
            }
        }
    }
</script> -->

<style>
	.navbar-custom {
    background-color: #ff5500;
    }

    /* change the brand and text color */
    .navbar-custom .navbar-brand,
    .navbar-custom .navbar-text {
        color: rgba(255,255,255,.8);
    }

    /* change the link color */
    .navbar-custom .navbar-nav .nav-link {
        color: rgba(255,255,255,.5);
    }

    /* change the color of active or hovered links */
    .navbar-custom .nav-item.active .nav-link,
    .navbar-custom .nav-item:hover .nav-link {
        color: #ffffff;
    }

    /* for dropdown only - change the color of droodown */
    .navbar-custom .dropdown-menu {
        background-color: #ff5500;
    }
    .navbar-custom .dropdown-item {
        color: #ffffff;
    }
    .navbar-custom .dropdown-item:hover,
    .navbar-custom .dropdown-item:focus {
        color: #333333;
        background-color: rgba(255,255,255,.5);
      }
</style>