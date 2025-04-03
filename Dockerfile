# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the built application to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
