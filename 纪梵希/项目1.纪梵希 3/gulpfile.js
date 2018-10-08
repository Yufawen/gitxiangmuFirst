// 完成真正的拷贝任务
 gulp.task("copy-html",function(){
	//完成复制文件的功能
	//gulp.src("index.html")
	gulp.src("*.html") //来源
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\项目"))//目的地	
});

gulp.task("watchall",function(){
   gulp.watch("*.html",["copy-html"]);
 
});