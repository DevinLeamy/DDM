docker network create keycloak-network
docker run -d --name postgres --net keycloak-network -e POSTGRES_DB=keycloak -e POSTGRES_USER=keycloak -e POSTGRES_PASSWORD=password postgres
docker run --name keycloak --net keycloak-network -e DB_USER=keycloak -e DB_PASSWORD=password -e DB_ADDR=postgres -e DB_VENDOR=POSTGRES -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin -p 8080:8080 jboss/keycloak  
