import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

public class EcommerceConsumer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("group.id", "ecommerce-group");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(props);
        consumer.subscribe(Collections.singletonList("ecommerce-events"));

        System.out.println("Ecommerce Consumer is now listening...");

        Map<String, Integer> eventCounts = new HashMap<>();

        while (true) {
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
            for (ConsumerRecord<String, String> record : records) {
                String key = record.key();
                String value = record.value();

                // Mettre à jour les métriques
                eventCounts.put(key, eventCounts.getOrDefault(key, 0) + 1);

                // Afficher les détails
                System.out.printf("Event Type: %s | Data: %s%n", key, value);
            }

            // Afficher les métriques toutes les 10 secondes
            if (!eventCounts.isEmpty()) {
                System.out.println("\nCurrent Event Counts:");
                eventCounts.forEach((eventType, count) -> System.out.printf("  %s: %d%n", eventType, count));
                System.out.println();
            }
        }
    }
}
