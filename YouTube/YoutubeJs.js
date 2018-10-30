var myModal = document.getElementById('myModal');
var youtubeFrame = document.getElementById('youtubeFrame');
var span = document.getElementsByClassName("close")[0];

searchYoutube();

document.getElementById('btnSearch').onclick = function(){
    searchYoutube();
}

document.getElementById('keyword').onkeypress = function (event){
    if (event.keyword != undefined && event.keyword == 13) {
        searchYoutube();
    }
}

function doSomething (videoId){
    youtubeFrame.src = '' + videoId;
    myModal.style.display = 'block';
}

span.onclick = function(){
    myModal.style.display = 'none';
    youtubeFrame.src = '';
}
function searchYoutube(){
    var keyword = document.getElementById('keyword').value;
    var YOUTUBE_API = "https://content.googleapis.com/youtube/v3/search?q=" 
        + keyWord 
        + "&type=video&maxResults=9&part=snippet&key=AIzaSyAwUjk3CwtXCiB_W6Xi0colfOKPgm90hHc";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
    }
}