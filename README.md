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

## Working on the navigation bars:

I started working on my navbars first and i did the following :

1. A modern and elegant navigation bar
2. Single-page scroll navigation
3. Styling and Features Implementation

4. Navigation Bar (Navbar)
   We implemented a single-page scroll navigation bar. The navbar is designed to be modern and professional, making use of a clean design with a solid color background. Each section on the page has a corresponding link in the navbar that, when clicked, scrolls smoothly to the respective section.

Key changes:

Navbar Structure: Links are created as anchor tags (<a href="#sectionID">) that refer to different sections of the page.
e.g for my about nav (<a href="#about">About</a>) the #about is the same as the id name of the about seciton ( <section id="about">)

CSS Styling: We styled the navbar to make it visually appealing and aligned with modern design principles.

1. Smooth Scrolling
   The smooth scrolling effect is achieved by using CSS or JavaScript. For simplicity, we opted for the CSS method:
   css
   Copy code
   html {
   scroll-behavior: smooth;
   }
   This makes the navigation between sections smooth without page reloads or jumps.
1. Anchor Links
   Each section of the page has a unique id that matches the href in the navbar links:

html
Copy code

<section id="about"> <!-- Section for About Me -->
<!-- Content -->
</section>
These ids allow the navbar to scroll to the respective sections when the links are clicked.

### Font Selection

For a modern and professional design, I chose the following font pairings:

Headings: Montserrat - Bold and modern, perfect for headings and main titles.
Body Text: Roboto - Clean and highly readable, providing a great balance for body content.
These fonts are integrated from Google Fonts, and the combination gives the portfolio a sleek, polished look.

## Font Implementation

To add the fonts to the project, I included the following Google Fonts link in the <head> of the HTML document:

html

<head>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
In the CSS, I applied the fonts as follows:

css
/_ Body text font _/
body {
font-family: 'Roboto', sans-serif;
color: #333;
}

/_ Headings font _/
h1, h2, h3, h4, h5, h6 {
font-family: 'Montserrat', sans-serif;
}

/_ Navigation font _/
nav a {
font-family: 'Montserrat', sans-serif;
}

## Banner Section

The banner area of the portfolio has been designed with a modern split-view layout. The left side features a professional image, and the right side contains my name, title, and a brief description of my background and aspirations as a Back-End Web Developer. This section is implemented with Flexbox to ensure responsiveness across different screen sizes. Although there is still a lot more to come, this is what we have added so far.

/_ Banner Section _/
#home {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #f5f5f5;
}

.banner-container {
display: flex;
width: 80%;
max-width: 1200px;
height: 80%;
border-radius: 10px;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.banner-image {
flex: 1;
overflow: hidden;
}

.banner-image img {
width: 100%;
height: 100%;
object-fit: cover;
}

.banner-text {
flex: 1;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: center;
text-align: left;
}

.banner-text h1 {
font-family: 'Montserrat', sans-serif;
font-size: 3rem;
margin-bottom: 10px;
color: #333;
}

.banner-text h2 {
font-family: 'Roboto', sans-serif;
font-size: 1.5rem;
margin-bottom: 15px;
color: #555;
}

.banner-text p {
font-family: 'Roboto', sans-serif;
font-size: 1.1rem;
color: #666;
}

/_ Responsive Design _/
@media (max-width: 768px) {
.banner-container {
flex-direction: column;
}

    .banner-image {
        height: 300px;
    }

    .banner-text {
        text-align: center;
        padding: 20px;
    }

}
