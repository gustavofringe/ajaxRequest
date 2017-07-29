//$('.table').append("<thead><tr><th>First Name</th><th>Last Name</th><th>Age</th><th>Country</th></tr></thead>");
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        $('#select').change(function () {
            people = sortByKey(myObj.clients, $('#select').val());
            console.table(people)
            $('#display').empty()
            for (var i in myObj.clients) {
                $('#display').append("<tr><th class='first'>" + myObj.clients[i].Firstname +
                    "</th><td class='last'>" + myObj.clients[i].Lastname + "</td><td class='age'>" + myObj.clients[i].Age +
                    "</td><td class='country'>" + myObj.clients[i].Country + "</td></tr>"
                );
            }
        });
        $('#add').click(function(){
            myObj.clients.push({
                Firstname: $('.fname').val(),
                Lastname: $('.lname').val(),
                Age: $('.age').val(),
                Country: $('.country').val()
            });
            $('.table').append(myObj.clients)
        })
        console.log(myObj.clients)
        for (var i in myObj.clients) {
            $('#display').append("<tr><th class='first'>" + myObj.clients[i].Firstname +
                "</th><td class='last'>" + myObj.clients[i].Lastname + "</td><td class='age'>" + myObj.clients[i].Age +
                "</td><td class='country'>" + myObj.clients[i].Country + "</td></tr>"
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