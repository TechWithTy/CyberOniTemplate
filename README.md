
# Getting Started
## Follow these steps to create a new project using this template:
1. Create a New Repository:

    ◦ Click the "Use this template" button on the template repository page.

    ◦ Enter a name for your new repository based on the template.
2. Clone the Repository:
    ◦ Clone the newly created repository to your local machine:

      ```git clone https://github.com/TechWithTy/CyberOniTemplate.git```

3. Installation:
    ◦ Navigate to the project folder:

      ```cd <your-new-repo-name>```

    ◦ Install dependencies:

        npm install

4. Configuration:

    1. Configure any project-specific settings, such as environment variables or API keys, in the appropriate configuration files.  

    2. add Planetscale database url
        
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
        Use a email with inbox you have access to for CONTACT_EMAIL as you
        will receive email here

        create List in Sendgrid Contact list with unquie name and use this for SENDGRID_LIST

    4. Create Notion table for storing contact information in a database

        create table withe the following Columns:
            1. 
## Usage
1. Development:
    ◦ Start the development server:

        npm run dev

2. Production Build:
    ◦ Create a production-ready build:

    ```npm run build```

3. Testing:
    ◦ Run tests (if applicable):

    ```npm test```

4. Deployment:
    ◦ Deploy your project to the desired hosting platform (e.g., Vercel, Netlify, etc.).
    ##### Example Vercel: 
## Customization

1. Adding Components:
    ◦ Add custom components or modify existing ones in the src/components directory.
2. Styling:
    ◦ Customize the styles using the provided CSS framework (e.g., Tailwind CSS).
3. Data Management:
    ◦ Implement data management solutions like Prisma for your specific needs.
## Contributing
1. Fork the repository.
2. Create a new branch for your feature or bug fix: git checkout -b feature-name.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.
### License
This template is open-source and available under the MIT License.
### Acknowledgments
