<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/jsp/common.jsp"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>条形图统计</title>
<script type="text/javascript" src="${ctx}/js/report/zrender.js"></script>
<script type="text/javascript" src="${ctx}/js/report/echarts-all.js"></script>
<script type="text/javascript" src="${ctx}/js/jquery-1.7.2.min.js"></script>
<script type="text/javascript" src="${ctx}/js/report/esl.js"></script>
<script type="text/javascript" src="${ctx}/js/report/countByPrinvince.js"></script>
<script src="${ctx}/js/esl.js"></script>
</head>
<body>
	<div id="main" style="width: 1100px; height: 400px;">
	</div><div align="left">
		<button   onclick="show1('${ctx}')">获取区域图</button>
	</div>
	
</body>
</html>
