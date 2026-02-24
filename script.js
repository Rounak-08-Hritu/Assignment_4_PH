const jobs = [
  {id:1, company:"Google", position:"Frontend Developer", location:"Remote", type:"Full-time", salary:"$1200", desc:"Work on UI systems", status:"all"},
  {id:2, company:"Microsoft", position:"Backend Developer", location:"USA", type:"Full-time", salary:"$1400", desc:"Build APIs", status:"all"},
  {id:3, company:"Amazon", position:"DevOps Engineer", location:"Remote", type:"Contract", salary:"$1300", desc:"Cloud deployment", status:"all"},
  {id:4, company:"Tesla", position:"Software Engineer", location:"USA", type:"Full-time", salary:"$1500", desc:"Automation system", status:"all"},
  {id:5, company:"Meta", position:"React Developer", location:"Remote", type:"Full-time", salary:"$1250", desc:"Frontend apps", status:"all"},
  {id:6, company:"Netflix", position:"Node Developer", location:"Canada", type:"Remote", salary:"$1350", desc:"Streaming backend", status:"all"},
  {id:7, company:"Spotify", position:"UI Designer", location:"Sweden", type:"Part-time", salary:"$900", desc:"Design system", status:"all"},
  {id:8, company:"Apple", position:"iOS Developer", location:"USA", type:"Full-time", salary:"$1600", desc:"iOS apps", status:"all"}
];

let currentTab = "all";

const jobContainer = document.getElementById("jobContainer");
const emptyMessage = document.getElementById("emptyMessage");

function renderJobs() {
  jobContainer.innerHTML = "";

  let filtered = jobs.filter(job => {
    if(currentTab === "all") return job.status !== "deleted";
    return job.status === currentTab;
  });

  document.getElementById("tabCount").innerText = filtered.length;

  if(filtered.length === 0){
    emptyMessage.classList.remove("hidden");
    return;
  } else {
    emptyMessage.classList.add("hidden");
  }

  filtered.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";

    div.innerHTML = `
      <h3>${job.position}</h3>
      <p><strong>${job.company}</strong></p>
      <p>${job.location} • ${job.type}</p>
      <p>Salary: ${job.salary}</p>
      <p>${job.desc}</p>

      <div class="buttons">
        <button class="interview" onclick="setStatus(${job.id}, 'interview')">Interview</button>
        <button class="rejected" onclick="setStatus(${job.id}, 'rejected')">Rejected</button>
        <button class="delete" onclick="deleteJob(${job.id})">Delete</button>
      </div>
    `;

    jobContainer.appendChild(div);
  });

  updateDashboard();
}

function setStatus(id, status){
  const job = jobs.find(j => j.id === id);
  job.status = status;
  renderJobs();
}

function deleteJob(id){
  const job = jobs.find(j => j.id === id);
  job.status = "deleted";
  renderJobs();
}

function updateDashboard(){
  document.getElementById("allCount").innerText = jobs.filter(j=>j.status !== "deleted").length;
  document.getElementById("interviewCount").innerText = jobs.filter(j=>j.status === "interview").length;
  document.getElementById("rejectedCount").innerText = jobs.filter(j=>j.status === "rejected").length;
}

document.querySelectorAll(".tab").forEach(btn => {
  btn.addEventListener("click", function(){
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    this.classList.add("active");
    currentTab = this.dataset.tab;
    renderJobs();
  });
});

renderJobs();