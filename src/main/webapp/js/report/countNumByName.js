/**
 商品销售额数据报表
 */
        function show1(basePath) {
        	 var arr1 = [];
        	  var arr2 = [];
            $.ajax({
            	
                type : "post",
                datatype:"json",
                url : basePath+'/deal/countNumByNameData.do',
                success : function(data) {
                	
                	var str = eval(eval(data));
                	s = [];
                     for(i=0;i<10;i++){
                         
                         arr1.push(str[i].name);
                         arr2.push(parseInt(str[i].number));
                    	 s.push({value:parseInt(str[i].number),name:str[i].name}); 
                         drewChart();
                         drewChart1();
                     }
                     
                     
                },
                error : function(data) {
                    myChart.hideLoading();
                }
            })
         
    
        function drewChart(){
       
                // 基于准备好的dom，初始化echarts图表
                var myChart = echarts.init(document.getElementById('main')); 
               
                var options = {
                        title : {
                            text: '销售数量',
                        },
                        tooltip : {},
                        xAxis :
                            {
                        	     data:arr1
                             //   //data : '['+arr1+']',
                            } ,
                        yAxis :
                            {
                                type : 'value',
                            },
                        series : [
                            {
                                name:'销售数量',
                                type:'bar',
                                data:arr2
                                //data:'['+arr1+']'
                             
                            }]
                    };
                myChart.setOption(options);                
            } ;
            
            
            function drewChart1(){
                
                // 基于准备好的dom，初始化echarts图表
                var myChart1 = echarts.init(document.getElementById('show')); 
               
                option = {
                	    title : {
                	        text: '销售数量占比',
                	        subtext: '纯属虚构',
                	        x:'center'
                	    },
                	    tooltip : {
                	        trigger: 'item',
                	        formatter: "{a} <br/>{b} : {c} ({d}%)"
                	    },
                	    legend: {
                	        orient : 'vertical',
                	        x : 'left',
                	        data:arr1
                	    },
                	    toolbox: {
                	        show : true,
                	        feature : {
                	            mark : {show: true},
                	            dataView : {show: true, readOnly: false},
                	            magicType : {
                	                show: true, 
                	                type: ['pie', 'funnel'],
                	                option: {
                	                    funnel: {
                	                        x: '25%',
                	                        width: '50%',
                	                        funnelAlign: 'left',
                	                        max: 1548
                	                    }
                	                }
                	            },
                	            restore : {show: true},
                	            saveAsImage : {show: true}
                	        }
                	    },
                	    calculable : true,
                	    series : [
                	        {
                	            name:'访问来源',
                	            type:'pie',
                	            radius : '55%',
                	            center: ['50%', '60%'],
                	            data:s
                	        }
                	    ]
                	};
                myChart1.setOption(option);                
            } ;
        };
