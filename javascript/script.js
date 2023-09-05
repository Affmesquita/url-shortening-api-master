const hamburguerMenu = document.querySelector('.nav_hamburguer');
const boxConteiner = document.querySelector('.box-conteiner');

hamburguerMenu.addEventListener('click', () => {
  boxConteiner.classList.toggle('show');
});



//ENCURTAR LINKS 



function shortenLink() {
  const form = document.forms.url_form;
  let url = document.getElementById('url-input');
  let submitBtn = document.getElementById("url-btn");
  let linkGen = document.getElementsByClassName('link-gen');
  let inputElement = document.getElementsByClassName('input-element');

    const resultCard = function(link, shortLink){
      url.value = "";
      return `<div class = "result-card col-12">
                  <span class="result-url">${link}</span>
                  <div class="short-link">
                    <a href="https://${shortLink}" target="_blank">https://${shortLink}</a>
                    <button class="main-btns copy-btn">Copy</button>
                  </div>
              </div>`;
    }

    async function getShortLink() {
      let link = url.value;
      let ok;
      submitBtn.innerHTML = "Loading..."
    
      let res = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`).then(async (res) => {
        let data = await res.json();
        
        if (res.ok) {
          ok = true;
          return data;
        }
    
        if (data.error_code == 2) {
          ok = res.ok;
          return;
        }
    
        ok = res.ok;
  
      });
    
      submitBtn.innerHTML = 'Shorten it!' 
      if (!ok) {
          return
      };
    
      result.insertAdjacentHTML(
        "afterbegin",
        resultCard(link, res.result.short_link3)
      );
    
  }
  
  // EventListener to call the getShortLink() after the form is submited
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!url.value) {
      showError("Please add a link", false);
      return;
    }
  
    showError("", true);
    getShortLink();
  
  });
    
  // Toggle error function to show error
  function showError(content, toggleRemove) {
    if (!toggleRemove) {
      url.classList.add("error-outline");
      errorBox.innerHTML = content;
      return;
    }
    
    url.classList.remove("error-outline");
    errorBox.innerHTML = "";
  }
  
  document.addEventListener('click', function (event) {
      if (!event.target.classList.contains('copy-btn')) return;
  
      let short_link = event.target.parentNode.querySelector('.short-link > a');
   
      navigator.clipboard.writeText(short_link.href);
  
      event.target.classList.add('copied');
      event.target.textContent = 'Copied!';
      
      setTimeout(() => {
          event.target.classList.remove('copied')
          event.target.textContent = 'Copy'
      }, 2500)
  
  })

}



// API key: 995ffadc4ede4aa3b369466d7bf56117