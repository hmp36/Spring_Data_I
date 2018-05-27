<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
 	<head>
 			 <title>Index</title>
			 <link rel="stylesheet" type="text/css" href="/css/main.css">
		<style>.a{
    table-layout: auto;
    width: 100%;    
}
		</style>	  
    </head>
 
 <body>
 	<form action="/logout" method="get">
 			<p>
 			<input type="submit" value="Logout">
 			<p>
 	</form>
 <div id="inyours">
 	  		<h3 class="h3">Events in your state:</h3>
  		<table class= "a">
 		<tr> 
           <td>Name</td>
           <td>Date</td>
           <td>Location</td>
           <td>Action / Status</td>
 		</tr>
 		<c:forEach items="${userStates}" var="event">
 			<td><a href="/events/${event.id}">
 			${event.name}</a></td>
  			<td>${event.date}</td>
  			<td>${event.city}, ${event.state}</td>
  			<td><a href="/events/${event.id}/join">Join</a></td>
 		</c:forEach>
 	   
 		</table>
 </div>
 <div id="notinyours">
 	<h3 class="h3">Events not in your state:</h3>
 	<table class= "a">
 	<tr> 
           <td>Name</td>
           <td>Date</td>
           <td>Location</td>
           <td>Action / Status</td>
 	</tr>
 		<c:forEach items="${notUserStates}" var="event">
 			<%-- <td><a href="/events/${event.id}"></a></td> --%>
  			<td><a>${event.name}</a></td>
  			<td>${event.date}</td>
  			<td>${event.city}, ${event.state}</td>
  			
  			<td></td>
  			
 	
 		</c:forEach>
 	</table>		
</div>	
<div id="newevent">
  	<form:form method ="post" action="/events/new" modelAttribute= "event">
 		<form:label path="name" > Name:
 			<form:errors path="name"></form:errors>
 			<form:input path="name"></form:input>
 		</form:label>
 		<form:label path="date" > Date:
 			<form:errors path="date"></form:errors>
 			<form:input type="date" path="date"></form:input>
 		</form:label>
 		<form:label path="city" > City:
 			<form:errors path="city"></form:errors>
 			<form:input path="city"></form:input>
 		</form:label>
 		<form:label path="state" > State:
 			<form:errors path="state"></form:errors>
 			<form:input path="state"></form:input> 
 		</form:label>
 		<input type="submit" value="Create Event"/>
 	</form:form>
</div>
</body>
</html> 	
 	