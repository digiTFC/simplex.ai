# Project Folder Structure Documentation

# 🏛️ **src/app**
The main source directory containing core application files.

- #### 📁 `_components`
&nbsp;&nbsp;&nbsp;&nbsp;Contains shared reusable components used throughout the application.

- #### 📁 `config`
&nbsp;&nbsp;&nbsp;&nbsp;Stores any configuration file either backend configuration or any external service configuration.

- #### 📁 `layout`
&nbsp;&nbsp;&nbsp;&nbsp;Stores layout (Large components like navbar) used throughout the app.

- #### 📁 `hooks`
&nbsp;&nbsp;&nbsp;&nbsp;Contains custom React hooks that provide reusable logic across the application.


---

# 📁 `pages`
Contains all the pages of the application, structured in different sections.

---

## 📁 `(protected)`
Holds pages that require authentication or specific user roles to access.

  - #### 📁 `_components`
  &nbsp;&nbsp;&nbsp;&nbsp;Reusable components specifically for pages inside `(protected)`.

  - #### 📁 `_service_`
  &nbsp;&nbsp;&nbsp;&nbsp;Constains the services used by more thant on element in the protected 

  - #### 📁 `dashboard`
  &nbsp;&nbsp;&nbsp;&nbsp;Holds all the user dashboard related elements (from, pages to functions, to schemas)
    - #### 📁 `subscriptions`
  &nbsp;&nbsp;&nbsp;&nbsp;Contais the subscriptions plan and the paiement methods screens and functions

## 📁 `(public)`
Contains pages that share do not need authentification to access


  - #### 📁 `(With)`
  &nbsp;&nbsp;&nbsp;&nbsp;Likely contains a page where users can apply to become partners.

  - #### 📁 `faqPage`
  &nbsp;&nbsp;&nbsp;&nbsp;Holds the FAQ (Frequently Asked Questions) page.

  - #### 📁 `home`
  &nbsp;&nbsp;&nbsp;&nbsp;The home page of the application.
  
  - #### 📁 `allcourses`
  &nbsp;&nbsp;&nbsp;&nbsp;Displays a list of all available courses.


## 📁 `admin`
Contains pages and components related to admin functionalities.
  - #### 📁 `dashboard`
  &nbsp;&nbsp;&nbsp;&nbsp;Contains the admin dashboard page



## 📁 `courseDetails`
Handles individual course details and their specific pages.

- #### 📁 `[coursename]`
&nbsp;&nbsp;&nbsp;&nbsp;Dynamic route folder for individual course pages, where `[coursename]` represents different course names.


## 📁 `loginSignup`
&nbsp;&nbsp;&nbsp;&nbsp;Manages authentication pages for login and signup.

---

## 📁 `utils`
Contains utility files for various functionalities.

- 📄 `firebase.utils.ts` - Manages Firebase-related utility functions.
- 📄 `interface.ts` - Defines TypeScript interfaces used across the project.
- 📄 `navigation.ts` - Handles navigation-related logic.
- 📄 `layout.tsx` - Defines the layout structure for the home page.
---

# Necessary Understanding
  - #### 📄page.tsx
  &nbsp;&nbsp;&nbsp;&nbsp;Designs the page of the current folder, where the design is actually implemented
  - #### 📄layout.tsx
  &nbsp;&nbsp;&nbsp;&nbsp;Applies a default  design to all the elements in the current folder with all the pages beign childrens 
  - #### 📄not-found.tsx
  &nbsp;&nbsp;&nbsp;&nbsp;Designsthe not-found page (404) for all the elements in the current folder
  - #### 📄(folder_name)
  &nbsp;&nbsp;&nbsp;&nbsp;Designs a group which helps seperate app sections, the group name it self is not included in the routing and elements in the gr
  - #### 📄[folder_name]
  &nbsp;&nbsp;&nbsp;&nbsp;Designs a dynamic folder, use to make a single view for elements of the same type (to show the details of something)


  ---

  #Any Question
  Feel free to reach of the repo contributors or check out the [📖Next.js Documentation](https://nextjs.org/docs)  