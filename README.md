# pagination-filter-example

This project is a small IMDB clone created with the aim of learning and mastering the implementation of filter, sort, pagination, and search features in web applications. The IMDB clone showcases a collection of movies and their associated details. By working on this project, I aimed to gain valuable experience that can be applied to other projects, making them more efficient and user-friendly.

### The project includes the following features:

- Pagination: Displaying a large dataset in smaller, manageable chunks to improve user experience and reduce server load.
- Filtering: Allowing users to filter the dataset based on specific criteria to view relevant information.
- Search: Enabling users to search for specific keywords or terms within the dataset.
- Sort: Allowing users to sort the dataset based on different attributes in ascending or descending order.

### Tech Stack

The project utilizes the following technologies:
### Frontend:
- React
### Backend:
- Node.js
- Express.js (or any other chosen backend framework)
- Mongoose (for interacting with the MongoDB database)

## Getting Started

### clone the repositery

```bash
git clone https://github.com/your-username/imdb-clone.git
```

### Navigate to the project directory:
```bash
cd imdb-clone
```

### Navigate to Server side:
```bash
cd server
```

### Create a .env file in the server directory to store environment variables:
```bash
PORT=3001
MONGODB_URI=your_mongodb_connection_string
```

### Install dependency and start the server
```bash
npm install
npm start
```

### Create a .env file in the client directory to store environment variables:
```bash
REACT_APP_API_URL = http://localhost:3001/api/movies
```

### Navigate to client Side:
```bash
cd ../client
```

### Install dependency and start the client side
```bash
npm install
npm start
```

Open your web browser and visit http://localhost:3000 to access the IMDB Clone.
