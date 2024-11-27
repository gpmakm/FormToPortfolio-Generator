const express = require('express');
const path=require('path');
const bp=require('body-parser');
const app=express();
const port=3000;

app.use(bp.urlencoded({extended:true}));


app.listen(port,(error)=>{
	if(!error){console.log("Server is running on your http://127.0.0.1:3000");}
	else{console.log("Following Errors generated",error);}
});


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"homepage.htm"))
})
app.get('/form1',(req,res)=>{
	res.sendFile(path.join(__dirname,"form1.htm"));
});

app.post('/form1',(req,res)=>{
	let address=req.body.address;
	let name=req.body.name;
	let skill1=req.body.skill1;
	let skill2=req.body.skill2;
	let skill3=req.body.skill3;
	let blog1=req.body.blog1;
	let blog1_details=req.body.blog1_details;
	let blog2=req.body.blog2;
	let blog2_details=req.body.blog2_details;
	let blog3=req.body.blog3;
	let blog3_details=req.body.blog3_details;
	let project1=req.body.project1;
	let project1_details=req.body.project1_details;
	let project2=req.body.project2;
	let project2_details=req.body.project2_details;
	let project3=req.body.project3;
	let project3_details=req.body.project3_details;
	let project4=req.body.project4;
	let project4_details=req.body.project4_details;
	let project5=req.body.project5;
	let project5_details=req.body.project5_details;
	let school=req.body.school;
	let college=req.body.college;
	let blogPageLink=req.body.link;
	res.send(`
	<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
        body {
            width: 100vw;
            display: flex;
            flex-direction: row;
            background: linear-gradient(45deg, #B6FFFA, #98E4FF 100.00%);

        }

        aside {
            width: 9vw;
            height: 100vh;
            border: 1px solid rgba(98, 0, 255, 0.708);
            margin-right: 2vw;
            padding: 2vh;
            top: 0%;
            left: 0%;
            position: fixed;
            background: linear-gradient(45deg, #7febe3, #066486 100.00%);
        }

        main {
            width: 80vw;
            position: absolute;
            transform: translate(18vw, 0vw);
        }

        li {
            list-style-type: none;
            padding: 2vh 2vw;
            color: rgb(127, 12, 222);
            font-size: 3vh;
        }

        span {
            font-size: larger;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }

        p {
            font-size: 3vh;
        }

        #greet,
        #about {
            margin: auto;
            font-size: medium;
            padding: 3vw;
            border-radius: 28px;
            text-align: center;
            width: 50vw;
            height: 18vh;
            background-color: rgba(5, 37, 93, 0.533);
            opacity: 90%;
        }

        #projects {
            margin: auto;
            width: 70vw;
            height: auto;
            border: 2px solid rgb(0, 17, 128);
            padding: 3vw;
            border-radius: 28px;
            margin-top: 3vh;
            box-shadow: 3px -3px 3px rgb(3, 47, 134);
            background-color: rgba(5, 37, 93, 0.533);
            opacity: 80%;
            color: black;
        }

        #intro {
            width: 50vw;
            height: auto;
            box-shadow: 3px -3px 3px green;
            padding: 3vw;
            border: 2px solid rgb(5, 62, 128);
            border-radius: 28px;
            margin-top: 3vh;
            margin-bottom: 3vh;
            background-color: rgba(5, 37, 93, 0.533);
            opacity: 80%;
        }

        * {
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: black;
        }

        #blogs {
            margin-top: 3vh;
            width: 70vw;
            height: 80vh;
            background-color: rgba(5, 37, 93, 0.533);
            border-radius: 28px;
            box-shadow: 3px -3px 3px #03098b;
            padding: 3vw;
            margin-bottom: 2vh;
            border: 2px solid rgb(0, 21, 128);
            opacity: 70%;

        }

        h2 {
            font-size: 4vh;
        }
        #name{
            text-transform: capitalize;
        }
        #name:hover{
            transform: rotate(360deg);
            transition: transform 2s;
        }
        @media screen and (max-width:600px) {
            html,body{
                width: 100vw;
                height: 100vh;
            }
            
            #greet,#aboutMe,#home,.blogs,.projects,#project,#blog{
                width: 70vw;
                height: auto;
                
                transform: translate(1vw,0vw);
            }
            aside{
                display: none;
            }
           
        }
        @media screen and (max-width:850px) {
            
            body,html{
                width: 100vw;
                height: 100vh;
            }
            #greet,#aboutMe,#home,.blogs,.projects{
                width: 70vw;
                height: auto;
                margin: 1vw;
            }
            aside{
                width: 25vw;
                height: 100vh;
            }
            main{
                transform: translate(15vw,0vw);
            }
        }
    </style>
</head>

<body>
    <aside>
        <ul>
            <li><a href="#greet">Home</a></li>
            <li><a href="#intro">About me</a></li>
            <li><a href="#blogs">blogs</a></li>
            <li><a href="#projects">Project</a></li>
        </ul>
    </aside>
    <main>
        <div id="greet">
            <p> Welcome to my website! I’m so glad you’re here. I hope you enjoy exploring my content and learning more
                about me. Feel free to contact me if you have any questions or feedback.</p>
        </div>
        <div id="intro">
            <h3>Hello everyone! It is </h3>
            <h1 id="name">${name}</h1>
            <p>I am a</p>
            <div> <span>${skill1}</span></div>
            <div> <span>${skill2}</span></div>
            <div> <span>${skill3}</span></div>
        </div>
        <div id="about">
            <p>As you seen above about my introduction now i will give you my complete introduction. You know my name, i
                am from ${address}. I have completed my schooling from ${school} and completed my further studies at
                ${college}. </p>
        </div>
        <div id="blogs">
            <h2>See some of my Blogs</h2>
            <div class="blog">
                <h3>${blog1}</h3>
                <p>${blog1_details}</p>
            </div>
            <div class="blog">
                <h3>${blog2}</h3>
                <p>${blog2_details}</p>
            </div>
            <div class="blog">
                <h3>${blog3}</h3>
                <p>${blog3_details}</p>
            </div>
            for more blogs see my blog page ${blogPageLink}
        </div>
        <div id="projects">
            <h2>Also see some of my projects</h2>
            <div class="project">
                <h3>${project1}</h3>
                <p>${project1_details}</p>
            </div>
            <div class="project">
                <h3>${project2}</h3>
                <p>${project2_details}</p>
            </div>
            <div class="project">
                <h3>${project3}</h3>
                <p>${project3_details}</p>
            </div>
            <div class="project">
                <h3>${project4}</h3>
                <p>${project4_details}</p>
            </div>
            <div class="project">
                <h3>${project5}</h3>
                <p>${project5_details}</p>
            </div>
        </div>

    </main>
</body>
</body>
<script>
    function scroll1() {
        window.scrollTo(0, 0);
    }
    function scroll2() {
        window.scrollTo(0, 600);
    }
</script>

</html>`);
});


