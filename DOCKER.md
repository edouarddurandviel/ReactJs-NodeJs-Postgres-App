If you’re using **Docker Desktop** and want to run `mongosh` inside a running MongoDB container, the correct pattern is:

```bash
docker exec -it <container_name_or_id> mongosh -u root -p password --authenticationDatabase admin
```

### Example

If your MongoDB container is named `mongodb`:

```bash
docker exec -it mongodb mongosh -u root -p password --authenticationDatabase admin
```

### Notes

* `-it` gives you an interactive terminal
* Replace `mongodb` with:

  ```bash
  docker ps
  ```

  to find the actual container name or ID
* If your password contains special characters, wrap it in quotes:

  ```bash
  -p "password"
  ```

### Using Docker Desktop UI

1. Open **Docker Desktop**
2. Go to **Containers**
3. Select your MongoDB container
4. Open the **Terminal**
5. Run:

   ```bash
   mongosh -u root -p password --authenticationDatabase admin
   ```

If you want this adapted for **docker-compose**, **MongoDB Atlas**, or a different auth setup, tell me your setup.

If you’re seeing **“missing semicolon”**, that message is **not from Docker** — it usually comes from:

* Running the command **inside `mongosh`** instead of your system shell, or
* A **JavaScript context** (Mongo shell expects JS statements, which often end with `;`)

### Correct usage (important)

This command **must be run in your OS terminal**, **not inside `mongosh`**:

```bash
docker exec -it mongodb mongosh -u root -p password --authenticationDatabase admin
```

### Common mistake that causes this error

If you already opened `mongosh` and then typed:

```js
docker exec -it mongodb mongosh -u root -p password --authenticationDatabase admin
```

MongoDB will complain about syntax (e.g., *missing semicolon*), because it’s trying to parse it as JavaScript.

### What to do instead

1. Exit `mongosh`:

   ```js
   exit
   ```
2. Run the `docker exec ...` command in:

   * Terminal (macOS/Linux)
   * PowerShell / CMD (Windows)

### No semicolon needed

Shell commands **do not use semicolons**. Only MongoDB JavaScript commands do, e.g.:

```js
use admin;
db.stats();
```

If you want, paste the **exact error message** and where you ran the command (Terminal vs mongosh), and I’ll pinpoint it immediately.

