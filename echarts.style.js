$(function(){
	
	var response2=[];
	var datNamesXt = [];
	var datNamesSj = [];
	$.ajax({
	    url: '/fenxiyu/echarts4',
	    type: 'POST',
	    success: function (result) {
	    	
	    	var json = eval("("+result+")");
	    	
	    	response2 = json;
	    	
/*	    	console.log(json);
	    	console.log(response2);*/
	    	
	    	
	    	for (var i = 0; i < response2.length; i++) {
	    		var datJsonXt = {};
	    		var datJsonSj = {};
	    		
	    		datJsonXt= response2[i].systemName;
	    		datJsonSj= response2[i].tableNum;
	    		
	    		datNamesXt.push(datJsonXt);
	    		datNamesSj.push(datJsonSj);
			}
	    	/*console.log(datNamesXt);
	    	console.log(datNamesSj);*/
	
	// 基于准备好的dom，初始化echarts实例
	/*展示四个区系统表数量*/
	var myChart = echarts.init(document.getElementById('echart_1'));
		
		
	// 指定图表的配置项和数据
	var option = {
		color: ['#2f72c7'],//柱状图颜色	 
	    title: {
	        text: '',
	        textStyle: {
	            color: '#fff'//标题颜色
	        }
	    },
		grid: {
			left: '10%',
			bottom:'35%'
		},
	    xAxis: {
	        data: datNamesXt,
	      	axisLabel: {
	           interval:0,
	           rotate:80,
	           textStyle: {
	               color: '#fff'//x轴字体颜色
	            } 
	       },
	       axisLine:{
		        lineStyle:{
		            color:'yellow',//底线颜色
		           
		        }
	        } 
	    },
	   	yAxis: {
			axisLabel : {                      
	            textStyle: {
	                color: 'yellow'//y轴字体颜色
	            }
	        }
	   	},
	    series: [{
	        name: '数据总量按系统分类',
	        type: 'bar',
	        data: datNamesSj,    
	        itemStyle: {
				normal: {
					label: {
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: '#fff',//数值颜色
							fontSize: 10
						}
					}
				}
			}
			
	    }]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	
	 //点击跳转页面
/*	myChart.on('click', function (params) {
				alert("aa");
                   		window.location.href="${base}/admin/classify/list.htm";
                    });*/
	
	    }
	});
	 
})

$(function(){
	var response2=[];
	var datNamesXt = [];
	var datNamesSj = [];
	$.ajax({
	    url: '/fenxiyu/echarts3',
	    type: 'POST',
	    success: function (result) {
	    	var json = eval("("+result+")");
	    	
	    	response2 = json;
	    	
	    	/*console.log(json);
	    	console.log(response2);*/
	    	
	    	
	    	for (var i = 0; i < response2.length; i++) {
	    		var datJson = {};
	    		var datJsonSj = {};
	    		
	    		datJsonXt= response2[i].systemName;
	    		datJsonSj= response2[i].dataTotal;
	    		
	    		datNamesXt.push(datJsonXt);
	    		datNamesSj.push(datJsonSj);
			}
	    	/*console.log(datNamesXt);
	    	console.log(datNamesSj);*/
	
	// 基于准备好的dom，初始化echarts实例
	 /*展示四个区系统数据总和		排序*/
	var myChart = echarts.init(document.getElementById('echart_2'));
	
	// 指定图表的配置项和数据
	var option = {
		color: ['#2f72c7'],//柱状图颜色	 
	    title: {
	        text: '',
	        textStyle: {
	            color: '#fff'//标题颜色
	        }
	    },
		grid: {
			left: '10%',
			bottom:'35%'
		},
	    xAxis: {
	        data:datNamesXt,//,"财务管控","营销业务应用系统","OMS","电能管理服务"
	      	axisLabel: {
	           interval:0,
	           rotate:80,
	           textStyle: {
	               color: '#fff'//x轴字体颜色
	            } 
	       },
	       axisLine:{
		        lineStyle:{
		            color:'yellow',//底线颜色
		           
		        }
	        } 
	    },
	   	yAxis: {
			axisLabel : {                      
	            textStyle: {
	                color: 'yellow'//y轴字体颜色
	            }
	        }
	   	},
	    series: [{
	        name: '接',
	        type: 'bar',
	        data: datNamesSj,//,36, 10, 10, 20
	        itemStyle: {
				normal: {
					label: {
						show: true, //开启显示
						position: 'top', //在上方显示
						textStyle: { //数值样式
							color: '#fff',//数值颜色
							fontSize: 10
						}
					}
				}
			}
			
	    }]
	};
	// 使用刚指定的配置项和数据显示图表。
	myChart.setOption(option);
	
/*	 //点击跳转页面
	myChart.on('click', function (params) {
				alert("aa");
                   		window.location.href="${base}/admin/classify/list.htm";
                    });*/
	    }
	});
})

