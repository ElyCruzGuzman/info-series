<template>
    <nav class="navbar navbar-expand-sm navbar-custom">
        <a href="/" class="navbar-brand">Home</a>
        <router-link :to="{name: 'loginLink'}" class="ml-2 navbar-text"><span>Login</span></router-link>
        <router-link :to="{name: 'registerLink'}" class="ml-2 navbar-text"><span>Registrate</span></router-link>
        <button @click="logout" type="button"class="btn btn-outline-dark ml-2">Log Out</button>
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
        methods: {
            logout: function(){
                Firebase.auth().signOut().then(()=> {
                    this.$router.push('/login')
                })
            }
        }
    }
</script>

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