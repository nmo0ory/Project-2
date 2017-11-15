





    function validateForm1(){
        var title = document.forms["newsForm"]["Title"].value;
        var url = document.forms["newsForm"]["URL"].value;
        var news = document.forms["newsForm"]["textnews"].value;

        if(title!='' && url != ''){
            if(title.length > 1){
                if(url.length>1){
                    return true;                    
                }else{
                    document.getElementById("error3").style.display="block"        
                    return false;
                }
            }else{
                document.getElementById("error2").style.display="block"        
                return false;
            }
        }else{
            document.getElementById("error1").style.display="block"
            return false;
        }

    }