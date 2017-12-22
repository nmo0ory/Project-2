<!DOCTYPE html>
<html>

	<head>
		<title>TechNews</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
		<meta charset="UTF-8">
		<?php
		require('postdata.php');
		require('idlist.php');
		?>
	</head>


	<body>
<div class="content_home">
  
	<header>
    
    <ul id="menu">
      
	  
      <li class="nav"><a class="nav_logo fa fa-home fa-2x"  href="#"> TNews </a></li>
      <li class="nav"><a class="nav" href="index.php">News</a></li>
      <li class="nav"><a class="nav" href="#">Comments</a></li>
      <li class="nav"><a class="nav" href="#">Show</a></li>
      <li class="nav"><a class="nav" href="#">Ask</a></li>
      <li class="nav"><a class="nav" href="nodejs.php">Node.JS</a></li>
      <li class="nav"><a class="nav" href="news.php">Sumbit News</a></li>
    </ul>
	</header>	
		<div>
			<h4>Main Stories <i class="time">10/02/2017</i></h4>
			<select>
				<option>sorting</option>
				<option value="likesort" onclick="sortLikes()">likes</option>
				<option value="commentsort" onclick="sortComment()">Comment</option>
				<option value="datesort" onclick="sortDate()">Date</option>
			</select> 
		</div>
		



		<div id="blog_block">
			<ul class="newsList"></ul>
			

		</div>
		
	<footer>
		<div>
			
			<p>&copy; 2017 GN inc. All Rights Reserved.</p>
			<a class="footer" href="">Privacy</a> |
			<a class="footer" href="">Terms of Use</a> |
			<a class="footer" href="">Contact</a>
			<p>Written in pure HTML	| Hosted by: <a class="footer" href="https://skullix.com">Skullix</a></p>
			<p>
    <a href="http://jigsaw.w3.org/css-validator/check/referer">
        <img style="border:0;width:88px;height:31px"
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS!" />
    </a>
</p>
     
		</div>
	</footer>

  
</div>
		
		
	</body>
	
	<script src="js/sort.js"></script> 


</html>