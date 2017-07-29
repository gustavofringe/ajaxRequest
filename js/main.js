$('.table').append("<thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Country</th></tr></thead>");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        $('#select').change(function () {
            people = sortByKey(myObj.clients, $('#select').val());
            console.table(people)
        });
        for (var i in myObj.clients) {
            $('.table').append("<tbody><tr><th>" + myObj.clients[i].Firstname +
                "</th><td>" + myObj.clients[i].Lastname + "</td><td>" + myObj.clients[i].Age +
                "</td><td>" + myObj.clients[i].Country + "</td></tr>"
            );
        }
    }
};
xhttp.open("GET", "clients.json", true);
xhttp.send();
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if(x<y){return-1}
        if(x>y){return 1}
    });
}