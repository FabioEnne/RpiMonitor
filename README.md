# RpiMonitor
A new idea, a web-based interface for monitoring and controlling your Raspberry Pi over the Internet

#### NOTE:
This project is still on a development stage, many things or features can change in the future! Feel free to contribute by committing changes in the "contributors" branch.
This webApp has been created and tested only on Raspberry Pi 2 running Raspbian "Jessie" no other distros or platforms has been tested yet.

#### INSTALL & USAGE:

- Download and save to any folder all the files and folders in the master branch and put it all togheter in a new folder (call that folder as you like).
- Install NodeJS 
  Start by getting the URL to the pre-built binaries you want to install. The latest version can be found at http://nodejs.org/download/
  Click “Other release files” and get the URL of the packages. Download the Node tar file you identified above using wget, then go to the /user/local directory and unpack the tar file there, as shown in the following steps:
<code>$wget http://nodejs.org/dist/v0.8.21/node-v0.8.21-linux-arm-pi.tar.gz</code> 
than:
<code>$cd /usr/local</code> 
and:
<code>$sudo tar xzvf ~/node-v0.8.21-linux-arm-pi.tar.gz --strip=1</code>
- Navigate to the project directory (<code>cd /xxx/xxx</code>)
- Install the required node modules:
<code>$npm install express</code>

- In the clientSide foldere change all the REST call in js files whit your local IP addess (This step is crucial to make all the system work) NOTE: ####This steps is because I couldn't find a solution to automatically pass the internal IP address to all the REST calls.

- Run the server by typing <code>$cd xxx/xxx/serverSide</code>
- <code>$node myapi.js</code>
- Open your favorite Web Browser and navigate to <code>http://xxxx:3000</code> where xxx is your local Ip Address.
