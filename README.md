1. Build le projet avec gradle

``` java
./gradlew build
```




2. Demarre Kafka et zookeeper

Tu te rends en premier lieu dans le dossier kafka.... puis tu lance cette commande
``` java

bin/zookeeper-server-start.sh config/zookeeper.properties
bin/kafka-server-start.sh config/server.properties
```

3. Crée un topic nommé `demo-topic` :

``` java

bin/kafka-topics.sh --create \
--topic demo-topic \
--bootstrap-server localhost:9092 \
--partitions 1 \
--replication-factor 1

```

4. Vérifie que le topic a été créé :

``` java

bin/kafka-topics.sh --list --bootstrap-server localhost:9092

```

5. Exécuter le projet

`Lance le consommateur Kafka : `

Fais un clic droit sur la classe KafkaConsumerDemo > Run.
La console attendra les messages.

`Lance le producteur Kafka :`

Fais un clic droit sur la classe KafkaProducerDemo > Run.


`Les messages sont envoyés au topic.`
