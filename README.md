# WConv

<!-- Project Logo Placeholder -->
<div align="center">
  <img src="./screenshots/logo.png" alt="WConv Logo" width="200" height="200">
</div>

A powerful file conversion platform that supports multiple formats with real-time processing notifications and horizontal scaling capabilities.

## 🚀 Features

### File Format Support

**Image Formats:**
- **PNG** → JPG, WEBP, AVIF, GIF
- **JPG** → PNG, WEBP, AVIF, GIF
- **WEBP** → PNG, JPG, AVIF, GIF
- **AVIF** → PNG, JPG, WEBP, GIF
- **TIFF** → PNG, JPG, WEBP, GIF
- **GIF** → PNG, JPG, WEBP, TIFF

**Document Formats:**
- **PDF** → DOCX
- **DOCX** → HTML, PDF

**Audio Formats:**
- **MP3** → AAC, WAV, OGG, FLAC
- **AAC** → MP3, WAV, OGG, FLAC
- **WAV** → MP3, AAC, OGG, FLAC
- **OGG** → MP3, AAC, WAV, FLAC
- **FLAC** → MP3, AAC, WAV, OGG

### Additional Features
- **Image Compression** - Optimize file sizes while maintaining quality
- **Image Resizing** - Adjust dimensions to meet your requirements
- **Real-time Notifications** - Get instant updates on conversion progress
- **Horizontal Scaling** - Handle high-volume processing efficiently

## 🏗️ Architecture

WConv is built with modern technologies to ensure scalability and performance:

- **Frontend**: Next.js - React-based framework for optimal user experience
- **Backend**: Nest.js - Scalable Node.js framework with TypeScript support
- **Message Broker**: BullMQ - Reliable job queue management
- **Real-time Communication**: Socket.io - Instant notifications and updates
- **Cache & Pub/Sub**: Redis - High-performance data structure store
- **Database**: PostgreSQL - Robust relational database
- **Deployment**: Docker & Docker Compose - Containerized deployment
- **File Storage**: AWS S3 - Scalable object storage for files
- **Authentication**: Google OAuth - Secure user authentication

## 📋 Prerequisites

Before installing WConv, ensure you have the following installed on your system:

- **Docker** (version 20.0 or higher)
- **Docker Compose** (version 2.0 or higher)

### Installing Docker

**Windows/Mac:**
Download and install Docker Desktop from the [official Docker website](https://www.docker.com/products/docker-desktop/)

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

**Docker Compose:**
Docker Compose is included with Docker Desktop. For Linux installations:
```bash
sudo apt-get update
sudo apt-get install docker-compose-plugin
```

## 🚀 Installation & Configuration

Getting WConv up and running is simple with Docker:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/wconv.git
   cd wconv
   ```

2. **Create .env.docker file in root dir:**
```env
NODE_ENV="production"

PORT=3000
APPLICATION_URL="http://localhost"

CORS="http://localhost"

CLIENT_URL="http://localhost"
CLIENT_AUTH_URL="${CLIENT_URL}/login"
CLIENT_DASHBOARD_URL="${CLIENT_URL}/conversion/dashboard"

JWT_ACCESS_SECRET=""
JWT_REFRESH_SECRET=""
REFRESH_TOKEN_COOKIE_NAME="refreshToken"

DATABASE_URL="postgresql://admin:admin@postgress:5432/main?schema=public"
REDIS_HOST="redis"
REDIS_PORT=6379

GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

S3_REGION=""
S3_ACCESS_KEY_ID=""
S3_SECRET_ACCESS_KEY=""
S3_BUCKET_NAME=""
S3_FILES_FOLDER=""

PYTHON_CMD="python3"
```
**Fill empty rows, don't change others**

3. **Start the application:**
   ```bash
   docker compose up
   ```

That's it! The application will automatically:
- Build all necessary containers
- Set up the database
- Start all services

```bash
docker compose -f docker-compose.dev.yml up
```