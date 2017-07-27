function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        var myObj = JSON.parse(this.responseText)
        if (this.readyState == 4 && this.status == 200) {
            for (var i in myObj) {
                document.getElementById("demo").innerHTML = myObj.clients[1].name;
            }
        }
    };
    xhttp.open("GET", "clients.json", true);
    xhttp.send();
}