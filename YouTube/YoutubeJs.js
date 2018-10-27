var http = new XMLHttpRequest();
http.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var jsObject = JSON.parse(http.responseText);
        var content = '';
        console.log(http.responseText);
        for (var i = 0; i < jsObject.items.length; i++) {

            var itemContent = '<div class="tube-item">';
            itemContent += '<img id="myImg" width="300" height="auto" src="' + jsObject.items[i].snippet.thumbnails.high.url + '"/>';
            itemContent += ' <div id="myModal" class="modal">';
            itemContent += '<span class="close">&times;</span>';
            itemContent += '<iframe class="modal-content" width="660" height="355" src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen>';
            itemContent += '</iframe>';
            itemContent += ' <div id="caption"></div>';
            itemContent += '</div>';
            itemContent += '<h3 style="font-size: 16px">' + jsObject.items[i].snippet.title + '</h3>';
            itemContent += '</div>';
            // var itemContent = '<div class="tube-item">';
            // itemContent += '<iframe width="660" height="355" src="https://www.youtube.com/embed/' + jsObject.items[i].id.videoId + '" frameborder="0"  allow="autoplay; encrypted-media" allowfullscreen>';
            // itemContent += '</iframe>';
            // itemContent += '<h3>' + jsObject.items[i].snippet.title + '</h3>';
            // itemContent += '</div>';

            content += itemContent;
        }
        document.getElementById("myTubes").innerHTML = content;
        var modal = document.getElementById('myModal');

        var img = document.getElementById('myImg');
        var captionText = document.getElementById("caption");
        img.onclick = function () {
            modal.style.display = "block";
            captionText.innerHTML = this.alt;
        }

        var span = document.getElementsByClassName("close")[0];

        span.onclick = function () {
            closeVideo();

        }

        function closeVideo() {
            modal.style.display = "none";

        }
    }
};

var submit = document.getElementById("btn-submit");
submit.onclick = function () {
    var key = document.getElementById("tim");
    var keyWord = key.value;
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" + keyWord + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";

    http.open("GET", YOUTUBE_API, true);
    http.send();
}