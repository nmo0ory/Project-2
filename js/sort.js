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
            xhttp.open("GET", "../idlist.json", true);
            xhttp.send();
   })();


 
function test1(){
    (function (){
                   var xhttp1 = new XMLHttpRequest();
            xhttp1.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                json1 = JSON.parse(xhttp1.response);
                //document.getElementById("area").innerHTML = json1.title;
                //====
                
                for (var i = 0; i < TopicList.length; i++) {
                newsObj.push({
                title : json1[i].title,
                date : json1[i].date,
                like : json1[i].noc,
                comments: json1[i].comments
                    
                }) 
                outerUl = document.getElementsByClassName("newsList")
                outerUl[0].innerHTML = ""
                sotingFunc() 
                //====
                }

              }
            };
            xhttp1.open("GET", "../postdata.json", true);
            xhttp1.send();
   }    )();



}