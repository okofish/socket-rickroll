socket-rickroll
===============

A synchronous rickrolling system built with Node.JS and Socket.IO.
Not very clean, may include extraneous code, as this is my first Socket project. Feel free to submit a PR. 
"Never Gonna Give You Up" and its music video are of course copyright Rick Astley and his record label, although I don't think they care at this point.

Root, index.html, serves up a blank page until the play button is pressed on /run. /run is optimized for mobile devices as a remote. Pause and Unpause are pretty self-explanatory. End Show deletes the video element, but it can't be restarted from there. You have to click Refresh Page.
