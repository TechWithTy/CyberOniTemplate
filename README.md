Template Name
Description
Briefly describe the purpose and features of this template.
Getting Started
Follow these steps to create a new project using this template:
1. Create a New Repository:

    ◦ Click the "Use this template" button on the template repository page.

    ◦ Enter a name for your new repository based on the template.
2. Clone the Repository:
    ◦ Clone the newly created repository to your local machine:

      ```git clone <https://github.com/nehal7-ml/DataDrivenCyberoni-template.git>```

3. Installation:
    ◦ Navigate to the project folder:

      ```cd <your-new-repo-name>```

    ◦ Install dependencies:

        npm install

4. Configuration:

    1. Configure any project-specific settings, such as environment variables or API keys, in the appropriate configuration files.  

    2. add Planetscale databse url
        
        ```DATABASE_URL_MAIN=mysql://<username>:<password>@aws.connect.psdb.cloud/<Database_Name>?sslaccept=strict```
    3. add sendgrid keys
    
        ```
        ## sengrid credentials for contact forms
        SENDGRID_API_KEY=
        ## list name to add contact to
        SENDGRID_LIST=
        SENDGRID_EMAIL=
        # recieves contact form messages
        CONTACT_EMAIL=
        ```
    
    

Usage
Explain how to use the template in a new project:
1. Development:
    ◦ Start the development server:

bashCopy codenpm run dev

2. Production Build:
    ◦ Create a production-ready build:

    ```npm run build```

3. Testing:
    ◦ Run tests (if applicable):

    ```npm test```

4. Deployment:
    ◦ Deploy your project to the desired hosting platform (e.g., Vercel, Netlify, etc.).
Customization
Explain how users can customize and extend the template:
1. Adding Components:
    ◦ Add custom components or modify existing ones in the src/components directory.
2. Styling:
    ◦ Customize the styles using the provided CSS framework (e.g., Tailwind CSS).
3. Data Management:
    ◦ Implement data management solutions like Prisma for your specific needs.
Contributing
Explain how others can contribute to the template:
1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.
License
This template is open-source and available under the MIT License.
Acknowledgments
Give credit to any third-party libraries, components, or resources used in the template.