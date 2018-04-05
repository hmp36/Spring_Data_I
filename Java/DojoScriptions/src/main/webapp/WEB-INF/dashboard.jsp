<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
				                     <title>Dashboard</title>
		<link rel="stylesheet" type="text/css" href="/css/style.css">	
		
	</head>

	<body>
	<h1>Admin Dashboard</h1>           <a href="/logout">Logout!</a>
<h3>Customers</h3>           <!--  table containing customer data-->
<table>
			<tr>
				<td>Name </td>
				<td>${ currentUser.firstName }</td>
				<td>${ currentUser.lastName } </td>
			</tr>
			<tr>
				<td> ext Due Date: </td>
				<td>${ currentUser.dueDate }</td>
			</tr>
			<tr>
				<td>Amount Due </td>
				<td>${ currentUser.amountDue}</td>
			</tr>
			<tr>
				<td>Package Type </td>
				<td>${ currentUser.packageType }</td>
			</tr>
		</table>


<h3>Packages</h3>           <!--  table containing package data -->

<table>
			<tr>
				<td>Package Name </td>
				<td>${ currentUser.packageType }</td>
			</tr>
			<tr>
				<td>Package Cost </td>
				<td>${ currentUser.packageCost }</td>
			</tr>
			<tr>
				<td>Users: </td>
				<td>${ currentUser.firstName }</td><td>${ currentUser.lastName }</td>
			</tr>
			<tr>
				<td>Actions </td>
				<td>${ currentUser.createdAt }</td>
			</tr>
			<tr>
				<td>Last Sign In: </td>
				<td>${ currentUser.updatedAt }</td>
			</tr>
		</table>

<p>Create Package</p>

<form method="Post" action="/new">
	   <p>${userError}</p>
	    <p>
			<label for="PackageType">Package Name:</label>
			<input type = "text" name="PackageType" />
		</p>
		<p>${passwordError}</p>
		<p>
			<label for="PackageCost">Cost:</label>
			<input type ="text" name="PackageCost" />
		</p>
		<input type="submit" value="Create New Package" />
		
		
 	</form>
		
		
	
		

		
	</body>
</html>