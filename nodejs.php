<!DOCTYPE html>
<html>

	<head>
		<title>Getting Started with Node.js</title>
		<link rel="stylesheet" href="css/style.css">
		<link rel="stylesheet" href="css/font-awesome.min.css">
	   <meta charset="UTF-8">
	</head>



	<body class="node">
    <div class="content">
		<div id="voteing">
				<i class="fa fa-chevron-up" onclick="ValUp()"></i>
				<p id="counter">100</p>
				<i class="fa fa-chevron-down" onclick="ValDown()"></i>
		</div>
		
		<h1 class="h1_node">Getting Started with Node.js</h1>
		
		<h2 class="h2_node">Installation:</h2>
		
		<!--	 Windows -->
		<h3>Windows</h3>
		<p>Download the Windows Installer dirctly from <a href="#">nodejs.org</a></p>
		<!--	 macos 	-->
		<h3>macOS</h3>
		<p class="code">brew install node</p>
		<!-- 	linux	-->
		<h3>Linux</h3>
		<h3>Debian and Ubuntu based Lunux distrabutions:</h3>
		<p class="code"><i>curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - sudo apt-get install -y nodejs</i></p>
		<!--	gides	 -->
		<h3>Guides</h3>
		<p>Articles and tutorails about Node.js are <a href="#">avilable here</a></p>
		
		<h3>Looking for gudes of previous Node.js releases?</h3>
			<table class="node_table" >
				<thead>
					<tr>
					<th class="th_node">Version</th>
					<th class="th_node">Guides</th>
					</tr>
				</thead>
				
				<tr class="">
					<td class="td_node">Node.js 5.x</td>
          <td class="td_node"><a href="#">Node.js 5.x Guide</a></td>
				</tr>
				
				<tr>
					<td class="td_node">Node.js 4.x</td>
          <td class="td_node"><a href="#">Node.js 4.x Guide</a></td>
				</tr>
				
				<tr>
					<td class="td_node">Node.js 0.12</td>
          <td class="td_node"><a href="#">Node.js 0.12 Guide</a></td>
				</tr>
				
				<tr>
					<td class="td_node">Node.js 0.10</td>
          <td class="td_node"><a href="#">Node.js 0.10 Guide</a></td>
				</tr>
        <tr>
					<td class="td_node">All other version</td>
          <td class="td_node"><a href="#">Node 0.x</a></td>
				</tr>
			</table>
      
    </div>

		
	</body>
	<script src="js/voteing.js"></script> 


</html>