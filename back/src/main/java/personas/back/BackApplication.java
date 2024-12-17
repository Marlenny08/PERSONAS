package personas.back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin(origins = "http://localhost:3306")
public class BackApplication {

	public static void main(String[] args) {

		SpringApplication.run(BackApplication.class, args);
	}

}
