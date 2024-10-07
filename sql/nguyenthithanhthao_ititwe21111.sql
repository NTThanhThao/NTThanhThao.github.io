USE my_personal_website;

CREATE TABLE about (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    interests VARCHAR(255)
);

CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    service_name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2)
);

CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    image_url VARCHAR(255) NOT NULL,
    description VARCHAR(255)
);

CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    feedback TEXT,
    rating INT CHECK (rating BETWEEN 1 AND 5)
);

CREATE TABLE contact (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    message TEXT
);

CREATE TABLE service_about (
    service_id INT,
    about_id INT,
    PRIMARY KEY (service_id, about_id),
    FOREIGN KEY (service_id) REFERENCES services(id),
    FOREIGN KEY (about_id) REFERENCES about(id)
);

CREATE TABLE testimonial_services (
    testimonial_id INT,
    service_id INT,
    PRIMARY KEY (testimonial_id, service_id),
    FOREIGN KEY (testimonial_id) REFERENCES testimonials(id),
    FOREIGN KEY (service_id) REFERENCES services(id)
);

INSERT INTO about (name, bio, interests) VALUES
('John Doe', 'A passionate web developer.', 'Coding, Traveling, Reading');

INSERT INTO services (service_name, description, price) VALUES
('Web Development', 'Building responsive websites.', 500.00),
('SEO Services', 'Improving website visibility.', 300.00),
('Graphic Design', 'Creating stunning visuals.', 400.00);

INSERT INTO gallery (image_url, description) VALUES
('images/image1.jpg', 'My favorite picture.');

INSERT INTO testimonials (client_name, feedback, rating) VALUES
('Huong', 'Great service and support!', 5),
('Tuan', 'Very satisfied with the results.', 4);

INSERT INTO contact (name, email, message) VALUES
('ly', 'lyly@gmail.com', 'I would like to inquire about your services.'),
('lan', 'lan@gmail.com', 'Can we schedule a meeting?');

INSERT INTO service_about (service_id, about_id) VALUES
(1, 1),  
(2, 1),  
(3, 1);  

INSERT INTO testimonial_services (testimonial_id, service_id) VALUES
(1, 1),  
(2, 2);  