app.get('/form2', (req, res) => {
    res.sendFile(path.join(__dirname,"form2.htm"));
});
app.post('/form2', (req, res) => {
    let address=req.body.address;
	let name=req.body.name;
	let skill1=req.body.skill1;
	let skill2=req.body.skill2;
	let skill3=req.body.skill3;
    let skill4=req.body.skill4;
	let skill5=req.body.skill5;
	let blog1=req.body.blog1;
	let blog1_details=req.body.blog1_details;
	let blog2=req.body.blog2;
	let blog2_details=req.body.blog2_details;
	let blog3=req.body.blog3;
	let blog3_details=req.body.blog3_details;
    let blog4=req.body.blog4;
    let blog4_details=req.body.blog4_details;
    let blog5=req.body.blog5;
    let blog5_details=req.body.blog5_details;
	let project1=req.body.project1;
	let project1_details=req.body.project1_details;
	let project2=req.body.project2;
	let project2_details=req.body.project2_details;
	let project3=req.body.project3;
	let project3_details=req.body.project3_details;
	let project4=req.body.project4;
	let project4_details=req.body.project4_details;
	let project5=req.body.project5;
	let project5_details=req.body.project5_details;
    let project6=req.body.project6;
	let project6_details=req.body.project6_details;
	let project7=req.body.project7;
	let project7_details=req.body.project7_details;
	let project8=req.body.project8;
	let project8_details=req.body.project8_details;
	let school=req.body.school;
	let college=req.body.college;
	let blogPageLink=req.body.link;
    res.send(`
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s portfolio</title>
    <style>
        body {
            background: linear-gradient(132deg, rgb(3, 148, 108) 0.00%, rgb(33, 35, 34) 100.00%);
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            filter: blur(10%);
        }

        img {
            width: 100%;
            height: 100%;
        }

        main {

            position: absolute;
            display: flex;
            flex-direction: column;
        }

        #greet {
            width: 50vw;
            height: 40vh;
            border-radius: 27px;
            transform: translate(25vw, 0vw);
            padding: 4vw;
            background-color: skyblue;
            font-weight: bold;
            opacity: 70%;
        }

        #home,#aboutMe {
            width: 60vw;
            height: 40vh;
            border-radius: 27px;
            margin-top: 2%;
            transform: translate(25vw, 0vw);
            padding: 3vw;
            background-color: skyblue;
            font-weight: bold;
            opacity: 70%;
        }

        aside {
            width: 9vw;
            padding: 8px;
            height: 100vw;
            position: fixed;
            background-color: red;
            color: white;
        }

        h1 {
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }

        h1:hover {
            font-family: algerian;
            transform: translate(3vw, 0vw);
            transition: transform 1s;
            color: darkred;
        }

        #project,
        #blog {
            margin-top: 2vw;
            width: 60vw;
            height: 60vh;
            border-radius: 27px;
            transform: translate(25vw, 0vw);
            overflow-y: scroll;
            padding: 3vw;
            background-color: skyblue;
            font-weight: bold;
            opacity: 70%;
        }

        .projects,
        .blogs {
            border: 1px solid green;
            margin: 2vh 2vw;
            height: 30vh;
            overflow-y: scroll;
            overflow-x: scroll;
            padding: 2vw;
        }

        a {
            background-color: white;
            text-decoration: none;
            color: darkred;
            cursor: pointer;

        }

        li {
            margin-top: 2vw;
            list-style-type: none;

        }
        .lists{
            font-weight: bolder;
            text-decoration: underline;
        }
        @media screen and (max-width:600px) {
            html,body{
                width: 100vw;
                height: 100vh;
            }
            
            #greet,#aboutMe,#home,.blogs,.projects,#project,#blog{
                width: 70vw;
                height: auto;
                
                transform: translate(1vw,0vw);
            }
            aside{
                display: none;
            }
           
        }
        @media screen and (max-width:850px) {
            
            body,html{
                width: 100vw;
                height: 100vh;
            }
            #greet,#aboutMe,#home,.blogs,.projects{
                width: 70vw;
                height: auto;
                margin: 1vw;
            }
            aside{
                width: 25vw;
                height: 100vh;
            }
            main{
                transform: translate(15vw,0vw);
            }
        }
    </style>
</head>

<body>
    <aside>
        This webpage contains
        <ul>
            <li class="lists">Home</li>
            <li class="lists">About</li>
            <li class="lists">Blogs</li>
            <li class="lists">Projects</li>
           
        </ul>

        
        
        
        
    </aside>
    <main>
        <div id="greet">
            Greetings to everyone! I welcome all of you on my portfolio page. Here, you will see about me, my
            qualifications, blogs, projects. You are free to ask your every doubts regarding my details, surely i will
            respond to your all doubts.
        </div>
        <div id="home">
            <p>Hey everyone! I am </p>
            <h1>${name}</h1>
            <p>I am </p>
            <span class="skills">${skill1}</span><br>
            <span class="skills">${skill2}</span><br>
            <span class="skills">${skill3}</span><br>
            <span class="skills">${skill4}</span><br>
            <span class="skills">${skill5}</span><br>
        </div>
        <div id="aboutMe">
            <p>I have completed my 10th from ${school}, and completed next high education degree in ${college}. And
                living at ${address}</p>
        </div>
        <div id="blog">
            <h2>See some of my blogs</h2>
            <div class="blogs">
                <h3>${blog1}</h3>
                <p>${blog1_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog2}</h3>
                <p>${blog2_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog3}</h3>
                <p>${blog3_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog4}</h3>
                <p>${blog4_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog5}</h3>
                <p>${blog5_details}</p>
            </div>
        </div>
        <div id="project">
            <h2>Also look on some of my projects</h2>
            <div class="projects">
                <h3>${project1}</h3>
                <p>${project1_details}</p>
            </div>
            <div class="projects">
                <h3>${project2}</h3>
                <p>${project2_details}</p>
            </div>
            <div class="projects">
                <h3>${project3}</h3>
                <p>${project3_details}</p>
            </div>
            <div class="projects">
                <h3>${project4}</h3>
                <p>${project4_details}</p>
            </div>
            <div class="projects">
                <h3>${project5}</h3>
                <p>${project5_details}</p>
            </div>
            <div class="projects">
                <h3>${project6}</h3>
                <p>${project6_details}</p>
            </div>
            <div class="projects">
                <h3>${project7}</h3>
                <p>${project7_details}</p>
            </div>
            <div class="projects">
                <h3>${project8}</h3>
                <p>${project8_details}</p>
            </div>
        </div>
    </main>
</body>
</html>`);
});

