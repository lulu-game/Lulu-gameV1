# Game Backend Documentation

## Overview

The Game Backend is a robust Python application engineered to facilitate the retrieval and manipulation of African greetings and their corresponding answers. It provides a scalable API endpoint for accessing this data, encapsulating it within a well-defined interface. Leveraging modern software engineering principles, the backend ensures flexibility, maintainability, and extensibility while delivering efficient performance.

## Installation

### Prerequisites

- **Python 3.x:** The backend is developed in Python 3.x, ensuring compatibility with the latest language features.
- **Django (Optional):** For those opting for a relational database solution, Django serves as the web framework of choice, offering powerful ORM capabilities.
- **SQLite3 (Optional):** Alternatively, SQLite3 is provided as a default lightweight database backend for quick setup and testing purposes.
- **Web Browser:** A modern web browser is required for testing the provided sample front end.

### Setup Steps

1. **Clone Repository:** Begin by cloning the repository to your local machine using the provided Git URL.
   
   ```bash
   git clone https://github.com/Lulu-gameV1/language_game.git
   ```

2. **Navigate to Project Directory:** Move into the cloned project directory using the command line.
   
   ```bash
   cd language_game
   ```

3. **Install Dependencies:** Depending on your chosen setup, install the required dependencies. If using Django and SQLite, set up a virtual environment and install Django.
   
   ```bash
   python3 -m venv env
   source env/bin/activate
   pip install django
   ```

4. **Load Data:** Utilize the provided Python script `load_questions.py` to load the questions and answers data into the database solution for the model to retirev them from the database
   
   ```bash
   python load_questions.py
   ```

5. **Start Server:** initiate the server to begin serving API requests.
   
   ```bash
   python3 manage.py runserver
   ```

6. **Access Endpoint:** Access the API endpoint from your web browser at `http://127.0.0.1:8000/game` to ensure proper functionality.

## Usage

### API Endpoint

The API endpoint `/game` serves as the central component for interacting with the African greetings and their associated answers. Leveraging RESTful principles, it offers a standardized interface for seamless integration with client applications. By issuing HTTP GET requests, users can effortlessly retrieve the desired data in JSON format, promoting interoperability and ease of consumption.

### Sample Front End

Included within the repository is a sample HTML file `game.html`, providing a straightforward means of testing the backend functionality. This interactive front end allows users to visualize the retrieved data and validate the behavior of the backend API. With clear instructions and intuitive design, it serves as a valuable tool for both development and validation purposes.

## Database Configuration

### SQLite (Default)

For rapid prototyping and simplicity, the default configuration utilizes SQLite as the database backend. Leveraging its lightweight nature and ease of setup, developers can quickly deploy and test the backend without the overhead of complex database management.

### Custom Database

For more demanding applications requiring scalability and advanced database features, the backend can be configured to utilize a custom database solution. By integrating with relational or NoSQL databases, such as PostgreSQL or MongoDB, developers can tailor the backend to meet specific performance and scalability requirements, ensuring seamless operation in production environments.

## Contribution Guidelines

Contributions to the Game Backend are encouraged and welcomed from the software engineering community. Whether it involves enhancing existing features, fixing bugs, or introducing new functionality, contributions play a vital role in advancing the project's capabilities. To contribute, please follow the established guidelines outlined in the repository and adhere to best practices in software development.

## License

The Game Backend is licensed under the MIT License, granting users the freedom to modify, distribute, and utilize the software for both personal and commercial purposes. For detailed license terms, refer to the License file included within the repository.

---
