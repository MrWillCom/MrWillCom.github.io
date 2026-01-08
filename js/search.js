(()=>{var r=[];const h=document.getElementById("search-form"),a=document.getElementById("searchbox"),u=document.getElementById("search-results");a.select();const i=c=>{var s=[],n=[];for(let e=0;e<r.length;e++){const t=r[e];JSON.stringify(t).search(c)!==-1&&s.push(t)}if(s.length>0)for(let e=0;e<s.length;e++){const t=s[e],l=document.createElement("article");l.classList.add("post-list-item"),l.innerHTML=`
<a href="${t.url}">
  <div class="content">
    ${t.categories?`<div class="categories${document.body.attributes["data-uppercase-categories"].value?" text-uppercase":""}">${(()=>{let d="";for(let o=0;o<t.categories.length;o++){const m=t.categories[o];d+=`<span>${m}</span>`}return d})()}</div>`:""}
    <div class="title">${t.title}</div>
  </div>
</a>
`,n.push(l)}else{const e=document.createElement("div");e.className="no-results",e.innerHTML="No results found.",n.push(e)}u.innerHTML="";for(let e=0;e<n.length;e++){const t=n[e];u.appendChild(t)}};h.addEventListener("submit",c=>{c.preventDefault(),r!=""?i(a.value):fetch(document.body.attributes["data-config-root"].value+document.body.attributes["data-search-path"].value).then(s=>s.json()).then(s=>{r=s,i(a.value)})})})();
