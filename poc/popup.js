// Copyright 2017 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';

const main = document.getElementById('main')
const mainOpenScheduler = document.getElementById('mainOpenScheduler')
const scheduler = document.getElementById('scheduler')
const schedulerBack = document.getElementById('schedulerBack')
let activeElement = main

hideElement(scheduler)
hideElement(main)
open(main)

function openScheduler() {
  open(scheduler)
}

function openMain() {
  open(main)
}

function open(element) {
  if (!element) {
    return
  }
  if (activeElement) {
    hideElement(activeElement)
  }
  activeElement = element
  showElement(activeElement)
}


function showElement(element) {
  element.style.display = "block";
}

function hideElement(element) {
  element.style.display = "none";
}

mainOpenScheduler.addEventListener('click', openScheduler);
schedulerBack.addEventListener('click', openMain);