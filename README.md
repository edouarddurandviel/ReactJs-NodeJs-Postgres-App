## ReactJs-NodeJs-MongoDB-App

**auth argon2Async** uniquement disponible à partir de la version **node: v24.7.0** 

Frontend: "React", redux, "ReactHookForms", 'Formiz", "Formik"
Backend: "node.js", "express.js", connecté à une base de données NoSQL, "MongoDB"

Utilisation de **react-persist** pour sauvegarder les utilisateurs connectés, **cache des requêtes avec une Map**   

### Docker

Initialisation de MongoDB et importation de la base donnnées.

```bash
docker compose up -d
```

## Api URL

homepage: http://localhost:5173

## Docker Backups commands

For mongosh initialization command

```bash
# create dump
mongodump --db test --gzip --archive=".\data\test.archive.gz"

# restore dump
mongorestore --archive=/docker-entrypoint-initdb.d/test.archive.gz --gzip --username "root" --password "edouard" --authenticationDatabase admin --archive=".\data\test.archive.gz"
```


