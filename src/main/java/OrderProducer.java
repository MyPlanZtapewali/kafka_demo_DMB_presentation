import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.util.Properties;

public class OrderProducer {
    public static void main(String[] args) {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");

        KafkaProducer<String, String> producer = new KafkaProducer<>(props);

        String topic = "ecommerce-events";

        for (int i = 1; i <= 5; i++) {
            String key = "order";
            String value = "OrderPlaced: OrderID=" + i;
            producer.send(new ProducerRecord<>(topic, key, value));
            System.out.println("Order event sent: " + value);
        }

        producer.close();
    }
}