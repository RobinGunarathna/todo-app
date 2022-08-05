![image](https://user-images.githubusercontent.com/95103308/182924138-8a58636b-ac9b-4642-9e2c-f99a24287990.png)

Deployed link: https://todo-app-p4.herokuapp.com/login/?next=/

# 1. Purpose of the project
Just a simple to do app!
Once you sign up you can add tasks that you need to get done.
# 2. How it works
A first time user will se this page:

![image](https://user-images.githubusercontent.com/95103308/182943338-779e3bfd-aaa6-43ff-b1e5-ed0548a6efa0.png)

If you have an account just sing in if you dont have one press on sign up. It will look like this:

![image](https://user-images.githubusercontent.com/95103308/182944240-ed32275d-0ba5-4e81-bec8-1644624d46a8.png)

When you press sign up you will se this page:

![image](https://user-images.githubusercontent.com/95103308/182944797-a7febe2d-dc04-438b-8a7e-9f2cdd3d9233.png)

Fill in the form to create an account and press on register:

![image](https://user-images.githubusercontent.com/95103308/182945314-2d03129e-efe1-41a8-8d1e-e8eb08126567.png)

When you press on register you will automatically sign in on your new account:

![image](https://user-images.githubusercontent.com/95103308/182945879-b1bd77bc-b031-4267-8fe8-042059c3ca9b.png)

When you are signed in press on add task +:

![image](https://user-images.githubusercontent.com/95103308/182946395-b56fca42-0fd2-4121-9bf0-631aaf6e4f99.png)


When you press on add task + you will be redirected to the task form:

![image](https://user-images.githubusercontent.com/95103308/182948171-cd431fa3-d330-4e49-8c9c-94cbaf5a6d62.png)

When you're done filling in the form press on submit:

![image](https://user-images.githubusercontent.com/95103308/182948675-242fc42d-0164-43de-b6fd-e88d1c3da3b3.png)

When you press on submit your task will be added to your task list and it will show you how many incompleted tasks you have like this:

![image](https://user-images.githubusercontent.com/95103308/182950176-841ded39-542a-4f7e-b1e1-f7f946eab9b1.png)

How it looks when you add more tasks:

![image](https://user-images.githubusercontent.com/95103308/182951448-51482911-850b-4dfc-8ddc-55e7ca6d6bbf.png)

When you complete a task to mark it as complete or when you want to edit a task press on that task you want to complete/edit and
you will be redirected to the task form:

![image](https://user-images.githubusercontent.com/95103308/182953251-d53e4a2b-ac72-4bf0-b843-8fb84c944282.png)

After you press on submit when you have edited/completed a task it will look like this:

![image](https://user-images.githubusercontent.com/95103308/182953820-62b74b7d-cf39-4597-ad69-2a248a26b4df.png)

If you need to delete a task press on the red "X":

![image](https://user-images.githubusercontent.com/95103308/182954230-5aaf17a1-1a6b-45e7-af6d-f6ef4bd5ce4f.png)

When you press on the red "X" to delete a task you will be redirected to this page:

![image](https://user-images.githubusercontent.com/95103308/182954635-5970354b-6c5a-4c47-981a-53b02bc09a62.png)

Now it's only two tasks left:

![image](https://user-images.githubusercontent.com/95103308/182954948-dc12f1da-521f-4058-9d30-8dff1614f320.png)

If you have many tasks and it's hard to find one search for it in the search bar:

![image](https://user-images.githubusercontent.com/95103308/182955447-9375a955-b570-40ca-adec-f3be6c1d7d66.png)

Sign out is located in the top right corner:


![image](https://user-images.githubusercontent.com/95103308/182955670-f632c8d6-1653-45eb-9e9b-2a54d6c90db6.png)

Time and date:

![image](https://user-images.githubusercontent.com/95103308/182956092-773838e8-6235-4dee-97b2-96ee58f91029.png)
# 3. Planning/Execution (in order)
  ## 3.1 Setting up django
  First I started with starting a project and then an app in django.
  After that I connected my views and urls file for url routing.
  
  ## 3.2 setting up the model and database
  I created one model as my database table with the attributes: user, title (for task titles), description(for task discriptions), complete(for if a task is complete or not)

  and create(for the time and date).

  I used db.sqlite3 while in development.

  ## 3.3 setting up tasks page
  started with the task list page wich displays your tasks, search bar, add task button, delete task button, logout button and time.
  
  ## 3.4 The detail page
  the detail page just showed your task. I removed it later because it was a unnecessary.

  ## 3.5 The create task page
  The create page to create your tasks and mark your tasks as complete.

  ## 3.6 The delete page
  The delete page shows up when you want to delete a task. It asks you if you are sure.
  
  ## 3.7 login/logout

  ## 3.8 restricted pages/user specific data
  restricted pages: If a user is not logged in it will be redirected to the log in page.
  
  user specific data: A user only sees their own tasks when signed in.

  ## 3.9 User registration (sign in)

  ## 3.10 Added a search bar to the tasks list page

  ## 3.11 styling pages with css and javascript for time and date
  set up the static folder and added necessary logic to link it to my html pages.
  
  static folder is linked to main.html and all other html pages inherit from main.html.
  
  ## 3.12 switched database to heroku postgres.
  Did not migrate the data from dbsqlite to heroku postgress since the project wasn't deployed when i used dbsqlite.
  
  ## 3.13 deployed project to heroku after change of database.

# 4. user stories
  
  ## 4.1 As a user
  I want to be able to add, edit and delete tasks. (completed)

  I want to be able to tell the time. (completed)

  I want to be able to se how many tasks I have left to do. (completed)

  I want to be able set a time and date for my tasks. (incomplete)

  I want to be able to get notifications when its time for me to do a task (incomplete)
  
  ## 4.2 As a first time visitor
  I want to be able to create an account. (completed)

  I want to be redirected to the correct page (completed)

  ## 4.3 As a admin user ( https://todo-app-p4.herokuapp.com/admin/login/?next=/admin/ )

  I want to be able to delete a user(can be done)
  
  I want to be able to se, edit, add and delete users tasks. (can be done)

  I want to be able to create a new user (can be done)

# 5. Features
All features are explained and shown in the "how it works section (2.)

# 6. future features
Will add a way for a user to add time and date to their tasks and so they can get notified in some way

# 7. Typography and color scheme
Red/orange in the header with all the text inside white so anyone can se it clearly.

Text in the body is black. The circle wich shows if a task is incomplete is gray. the one that shows if its completed is green.

button text is red/orange.

Text font used is Raleway. (link in credits)

# 8. wireframes
# 9. Technology
Django, python, javascript ,html and css.

asgiref==3.5.2
cloudinary==1.29.0
dj-database-url==0.5.0
dj3-cloudinary-storage==0.0.6
Django==3.2.14
gunicorn==20.1.0
psycopg2==2.9.3
pytz==2022.1
sqlparse==0.4.2

# 10. testing
   ## 10.1 code validation
   ## 10.2 test cases (user story based with screenshots)
   while in development before i got the logout to work I tested if the redirect worked by deleting my session id in dev tools.

   This was very helpfull because I could also test different accounts while my logout wasn't working.

   Manual testing was done many times. Same procedure as in the "how it works section"(2.) everything works as intended.
   
   I haven't tested the Javascript in anyway except for implementing it on every page and made sure to not get any errors in the console.

   I used javascript to display the time and date in real time and it works as intended.

   ## 10.3 fixed bugs
   only "bug" I had was that I got a JS error in the console on every page that didint have the date and time implemented

   To solve this easy I just added it to every page. fortunately it still looked good. 
   ## 10.4 supported screens and browsers
   Tested the app in google chrome, microsoft edge, on my android phone with google chrome and on a couple of iphones.

   The app seems to work on every device and browser I've tested it on

# 11. Deployment
  ## 11.1 Created the heroku app
  ## 11.2 Connected to the heroku postgresql database
  Go to resources and chose heroku postgres as a add on.
  
  After that I pressed on settings and reveal config vars

  Copied the database url and created env.py file.

  Made the necessary imports in the env.py and set the necessary environment variables.

  Hid the secret key and added it to heroku config vars.

  After I referenced the env.py file in my settings.py 

  Commented out the db.sqlite database logic and added the logic to connect to postgres

  To test if the database is working i ran python3 manage.py migrate in the terminal and all the migrates happened again in heroku postgres.

  ## 11.3 get static files stored on cloudinary
  Create an account and copy the api environment variable  that's on your dashboard.

  add this to your env.py file

  add a new config var in heroku for cloudinary and post the link in there aswell

  have to add cloudinary_storage and cloudinary to installed apps.
  
  Added STATICFILES_STORAGE = 'cloudinary_storage.storage.StaticHashedCloudinaryStorage' to line 133 aswell to tell django to use cloudinary.

  I also have to tell were the templates will  be stored so added logic for that on line 21 in settings.py.

  Need to change the dirs key aswell to point towards our new templates directory variable.

  Added heroku host name aswell to allowed hosts in settings.py

  After this I created a procfile and added: web: gunicorn todo_app.wsgi in it.

  after this go back to heroku and press on the deploy tab and press on github and search for your project and press on connect and after that on deploy branch.

  Make sure to have all pip installs that are listed in the technology section.


# 12. credits
https://www.youtube.com/watch?v=llbtoQTt4qw&t=3511s
https://www.dennisivy.com/post/django-class-based-views/
https://ccbv.co.uk/
https://docs.djangoproject.com/en/3.1/ref/class-based-views/mixins-single-object/#django.views.generic.detail.SingleObjectMixin.get_context_data
https://fonts.google.com/specimen/Raleway
https://www.toptal.com/designers/htmlarrows/
https://www.youtube.com/watch?v=RE0HlKch_3U&t=0s
https://www.youtube.com/watch?v=5zNR3E6WRLE
https://docs.djangoproject.com/en/1.11/ref/models/fields/
https://docs.google.com/document/d/1P5CWvS5cYalkQOLeQiijpSViDPogtKM7ZGyqK-yehhQ/edit
https://docs.google.com/document/d/1P5CWvS5cYalkQOLeQiijpSViDPogtKM7ZGyqK-yehhQ/edit

