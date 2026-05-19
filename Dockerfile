# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the built application to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Block .git and other dot-files from being served
RUN printf 'server {\n\
    listen       80;\n\
    listen  [::]:80;\n\
    server_name  localhost;\n\
    location ~ /\\.(git|env|htaccess|htpasswd) {\n\
        deny all;\n\
        return 404;\n\
    }\n\
    location / {\n\
        root   /usr/share/nginx/html;\n\
        index  index.html index.htm;\n\
    }\n\
    error_page 500 502 503 504 /50x.html;\n\
    location = /50x.html {\n\
        root /usr/share/nginx/html;\n\
    }\n\
}\n' > /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
