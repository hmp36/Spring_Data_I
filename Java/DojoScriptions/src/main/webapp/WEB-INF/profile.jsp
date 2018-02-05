<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


                              
<h1>Welcome, ${currentUser.firstName }!</h1>                   <a href="/logout">Logout!</a>     



 
        <table>
             <tr>
				<td>Current Package: </td>
				<td>${ currentUser.PackageType }</td>
			</tr>
			<tr>
				<td>Next Due Date: </td>
				<td>${ currentUser.dueDate }</td>
			</tr>
			<tr>
				<td>Amount Due: </td>
				<td>${ currentUser.amountDue}</td>
			</tr>
			<tr>
				<td>User Since: </td>
				<td>${ currentUser.createdAt }</td>
			</tr>
							
			
		</table>
 