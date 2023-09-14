<h1>Data Visualization Web Application</h1>
    <p>This is a web application for visualizing time series data using Node.js, MongoDB, and a frontend built with Angular.</p>

<h2>Table of Contents</h2>
    <ul>
        <li>Getting Started</li>
            <ul>
                <li><b>Prerequisites</b>: Before you begin, ensure you have met the following requirements:</li>
                <ul>
                    <li>Node.js and npm installed</li>
                    <li>MongoDB installed and running</li>
                </ul>
            </ul>
        <li>Installation:</li>
        <ul>
            <li>Clone the repository:</li>
            <code>
                git clone https://github.com/yourusername/data-visualization-web-app.git<br>
                cd data-visualization-web-app
            </code>
            <li>Install dependencies:</li>
            <code>
                npm install
            </code>
            <li>Configure environment variables:</li>
            <p>Create a <code>.env</code> file in the root directory and provide the necessary environment variables, including MongoDB connection details.</p>
            <code>
                MONGODB_URI=your_mongodb_uri<br>
                PORT=3000
            </code>
            <p>Replace <i>your_mongodb_uri</i> with your actual MongoDB URI.</p>
            <li>Start the server:</li>
            <code>
                npm start
            </code>
        </ul>
    </ul>

<h2>Usage</h2>
    <ul>
        <li>Visit <a href="http://localhost:3000">http://localhost:3000</a> in your web browser to access the Data Visualization web application.</li>
        <li>Use the web interface to input time series data for various variables along with timestamps.</li>
        <li>The application will store the data in MongoDB and display it as interactive line charts.</li>
    </ul>

<h2>Features</h2>
    <ul>
        <li>Accepts time series data for 10 variables.</li>
        <li>Stores data in MongoDB for future retrieval.</li>
        <li>Provides an interactive web interface for data input and visualization.</li>
        <li>Implements validation for data integrity.</li>
        <li>Implements error handling for both the server and client sides.</li>
    </ul>

<h2>Contributing</h2>
    <p>Contributions are welcome! If you would like to contribute to this project, please open an issue or create a pull request with your proposed changes.</p>
