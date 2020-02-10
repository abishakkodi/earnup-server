*Overall Writeup 
1. Initial thoughts were to use websockets for chat application. It would provide better performance than http and has the added benefit of near instantaneous chat.
2. Started with creation of two repos, one react based application, another node to take advantage of the socket.io npm package.
3. I want to use Netlify to host the front end, heroku for the node server

My goals for creating this app meant breaking down the task into different iterable parts. 

The first part was to just set up the repos and install the socket.io modules. After getting basic responses back from both the node server and having the client set up, I started integrating sockets. I wanted to be able to send a message via sockets from the client, have the server receive the message, then broadcast it to all clients connected to it. To do so I created a single component called `Main` that would have all the basic functionality of sending and receiving a chat message. I would break up into smaller components later. All it was able to do was send a static message to the server and receive it. After some manual click testing, I had messages on multiple client windows generated from a click event. 

The next part was to send dynamic messages from a client. 
This part took longer than I anticipated, mainly due to some synthetic event behaviors I was no longer up to date with. I kept receiving  
`This synthetic event is reused for performance reasons. If you're seeing this, you're accessing the property 'target' on a released/nullified synthetic event`  
Luckily [stackoverflow.com](https://stackoverflow.com/questions/47442839/inputs-event-target-is-null-within-this-setstate-react-js) helped me fix this error after some initial trouble. I could now send dynamic messages that would appear on different devices near simultaneously. I added a todo for message validation as well, in real world scenarios we would want some input sanitization.   




The final step involved hosting the two apps and removing unecessary code from create react app. 
 
Stretch Goals:
- [ ] User Login
    - [ ] Use oAuth or Google login
    - [ ] Use sessions to store login info 
- [ ] Make a database to store chats
    - [ ] Decide database type ( non relational vs relational, mongo vs postgres ), and decide use case/ tradeoffs 
    - [ ] Design schema
    - [ ] Think about queries needed and write controllers/ 
- [ ] Add a cache 
- [ ] Creating a series of static rooms that users could join
- [ ] Creating dynamically instantiated rooms that users could create



Resources Used to Construct Chat App:
- https://reactjs.org/docs/getting-started.html
- https://socket.io/
- 