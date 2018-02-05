<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
	
	<title>Selection Page</title>
</head>

<h1>Welcome to Dojoscriptions, ${ currentUser.firstName }!</h1>
	
	
	<h4>Please choose a subscription and a start date</h4>
	
	
	
	
	 <form action="/selection" method="post">

      
      <h4>Due Day:
          <select name="dueday">
<option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8</option>
<option>9</option><option>10</option><option>11</option><option>12</option><option>13</option><option>14</option><option>15</option><option>16</option>
<option>17</option><option>18</option><option>19</option><option>20</option><option>21</option><option>22</option><option>23</option><option>24</option>
<option>25</option><option>26</option><option>27</option><option>28</option><option>29</option><option>30</option><option>31</option></select>
      </h4>

  
	
		
 <h4>Package: <select name="package">
          <option>Basic($10:00)</option>
          <option>Premium($100.00)</option>
          <option>Current Special</option>
          </select></h4>


 	<input type="submit" value="Sign up!"/>
 	</form>
	


