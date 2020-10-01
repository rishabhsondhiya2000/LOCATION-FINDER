
        var x=document.getElementById("ans");
        function fun(){
            if(navigator.geolocation){
                navigator.geolocation.watchPosition(show);
            }
            else{
                x.innerHTML="Your Browser doesn't support loacation."
            }
        }
        function show(position){
            x.innerHTML = "Latitude: " + position.coords.latitude + 
                   "<br>Longitude: " + position.coords.longitude;

                   var pos = position.coords.latitude + "," + position.coords.longitude;

                  var img_url = "https://www.google.com/maps/@"+pos+",15z";

                  document.getElementById("map").innerHTML
                  ="<h2><strong> To show Your location in Map, Click on below link</strong></h2><a href='"+img_url+"'><h2 style='color:yellow;'>click here</h2></a><h3 style='color:red'> MAKE SURE YOU HAVE INTERNET CONNECTION </h3>";      
        }
        function search(){
            var s=document.getElementById("search").innerHTML;
            var search_url="https://www.google.com/maps/"+s;
            return search_url;
        }