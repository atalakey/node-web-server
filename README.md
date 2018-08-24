# node-web-server

A NodeJS app.

The app uses the Express framework and the hbs package to create a simple web server that serves static and dynamic content.

## App description (five web pages)

### home (HTTP method: GET, Path: /)
A dynamic home page that contains a welcome message.

### about (HTTP method: GET, Path: /about)
A dynamic about page that contains dummy content.

### projects (HTTP method: GET, Path: /projects)
A dynamic projects page that contains dummy content.

### help (HTTP method: GET, Path: /help.html)
A static help page that contains dummy content.

### maintenance (HTTP method: GET, Path: any)
A dynamic maintenance page that can be enabled to redirect all incoming requests during maintenance.

## Installation

Be sure to have NodeJS installed.

### Prerequisites:
```
You must have npm and nodejs installed.
```

### To install the prerequisites (macOS only)
```
1. Install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

2. Install nodejs:

    brew install node
```

### To use the application:
``` 
1. Clone the project:

    git clone https://github.com/atalakey/node-web-server.git ~/Desktop/node-web-server

2. Navigate to where you cloned the project:

    cd ~/Desktop/node-web-server

3. Install App local packages:

    npm install
```

## Run the App

```
- Start the node express server:

    node server.js

- Visit http://localhost:3000
```

# Disclaimer:
This app is for demo purposes only.
