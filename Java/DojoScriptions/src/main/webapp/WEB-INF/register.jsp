<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	
	<title>Registration Page</title>
</head>

<body>
<h1>Dojoscriptions</h1>
<h2> A subscription platform</h2>


	                      <h4>Login</h4>
<form method="Post" action="/login">
	   <p>${userError}</p>
	    <p>
			<label for="email">Email:</label>
			<input type = "text" name="email" />
		</p>
		<p>${passwordError}</p>
		<p>
			<label for="password">Password:</label>
			<input type ="password" name="password" />
		</p>
		<input type="submit" value="Login" />
	</form>
	
	<p>
		<form:errors path="user.*" />  <!-- /what is this?  -->
	</p>
<h4>Register!</h4>

	<form:form method="POST" action="/registration" modelAttribute="user">
		<p>
			<form:label path="FirstName">First Name:</form:label>
			<form:input path="FirstName" />
		</p>
		<p>
			<form:label path="LastName">Last Name:</form:label>
			<form:input path="LastName" />
		</p>
		<p>
			<form:label path="Email">Email:</form:label>
			<form:input path="Email" />
		</p>
		<p>
			<form:label path="City">City:</form:label>
			<form:input path="City" />
		</p>
		<p>
			<form:label path="State">State:</form:label>
			<form:input path="State" />
		</p>
		<p>
			<form:label path="password">Password:</form:label>
			<form:password path="password" />
		</p>
		<p>
			<form:label path="passwordConfirmation">PW Confirm:</form:label>
			<form:password path="passwordConfirmation" />
		</p>
		<input type="submit" value="Register!" />
	</form:form>
	
		
	
	
	
</body>

</html>