app.get('/form3',(req,res)=>{
	res.sendFile(path.join(__dirname,"form3.htm"));
});

app.post('/form3',(req,res)=>{
	let address=req.body.address;
	let name=req.body.name;
	let skill1=req.body.skill1;
	let skill2=req.body.skill2;
	let skill3=req.body.skill3;
	let blog1=req.body.blog1;
	let blog1_details=req.body.blog1_details;
	let blog2=req.body.blog2;
	let blog2_details=req.body.blog2_details;
	let blog3=req.body.blog3;
	let blog3_details=req.body.blog3_details;
    let blog4=req.body.blog4;
	let blog4_details=req.body.blog4_details;
	let blog5=req.body.blog5;
	let blog5_details=req.body.blog5_details;
	let project1=req.body.project1;
	let project1_details=req.body.project1_details;
	let project2=req.body.project2;
	let project2_details=req.body.project2_details;
	let project3=req.body.project3;
	let project3_details=req.body.project3_details;
	let project4=req.body.project4;
	let project4_details=req.body.project4_details;
	let project5=req.body.project5;
	let project5_details=req.body.project5_details;
	let school=req.body.school;
	let college=req.body.college;
	let blogPageLink=req.body.link;
	res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${name}'s Portfolio</title>
    <style>
        main{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
          
            margin-left: 5vw;
           
        }
        body{
            background: linear-gradient(132deg, rgb(115, 93, 142) 0.00%, rgb(58, 33, 86) 100.00%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
        h1:hover{
            transform: rotate(360deg);
            transition: transform 3s;
        }
        
        #welcome{
            width: 40vw;
            height: auto;
            padding: 3vw;
            background-color: aliceblue;
            color: black;
            font-weight: bolder;
            border: 2px solid grey;
            border-radius: 25px;
            font-size: larger;
        }
        #intro{
            width: 40vw;
            padding: 3vw;
            font-weight: bolder;
            background-color: yellow;
            opacity: 80%;
            border-radius: 25px;
            margin-top: 2vh;

        }
        #skill{
            border-radius: 25px;
            border: 2px solid darkred;
            margin-top: 2vh;
            width: 40vw;
            font-size: larger;
            height: auto;
            padding: 5vw;
            background-color: white;
        }
        #others{
            width: 40vw;
            padding: 4vw;
            border: 2px solid darkgreen;
            height: auto;
            border-radius: 25px;
            margin-top: 2vh;
            background-color: aliceblue;
        }
        .skills{
           
            color: black;
            text-transform: capitalize;
        }
        .skills:hover{
            font-size: larger;
           
            color: darkblue;
        }
        .blogs,.projects{
            overflow: scroll;
            width: 50vw;
            height: 40vh;
            border: 2px solid purple;
            border-radius: 24px;
            background-color: aliceblue;
            padding: 2vh;
        }
        .a{
            color: white;
            font-weight: bolder;
            text-decoration: underline;
            text-align: center;
        }
        aside{
            
            width: 25vw;
            height: 65vh;
            background-color: darkmagenta;
            border: 1px solid black;
            color: white;
            text-align: center;
        }
        li{
            list-style-type: none;
        }
        h2{
            color: white;
        }
    </style>
