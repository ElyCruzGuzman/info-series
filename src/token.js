export var token = '3b7ef48ac9d9e4166b7619ca2c9eb073'
export var cors = 'https://cors-anywhere.herokuapp.com/'



var getToken;
$.ajax({
  type: "POST",
  url: cors + 'http://api.tviso.com/auth_token?id_api=3594&secret=hA4WKZ2hVshKF6YbkTkg',
  datatype: "json",
  async: false,
  success: function(data){
    getToken = data.auth_token;
    console.log("Token key "+ getToken);                
  }
});
