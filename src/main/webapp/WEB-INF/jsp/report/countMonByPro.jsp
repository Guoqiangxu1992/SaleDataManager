<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>条形图统计</title>
<script type="text/javascript" src="${ctx}/js/echarts-all.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${ctx}/js/report/countMonByPro.js"></script>
<script src="${ctx}/js/esl.js"></script>
</head>
<body>
	    <div style = "display:inline">
	   <div id="main" style="float:left;width: 600px; height: 400px;"></div>
	   <div id="show" name="show" style="float:left;width: 500px; height: 400px;"></div>
    </div>
	<div id='bottomDiv' style="postion:relative;bottom:0px;margin:0px;float:left;width:100%;">
			<button onclick="show1('${ctx}')">获取报表</button>
	</div>
</body>
</html>
