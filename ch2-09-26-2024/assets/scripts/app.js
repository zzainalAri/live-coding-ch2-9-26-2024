class Tooltip{

}

class ProjectItem{
    constructor(id, updateProjectListFunction){
        this.id = id;
        this.updateProjectListFunction = updateProjectListFunction;
        this.connectSwitchButton();
        this.connetMoreInfoButton();
    }

    connetMoreInfoButton(){}
    connectSwitchButton(){
        const projectItemElement = document.getElementById(this.id);
        const switchButton = projectItemElement.querySelector(`button:last-of-type`);
        switchButton.addEventListener("click", this.updateProjectListFunction);
    }
}

class ProjectList{
    projects = [];

    constructor(type, switchHandlerFunction){
        this,type = type;
        this.switchHandlerFunction = switchHandlerFunction;
        // EXAMPLE : #active-project li
        const projectItems = document.querySelectorAll(`#${type}-projects li`);
        // for (let i = 0 ; i < this.projects.length; i++)
        for ( const projectItem of projectItems ){
            console.log(type);
            console.log(projectItem);
            this.projects.push(new ProjectItem(projectItem.id, this.switchProject.bind(this)));
        }
    }


    setSwitchHandlerFunction(switchHandlerFunction){
        this.switchHandler = switchHandlerFunction;
    }


    addProject(){
        console.log(this);

    }

    switchProject(projectId){
        this.addProject();
        this.switchHandlerFunction(this.projects.find((i) => i.id === projectId));
        
    }
}

class App{
    static init() {
        const activeProjectList = new ProjectList("active")
        const finishedProjectList = new ProjectList("finished")
        activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind());
    }
}

App.init();