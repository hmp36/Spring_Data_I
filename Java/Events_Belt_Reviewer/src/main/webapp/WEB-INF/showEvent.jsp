
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>

<html>
	<head>
		<title>Index</title>
	</head>

	<body>
		<h1>${event.name}</h1>
	    
	    
        <p>Date: ${event.date}</p>	
        <p>Location : ${event.city}, ${event.state}</p>	
        <p>People Attending: ${event.users.size()}</p>
	
	<table>
		<tr>
	 		<th>Name:</th>
	 		<th>Location:</th>
		</tr>
		
		<c:forEach items= "${event.users}" var ="user">
		<tr>
			<td>${user.firstName}></td>
			<td>${user.city}, ${user.state}</td>
		</tr>	
		</c:forEach>
	</table>

		<h1>Message Wall</h1>
 
		<c:forEach items= "${event.messages}" var ="msg">
			<p>${msg.text}></p>
		</c:forEach>

		<h3>Add Message:</h3>

		<form:form action="/events/${event.id}/messages/new" 
		method="post" modelAttribute="message">	
			<form:label path ="text">Add Comment:
				<form:errors path="text"></form:errors>
				<form:input path="text"></form:input>
			</form:label>
			<input type="submit" value="Post Message">
		</form:form>
	</body>
</html>		
	
	
	