$(document).ready();

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

animation()
function animation(){

}

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
    
}



skillsstart()

function skillsstart(){
    let skilllogo=[
        "/images/htmlcss.png",
        "/images/javascript.png",
        "/images/jquery.png",
        "/images/reactjs.png",
        "/images/sql.png",
        "/images/java.png",
        "/images/salesforce.png",
        "/images/git.png"
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
    {return `<div><p>"I have intermediate HTML and CSS knowledge, which means I have a solid understanding of the fundamentals and can comfortably create and style web pages. In HTML, I can structure the content of a webpage using semantic or non-semantic tags.</p><p>When it comes to CSS, I can apply styles to HTML elements using selectors and declarations. I understand how to use classes, IDs, and element selectors to target specific elements and apply styles such as changing colors, fonts, and sizes. I'm comfortable with box model concepts like padding, margin, and borders, and I can position elements using CSS properties like float, flexbox, and grid.</p>
    <p>These combined skills allow me to create visually appealing, well-structured, and responsive web pages, making me proficient in intermediate-level HTML and CSS."</p></div>`}
    if(div=="js"){
        return `<div><p>"I have intermediate JavaScript knowledge, which means I have a solid understanding of the language and can comfortably build interactive and dynamic elements on web pages. I am proficient in JavaScript fundamentals such as variables, data types, loops, conditionals, and functions. This allows me to write efficient and structured code.</p><p>I am experienced in manipulating the Document Object Model (DOM) using JavaScript. I can dynamically update and modify HTML elements, add event listeners, and respond to user interactions. This enables me to create interactive web pages with features like form validation, dynamic content loading, and responsive elements.</p><p>Overall, with my intermediate JavaScript knowledge, I am capable of building interactive web pages, manipulating the DOM, working with data, and utilizing some JavaScript libraries as Jquery </p></div>`
    }
    if(div=="jquery"){
        return `<div><p>" I have intermediate knowledge of jQuery. With my intermediate knowledge, I can comfortably use jQuery to select and manipulate HTML elements using selectors, such as class names or IDs.</p><p>I am familiar with the various methods jQuery provides to modify the content and appearance of elements. For example, I can dynamically change the text of a paragraph, add or remove CSS classes, or even change the visibility of elements with smooth animations.</p><p>While I might not be an expert, I am comfortable working with jQuery and can effectively utilize its features to create interactive and dynamic web pages. I am always eager to learn more and improve my skills further."</p></div>`
    }
    if(div=="sql"){
        return `<div><p>I have intermediate knowledge of SQL, which is a programming language used for managing relational databases. I can comfortably work with databases, write complex queries, and perform various operations on data.</p><p>I'm proficient in querying data using SELECT statements with clauses like WHERE, ORDER BY, GROUP BY, and JOIN. I can also insert, update, and delete records, and understand basic database administration tasks. While I'm not an expert, my intermediate SQL knowledge allows me to effectively interact with databases and manipulate data."</p></div>`
    }
    if(div=="java"){
        return `<div><p>"I have a basic understanding of Java. Java is a versatile and widely used programming language known for its platform independence. With my basic Java knowledge, I can write simple Java programs, understand the core syntax and structure, and work with object-oriented programming principles. I can create classes, methods, and objects, implement inheritance and polymorphism, and handle exceptions using try-catch blocks. </p><p>While my Java knowledge is at a basic level, I can confidently write and comprehend simple Java programs. I'm eager to continue learning and expanding my skills in Java programming to tackle more complex projects in the future."</p></div>`
    }
    if(div=="salesforce"){
        return `<div><p>"I have intermediate knowledge of Salesforce. Salesforce is a cloud-based CRM platform used for managing sales, marketing, and customer support. With my intermediate Salesforce knowledge, I can navigate the platform, customize Salesforce objects, and build workflows and automation.</p><p>I am familiar with customizing Salesforce by creating and modifying fields, designing page layouts, and generating custom reports and dashboards. I can also create automation using workflows, process builder flows, and triggers. </p><p>While I may not be an expert, my intermediate Salesforce knowledge enables me to effectively utilize the platform's features to optimize sales and customer management processes. I am eager to continue learning and further enhance my Salesforce skills."</p></div>`
    }
    if(div=="git"){
        return `<div><p>"I have basic knowledge of Git. With my basic Git knowledge, I can comfortably work with repositories, create branches, and perform essential operations for collaborative software development.</p><p>Moreover, I am comfortable using basic Git commands like 'git add,' 'git commit,' and 'git push' to stage changes, commit them, and push them to a remote repository. I can also pull changes from a remote repository using 'git pull' and handle conflicts that may arise.</p><p>While my Git knowledge is at a basic level, I can effectively collaborate with other developers, track changes, and manage version control for small to medium-sized software projects. I am always eager to learn more and improve my Git skills further."</p></div>`
    }
    if(div=="react"){
        return `<div><p>In progress</p></div>`
    }
}