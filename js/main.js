$.getJSON('clients.json', function (data) {
    var $display = new display();

    $('#select').change(function () {
        $('#display').html('Chargement...');
        people = sortByKey(data.clients, $('#select').val());
        console.table(people);
        $display.form(data);
    });
    $display.form(data);
});
/**
 * recover json
 *
 */
function display(){
    this.form = function(x){
        $('#display').empty();
        for (var i in x.clients) {
            $('#display').append("<tr><th class='first'>" + x.clients[i].Firstname +
                "</th><td class='last'>" + x.clients[i].Lastname + "</td><td class='age'>" + x.clients[i].Age +
                "</td><td class='country'>" + x.clients[i].Country + "</td></tr>"
            );
        }
    }
}

/**
 * sort function
 * @param {*} array
 * @param {*} key
 */
function sortByKey(array, key) {
    return array.sort(function (a, b) {
        var x = a[key];
        var y = b[key];
        if (x < y) {
            return -1
        }
        if (x > y) {
            return 1
        }
    });
}

/**
 *
 * ajax request
 */
/*
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function ()
{
    if (this.readyState == 4 && this.status == 200)
    {
        var myObj = JSON.parse(this.responseText);
        $('#select').change(function ()
        {
            $('#display').html('Chargement...');
            people = sortByKey(myObj.clients, $('#select').val());
            console.table(people)
            $('#display').empty()
            for (var i in myObj.clients)
            {
                $('#display').append("<tr><th class='first'>" + myObj.clients[i].Firstname +
                    "</th><td class='last'>" + myObj.clients[i].Lastname + "</td><td class='age'>" + myObj.clients[i].Age +
                    "</td><td class='country'>" + myObj.clients[i].Country + "</td></tr>"
                );
            }
        });
        for (var i in myObj.clients)
        {
            $('#display').append("<tr><th class='first'>" + myObj.clients[i].Firstname +
                "</th><td class='last'>" + myObj.clients[i].Lastname + "</td><td class='age'>" + myObj.clients[i].Age +
                "</td><td class='country'>" + myObj.clients[i].Country + "</td></tr>"
            );
        }
    }
};
xhttp.open("GET", "clients.json", true);
xhttp.send();
*/

$("#submit").click(function(){
    var first = $("#first").val().toUpperCase();
    var last = $("#last").val().toUpperCase();
    var age = $("#age").val();
    var country = $("#country").val().toUpperCase();
    $.ajax({
        url : 'insert.php',
        type : 'POST',
        data:"first="+first+"&last="+last+"&age="+age+"&country="+country,
       });
});