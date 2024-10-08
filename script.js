{\rtf1\ansi\ansicpg1252\cocoartf2818
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 const yearInput = document.getElementById('yearInput');\
const incrementBtn = document.getElementById('incrementBtn');\
const decrementBtn = document.getElementById('decrementBtn');\
\
const ellieAgeDisplay = document.getElementById('ellieAge');\
const sonAgeDisplay = document.getElementById('sonAge');\
const warList = document.getElementById('warList');\
const disasterList = document.getElementById('disasterList');\
\
let currentYear = 0;\
const minYear = 0;\
const maxYear = 5000;\
const ellieBirthYear = 2021;\
const sonBirthYear = 2023;\
\
let intervalId = null;\
const delay = 100; // Delay between increments/decrements when holding the button\
\
// Array of major wars with start years\
const wars = [\
    \{ name: "Punic Wars", startYear: -264 \},\
    \{ name: "Caesar's Civil War", startYear: -49 \},\
    \{ name: "World War I", startYear: 1914 \},\
    \{ name: "World War II", startYear: 1939 \},\
    \{ name: "Korean War", startYear: 1950 \},\
    \{ name: "Vietnam War", startYear: 1955 \},\
    \{ name: "Iran-Iraq War", startYear: 1980 \},\
    \{ name: "Gulf War", startYear: 1990 \},\
    \{ name: "War in Afghanistan", startYear: 2001 \},\
    \{ name: "Iraq War", startYear: 2003 \}\
];\
\
// Array of major disasters with start years\
const disasters = [\
    \{ name: "Pompeii Eruption", startYear: 79 \},\
    \{ name: "Black Death", startYear: 1347 \},\
    \{ name: "Lisbon Earthquake", startYear: 1755 \},\
    \{ name: "Great Chicago Fire", startYear: 1871 \},\
    \{ name: "San Francisco Earthquake", startYear: 1906 \},\
    \{ name: "Indian Ocean Tsunami", startYear: 2004 \},\
    \{ name: "Hurricane Katrina", startYear: 2005 \},\
    \{ name: "Fukushima Nuclear Disaster", startYear: 2011 \}\
];\
\
// Helper function to update the input field and children's ages\
function updateYearDisplay() \{\
    yearInput.value = currentYear.toString().padStart(4, '0');\
    updateAges();\
    updateWarList();\
    updateDisasterList();\
\}\
\
// Function to increment the year\
function incrementYear() \{\
    if (currentYear < maxYear) \{\
        currentYear++;\
        updateYearDisplay();\
        decrementBtn.disabled = false; // Enable the decrement button if it was disabled\
    \}\
    if (currentYear === maxYear) \{\
        incrementBtn.disabled = true; // Disable the increment button if max is reached\
    \}\
\}\
\
// Function to decrement the year\
function decrementYear() \{\
    if (currentYear > minYear) \{\
        currentYear--;\
        updateYearDisplay();\
        incrementBtn.disabled = false; // Enable the increment button if it was disabled\
    \}\
    if (currentYear === minYear) \{\
        decrementBtn.disabled = true; // Disable the decrement button if min is reached\
    \}\
\}\
\
// Function to calculate and update ages\
function updateAges() \{\
    let ellieAge = currentYear >= ellieBirthYear ? currentYear - ellieBirthYear : 0;\
    let sonAge = currentYear >= sonBirthYear ? currentYear - sonBirthYear : 0;\
    \
    ellieAgeDisplay.textContent = ellieAge;\
    sonAgeDisplay.textContent = sonAge;\
\}\
\
// Function to update the list of wars\
function updateWarList() \{\
    warList.innerHTML = ''; // Clear the current list\
    wars.forEach(war => \{\
        if (currentYear >= war.startYear) \{\
            const li = document.createElement('li');\
            li.textContent = war.name;\
            war}
