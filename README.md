# tht-fulltimeforce

I developed a small application in REACTJS based on create-react-app to pass the technical test described in the following link: https://docs.google.com/document/d/1EtOeiVmGH2W3sYwe7YKKw8AhiLC_TxIDiG83wNKPmqk/edit# 

We used fetch based on the generation of a classic github token to download the latest commits of this project and placed a button to observe a detail of a commit and the files that were affected.

We used everything related to Tailwind CSS and Font Awesome to layout the user interface. We did not use images, nor additional details other than icons and colors provided by the default Tailwind template; we only changed the typography (Google Fonts) and certain spaces to give an idea of a simple panel.

The token used was encrypted so that it would not be exposed and thus not expired by the github platform. I try not to be so clear on this topic so that the algorithm does not notice what I am saying.

### How to install 
   ```
   npm install

   ```
### How to start
  ```
   npm start

  ```
### How to install using Docker
  ```
   docker compose up -d

  ```
### How to start using Docker
```
   docker compose start

  ```
### How to stop using Docker
```
   docker compose stop

  ```
### How to remove using Docker
```
   docker compose down

  ```
## The application uses the following packages:

- ReactJS
- Create React App
- React Router DOM
- env-cmd
- Dateformat
- TailwindCSS
- Babel plugin macros
- FontAwesome Free
