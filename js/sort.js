var TopicList;
var json1;
var newsObj = [];
var index1 = 0;


var sotingFunc = function () {
    for (var i = 0; i <= newsObj.length - 1; i++) {
        console.log("Hello")
        var innerli =  document.createElement("li");
        innerli.className = "blog_info"
        innerli.innerHTML = newsObj[i].like + " likes | " + newsObj[i].date +" | "+ newsObj[i].comments + " Comments";
        var innerUl = document.createElement("ul");
        innerUl.appendChild(innerli);        
        var innerA = document.createElement("a");
        innerA.setAttribute("href", "#");
        innerA.className = "blog_name"
        innerA.innerHTML = newsObj[i].title;
        var outerLi = document.createElement("li");
        outerLi.className = "blog"
        outerLi.appendChild(innerA);
        outerLi.appendChild(innerUl);
        var oUl = document.createElement("ul")
        oUl.appendChild(outerLi)
        var outerDiv = document.createElement("div")
        outerDiv.className = "blog_post"
        outerDiv.appendChild(oUl)

        var outerUl = document.getElementsByClassName("newsList");
        outerUl[0].appendChild(outerDiv);



    }
}


function sortLikes(){
    newsObj.sort(function (first, second){
        if (first.like < second.like) {
            return 1
        }
        return -1
    })
    var outerUl = document.getElementsByClassName("newsList");
    outerUl[0].innerHTML = ""
    sotingFunc()
}

function sortComment(){
    newsObj.sort(function (first, second) {
        if (first.comments < second.comments) {
            return 1
        }
        return -1
    })
   
    var outerUl = document.getElementsByClassName("newsList")
    outerUl[0].innerHTML = ""
    sotingFunc()
    
}

function sortDate(){
    newsObj.sort(function (first, second) {
        var f = new Date (first.date)
        var s = new Date (second.date)
        if (f < s) {
            return 1
        }
        return -1
    })
   
    var outerUl = document.getElementsByClassName("newsList")
    outerUl[0].innerHTML = ""
    sotingFunc()
}



(function(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                TopicList = JSON.parse(xhttp.response);
                //=============================
                
                test1();
            
                //=============================
              }
            };
            xhttp.open("GET", "https://hacker-news.firebaseio.com/v0/topstories.json", true);
            xhttp.send();
   })();


 
function test1(){
    for (var index21 = 0; index1 < 31; index1++) {     
    (function (){
                   var xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                json1 = JSON.parse(xhttp1.response);
                //document.getElementById("area").innerHTML = json1.title;
                //====
                if(json1.descendants == "undefined "){
                    json1.descendants = 0;
                }
                    newsObj.push({
                    title : json1.title,
                    date : new Date(json1.time*1000),
                    like : json1.score,
                    comments: json1.descendants 
                    
                }) 
                 outerUl = document.getElementsByClassName("newsList")
                outerUl[0].innerHTML = ""
                sotingFunc() 
                //====
              }
            };
            xhttp1.open("GET", "https://hacker-news.firebaseio.com/v0/item/"+TopicList[index1]+".json", true);
            xhttp1.send();
   }    )();  

}

}