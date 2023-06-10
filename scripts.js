$(document).ready();
//Welcome loader
let count=0;
loader()
function loader(){
    let loading=setInterval(innerloader,375)
    function innerloader(){
        let text="WELCOME"
    if(count<text.length){
        $(".loader").append(`<span>${text[count]}</span>`);
    }
    else if(count==10){
        clearInterval(loading)
        $(".loader").empty()
        $(".loader").hide()

        $(".container").fadeIn()
        $(".container").css("display","flex")
    }
    count++;
    }
    
}
// nav scroll and return to top
scroll()
function scroll(){
   window.addEventListener("scroll",()=>{
     if(window.scrollY>window.innerHeight/3) $("#top").fadeIn(500)
     else $("#top").fadeOut(500)
   })
        
    $("#top").on("click",()=>{
        window.scrollTo(0,0)
    })
    $("#aboutme").on("click",()=>{
        let coord=$(".about").offset()
        window.scrollTo(0,coord.top)
    })
    $("#myskills").on("click",()=>{
        let coord=$(".skills").offset()
        window.scrollTo(0,coord.top)
    })
    $("#personalprojects").on("click",()=>{
        let coord=$(".projects").offset()
        window.scrollTo(0,coord.top)
    })
    $("#contactme").on("click",()=>{
        let coord=$(".contact").offset()
        window.scrollTo(0,coord.top)
    })

}
//all section animation
animation()
function animation(){
    window.addEventListener("scroll",()=>{
        let coord=$(".about").offset()
        if(window.scrollY>coord.top/2) {
            
        }
        else if(window.scrollY<coord.top/2){

        }
      })
}
//details buttons
redirect()
function redirect(){
    $(".github").on("click",()=>window.open("https://github.com/Edwin-Es",'_blank'))
    $(".whatsapp").on("click",()=>window.open("https://api.whatsapp.com/send?phone=50361136612",'_blank'))
    $(".linkedin").on("click",()=>window.open("https://www.linkedin.com/in/edwin-estrada-2a7b42264","_blank"))
    console.log($(".menu").width())

    if($(window).width()<480){ 
    let rotate=false;
    $(".innermenu").on("click",()=>{
        $(".menu").slideToggle(200);
        if(!rotate){
            $(".innermenu svg").css("transform","rotate(90deg)")
            rotate=true;
        }
        else {
            $(".innermenu svg").css("transform","rotate(0)")
            rotate=false;
        }
        })}
}
//about me section
counter=1;
aboutme()
function aboutme(){
    $("#more").on("click",()=>{
        if(counter<3){
            $("#reset").css("opacity","0.5")
            $(".about-text").css("transform",`translateX(${-counter*1000}px)`)
            counter++;
        }
        if(counter==2)$(".progress").css("padding-left","33%")
        if(counter==3)$(".progress").css("padding-left","66%")
        if(counter==3){
            $("#more").css("opacity","0.5")
            $("#reset").css("opacity","1")
        }
        })
    $("#reset").on("click",()=>{
        $("#more").css("opacity","1")
        $("#reset").css("opacity","0.5")
        $(".about-text").css("transform",`translateX(0px)`)
        $(".progress").css("padding-left","0px")
        counter=1;
    })

    if($(window).width()<480){
        $(".about").css("width",`${$(window).width()}px`)
        $(".about-text div").each(function(){
            $(this).css("width",`${$(window).width()}px`)
        })
        $("#more").on("click",()=>{
            if(counter<3){
                $("#reset").css("opacity","0.5")
                $(".about-text").css("transform",`translateX(${-counter*$(window).width()}px)`)
                counter++;
            }
            if(counter==2)$(".progress").css("padding-left","33%")
            if(counter==3)$(".progress").css("padding-left","66%")
            if(counter==3){
                $("#more").css("opacity","0.5")
                $("#reset").css("opacity","1")
            }
            })
        $("#reset").on("click",()=>{
            $("#more").css("opacity","1")
            $("#reset").css("opacity","0.5")
            $(".about-text").css("transform",`translateX(0px)`)
            $(".progress").css("padding-left","0px")
            counter=1;
        })
    }
    
}

skillsstart()

