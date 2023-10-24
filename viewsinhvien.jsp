<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<!-- <h3>Danh sach Sinh vien</h3>
	<table border="2" width="70%" cellspacing="0">
	<tr>
		<th>MSSV</th>
		<th>First Name</th>
		<th>Last Name</th>
		<th>Diem Trung Binh</th>
	</tr>
	<c:forEach var="std" items="${list}">
		<tr>
			<td>${std.id}</td>
			<td>${std.fname}</td>
			<td>${std.lname}</td>
			<td>${std.diemtb}</td>
		</tr>
	</c:forEach>
	</table> -->

	<form action="addsv" method="post">
		<h1>Thêm Sinh Viên</h1>
		<table border="1">
			<tr>
				<th>Tên</th>
				<th>Tuổi</th>
			</tr>
			<tr>
				<td>
					<input type="text" id="name">
				</td>
				<td>
					<input type="number" id="age">
				</td>
			</tr>
			<tr><td><input type="submit" value="Thêm"></td></tr>
		</table>
	</form>
</body>
</html>

