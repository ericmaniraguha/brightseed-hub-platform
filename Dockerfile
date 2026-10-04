# Stage 1: Build the frontend
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend
# Copy package files and install dependencies
COPY frontend/package*.json ./
RUN npm install

# Copy all frontend files and build
COPY frontend/ ./
RUN npm run build

# Stage 2: Build the backend and serve
FROM node:18-alpine

WORKDIR /app

# Create necessary directories
RUN mkdir -p /app/backend /app/frontend

# Copy backend package files and install dependencies
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install --production

# Copy backend source code
COPY backend/ ./

# Copy frontend build from stage 1
COPY --from=frontend-builder /app/frontend/dist /app/frontend/dist

# Expose backend port (adjust if needed, default is 8003)
EXPOSE 8003

# Set environment to production
ENV NODE_ENV=production
ENV BACKEND_PORT=8003

# Start the server
CMD ["node", "server.js"]
