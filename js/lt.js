/* global jQuery */

/**
 * LT
 *
 * @date 2017-04-07
 */

(function ($) {
		var LT = window.LT || {};

		LT.Top = function () {
				// 初期化
				var _init = function _init() {
						_chartInit();
				};

				var _chartInit = function _chartInit() {
						var ctx = document.getElementById("chart1");
						var chart1 = new Chart(ctx, {
								type: 'bar',
								scaleLabel: '<%=value.toLocaleString()%> 円',
								multiTooltipTemplate: '<%=value.toLocaleString()%> 円',
								data: {
										labels: ["6~12歳", "13~19歳", "20~29歳", "30~39歳", "40~49歳", "50~59歳", "60~69歳", "70~79歳", "80歳以上"],
										datasets: [{
												label: ['平成29年(n=38,630)'],
												data: [73.6, 96.9, 98.7, 97.8, 96.8, 92.4, 73.9, 46.7, 20.1],
												backgroundColor: 'rgba(54, 162, 235, 0.2)',
												borderColor: 'rgba(54, 162, 235, 1)',
												borderWidth: 1
										}] },
								options: [{
										scales: {
												categoryPercentage: 1.0,
												barPercentage: 0.1
										}
								}]
						});
				};

				return {
						init: _init
				};
		}();

		LT.Top.init();
})(jQuery);