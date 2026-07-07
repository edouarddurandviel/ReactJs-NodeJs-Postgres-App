# Use Transport Layer Security (TLS) to secure the connection and the data

- network traffic is vulnerable to **packet sniffing** and **man-in-the-middle** attacks.
- **Secure Socket Layer (SSL)** encryption. TLS is simply the next progression of SSL.
- let's encrypt: free automated. Provided by the Internet Security Research Group (ISRG).

# Prevent open redirect

- in middleware check url origine in middleware then add redirect
- Unsupported redirect to host message

# Prevent brute-force attacks against authorization

- The number of consecutive failed attempts by the same user name and IP address.
- The number of failed attempts from an IP address over some long period of time.
  For example, block an IP address if it makes 100 failed attempts in one day.

- rate limiter (constraint atemps and save concerned IP address to block it) 3 attemps in one day
  for any period of time. (Admin unlock any blocked ip address functionality)

# Common security aspects

- Always filter and **sanitize user input** to protect against cross-site scripting (XSS) and command injection attacks.
- Defend against SQL injection attacks by using **parameterized queries** or **prepared statements**.
- Use the open-source **sqlmap tool to detect SQL injection vulnerabilities** in your app.
- Use the nmap and sslyze tools to test the configuration of your SSL ciphers, keys, and renegotiation as well as the validity of your certificate.
- Use **safe-regex** to ensure your regular expressions are not susceptible to **regular expression denial of service attacks**. **ReDoS**

# Errors

- throw new Error('something bad happened'); becomes an exeption => catch(e)

# Operational errors vs Programmers errors

## Operational errors

- failed to connect to server
- failed to resolve hostname
- invalid user input
- request timeout
- server returned a 500 response
- socket hang-up
- system is out of memory

# Event loop

- init event lopp
- init processes initiated by input scripts
- schedule timers OR call process.nextTick()

Rque: setImmediate() init in check after poll

# Nodejs REPL Read-Eval-Print-Loop (console)
