<h1>Data Visualization Web Application</h1>

<h4>This is a web application for visualizing time series data using Node.js, MongoDB for the backend, and a frontend
        built with Angular.</h4>

<h2>Table of Contents</h2>

<ul>
    <li><a href="#getting-started">Getting Started</a></li>
    <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
    </ul>
    <li><a href="#backend">Backend</a></li>
    <ul>
        <li><a href="#running-the-backend">Running the Backend</a></li>
    </ul>
    <li><a href="#frontend">Frontend</a></li>
    <ul>
        <li><a href="#running-the-frontend">Running the Frontend</a></li>
    </ul>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
</ul>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>

<p><b>Backend</b></p>
<ul>
    <li>Node.js and npm installed</li>
    <li>MongoDB installed and running</li>
</ul>

<p><b>Frontend</b></p>
<ul>
    <li>Node.js and npm installed</li>
    <li>Angular CLI installed</li>
</ul>

<h3>Installation</h3>

<h4>Backend</h4>
<ol>
    <li>Clone the backend repository:</li>
</ol>
<code>
    <pre>
        git clone https://github.com/raut-santosh/time-series-app.git
        cd time-series-api
    </pre>
</code>

<ol start="2">
    <li>Install backend dependencies:</li>
</ol>
<code>
    <pre>
        npm install
    </pre>
</code>

<ol start="3">
    <li>Configure backend environment variables:</li>
</ol>
<p>Create a <code>.env</code> file in the backend root directory and provide the necessary environment variables,
    including the MongoDB connection details.</p>
<code>
    <pre>
        MONGODB_URI=your_mongodb_uri
        PORT=3000
    </pre>
</code>

<p>Replace <code>your_mongodb_uri</code> with your actual MongoDB URI.</p>

<ol start="4">
    <li>Start the backend server:</li>
</ol>
<code>
    <pre>
        node index.js
    </pre>
</code>

<h4>Frontend</h4>
<ol>
    <li>Clone the frontend repository:</li>
</ol>
<code>
    <pre>
        git clone https://github.com/raut-santosh/time-series-app.git
        cd time-series-app
    </pre>
</code>

<ol start="2">
    <li>Install frontend dependencies:</li>
</ol>
<code>
    <pre>
        npm install
    </pre>
</code>

<h2>Backend</h2>

<h3>Running the Backend</h3>

<p>To run the backend server, follow these steps:</p>
<ol>
    <li>Navigate to the backend directory:</li>
</ol>
<code>
    <pre>
        cd time-series-api
    </pre>
</code>

<ol start="2">
    <li>Start the backend server:</li>
</ol>
<code>
    <pre>
        npm start
    </pre>
</code>

<h2>Frontend</h2>

<h3>Running the Frontend</h3>

<p>To run the frontend application, follow these steps:</p>
<ol>
    <li>Navigate to the frontend directory:</li>
</ol>
<code>
    <pre>
        cd time-series-app
    </pre>
</code>

<ol start="2">
    <li>Install nessary modules:</li>
</ol>
<code>
    <pre>
        npm i
    </pre>
</code>

<ol start="2">
    <li>Start the frontend server:</li>
</ol>
<code>
    <pre>
        ng serve
    </pre>
</code>

<h2>Usage</h2>

<ul>
    <li>Visit <a href="http://localhost:3000">http://localhost:3000</a> in your web browser to access the Data
        Visualization web application.</li>
    <li>Use the web interface to input time series data for various variables along with timestamps.</li>
    <li>The application will store the data in MongoDB and display it as interactive line charts.</li>
</ul>