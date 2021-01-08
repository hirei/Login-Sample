import React, { Component, useCallback } from 'react';
import User from '../common/User';
import demodate from '../js/demodate';

const login = document.getElementById("login-button");
const username = document.getElementById("username");
const password = document.getElementById("password");

login.addEventListener('click',(e) => {
    e.preventDefault();

    if(username.nodeValue.length < 5){
        alert("ユーザー名は5文字以上入力して");
        return;
    }
    else if(password.nodeValue.length < 5){
        alert("パスワードは５文字以上入力");
        return;
    }
    if(demodate.name != username || demodate.password != password){
        alert("ユーザー名かパスワードが違います");
    }
    else{
        alert("ログインしました");
    }
});