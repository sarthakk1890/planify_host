# Planify - Your Seamless Meeting Scheduler

Planify is a cutting-edge scheduling application designed to simplify the process of setting up meetings and organizing your day. Whether you're managing one-on-one sessions or large group meetings, Planify provides an intuitive interface and powerful features to optimize your scheduling experience.

## Features

- **Google & GitHub Authentication:** Planify lets you sign in with your Google or GitHub account to start scheduling meetings right away.
- **Nylas Integration:** Use Nylas to sync your emails, calendar, and contacts for a more comprehensive scheduling experience.
- **PostgreSQL Database:** Planify stores your data securely using a PostgreSQL database, ensuring all your scheduling information is safe and easily accessible.
- **Customizable Scheduling:** Easily adjust your calendar settings, meeting duration, and availability preferences to suit your workflow.
- **Real-Time Updates:** Schedule meetings in real time and sync changes instantly across devices, ensuring you always stay updated.

## Getting Started

To get started with Planify, you'll need to clone the repository and set up your local development environment.

### 1. Clone the Repository

```bash
git clone https://github.com/sarthakk1890/planify_host.git
cd planify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Before running the project, make sure to configure the following environment variables in your .env.local file. You can find your necessary API keys and database URLs from the respective platforms (Nylas, Google, GitHub, and PostgreSQL). Create a .env.local file at the root of your project and add the following:

```bash
# Nylas API credentials
NYLAS_CLIENT_ID
NYLAS_API_SECRET_KEY
NYLAS_API_URL

# PostgreSQL Database credentials
DATABASE_URL
DIRECT_URL

# Authentication secrets
NEXTAUTH_SECRET

# GitHub OAuth credentials
GITHUB_CLIENT_ID
GITHUB_CLIENT_SECRET

# Google OAuth credentials
GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET

# File upload token (optional for file uploads)
UPLOADTHING_TOKEN

# URL for your app (change this if you're deploying to a different host)
NEXT_PUBLIC_URL
```
## 4. Set the Callback URLs

Make sure to configure the callback URIs for each of the OAuth providers (GitHub, Google, Nylas) within their respective developer dashboards.

- **Google OAuth Redirect URI**:
  - URI: `http://localhost:3000/api/auth/callback/google`
  
- **GitHub OAuth Redirect URI**:
  - URI: `http://localhost:3000/api/auth/callback/github`
  
- **Nylas OAuth Redirect URI**:
  - URI: `http://localhost:3000/api/auth/callback/nylas`

Update these URIs in the respective OAuth provider's configuration page to ensure that authentication works correctly.


## 5. Run the Development Server

Once the environment variables are configured, you can start the development server:

```bash
npm run dev
```
