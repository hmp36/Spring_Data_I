<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
				                     <title>Dashboard</title>
		<link rel="stylesheet" type="text/css" href="/css/style.css">	
		
	</head>

	<body>
	<h1>Welcome! ${ currentUser.firstName }</h1>
	
	<div id="userdisplay">
		<table>
			<tr>
				<td>First Name: </td>
				<td>${ currentUser.firstName }</td>
			</tr>
			<tr>
				<td>Last Name: </td>
				<td>${ currentUser.lastName }</td>
			</tr>
			<tr>
				<td>Email: </td>
				<td>${ currentUser.email }</td>
			</tr>
			<tr>
				<td>Signup Date: </td>
				<td>${ currentUser.createdAt }</td>
			</tr>
			<tr>
				<td>Last Sign In: </td>
				<td>${ currentUser.updatedAt }</td>
			</tr>
		</table>
	</div>
	
	
	
	
	
		<a href="/logout">Logout!</a>

		
	</body>
</html>