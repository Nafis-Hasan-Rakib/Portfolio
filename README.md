# NafisPhantomX — Cybersecurity & Networking Portfolio

A personal portfolio website for **Md. Nafis Hasan Rakib**, showcasing cybersecurity, penetration-testing, networking, technical skills, experience, certifications, education, and contact information.

## Live Demo

After enabling GitHub Pages, add your published website URL here:

`https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY/`

## About the Project

This portfolio presents my interests and experience across cybersecurity and network engineering. It is built as a static website using HTML, CSS, and JavaScript, with a modern glassmorphism-inspired interface.

## Features

- Responsive portfolio layout with desktop navigation and a mobile navigation drawer
- Hero section with an animated typing effect for professional roles
- Animated portfolio statistics
- About-me section and technical skills overview
- Cybersecurity and networking service cards
- Work experience timeline
- Certifications and academic qualifications
- Resume and certificate PDF links
- GitHub, LinkedIn, Facebook, and email links
- Scroll-aware navigation highlighting and a back-to-top button
- Glass-card mouse spotlight interaction
- “Get In Touch” contact form integrated with [Web3Forms](https://web3forms.com/) to deliver submissions to the verified email address configured in Web3Forms

## Technologies Used

- **HTML5** — page structure and content
- **CSS3** — responsive layout, styling, animations, and glassmorphism effects
- **JavaScript** — interactive navigation, typing animation, animated statistics, and contact-form submission
- **Google Fonts** — Plus Jakarta Sans and Fira Code
- **Font Awesome** — icons
- **Web3Forms** — contact-form delivery
- **GitHub Pages** — static website hosting

## Project Structure

```text
Portfolio-main/
├── index.html
├── style.css
├── script.js                 # Or script-updated.js; see setup note below
└── assets/
    ├── 1.webp
    ├── 2.webp
    ├── CNSP.pdf
    ├── Certificate L3_Md. Nafis Hasan Rakib.pdf
    ├── Certificate L4_Md. Nafis Hasan Rakib.pdf
    ├── EHE.pdf
    ├── EHP.pdf
    ├── Resume of Nafis Hasan Rakib.pdf
    └── ...                   # Supporting images and certificate previews
```

Keep the `assets/` folder and its file paths intact, because the portfolio links to these files.

## Run Locally

1. Download or clone this repository.
2. Open the project folder in your code editor.
3. Check that the JavaScript filename referenced at the bottom of `index.html` matches the actual JavaScript file in the project.
4. Open `index.html` in a browser, or use a local development server such as the VS Code Live Server extension.
5. Test the navigation, animations, PDF links, and contact form.

### Important: Match the JavaScript Filename

The HTML must reference the exact name of the JavaScript file. For example, if the file in your repository is named `script.js`, use:

```html
<script src="script.js" defer></script>
```

If your HTML contains `<script src="script-updated.js" defer></script>`, then either rename the JavaScript file to `script-updated.js` or change the HTML reference to `script.js`. If these names do not match, the JavaScript interactions and contact-form handler will not run.

## Configure the Contact Form

The contact form uses Web3Forms, so no custom backend is required for this static GitHub Pages site.

1. Create an access key at [Web3Forms](https://web3forms.com/).
2. Verify the email address where you want to receive submissions.
3. Open `index.html` and find the hidden input named `access_key`.
4. Replace the placeholder value `YOUR_WEB3FORMS_ACCESS_KEY` with your actual Web3Forms access key.
5. Save, commit, and push the change to GitHub.
6. Submit a test message on the published website. Check the verified inbox and spam folder if the email does not arrive.

Example:

```html
<input
  type="hidden"
  name="access_key"
  value="YOUR_WEB3FORMS_ACCESS_KEY"
>
```

Replace the placeholder with your real key in your local copy. **Do not put your Gmail password, SMTP credentials, or other private account secrets in frontend files.** A Web3Forms frontend access key is intended to be used in client-side code, so it will be visible to visitors. Monitor submissions for spam and use any available domain or abuse controls offered by your form service.

## Deploy to GitHub Pages

1. Push the project files to your GitHub repository.
2. Open the repository on GitHub and go to **Settings → Pages**.
3. Under the build and deployment settings, select **Deploy from a branch** if that is the method you use.
4. Select the branch containing the site (commonly `main`) and the correct folder (commonly `/ (root)`), then save.
5. Wait for GitHub Pages to finish deploying and open the published URL.
6. Test the contact form on the live site, not only on your local computer.

GitHub's Pages configuration can vary by repository; follow the options displayed for your repository.

## Contact

- **Email:** [pentester.nafishasan@gmail.com](mailto:pentester.nafishasan@gmail.com)
- **GitHub:** [Nafis-Hasan-Rakib](https://github.com/Nafis-Hasan-Rakib)
- **LinkedIn:** [Md. Nafis Hasan Rakib](https://www.linkedin.com/in/md-nafis-hasan-rakib/)
- **Facebook:** [NafisPhantomX](https://www.facebook.com/NafisPhantomX/)

## License

No license is specified in this repository at present. Unless a license is added, do not assume others have permission to reuse, redistribute, or modify the project.
