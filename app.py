from flask import Flask, request, jsonify, send_from_directory
from flask_mysqldb import MySQL
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'colonel'
app.config['MYSQL_PASSWORD'] = '@Gsu2024'
app.config['MYSQL_DB'] = 'yourdatabase'

mysql = MySQL(app)
UPLOAD_FOLDER = 'uploads'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    print("Received register request with data:", data)
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        print("Missing username or password")
        return jsonify({'message': 'Username and password are required'}), 400

    cursor = mysql.connection.cursor()
    try:
        cursor.execute("INSERT INTO users (username, password) VALUES (%s, %s)", (username, password))
        mysql.connection.commit()
        print("User registered successfully!")
        return jsonify({'message': 'User registered successfully!'}), 201
    except Exception as e:
        print("Error during registration:", str(e))
        return jsonify({'message': str(e)}), 500
    finally:
        cursor.close()

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    print("Received login request with data:", data)
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        print("Missing username or password")
        return jsonify({'message': 'Username and password are required'}), 400

    cursor = mysql.connection.cursor()
    try:
        cursor.execute("SELECT * FROM users WHERE username=%s AND password=%s", (username, password))
        user = cursor.fetchone()
        if user:
            print("Login successful!")
            return jsonify({'message': 'Login successful!'}), 200
        else:
            print("Invalid credentials")
            return jsonify({'message': 'Invalid credentials'}), 401
    except Exception as e:
        print("Error during login:", str(e))
        return jsonify({'message': str(e)}), 500
    finally:
        cursor.close()

@app.route('/registerr', methods=['POST'])
def registerr():
    full_name = request.form['full_name']
    profile_picture = request.files['profile_picture']
    print("Received profile registration request with full_name:", full_name)

    if not full_name or not profile_picture:
        print("Missing full_name or profile_picture")
        return jsonify({'error': 'Full name and profile picture are required'}), 400
    
    cursor = mysql.connection.cursor()
    profile_picture_path = os.path.join(app.config['UPLOAD_FOLDER'], profile_picture.filename)
    profile_picture.save(profile_picture_path)
    print("Profile picture saved at:", profile_picture_path)
    
    try:
        cursor.execute("INSERT INTO profile (full_name, profile_picture) VALUES (%s, %s)", (full_name, profile_picture.filename))
        mysql.connection.commit()
        print("Profile registered successfully!")
        return jsonify({'message': 'User registered successfully'}), 201
    except Exception as e:
        print("Error during profile registration:", str(e))
        return jsonify({'message': str(e)}), 500
    finally:
        cursor.close()

@app.route('/profiles/<int:user_id>', methods=['GET'])
def profiles(user_id):
    print("Received request for profile with user_id:", user_id)
    cursor = mysql.connection.cursor()
    cursor.execute("SELECT * FROM profile WHERE id = %s", (user_id,))
    user = cursor.fetchone()
    cursor.close()
    
    if user:
        print("Profile found:", user)
        return jsonify({
            'id': user[15],
            'full_name': user[16],
            'profile_picture': f'/uploads/{user[17]}'
        })
    else:
        print("User not found")
        return jsonify({'error': 'User not found'}), 404

@app.route('/uploads/<filename>')
def uploaded_file(filename):
    print("Received request for file:", filename)
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    app.run(debug=True)
