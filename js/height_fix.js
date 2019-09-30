var $win = $(window);

$win.on('load resize', function() {

    var windowWidth = window.innerWidth;
    var header_height=$("#header").height();
    var header_innner_height=$("#header .inner").height();
    var header_sp_height=$("#header_sp").height();

    if(windowWidth > 1024) {
        $("#content").css("padding-top", header_height + header_innner_height);
    } else {
        $("#content").css("padding-top", header_sp_height);
    }
});