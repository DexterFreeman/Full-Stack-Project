package com.nology.bbx;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication()
public class BbxApplication {

	public static void main(String[] args) {
		SpringApplication.run(BbxApplication.class, args);
	}

}
