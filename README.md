
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
        ensure prisma schema has provider as 'mysql':
        
        ```
        #schema.prisma 
        datasource db {
            provider= "mysql"
            url= env("DATABASE_URL_MAIN")
            relationMode= "prisma"
            }

        ```
        use  `prisma db push`  to push the schema to database
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
            1. Name
            2. Email Address
            3. Message
            4. Referral
        
        add the follwoing env variables :
        ```
        #notion
        NOTION_DATABASE_ID=
        NOTION_KEY=
        ```
    4. Add the follwoing env variables to use cloudinary function to upload files to cdn :
        ```        
        #cloudinary

        CLOUD_NAME=
        CLOUD_API_SECERET=
        CLOUD_API_KEY=
        ```
    5. Use Stripe CheckOut form : 
        

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
        
    1. Sign Up for Vercel: If you don't have a Vercel account, sign up for one at vercel.com 

    2. Connect Your Next.js App to Vercel: Import your Git repository to Vercel. Once you're signed up, import your repository on Vercel. You can do so from here: https://vercel.com/import/git. You'll need to install Vercel for GitHub and give it access to All Repositories.

    3. Configure Project Settings: Leave the default values for the settings, as Vercel automatically detects that you have a Next.js app and chooses optimal build settings for you

    4. Deploy Your Next.js App: Choose the branch you want to deploy (e.g., “main” for production). Vercel will build your app, run tests, and deploy it globally

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
