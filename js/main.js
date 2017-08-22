/**
 * recover json
 * 
 */
$.getJSON('clients.json', function (data) 
{
    $('#select').change(function(){
        $('#display').html('Chargement...');
            people = sortByKey(data.clients, $('#select').val());
            console.table(people)
            $('#display').empty()
            for (var i in data.clients)
            {
                $('#display').append("<tr><th class='first'>" + data.clients[i].Firstname +
                    "</th><td class='last'>" + data.clients[i].Lastname + "</td><td class='age'>" + data.clients[i].Age +
                    "</td><td class='country'>" + data.clients[i].Country + "</td></tr>"
                );
            }
    });
    for (var i in data.clients)
        {
            $('#display').append("<tr><th class='first'>" + data.clients[i].Firstname +
                "</th><td class='last'>" + data.clients[i].Lastname + "</td><td class='age'>" + data.clients[i].Age +
                "</td><td class='country'>" + data.clients[i].Country + "</td></tr>"
            );
        }
});

/**
 * sort function
 * @param {*} array 
 * @param {*} key 
 */
function sortByKey(array, key)
{
    return array.sort(function (a, b)
    {
        var x = a[key];
        var y = b[key];
        if (x < y)
        {
            return -1
        }
        if (x > y)
        {
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

