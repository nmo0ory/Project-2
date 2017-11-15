

var newsObj = [
    {   
        title : "Yarn - A new package manager for JavaScript",
        date : "Sat Nov 12 2017 7:32:78",
        like : 125,
        comments : 56
    },
    {   
        title : "Blueprint - A React UI toolkit forthe web",
        date : "Wen Nov 11 2017 5:43:43",
        like : 78,
        comments : 56
    },
    {   
        title : "Tesseract.js - Pure JavaScript OCR",
        date : "Tus Nov 11 2017 3:56:41",
        like : 24,
        comments : 88
    },
    {   
        title : "Notpad++ - a tools for code and text editor",
        date : "Sat Nov 10 2017 5:12:32",
        like : 94,
        comments : 125 
    },
    {   
        title : "Yarn - A new package manager for JavaScript",
        date : "Fri Nov 9 2017 12:32:41",
        like : 568,
        comments : 489 
    }
]




var sotingFunc = function () {
    for (var i = 0; i <= newsObj.length - 1; i++) {

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