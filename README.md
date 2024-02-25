# Student-Attendance-Management-System
Student attendance management system for the browser using face recognition on video input from user's webcam with face-api.js by @justadudewhohacks (JavaScript face recognition API for the browser and nodejs implemented on top of tensorflow.js core, more details can be found here https://github.com/justadudewhohacks/face-api.js/)
This is a HTML, CSS, vanilla Javascript, and Python web development project.

<img width="600" alt="image" src="https://user-images.githubusercontent.com/85361959/226543990-f04b578d-fced-4e5c-b1d4-e00a9e55791e.png">
<img width="600" alt="image" src="https://user-images.githubusercontent.com/85361959/226542549-4e4ff4ef-9ccc-43b6-8936-d2a3adf6b77f.png">

You can test SAMS with images of Harry, Hermione, and Ron from Harry Potter, or by putting your own photos in.

To test SAMS, git clone the repository and cd into the repository folder. 

For Windows Powershell:
```
venv\Scripts\activate
```
```
python server.py
```
```
$env:FLASK_APP = "server.py"
```
```
flask run
```
An error that may occur is ``running scripts is disabled on this system``. 
Open Windows PowerShell with administrator privileges by pressing Windows+R to open Run, and then type “powershell” in the text box. Next, press Ctrl+Shift+Enter.
In Powershell administrator, type
```
Set-ExecutionPolicy RemoteSigned
```

Updates in Version 2:

- Added a Python Flask server
- Added a pop-up display option to view attendance log, including student name and time when attendance was taken
- And other minor updates

<img width="600" alt="Screenshot 2023-05-12 222304" src="https://github.com/SpicyChickenNoodleSoup/Student-Attendance-Management-System/assets/85361959/e175cb50-801b-49b9-9477-febbde47192c">

Upcoming updates to this project:

Next Update:

- Deploy the application on PythonAnywhere
- Add option to cancel instead of "Confirm Attendance"
- Log-in and log-out features, if student already took attendance, next detection will mean the student logs out.
- Set up other pages (Home, About)

(Much) Later Updates:
- Admin can manage student database, register student and upload photos via the application, able to remove students as well
- Admin able to manually take attendance for a student, given a password
