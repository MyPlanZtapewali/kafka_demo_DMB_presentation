package demo_topic;

import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

public class KafkaProducerDemo {
    public static void main(String[] args) {
        // Configuration du producteur Kafka
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092"); // Adresse du broker Kafka
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        // Créer le producteur
        KafkaProducer<String, String> producer = new KafkaProducer<>(props);

        // Envoyer des messages
        for (int i = 0; i < 5; i++) {
            String key = "key" + i;
            String value = "message" + i;
            producer.send(new ProducerRecord<>("demo-topic", key, value));
            System.out.println("Message envoyé : " + key + " -> " + value);
        }

        // Fermer le producteur
        producer.close();
    }
}
