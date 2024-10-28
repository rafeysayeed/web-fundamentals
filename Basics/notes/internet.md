What is the Internet?
When you connect two computers with a cable, it becomes a simplest form of internet. Now scale this to a big network of interconnected devices. All devices are connected to each other in some way. When you request a resource that resides on another device, you use the internet to fetch it.

How information travels through the internet?
It is sent and received through previously set standards and protocols one of which is HTTP. Its travels in the form of packets which take optimum route to go from a sender (server/responder) to a client (receiver/requester). Other protocols are TCP, FTP, SMTP and UDP. HTTPS is a secure form of HTTP with encryption added to the data being sent so that its unreadable if sniffed in the middle.

HTTP?
Its a standard protocol to send and receive data through the internet. It consists of a header and body. It has pre-defined set of verbs (actions) which are:
- GET: To retrieve data from a server
- POST: To send data to the server to create a new resource (data entry)
- PUT: To update an existing resource
- DELETE: To remove a resource from the server
- PATCH: To partially update an existing resource (specific field)
and a few others.

Domain Name and DNS?
Web addresses are in the form of digits called IP addresses. To make remembering these address easy, we have domain names that are mapped to these addresses. Domain Name Server (DNS) is a server that resolves the name of the website we type in our browser by mapping it to the IP address specified for its name when we request a website.

Hosting?
A hosting is the computer on the internet (server) where the files of our web application are kept so that when requested, they are sent to the client. These computers are highly-performant kept in controlled environments with high speed network connection to make the process of fetching websites efficient.

Browsers?
Browsers are software that are used to render a website received from the internet. It contains multiple components one of which is the rendering engine that converts the files into something viewable. In the rendering process, it constructs the DOM, BOM, AOM, and CSSOM trees to map everything correctly. Another component is the JavaScript interpreter that allows interaction with the webpage possible. The browser receives data in chunks and starts rendering as soon as it receives enough data and doesn't wait to receive the complete website. Another component is a preload scanner that pre-fetches external resources before the rendering process needs them to be displayed to make the process efficient.