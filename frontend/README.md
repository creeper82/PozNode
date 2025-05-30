# Frontend

This frontend uses React and TypeScript. It works with the PozNode backend written in Express.

# Initialization

To start the development server, simply run:

```
npm i
npm run dev
```

You may also build the app for production, just like any other React application, but you will need a server to serve the static files (more details online)

# Environment variables

You may also configure the project's port, host, and the backend API URL, using the following variables:

```
VITE_HOST=0.0.0.0
VITE_PORT=3000
VITE_BACKEND_API_URL=http://127.0.0.1:5000/api/
```

Values mentioned above are set by default.

# Testing

To run tests (powered by `ViTest`), type:
```
npm test
```
