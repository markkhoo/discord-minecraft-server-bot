# Use the official Node.js LTS (Long-Term Support) version as the base image
FROM node:lts

# Set the working directory
WORKDIR /src

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Copy the source code to the working directory
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Install the required dependencies and compile the TypeScript code
RUN npm ci && tsc 

# Install curl for health check
RUN apt-get update && apt-get install -y curl

# Configure the health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl --fail http://localhost:5000/health || exit 1

# Start the application
CMD ["node", "dist/index.js"]
