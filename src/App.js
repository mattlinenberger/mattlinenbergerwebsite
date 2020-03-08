import React from "react";
import "./App.css";
import "./css/mattlinenberger.css";
import NavMenu from "./components/NavMenu";
import ScrollableAnchor from 'react-scrollable-anchor';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="mainPage">
       <div className="mainImage">
      <NavMenu name="Matt"></NavMenu>
      </div>
      <ScrollableAnchor>
      <div className="aboutSection" id={'aboutSection'}>
        <div className="textBox">
        <h1>Development Experience</h1>
        <h1>K-State</h1>
          Programming is an ever expanding field, that I am excited to say I am
          a part of. I have finished my degree at K-State Polytechnic where I
          have been studying Java, PHP, CSS3, HTML5, and C#. I have used
          different IDE’s such as Eclipse, JGrasp, Brackets,Dreamweaver, and
          Microsoft Visual Studio. The framework I use for web design is
          Bootstrap.I have done multiple small projects such as a “stat finder”
          website that uses the JSON API to retrieve stats from a video game
          site and relay it on my site, from another version of that stat finder
          site using C#/.NET built in MVC framework. I worked on a final group
          project for Kansas State Polytechnic that will revamp their current
          system. We worked in groups to create a CRM system to keep track of
          their students, organize their database, and track all of their data.
          I also have experience in design and have worked with Photoshop,
          In-design, and Illustrator.
          <h1>Lending Standard</h1>
          After graduating from K-State, I took an internship at a start-up
          company called Lending Standard, where I worked on Software
          development. I was exposed to many new technologies, IDE's and
          Frameworks. Some of these include Intelli J IDEA, Groovy, Grails,
          ExtJS and MongoDb. ​I​ ​work close​ ​with​ ​a​ ​team​ ​of​
          ​developers​ ​both​ ​on​ ​the​ ​front-end​ ​and​ ​back-end.​​I​ ​have​
          ​currently​ ​been adding​ ​UI​ ​features​ ​on​ ​the​ ​Lending​
          ​Standard​ ​single-page​​web​ ​application,​ ​using​ ​ExtJS​ ​and​
          ​MVC architecture​ ​to​ ​create​ ​models,views,controllers,​​and​
          ​stores.​ ​​ ​I​ ​have​ ​also​ ​been​ ​using​ ​JSON, setting​ ​JS​
          ​variables​ ​to​ ​JSON​​parameters​ ​on​ ​the​ ​front-end​ ​and​
          ​passing​ ​them​ ​to​ ​a​ ​Groovy controller​ ​to​​handle​ ​data​
          ​requests​ ​on​ ​the​ ​backend​ ​to​ ​update​ ​the​ ​database. I​
          ​have​ ​been​ ​using​ ​MongoDB/HeidiSQL​ ​to​ ​test/update​ ​data.​
          ​I​ ​use​ ​Git​ ​for​ ​version​​control, staging,​ ​committing,​
          ​pushing,​ ​pulling​ ​and​ ​merging​ ​to​ ​different​ ​branches.​I​
          ​complete​ ​my​ ​tasks assigned​ ​to​ ​me​ ​on​ ​JIRA,​ ​where​ ​I​
          ​move​ ​through​ ​the​​task​ ​lifecycle,​ ​creating​ ​a​ ​task,​
          ​working​ ​on​ ​a task,​ ​testing​ ​the​ ​task​ ​on​​our​ test
          ​server,​ ​then​ ​moving​ ​task​ ​to​ ​be​ ​deployed​ ​on​ ​production
          server. I have also been exposed to Agile practices such as JIRA, a
          bug tracking, issue tracking, and general project management tool,
          Jenkins, a open-source continuous integration software that allows for
          trigger based automation of testing and builds. While working at
          LendingStandard I took part in ​code​ ​reviews​, daily developer stand
          up meetings​​and​ company ​meetings. Who I Am I believe in putting
          everything I am into everything I do. I am reliable, dependable and
          always looking to grow as a developer and learn as much as possible. I
          have been sharpening my javascript skills, by using ExtJS and
          Currently I am learning ReactJS to make this website more efficient. I
          enjoy art and photography as a hobby.
          </div>
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor>
      <div className="skillsSection" id={'skillSection'}>
        <h1>Skills</h1>
        <p>
          HTML/CSS PHP JAVA GROOVY C# JAVASCRIPT SQL DOCKER GRAILS HIBERNATE
          SPRING
        </p>
        <h1>IDES</h1>
        <p>ECLIPSE INTELLIJ IDEA BRACKETS VISUAL STUDIO CODE</p>
        <h1>DESIGN SKILLS</h1>
        <p>ILLUSTRATOR PHOTOSHOP IN-DESIGN</p>
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor>
      <div className="projectSection" id={'projectSection'}>
        <h1>PROJECTS</h1>
        <h1>Battlefield Stat Tracker - HTML/PHP/CSS/SQL</h1>
        <p>
          This website was a final project for PHP. www.Battlefield4stats.com
          allows you to use their API to retrieve stats. I used this to allow a
          user to search for a player by name and platform type, once both are
          selected a GET request is made, which the username and platform is
          replaced in a bf4.com stats url, to get the stats. If the user is
          found, I display information by echoing out the stats using the
          battlefield 4 stat API in JSON and show the results in tables.
        </p>
        <h1>K-State CRM Project - HTML/PHP/CSS/SQL</h1>
        <p>
          This is a CRM(Customer Relation Management) System, I worked on for a
          K-State project. You must first Log in to the system for it to show
          the available menu options to make changes to the system. These
          options are Tasks, Campaigns,Students, and Admins. I used PHP, for the
          database communication with PHPMyADMIN. They wanted system to keep
          track of different events, students, and tasks for their student
          workers. (The data is fake for privacy.)
        </p>
      <h1>Where To Eat? - JAVA</h1>
      <p>
        This is a simple app created with Java, that helps you decide where to
        eat. I used a string arrray and java's random utility to give a random
        option from the string array, giving you an option.
      </p>
      <h1>Slot Machine - JAVA</h1>
      <p>
        This is a slot machine game, created in Java. This game was created to
        learn threads and multi-threading. It runs like a normal slot machine,
        the images change at different speeds, when the play button is pressed.
        You can use the "stomp" button to stop all buttons at once, or the
        individual "stop" buttons for the corresponding image.
      </p>
      <h1>Bob's Burgers - HTML/CSS</h1>
      <p>
      This is a single scrolling webpage I created. 
      All the content is on one page with links on each section to take you back to the top of the page. 
      It has basic information on the show, and the cast members involved,
      including a gallery and character section, with images and videos.
      </p>
      <h1>DC Comics - HTML/CSS (DREAMWEAVER)</h1>
      <p>
      This project I used Dreamweaver to create an e-book style.
      </p>
      </div>
      </ScrollableAnchor>
      <ScrollableAnchor>
      <div className="contactSection" id={'contactSection'}>
        <h3>Let's Get In Touch!</h3>
        <h3>Interested? Contact me today!</h3>
        <i>mattlinenberger@gmail.com</i>
      </div>
      </ScrollableAnchor>
    </div>
  );
}

export default App;
