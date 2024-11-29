# My Portfolio

## Project Overview

This is my personal portfolio to showcase my skills, projects, and goals as a back-end developer.

## Tech Stack

- HTML
- CSS
- JavaScript

## Features

- Banner section with a welcome message
- About Me section
- Gallery showcasing some of my works
- Contact links (email, WhatsApp, LinkedIn)

---

## Learning Git: Challenges and Solutions

While working on my portfolio, I faced several challenges with Git, particularly when pushing my changes to GitHub. Here is a breakdown of the issues and how I solved them:

### 1. **Permission Denied Error (403)**

- **Error Message:**
  ```
  remote: Permission to GbemigadEngineer/my-Portfolio.git denied to Oluwagbemiga-d-Developer.
  fatal: unable to access 'https://github.com/GbemigadEngineer/my-Portfolio.git/': The requested URL returned error: 403
  ```
- **Cause:**
  The error occurred because my GitHub account wasn't correctly authenticated, and Git was attempting to push to the wrong account.
- **Solution:**
  I re-authenticated my GitHub account using the correct credentials.
  - Opened Git Bash or Terminal
  - Ran the following command to set my correct username and email:
    ```bash
    git config --global user.name "YourGitHubUsername"
    git config --global user.email "YourGitHubEmail@example.com"
    ```
  - Ran the `git push` command again and was prompted to authenticate using my GitHub credentials.

### 2. **Incorrect Remote URL**

- **Error Message:**
  ```
  fatal: repository 'https://github.com/IncorrectUser/my-Portfolio.git/' not found.
  ```
- **Cause:**
  I had mistakenly set a wrong remote URL for the repository.
- **Solution:**
  I corrected the remote URL using:
  ```bash
  git remote set-url origin https://github.com/YourCorrectUsername/my-Portfolio.git
  ```
  Then, I successfully pushed my changes.

### 3. **Git Push Not Working**

- **Error Message:**
  ```
  fatal: unable to access 'https://github.com/username/repo.git/': The requested URL returned error: 403
  ```
- **Cause:**
  Git authentication was not properly configured, or I didn't have the correct permissions to push to the repository.
- **Solution:**
  After setting up the correct GitHub account credentials, I used the `git push origin main` command to push my changes successfully.

---

## Git Commands I Used

Here’s a summary of the Git commands I used during the process:

1. **Clone the Repository**:  
   I cloned the GitHub repository to my local machine using:
   ```bash
   git clone https://github.com/YourGitHubUsername/my-Portfolio.git
   ```