function skillsstart(){
    let skilllogo=[
        "images/htmlcss.png",
        "images/javascript.png",
        "images/jquery.png",
        "images/reactjs.png",
        "images/sql.png",
        "images/java.png",
        "images/salesforce.png",
        "images/git.png"
    ]

    $(".skill div").each(function(index){
        $(this).css("background-image",`url(${skilllogo[index]})`)
        $(this).addClass("inactive")
        $("#htmlcss").removeClass("inactive")
        $("#htmlcss").addClass("active")
        $(".show").empty()
        $(".show").append(fillskilldiv("html"))
        $(".show div p").fadeIn()
    })
}

skillselection()

function skillselection(){
    $("#htmlcss").on("click",()=>{
        selection("#htmlcss")
        $(".show").empty()
        $(".show").append(fillskilldiv("html"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })
    $("#javascript").on("click",()=>{
        selection("#javascript")
        $(".show").empty()
        $(".show").append(fillskilldiv("js"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })
    $("#jquery").on("click",()=>{
        selection("#jquery")
        $(".show").empty()
        $(".show").append(fillskilldiv("jquery"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })

    })
    $("#react").on("click",()=>{
        selection("#react")
        $(".show").empty()
        $(".show").append(fillskilldiv("react"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
  
    })
    $("#sql").on("click",()=>{
        selection("#sql")
        $(".show").empty()
        $(".show").append(fillskilldiv("sql"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })
    $("#java").on("click",()=>{
        selection("#java")
        $(".show").empty()
        $(".show").append(fillskilldiv("java"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })
    $("#salesforce").on("click",()=>{
        selection("#salesforce")
        $(".show").empty()
        $(".show").append(fillskilldiv("salesforce"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })
    $("#git").on("click",()=>{
        selection("#git")
        $(".show").empty()
        $(".show").append(fillskilldiv("git"))
        $(".show div p").each(function(index){
            $(this).fadeIn((500+800*index))
        })
    })

}

function selection(div){
    $(".skill div").each(function(index){
        $(this).removeClass("active")
        $(this).addClass("inactive")
    })
    $(div).removeClass("inactive")
    $(div).addClass("active")
}


function fillskilldiv(div){
    if(div=="html")
    {return `<div><p>"With my intermediate knowledge of HTML and CSS, I have the ability to create and design static web pages proficiently. I can structure and organize web content using HTML tags, creating headings, paragraphs, lists, and adding images. CSS allows me to enhance the appearance of my web pages by applying styles, such as changing fonts, colors, and backgrounds, adjusting layout, and adding transitions and animations.</p> <p>With these skills, I can build visually appealing websites, optimize the user experience, and ensure proper responsiveness across different devices. Additionally, I can integrate basic interactivity through CSS hover effects and create simple forms for data input. Overall, my intermediate HTML and CSS knowledge enables me to construct engaging and functional web pages."</p></div>`}
    if(div=="js"){
        return `<div><p>"With my intermediate knowledge of JavaScript, I have the ability to bring interactivity and dynamic functionality to my web pages. I can manipulate and modify HTML elements, handle user interactions, and respond to events using JavaScript. By utilizing variables, functions, and conditional statements, I can implement logic and control the flow of my code.</p><p> With my knowledge of arrays and loops, I can iterate through data and dynamically generate content. Furthermore, I can update web pages dynamically, and create interactive web applications. Overall, my intermediate JavaScript knowledge empowers me to create engaging, interactive, and responsive web experiences."</p></div>`
    }
    if(div=="jquery"){
        return `<div><p>"With my intermediate knowledge of jQuery, I have the ability to enhance and streamline my web development process. jQuery is a JavaScript library that simplifies many common tasks and provides a wide range of useful functions. I can easily manipulate HTML elements, traverse the DOM tree, and apply animations and effects to create dynamic and engaging web pages. jQuery's event handling capabilities enable me to respond to user interactions and create interactive features.</p><p> With jQuery's extensive plugin ecosystem, I can extend its functionality further and incorporate pre-built components into my projects. Overall, my intermediate jQuery knowledge empowers me to expedite development, create visually appealing effects, and add interactivity to my web pages with ease."</p></div>`
    }
    if(div=="sql"){
        return `<div><p>I have intermediate knowledge of SQL, which is a programming language used for managing relational databases. I can comfortably work with databases, write complex queries, and perform various operations on data.</p><p>I'm proficient in querying data using SELECT statements with clauses like WHERE, ORDER BY, GROUP BY, and JOIN. I can also insert, update, and delete records, and understand basic database administration tasks. While I'm not an expert, my intermediate SQL knowledge allows me to effectively interact with databases and manipulate data."</p></div>`
    }
    if(div=="java"){
        return `<div><p>"I have a basic understanding of Java. Java is a versatile and widely used programming language known for its platform independence. With my basic Java knowledge, I can write simple Java programs, understand the core syntax and structure, and work with object-oriented programming principles. I can create classes, methods, and objects, implement inheritance and polymorphism, and handle exceptions using try-catch blocks. </p><p>While my Java knowledge is at a basic level, I can confidently write and comprehend simple Java programs. I'm eager to continue learning and expanding my skills in Java programming to tackle more complex projects in the future."</p></div>`
    }
    if(div=="salesforce"){
        return `<div><p>"With my intermediate knowledge of Salesforce, I have the ability to leverage the platform's features and tools to streamline business processes and enhance customer relationship management. I can create and customize objects, fields, and layouts to tailor Salesforce to specific organizational needs. With workflow rules, validation rules, and process builder, I can automate business processes and ensure data integrity.</p> <p>I can also create reports and dashboards to gain insights into sales performance, track key metrics, and make data-driven decisions. Additionally, I can configure and customize Salesforce's powerful automation tool, Salesforce Lightning Flow, to create guided processes and automate complex business workflows. With my intermediate Salesforce knowledge, I can contribute to optimizing sales and marketing efforts, improving customer satisfaction, and driving overall business success."</p></div>`
    }
    if(div=="git"){
        return `<div><Moreover,>"I have basic knowledge of Git. With my basic Git knowledge, I can comfortably work with repositories, create branches, and perform essential operations for collaborative software development.Moreover, I am comfortable using basic Git commands like 'git add,' 'git commit,' and 'git push' to stage changes, commit them, and push them to a remote repository. I can also pull changes from a remote repository using 'git pull' and handle conflicts that may arise.</p><p>While my Git knowledge is at a basic level, I can effectively collaborate with other developers, track changes, and manage version control for small to medium-sized software projects. I am always eager to learn more and improve my Git skills further."</p></div>`
    }
    if(div=="react"){
        return `<div class="react"><p>In progress</p><span class="spanloader"></span><span class="loadspan"></span><span class="loadspan"></span><span class="loadspan"></span><span class="loadspan"></span></div>`
    }
}

projectsfill()

function projectsfill(){
    let websites=["quiz app","basic ecommerce","text encripter","movies app","dad jokes","analog clock","expanded cards","like effect","notes app","password generator","password strength verification","ramdom picker app","split screen","vertical slider"]
    
    let websites2=["digital clock","image carussel","content placeholder","animated countdown","article transform","blur loader","drag item effect","FAQ example","login form example","progress steps","image slider","blog example","text effect","basic counter"]

    websites.forEach(element=>{
        let div=`<div class="link"><span><p>${element}</p><button><a href="projects/project_${element.replace(/\s/g, '')}" target="_blank">Live Demo</a></button></span></div>`
        $(".websites").append(div)
    })

    $(".websites div").each(function (index){
        $(this).css("background-image",`url("images/projects_img/${websites[index].replace(/\s/g, '')}.png")`)
    })
    websites2.forEach(element=>{
        let div=`<div class="link"><span><p>${element}</p><button><a href="projects/project_${element.replace(/\s/g, '')}" target="_blank">Live Demo</a></button></span></div>`
        $(".websites2").append(div)
    })
    $(".websites2 div").each(function (index){
        $(this).css("background-image",`url("images/projects_img/${websites2[index].replace(/\s/g, '')}.png")`)
    })
}

projectsanimation()

function projectsanimation(){
    let increment=0;
    let increment2=0
    let width=$(".websites div").length*200-1000;
    let width2=$(".websites2 div").length*200-1000;

    $(".websites2").css("transform",`translateX(-${width2}px)`)

    let interval = setInterval(run, 1500)
    let interval2 = setInterval(run2, 1500)

    function run() {
        if(increment*200>width){
            $(".websites").css("transform",`translateX(0px)`)
            increment=1;
        }
        else {
            $(".websites").css("transform",`translateX(${-increment*200}px)`)
            increment++;  
        }
    }
    function run2(){
        if(increment2*200>width2){
            $(".websites2").css("transform",`translateX(-${width2}px)`)
            increment2=1;
        }
        else {
            $(".websites2").css("transform",`translateX(${-(width2-(increment2*200))}px)`)
           
            increment2++;  
        }
    }

    $(".rightCarrusel").on("mouseenter",()=>{
        clearInterval(interval)
        clearInterval(interval2)
    })
    $(".rightCarrusel").on("mouseleave",()=>{
        interval = setInterval(run, 1500)
        interval2 = setInterval(run2, 1500)
    })
    $(".leftCarrusel").on("mouseenter",()=>{
        clearInterval(interval)
        clearInterval(interval2)
    })
    $(".leftCarrusel").on("mouseleave",()=>{
        interval = setInterval(run, 1500)
        interval2 = setInterval(run2, 1500)
    })
    $("#next1").on("click",()=>{
        run()
    })
    $("#prev2").on("click",()=>{
        run2()
    })
    $("#prev1").on("click",()=>{
        if(increment*200>width){
            $(".websites").css("transform",`translateX(-${width}px)`)
            increment=1;
        }
        else {
            $(".websites").css("transform",`translateX(${-(width-((increment)*200))}px)`)
            increment++;  
        }
    })
    $("#next2").on("click",()=>{
        if(increment2*200>width2){
            $(".websites2").css("transform",`translateX(0px)`)
            increment2=1;
        }
        else {
            $(".websites2").css("transform",`translateX(${-increment2*200}px)`)
            increment2++;  
        }
    })
}

contactme()
function contactme(){
    $(".form").on("mouseover",()=>{
        $(".form").css("width","75%")
        $(".faq").css("width","25%")
    })

    $(".faq").on("mouseover",()=>{
        $(".faq").css("width","75%")
        $(".form").css("width","25%")
    })

    $(".form").on("mouseout",()=>{
        $(".form").css("width","50%")
        $(".faq").css("width","50%")
    })
    
    $(".faq").on("mouseout",()=>{
        $(".faq").css("width","50%")
        $(".form").css("width","50%")
    })
    formvalidation()
    faqselection()

    if($(window).width()<480){
        $(".form").on("mouseover",()=>{
            $(".form").css("height","75%")
            $(".faq").css("height","25%")
        })
    
        $(".faq").on("mouseover",()=>{
            $(".faq").css("height","75%")
            $(".form").css("height","25%")
        })
    
        $(".form").on("mouseout",()=>{
            $(".form").css("height","50%")
            $(".faq").css("height","50%")
        })
        
        $(".faq").on("mouseout",()=>{
            $(".faq").css("height","50%")
            $(".form").css("height","50%")
        })
        formvalidation()
        faqselection()
    }
    
   
}
function formvalidation(){
    $("#name").on("input",function(){
        if($("#name").val().length>0){
            $("#name").css("border-color","#04c514")
        }
    })
    $("#email").on("input",function(){
        if($("#email").val().includes("@")){
            $("#email").css("border-color","#04c514")
        }
    })
    $("#company").on("input",function(){
        if($("#company").val().length>0){
            $("#company").css("border-color","#04c514")
        }
    })
    $("#message").on("input",function(){
        if($("#message").val().length>0){
            $("#message").css("border-color","#04c514")
        }
    })
}
function faqselection(){
    let q1=true;
    let q2=true;
    let q3=true;
    let q4=true;
    $(".question1 svg").on("click",()=>{
        if(q1){$(".question1 svg").css("transform","rotate(180deg)");q1=false}
        else {$(".question1 svg").css("transform","rotate(0deg)");q1=true}
        $(".question1 .answer").slideToggle()
    })
    $(".question2 svg").on("click",()=>{
        if(q2){$(".question2 svg").css("transform","rotate(180deg)");q2=false}
        else {$(".question2 svg").css("transform","rotate(0deg)");q2=true}
        $(".question2 .answer").slideToggle()
    })
    $(".question3 svg").on("click",()=>{
        if(q3){$(".question3 svg").css("transform","rotate(180deg)");q3=false}
        else {$(".question3 svg").css("transform","rotate(0deg)");q3=true}
        $(".question3 .answer").slideToggle()
    })
    $(".question4 svg").on("click",()=>{
        if(q4){$(".question4 svg").css("transform","rotate(180deg)");q4=false}
        else {$(".question4 svg").css("transform","rotate(0deg)");q4=true}
        $(".question4 .answer").slideToggle()
    })
}