</head>
<body>
    <aside>
        This webpage contains my following information
        <ul>
            <li class="a">About me</li>
            <li class="a">My Skills</li>
            <li class="a">My Projects</li>
            <li class="a">My Blogs</li>
        </ul>
    </aside>
    <main>
        <div id="welcome">
            Welcome to my portfolio website! I am thrilled to have you here. I have created this website to showcase my work and share my journey with you. Please feel free to explore my portfolio and get in touch with me if you have any questions or would like to collaborate. Thank you for visiting! 😊
        </div>
        <div id="intro">
            <h4>Hello everyone! I am</h4>
            <h1>${name}</h1>
        </div>
        <div id="skill">
            <p>My skills are in following fields:</p>
            <span class="skills">${skill1}</span> <br><span class="skills">${skill2}</span> <br><span class="skills">${skill3}</span>
        </div>
        <div id="others">
            <p>I have completed my 10th from ${school}, and completed next high education degree in ${college}. And living at ${address}</p>
        </div>
        <div id="blogs">
            <h2>Have a look on my blogs</h2>
            <div class="blogs">
                <h3>${blog1}</h3>
                <p>${blog1_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog2}</h3>
                <p>${blog2_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog3}</h3>
                <p>${blog3_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog4}</h3>
                <p>${blog4_details}</p>
            </div>
            <div class="blogs">
                <h3>${blog5}</h3>
                <p>${blog5_details}</p>
            </div>
        </div>
        <div id="projects">
            <h2>Also see some of my projects</h2>
            <div class="projects">
                <h3>${project1}</h3>
                <p>${project1_details}</p>
            </div>
            <div class="projects">
                <h3>${project2}</h3>
                <p>${project2_details}</p>
            </div>
            <div class="projects">
                <h3>${project3}</h3>
                <p>${project3_details}</p>
            </div>
            <div class="projects">
                <h3>${project4}</h3>
                <p>${project4_details}</p>
            </div>
            <div class="projects">
                <h3>${project5}</h3>
                <p>${project5_details}</p>
            </div>
        </div>
    </main>
</body>
</html>`);
});
