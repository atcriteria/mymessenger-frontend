# MyMessenger - Front End
The front end for the MyMessenger Application

## About the App
This is a small scale instant messaging application that allows users to connect to a server and send messages through web sockets using the Socket.io library. The application currently has a few noteworthy features:

- Profanity filter, allows us to blacklist and whitelist words into the profanity filter and toggle it on and off.
- Message grouping, allows us to group messages sent in succession by the same users
- Message history, allows us to restore up to the previous 50 messages to newly connected clients (message grouping does not count towards the 50 messages!)
- Timestamps, allows us to track the date and time that a message was created by.

## Dependencies
The most noteworthy dependencies that we have are:
- Socket.io-client (used to establish the web sockets to the backend)
- bad-words (used to implement a profanity filter)

## Goals

There are no future goals planned for this application.
