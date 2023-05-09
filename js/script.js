// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: May 2023
// This file contains the JS functions for index.html

function myButtonClicked () {
  const numberA = parseInt(document.getElementById('number-a').value)
  const numberB = parseInt(document.getElementById('number-b').value)
  let counter = 0
  let answer = 0

  while (counter < numberA) {
    answer += numberB
    counter += 1
  }
  document.getElementById('answer').innerHTML = 'The answer is ' + answer
}
