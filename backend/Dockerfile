FROM node:18-alpine

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-venv \
    python3-dev \
    build-essential \
    ffmpeg \
    libreoffice \
    default-jre \
    curl \
    wget \
    git \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgomp1 \
    libgstreamer1.0-0 \
    && rm -rf /var/lib/apt/lists/*

RUN ln -sf python3 /usr/bin/python

RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

RUN pip install --upgrade pip

RUN pip install --no-cache-dir \
    wheel \
    setuptools \
    opencv-python-headless \
    Pillow \
    lxml \
    python-docx \
    pdf2docx

WORKDIR /app

ENV PATH="/opt/venv/bin:$PATH"

COPY package*.json ./

RUN npm ci --only=production && npm cache clean --force

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD npx prisma db push && npm run start:prod