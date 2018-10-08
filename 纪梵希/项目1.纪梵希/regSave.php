<?php
	header("Content-type:text/html;charset=utf-8");
	//1、接收数据
	$username = $_POST['username'];
	$userpass = $_POST['userpass'];
	
	//2、处理（连接数据库，插入）
	//1)、搭桥（建立连接）
	$conn = mysql_connect("localhost","root","root");
	if(!$conn){
		die("数据库连接失败！");		
	}else{
		//2)、选择目的地（选择数据库）
		mysql_select_db("db1804",$conn);
		
		//3)、传输数据（执行SQL语句）
		$sqlstr="insert into vip(name,pass) values('".$username."','".$userpass."')";
		$result = mysql_query($sqlstr);
		//4)、拆桥（关闭数据库的连接）
		mysql_close($conn);	
		
		if($result){
		     //3、响应
//			echo "注册成功，请<a href='denglu.html'>登录</a>";
          header("location:denglu.html");
		}else{
		     //3、响应
			echo "注册失败";
		}
	}
	
?>