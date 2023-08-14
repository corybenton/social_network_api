# Social Network API

## Description

an API for running the back end of a social networking site

## Table of Contents

- [Badges](#badges)
- [Installation](#installation)
- [Usage](#usage)
- [Licence](#license)
- [Contributing](#contributing)
- [Acknowledgement](#acknowledgement)
- [Questions](#questions)

## Badges

[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

## Installation

Download project from github.  Start server with `node server.js' from command line of VS Code or similar.  In insomnia, you can run the routes (getUser, getSingleUser, createUser, updateUser, deleteUser, addFriend, deleteFriend, getThought, getSingleThought, createThought, editThought, deleteThought, createReaction, deleteReaction). [Demo](https://drive.google.com/file/d/1HAu4is5-P9S87YllPRIPr37Z9JK4I1SW/view)

## Usage

getUser - get ../api/users - no json
createUser - post ../api/users - json with username and email
getSingleUser - get ../api/users/:userId - no json
updateUser - post ../api/users/:userId - json with updated information
deleteUser - delete ../api/users/:userId - no json - also deletes user's thoughts
addFriend - post ../api/users/:userId/friends/:friendId - no json
deleteFriend - delete ../api/users/:userId/friends/:friendId - no json
getThoughts - get ../api/thoughts - no json
createThought - post ../api/thoughts - json with username and thoughtText
deleteThought - delete ../api/thoughts - json with _id
editThought - put ../api/thoughts - json with _id and thoughtText
getSingleThought - get ../api/thoughts/:thoughtId - no json
createReaction - post ../api/thoughts/:thoughtId/reactions - json with reactionBody and username
deleteReaction - delete ../api/thoughts/:thoughtId/reactions - json with _id

## License

This program is using the MIT license.

## Contributing

To contribute anything, please contact Cory Benton at corybenton@gmail.com.

## Acknowledgement

Much of the framework of the code was taken from previous activities of the coding bootcamp.

## Questions

If you have any questions, please contact Cory Benton at corybenton@gmail.com
or at my [github](https://github.com/corybenton).