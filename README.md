# My Mart Project

## Overview
My Mart is a Node.js application built with Express, MongoDB, and TypeScript. It provides a multi-estate support system with role-based access control for users (admin, resident, vendor). The application includes vendor analytics features such as ratings, frequency, and availability, and exposes a public API for estate applications to consume vendor data.

## Features
- **Multi-estate Support**: Dynamic JSON configurations for managing multiple estates.
- **Role-Based Access Control**: Different access levels for admins, residents, and vendors.
- **Vendor Analytics**: Track vendor performance through ratings and availability metrics.
- **Public API**: Expose vendor data for external estate applications.

## Technologies Used
- Node.js
- Express
- MongoDB
- TypeScript
- JWT for authentication
- Swagger for API documentation

## Project Structure
```
my-mart
├── src
│   ├── app.ts
│   ├── config
│   │   ├── estates
│   │   │   └── sample-estate.json
│   │   └── index.ts
│   ├── controllers
│   │   ├── auth.controller.ts
│   │   ├── estate.controller.ts
│   │   ├── vendor.controller.ts
│   │   └── analytics.controller.ts
│   ├── middlewares
│   │   ├── auth.middleware.ts
│   │   ├── role.middleware.ts
│   │   └── error.middleware.ts
│   ├── models
│   │   ├── user.model.ts
│   │   ├── vendor.model.ts
│   │   ├── estate.model.ts
│   │   └── analytics.model.ts
│   ├── routes
│   │   ├── auth.routes.ts
│   │   ├── estate.routes.ts
│   │   ├── vendor.routes.ts
│   │   ├── analytics.routes.ts
│   │   └── public.routes.ts
│   ├── services
│   │   ├── auth.service.ts
│   │   ├── estate.service.ts
│   │   ├── vendor.service.ts
│   │   └── analytics.service.ts
│   ├── types
│   │   └── index.ts
│   └── utils
│       ├── jwt.ts
│       └── swagger.ts
├── swagger
│   └── swagger.yaml
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   cd my-mart
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure your MongoDB connection in the `src/config/index.ts` file.

4. Run the application:
   ```
   npm start
   ```

5. Access the API documentation at `/api-docs` after starting the server.

## Usage
- Use the authentication routes to register and log in users.
- Access estate-related operations through the estate routes.
- Manage vendor data using the vendor routes.
- Retrieve vendor analytics via the analytics routes.
- Consume vendor data through the public API.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.