$(function(){
	var response2=[];
	var resultJson = [];
	
	$.ajax({
	    url: '/fenxiyu/echarts2',
	    type: 'POST',
	    success: function (result) {
	    	var json = eval("("+result+")");
	    	response2 = json;
	    	
	   	for (var i = 0; i < response2.length; i++) {
	    		var datJson = {};
	    		
	    		
	    		datJson.value= response2[i].dataTotal;
	    		datJson.name= response2[i].orgName;
	    		datJson.value1= null;
	    		
	    		resultJson.push(datJson);
	    		
			}
	   /*	展示贴源历史层部门，系统数据量*/
	   	var dom = document.getElementById("echart_3");
		var myChart = echarts.init(dom);
		var app = {};
		option = null;
		option = {
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    series : [
		        {
		            name: '数据总量',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:resultJson,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
		;
		if (option && typeof option === "object") {
		    myChart.setOption(option, true);
		}
		    }
		    });

})

/*各类型数据量分布*/
$(function(){
	var datNames = [];
	var response1=[];
	var response2=[];
	var datNamesXt = [];
	$.ajax({
	    url: '/fenxiyu/echarts1',
	    type: 'POST',
	    success: function (result) {
	    	var json = eval("("+result+")");
	    	response2 = json[1];
	    	response1 = json[0];
	    	
	    	/*
	    	 * 循环饼状图中心区域数据总量
	    	 */
	    	for (var int = 0; int < response1.length; int++) {
	    		
	    		var datJson = {};
	    		
	    		datJson.value = response1[int].recordNum;
	    		datJson.name = response1[int].storageRegio;
	    		
	    		datNames.push(datJson);
	    		
			}
	    	
	    	/*
	    	 * 循环饼状图外边系统数据总量
	    	 */
	    	var temp = null;
	    	for (var i = 0; i < response2.length; i++) {
	    		var datJson = {};
	    		/*暂时小于100的小于百分之一，然后把这些数量存到临时变量中，
	    		当作其他的值*/
	    		if(response2[i].dataTotal!=null&&response2[i].dataTotal<100){
	    			temp+=response2[i].dataTotal;
	    		}
	    		datJson.value= response2[i].dataTotal+Math.round(temp);
	    		datJson.name= response2[i].systemName;
	    		datNamesXt.push(datJson);
	    		
			}
	    	
	   
	
	// 基于准备好的dom，初始化echarts实例
	/*展示贴源历史层系统数据量		按数据排序，显示前十个，其他为别的系统数据总和*/
    var myChart = echarts.init(document.getElementById('echart_4'));
    var option = {
    	title : {
	        text: '',
	        x:'center'
		},
	    tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
    
    	series: [
	        {
	            name:'数据总量',
	            type:'pie',
	            selectedMode: 'single',
	            radius: [0, '20%'],
	            center : ['50%', '50%'],
	            label: {
	                normal: {
	                    position: 'inner'
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
       		 },
	        {
	            name:'数据总量',
	            type:'pie',
	            radius: ['30%', '45%'],
	            center : ['50%', '50%'],
	            label: {
	                normal: {
	                    formatter: '{b|{b}}{c}{per|{d}%}',
	                     textStyle: { 
						
												fontSize: 10
											},
	                   /* backgroundColor: '#eee',
	                    borderColor: '#aaa',*/
	                    borderWidth: 1,
	                    borderRadius: 4,	           
	                    rich: {
	                        a: {
	                            color: '#999',
	                            lineHeight: 22,
	                            align: 'center'
	                        },
	                      
	                        hr: {
	                            borderColor: '#aaa',
	                            width: '100%',
	                            borderWidth: 0.5,
	                            height: 0
	                        },
	                        b: {
	                            fontSize: 10,
	                            lineHeight: 33
	                        },
	                        per: {
	                        	 fontSize: 10,
	                            color: '#eee',
	                            backgroundColor: '#334455',
	                            padding: [2, 4],
	                            borderRadius: 2
	                        }
	                    }
	                }
	            },
	            data:datNamesXt
        	}
    ]
	    
	    
};
     // 使用刚指定的配置项和数据显示图表。
     myChart.setOption(option);
	 
	 //点击跳转页面
/*	 	myChart.on('click', function (params) {
				alert("aa");
                   		window.location.href="${base}/admin/classify/list.htm";
                    });*/
	    }
	});
})

$(function(){
	var datNames = [];
	var response1=[];
	var datNamesXt = [];
	$.ajax({
	    url: '/fenxiyu/Xecharts1',
	    type: 'POST',
	    success: function (result) {
	    	var json = eval("("+result+")");
	    	
	    	
	    	response1 = json;
	    	
	    	/*
	    	 * 循环饼状图中心区域数据总量
	    	 */
	    	for (var int = 0; int < response1.length; int++) {
	    		var datJson = {};
	    		
	    		datJson.value = response1[int].dataTotal;
	    		datJson.name = response1[int].storageRegio;
	    		
	    		/*console.log(datNames);*/
	    		datNames.push(datJson);
	    		
	    		
			}
	 /*展示三个区贴源历史层，采集量测区，非结构化区系统数据总量*/
	var dom = document.getElementById("Xecharts1");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    series : [
	        {
	            name: '数据总量',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:datNames,
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
	    }
	    });
})



$(function(){
	
	var datNames = [];
	var response1=[];
	var datNamesXt = [];
	$.ajax({
	    url: '/fenxiyu/Xecharts2',
	    type: 'POST',
	    success: function (result) {
	    	var json = eval("("+result+")");
	    	
	    	
	    	response1 = json;
	    	
	    	/*
	    	 * 循环饼状图中心区域数据总量
	    	 */
	    	for (var int = 0; int < response1.length; int++) {
	    		var datJson = {};
	    		
	    		datJson.value = response1[int].dataTotal;
	    		datJson.name = response1[int].systemName;
	    		
	    		/*console.log(datNames);*/
	    		datNames.push(datJson);
	    		
	    		
			}
	/*展示采集量测区系统数据量*/
	var dom = document.getElementById("Xecharts2");
	var myChart = echarts.init(dom);
	var app = {};
	option = null;
	option = {
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    calculable : true,
	    series : [
	        {
	            name:'数据总量',
	            type:'pie',
	            radius : [30, 110],
	            center : ['50%', '60%'],
	            roseType : 'area',
	            data:datNames,
	        }
	    ]
	};
	;
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
	    }
	})
})
