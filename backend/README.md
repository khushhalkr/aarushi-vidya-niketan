# PHP Backend Setup

This directory contains the PHP backend API for the AARUSHI VIDYA NIKETAN school website.

## Prerequisites

- PHP 7.4 or higher
- MySQL/MariaDB
- Web server (Apache/Nginx) or PHP built-in server

## Database Setup

1. Create a MySQL database named `aarushividyaniketan`
2. Import the SQL file:
   ```bash
   mysql -u root -p aarushividyaniketan < database.sql
   ```

Or manually run the SQL commands in `database.sql` using phpMyAdmin or MySQL Workbench.

## Configuration

Edit `config.php` to update your database credentials:

```php
define('DB_HOST', 'localhost');
define('DB_USER', 'root');      // Your MySQL username
define('DB_PASS', '');          // Your MySQL password
define('DB_NAME', 'aarushividyaniketan');
```

## Running the Backend

### Option 1: Using PHP built-in server
```bash
cd backend
php -S localhost:8000
```

### Option 2: Using Apache/Nginx
Place the `backend` folder in your web server's document root (e.g., `htdocs` or `www`).

## API Endpoints

### Login
- **URL**: `http://localhost/backend/login.php`
- **Method**: POST
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Login successful",
    "user": {
      "id": 1,
      "name": "User Name",
      "email": "user@example.com",
      "role": "admin"
    }
  }
  ```

### Apply for Admission
- **URL**: `http://localhost/backend/apply.php`
- **Method**: POST
- **Body**:
  ```json
  {
    "student_name": "John Doe",
    "father_name": "Jane Doe",
    "mother_name": "Mary Doe",
    "dob": "2015-05-15",
    "gender": "male",
    "class_admission": "Class 1",
    "academic_year": "2024-25",
    "address": "123 Street, City",
    "phone": "9876543210",
    "email": "parent@example.com",
    "previous_school": "Previous School Name"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "Application submitted successfully",
    "application_id": 1
  }
  ```

## Default Admin User

After importing the database, a default admin user is created:
- **Email**: admin@aarushividyaniketan.com
- **Password**: admin123

**Important**: Change this password after first login!

## Security Notes

1. Disable error reporting in production by commenting out these lines in `config.php`:
   ```php
   // error_reporting(E_ALL);
   // ini_set('display_errors', 1);
   ```

2. Update CORS headers in `config.php` to allow only your frontend domain:
   ```php
   header("Access-Control-Allow-Origin: https://yourdomain.com");
   ```

3. Use HTTPS in production

4. Implement rate limiting for login attempts

5. Add CSRF protection for forms

## Troubleshooting

### Connection Failed
- Check MySQL service is running
- Verify database credentials in `config.php`
- Ensure database `aarushividyaniketan` exists

### CORS Errors
- Check that CORS headers are properly set in `config.php`
- Ensure the React frontend is making requests to the correct URL

### 404 Errors
- Verify PHP files are in the correct directory
- Check web server configuration
- Ensure file permissions are correct (644 for files, 755 for directories)
