ZingMp3();
var content = document.getElementById("content");

function ZingMp3() {
    var API= "https://2-dot-backup-server-002.appspot.com/_api/v2/songs/get-free-songs";
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(xmlHttp.responseText);
            for (var i = 0; i < obj.length; i++) {
                var  songs_item= '<li>';
                songs_item += '<label class="id"> ' + (i+1) + '</label>';
                 songs_item += '<span>';
                 songs_item += '<img height="70px" src="'+ obj[i].thumbnail +'" alt="">';
                 songs_item += '</span>';
                 songs_item += '<label class="name">'+ obj[i].name + '</label>';
                 songs_item += '</li>';
                content.innerHTML +=  songs_item;
            }

        }

    };
    xmlHttp.open("GET", API, true);
    xmlHttp.send();
