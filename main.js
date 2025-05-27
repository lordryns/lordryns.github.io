
let projects = [];

fetch("projects.json")
.then(response => response.json())
.then(data => {
    let project_div = document.querySelector("#project-div");
    data.forEach(project => {
    project_div.innerHTML += Project(project);

    })
  })



function Project(project) {
  return ` <div style="margin: 30px 0; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
      <h4 style="margin-top: 0; margin-bottom: 10px;">${project.title}</h4>
      <p style="margin-bottom: 15px;">${project.description}</p>
      <div>
        <a href="${project.github}" style="display: inline-block; padding: 6px 12px; margin-right: 10px; background: #f5f5f5; color: #333; text-decoration: none; border-radius: 3px;">GitHub</a>
        ${project.is_active ?  `<a href="${project.project}" style="display: inline-block; padding: 6px 12px; background: #333; color: white; text-decoration: none; border-radius: 3px;">View Project</a>`
          : ""}
      </div>
    </div>

`
}


document.addEventListener('DOMContentLoaded', function (){
  })
