

/**
 * 判断是否是闰年
 * @param {Object} year
 */
function isLeapYear(year) {
	let date = new Date(year, 2, 0); //获取当月天数
	console.log(date)
	if (date.getDate() == 29) {
		return true
	} else {
		return false;
	}
}

/**
 * 获取前一天日期
 * @param {Object} date
 * @param {Object} days
 */
function getPreviousDay(date, days) {
	let previous_date = date.setDate(date.getDate() - days)
	return new Date(previous_date)
}


/**
 * 获取当月日期列表  7 1 2 3 4 5 6
 * @param {Object} year
 */
function getMonthAllDays(year, month) {
	console.log(year, month)
	let date = new Date(year + '-' + month + '-01')
	let weekday = date.getDay() ? date.getDay() : 7, //2 周二
		lastday = new Date(year, month, 0).getDate(),//本月最后一天
		lastWeekday = (weekday + (lastday - 1)) % 7
	let previous = [],
		next = [],
		days = [];
	if (weekday > 0 && weekday < 7) {
		for (let i = 0; i < weekday; i++) {
			previous.push(getPreviousDay(date, 1).getDate())
		}
		previous = previous.reverse();
	}

	for (let i = 1; i <= lastday; i++) {
		days.push(i)
	}

	if (lastWeekday < 6) {
		for (let i = 1; i <= 6 - lastWeekday; i++) {
			next.push(i);
		}
	}

	return {
		date: previous.concat(days).concat(next),
		year: year,
		month: month
	}
}

/**
 * 获取下个月的天数
 * @param {年份} year
 * @param {月份} month
 * @param {下个月份} nextMonth
 */
function getNextMonthAllDays(year, month, nextMonth = 1) {

	year = year + ((month + nextMonth) % 12 == 0 ? (parseInt((month + nextMonth) / 12) - 1) : parseInt((month + nextMonth) / 12))
	month = (month + nextMonth) % 12 == 0 ? 12 : (month + nextMonth) % 12;
	return getMonthAllDays(year, month)
}

/**
 * 获取上个月的天数
 * @param {Object} year
 * @param {Object} month
 * @param {Object} previousMonth
 */
function getPreviousMonthAllDays(year, month, previousMonth = 1) {//2019 1 26
	year = year - parseInt(previousMonth / 12);  //2019-（26/12） = 2017
	previousMonth = previousMonth % 12;  // 26 % 12 =2
	if (month - previousMonth > 0) {
		month = month - previousMonth
	} else if (month - previousMonth < 0) {
		year--;
		month = 12 + (month - previousMonth)
	} else {
		year--;
		month = 12
	}
	return getMonthAllDays(year, month)
}





/**
 * 获取后一天的日期
 * @param {Object} date
 * @param {Object} days
 */
function getNextDay(date, days) {
	let next_date = date.setDate(date.getDate() - days)
	return new Date(next_date)
}

export {
	isLeapYear,
	getMonthAllDays,
	getNextMonthAllDays,
	getPreviousMonthAllDays,
	getPreviousDay,
	getNextDay
}