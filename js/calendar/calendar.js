fnCalendar = function(clazz) {
	$(clazz).each(function() {
		var calendar = $(this);
		//calendar.datepicker();
		var color = calendar.is('.red')?'red':'grey';
		
		if(calendar.is('.dark-grey')){
			color = 'dark_grey';
		}
		if ( calendar.parent().is('.calendar-wrapper') )
			return;
		calendar.wrap('<span class="calendar-wrapper"/>');
		
		calendar.datepicker({
			dateFormat : 'yy-mm-dd',
			prevText : language == 'ko' ? '이전 달' : 'Prev',
			nextText : language == 'ko' ? '다음 달' : 'Next',
			monthNames : language == 'ko' ? [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ] : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
			monthNamesShort : language == 'ko' ? [ '1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월' ] : [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
			dayNames : language == 'ko' ? [ '일', '월', '화', '수', '목', '금', '토' ] : [ 'Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat' ],
			dayNamesShort : language == 'ko' ? [ '일', '월', '화', '수', '목', '금', '토' ] : [ 'Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat' ],
			dayNamesMin : language == 'ko' ? [ '일', '월', '화', '수', '목', '금', '토' ] : [ 'Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat' ],
			showMonthAfterYear : true,
			yearSuffix : language == 'ko' ? '년' : '',
			showOn : 'button',
			buttonImage: img_src + '/icon/icon_etc_calendar_' + color + '.png',
			buttonImageOnly : true,
			changeYear: true,
			minDate : calendar.hasClass('_calendarAfter') ? 0 : new Date(2000, 0, 1),
			regional : language
		});
	});
};