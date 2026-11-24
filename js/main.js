
function getApi () {
    var xhttp = new XMLHttpRequest;

    xhttp.onreadystatechange = function() {
        if(xhttp.readyState == 4 && xhttp.status == 200) {

            var result = xhttp.responseText; // string 
            var data = JSON.parse(result); // string to json
            var basket = "";
            for(var i = 0; i < data.length; i++) {
                var cartona = `<div class="md:col-4 text-center">
                                    <img src="${data[i].url}" class="w-100">
                                    <h4>${data[i].title}</h4>
                                    <h6>${data[i].id}</h6>
                                </div> `;
                basket += cartona
            }
            document.querySelector(".test").innerHTML = basket;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();
}

getApi();