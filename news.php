<!DOCTYPE html>
<html>

	<head>
		<title>Submit news</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
	    <meta charset="UTF-8">
	</head>



	<body class="node">
		
	    <?php 
	    require_once('db_connection.php');
	    require('news_insert.php');
	    
	    if ($_SERVER["REQUEST_METHOD"] == "POST"){
	        if(isset($_POST['sub_button'])) {
	            $title = $_POST["Title"];
	            $url = $_POST["URL"];
	            news_add($title,$url);
	        }
	    }
	?>
		
		
		
  <div class="content">
		<h1>Submit</h1>
		
		<form name="newsForm" method="post" action='<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>'"
		onsubmit="return validateForm1()" method="post">		
			<div class="news_feild">
		 Title: <input type="text" name="Title" > 
		</div>
    <div class="news_feild">
      URL: <input type="url" name="URL" >
		</div>
		
    <div class="news_feild">
      <b>or</b>
    </div>
		
		
    <div class="news_feild">
      Text: <textarea rows="4" cols="50" name="textnews"> </textarea>
    </div>
		

		<input type="submit" value="submit" name="sub_button"/>
	    </form>
		
		<div id="error1">
				<p>you need to put your title or url or text</p>
			</div>
			<div id="error2">
					<p>you need to put your url or text</p>
				</div>
				<div id="error3">
						<p>the text field is emty</p>
					</div>
		
		</div>
		
	</body>
	
	<script src="js/news.js"></script> 
	

</html>