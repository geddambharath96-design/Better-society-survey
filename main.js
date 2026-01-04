
<!DOCTYPE html><html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My First Website</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background: #f4f4f4;
      color: #333;
    }
    header {
      background: #222;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    nav {
      background: #444;
      padding: 10px;
      text-align: center;
    }
    nav a {
      color: #fff;
      margin: 0 10px;
      text-decoration: none;
      font-weight: bold;
    }
    nav a:hover {
      text-decoration: underline;
    }
    .container {
      padding: 20px;
    }
    .card {
      background: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-bottom: 20px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background: #007bff;
      color: #fff;
      cursor: pointer;
    }
    button:hover {
      background: #0056b3;
    }
    footer {
      background: #222;
      color: #fff;
      text-align: center;
      padding: 15px;
    }
  </style>
</head>
<body>  <header>
    <h1>Welcome to My Website</h1>
    <p>A simple website using HTML, CSS & JavaScript</p>
  </header>  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>  <div class="container">
    <div class="card">
      <h2>About This Site</h2>
      <p>This is a basic website template. You can modify it for your own project.</p>
      <button onclick="showMessage()">Click Me</button>
    </div>
  </div>  <footer>
    <p>© 2026 My Website</p>
  </footer>  <script>
    function showMessage() {
      alert("Hello! You clicked the button.");
    }
  </script></body>
</html>
