<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ page import="java.net.URL"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>OpenDaylight Phoenix - Login</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- style -->
    <link rel="stylesheet" href="http://yui.yahooapis.com/pure/0.4.2/pure-min.css"/>
    <link rel="stylesheet" href="css/global.css"/>
    <link rel="stylesheet" href="css/header.css"/>
    <link rel="stylesheet" href="css/menu.css"/>
    <link rel="stylesheet" href="css/core.css"/>
    
    <!-- scripts -->
    <script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
  </head>
  <body>
    <div id="header">
      <a href="#" id="brand">OpenDaylight</a>
    </div>
    <form action="<c:url value='j_security_check' />" id="form" method="post">
      <fieldset>
        <input type="text" name="j_username" placeholder="Username">
        <input type="password" name="j_password" placeholder="Password">
        <button class="pure-button pure-button-primary" type="submit">Log In</button>
      </fieldset>
    </form>
  </body>
</html>
