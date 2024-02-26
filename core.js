
$(document).ready(function () {
    //responsive menu toggle
    $("#menutoggle").click(function () {
        $('.xs-menu').toggleClass('displaynone');

    });
    //add active class on menu
    $('ul li').click(function (e) {
        e.preventDefault();
        $('li').removeClass('active');
        $(this).addClass('active');
    });
    //drop down menu	
    $(".drop-down").hover(function () {
        $('.mega-menu').addClass('display-on');
    });
    $(".drop-down").mouseleave(function () {
        $('.mega-menu').removeClass('display-on');
    });

});

function openTab(evt, tabName) {
	var i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName('tab-content')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].className = tabcontent[i].className.replace(' active', '')
	}
	tablinks = document.getElementsByClassName('tab')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}
	document.getElementById(tabName).className += ' active'
	evt.currentTarget.className += ' active'
}
