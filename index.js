var paragraphs=document.getElementById('TextData')
var services=document.getElementById('Services')


var Original_content= `<div>
<div class="icon-box">
  <i class="ri-store-line"></i>
  <h3><a href="">TITLE</a></h3>
</div>
</div>`

var Second_content= `<div class="icon-box">
<div class="icon"><i class="bx bxl-dribbble"></i></div>
<h4><a href="">Replace2</a></h4>
<p>Description</p>
</div>`


fetch('https://guarded-crag-04182.herokuapp.com/services')
  .then(response => response.json())
  .then(json =>{
    json.Services.forEach(element => {
        
        var content = Original_content; 
        var content2= Second_content;
        


        content=content.replace('TITLE',element.A)
        content2=content2.replace('Replace2',element.A)//
        content2=content2.replace('Description',element.B)//
     


        var service = document.createElement('div')
        var textdata = document.createElement('div')//
        

        service.innerHTML = content;
        textdata.innerHTML = content2;//
        


        service.className='col-xl-2 col-md-4';
        textdata.className='col-lg-4 col-md-6 d-flex align-items-stretch';//
        

        
        services.appendChild(service);
        paragraphs.appendChild(textdata);//
    });
  } )



