## SaaS PROJECT

### Practice in DigiPlus

this recommandations explain a how app functionalities will be built.

## Reconmandation  for dev

### Dev of branch git lab

During the dev we will have the default branch develop this branch will be the main branch 
no push will be allow on this branch just merge request will be allowed. during the dev we 
will take task and before work on a task you will need to check if you are update after that 
you will create your branch with the format `topic/#idtask_task_name_of_the_branch` and start 
your modification after make your modification you will push but every message of your commit 
will start with `[#id_task]` : `<your message> `your message need to explain strongly what you 
are solving so that we can follow the line of the project
During the test of you task if there is a correction need and 
you already make a merge request i advice you after correcting 
the bug make a amend and no-edit to avoid multiple merge request that refers to the same task

#### example: 
if you have to develop a task title  **create the user session retention**  for example this are the following step\
- switch on develop : git switch develop
- check if you local branch develop is update : git fetch --all
- check if you don't have change on your branch : git status
- if you have change remove them
- rebase you local branch with the remote one :  git rebase origin/develop NB: not make a pull because the pull will juste get the last modification on the last commit and not the commit if you make a pull after create a merge request it will give you conflict
- create your branch form develop with the name : topic/#1_create_user_session
- after your dev please don't use the git add . add file by file what you modify or use you Ide to select every file that you edit
- the message of the commit will and put the message of the MR explain in one sentence what you done like "[#1] :  creation of the user abstractModel"
- before valid the MR in gitlab uncheck : delete the MR after merge and asign the task to correct person


### Lancement du projet 

Pour lancer le projet suivre les etapes suivantes

- Clone the reository saasdi-frontend
```bash
   git clone https://gitlab.com/saasdi/saasdi-frontend.git
```
- Then proceed with  
```bash
    npm ci 
```
- If facing difficulties delete the package-lock.json file then run back
```bash
    npm ci  # ci is for clean install
```
- Then you can proceed with

```bash 
    npm run dev
```
