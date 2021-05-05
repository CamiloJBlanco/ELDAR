package com.example.backend;

import com.example.backend.model.User;
import com.example.backend.model.enums.UserEnum;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private UserRepository userRepository;

	@Override
	public void run(String... args) throws Exception {
		this.userRepository.save(new User(1, "Camilo", "Blanco", "092921921", "cblanco@gmail.com", UserEnum.SINCONFIRMAR));
		this.userRepository.save(new User(2, "Jorge", "Blanco", "092921922", "jblanco@gmail.com", UserEnum.SINCONFIRMAR));
		this.userRepository.save(new User(3, "Maria", "Blanco", "092921923", "mblanco@gmail.com", UserEnum.SINCONFIRMAR));
		this.userRepository.save(new User(4, "Susana", "Blanco", "092921924", "sblanco@gmail.com", UserEnum.SINCONFIRMAR));
		this.userRepository.save(new User(5, "Fran", "Blanco", "092921925", "fblanco@gmail.com", UserEnum.CONFIRMADO));
		this.userRepository.save(new User(6, "Milagros", "Blanco", "092921926", "milblanco@gmail.com", UserEnum.CONFIRMADO));
		this.userRepository.save(new User(7, "Valentina", "Blanco", "092921927", "vblanco@gmail.com", UserEnum.CONFIRMADO));
		this.userRepository.save(new User(8, "Martin", "Blanco", "092921928", "Marblanco@gmail.com", UserEnum.CONFIRMADO));
	}
}
