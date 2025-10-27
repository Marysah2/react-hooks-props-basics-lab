import React from "react";
import user from "../data/user";
import Links from "./Links"


function About({bio, links}) {
  const {github, linkedin} = links;
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio bio={bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}
 function Bio({bio}) {
   if(bio && bio.length > 0) {
    return <p>{bio}</p>
  } else {
    return null;
  }

}


 



export default About;
