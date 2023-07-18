# file-system-organizer

## About

* The file system organizer is a ***NodeJS based project*** which helps you to organize your messy folders by automating the task of segregating the files.

* I have also used **npm** to customize the command to my initials which is `omb` :)

* It categorizes your files in 4 types, which are *media, archieves, document and app (application)*. 

* The codebase contains three seperate files for three different functionalities in **command folder**
  
  * `tree.js`
  * `organize.js`
  * `help.js`

* Folders like "downloads" on our pc/laptop are often filled with various types of files, because we just download and use them. Instead of moving them manually to different folders like "media" , "document", technology can be leveraged to automate the sorting of files by extension and placement in designated folders according to their type.


## How to use it?
  
1. Install nodeJS on your pc/laptop, if it's not there.
2. Simply clone the repo on your machine and open the command prompt for the cloned folder.
3. Write the command `npm link` on the terminal.
4. Choose the desired directory where ever you want to execute the project (or else point number 7).
5. Enter the command `omb help` to check out the complete list of available commands and their usage details.
6. Follow the `help` guide to execute the project.
7. If a required file path is not given, the system automatically works by considering the current directory.

## Video link
For visual aid, I am including a project video to help illustrate the functionality of the project -

Locally, in the VSCode - https://drive.google.com/file/d/1UtqJiLv0xiYwrlHKcIl28saYH3yF5DgW/view?usp=sharing

Globally, on anyone's system's command promt - https://drive.google.com/file/d/1ocXmjdWlFb71iRq41wNErne03z7v7TrI/view?usp=sharing

## Scaling it up

* An "others" folder would also be created for the extensions which are different from these categories. The project can be readily scaled to meet changing demands. The code can be expanded to include a new extension or create a folder for a similar extension, enabling the system to manage additional file types.

  * To do so, just head over to `main.js` and check for object `fileTypes`.
  
  ***Do contribute ;)***
  
Lastly, thank you pepcoding :)
