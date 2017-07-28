function loadDoc() {
    $('.table').append("<thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Country</th></tr></thead>");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            myObj.clients.sort(function(a,b){
                if(a.lastname<b.lastname){return-1}
                if(a.lastname>b.lastname){return 1}
            })
            for (var i in myObj.clients) {
                $('.table').append("<tbody><tr><th>"+myObj.clients[i].firstname+
                    "</th><td>"+myObj.clients[i].lastname+"</td><td>"+myObj.clients[i].age+
                    "</td><td>"+myObj.clients[i].city+"</td></tr>"
                );
            }
        }
    };
    xhttp.open("GET", "clients.json", true);
    xhttp.send();
}
$('select').change(function(){
    console.log($('select').val())
})