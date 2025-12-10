# Development Guide

## Prerequisites
- Node.js (v18+)
- npm
- AWS CLI configured (for deployment)

## Getting Started

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## Tech Stack
- React 18
- Vite 6
- Styled Components
- React Router
- React Icons
- React Scroll & Parallax
- AWS Lambda (contact form backend)
- AWS SES (email service)
- AWS S3 (hosting)

## AWS Infrastructure

### Contact Form Backend
- **AWS Lambda**: Serverless function handling contact form submissions
- **AWS SES**: Email service for sending contact form messages
- **AWS API Gateway**: REST API endpoint for the Lambda function

### Hosting
- **Cloudflare Pages**: Git-based deployment from GitHub repository
- **Cloudflare CDN**: Global content delivery network

## Environment Variables
Create a `.env` file in the root directory:
```
VITE_API_ENDPOINT=your-api-gateway-endpoint
```

## AWS Setup
The project includes setup scripts and configuration files:
- `setup-aws.sh` - AWS infrastructure setup script
- `lambda/` - Lambda function code for contact form
- `iam-policy.json` - IAM permissions for SES

## Deployment
1. Push changes to GitHub repository
2. Cloudflare Pages automatically builds and deploys from the main branch
3. Lambda function can be updated using the `setup-aws.sh` script

## Architecture
- **Frontend**: Cloudflare Pages (static hosting)
- **Backend**: AWS Lambda + API Gateway (contact form)
- **Email**: AWS SES (email delivery)

This hybrid approach combines Cloudflare's excellent static hosting with AWS's serverless backend.
