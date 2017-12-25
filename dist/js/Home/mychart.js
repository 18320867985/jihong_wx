

	
	

//
//		//线图方法
//		function createLine(id,names,datas,ttl,ttl2){
//				
//			var presets = window.chartColors;
//			var utils = Samples.utils;
//			var inputs = {
//				min: 0,
//				max:10000,
//				count: 8,
//				decimals: 1,
//				continuity: 1
//			};
//	
//			function generateData(config) {
//				return utils.numbers(utils.merge(inputs, config || {}));
//			}
//	
//			function generateLabels(config) {
//				return utils.months(utils.merge({
//					count: inputs.count,
//					section: 3
//				}, config || {}));
//			}
//	
//			var options = {
//				maintainAspectRatio: false,
//				spanGaps: true,
//				elements: {
//					line: {
//						tension: 0.4
//					}
//				},
//				plugins: {
//					filler: {
//						propagate: false
//					}
//				},
//				scales: {
//					xAxes: [{
//						ticks: {
//							autoSkip: false,
//							maxRotation: 0.5
//						}
//					}]
//				}
//			};
//	
//		["start"].forEach(function(boundary, index,obj) {
//	
//				// reset the random seed to generate the same data for all charts
//				utils.srand(8);
//	
//				new Chart(id, {
//					type: 'line',
//					data: {
//						labels:names,// generateLabels(),
//						datasets: [{
//							backgroundColor: utils.transparentize(presets.blue),
//							borderColor: presets.blue,
//							data:datas,
//							label: ttl2,
//							fill: boundary
//						}]
//					},
//					options: utils.merge(options, {
//						title: {
//							text: ttl,
//							display: true
//						}
//					})
//				});
//			});
//		
//		}
//		
//		
//		
		
		//饼图方法
		function createPei(id,names,dataList){
				
			
			
				var count=0;
				 for(var i in dataList)
				 {
				 	count+=dataList[i];
				 }
				
				//alert(count)
				function getBl(data){
					
					return ((data/count)*100).toString().substr(0,4)+'%';
				}
				
				
			function GetPieData(names,dataList){
				
				var data_arr=[];
				
				for(var i2 in dataList){
					data_arr.push({
								value: dataList[i2],
								name: names[i2]+"\n"+getBl(dataList[i2])
							});
							
					}
				
				 return data_arr;
			}
				
				var getOption = function(chartType) {
					var chartOption = chartType == 'pie' ? 
					{
						calculable: false,
						series: [{
							name: '访问来源',
							type: 'pie',
							radius: '65%',
							center: ['50%', '50%'],
							data: GetPieData(names,dataList)
	
						}]
						
						} : {
						legend: {
							data: ['价格'] //修改地方
						},
						grid: {
							x: 35,
							x2: 10,
							y: 30,
							y2: 25
						},
						toolbox: {
							show: false,
							feature: {
								mark: {
									show: true
								},
								dataView: {
									show: true,
									readOnly: false
								},
								magicType: {
									show: true,
									type: ['line', 'bar']
								},
								restore: {
									show: true
								},
								saveAsImage: {
									show: true
								}
							}
						},
						calculable: false,
						xAxis: [{
							type: 'category',
							
							//修改地方
							data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
						}],
						yAxis: [{
							type: 'value',
							splitArea: {
								show: true
							}
						}],
						series: [{
							name: '价格', //修改地方
							type: chartType,
							data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]//修改地方
						}]
				
						};
					return chartOption;
				};
				var byId = function(id) {
					return document.getElementById(id);
				};
			
				var pieChart = echarts.init(byId(id));
				pieChart.setOption(getOption('pie'));
				
		
		}
	