
fis.match('::image',{
	useHash: true // 开启 md5 戳
});

fis.match('*.ejs',{
	isHtmlLike:true
});


//所有的 js
fis.match('/js/*.js', {
	url:'/webroot/static$0',//线上路径
	release : '/static$0',
	optimizer: fis.plugin('uglify-js')

});

// 所有的 css
fis.match('/css/*.css', {
	url:'/webroot/static$0',
	release : '/static$0',
	optimizer: fis.plugin('clean-css')

});

// 所有图片文件
fis.match('/images/*.{png,gif,jpg}', {
	url:'/webroot/static$0',
	release: '/static$0'
});


//png压缩
fis.match('*.png', {
	optimizer: fis.plugin('png-compressor')
});

