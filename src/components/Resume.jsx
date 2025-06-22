
import React from 'react';
import './Resume.css'

export function Resume(){
    return(
        <div class="resume">
  <h1>Siyan (Amy) Liu</h1>
  <p>New York, NY | (917)-607-5261 | <a href="mailto:sl9964@nyu.edu">sl9964@nyu.edu</a></p>

  <h2>EDUCATION</h2>
  <p><strong>New York University, New York, NY</strong> &nbsp; &nbsp; Expected May 2026</p>
  <p>BFA, Interactive Media Arts (STEM-equivalent), Minor in Computer Science</p>
  <p><em>Relevant Coursework:</em> UI/UX Design, Software Engineering, Data Management</p>

  <h2>RELEVANT SKILLS</h2>
  <ul>
    <li><strong>Programming & Development:</strong> React.js, Redux.js, Node.js, Express.js, REST API design, HTML/CSS/JavaScript, p5.js, three.js, Git, Vite</li>
    <li><strong>Design Tools:</strong> Figma, Canvas, Touch Designer, Blender, Adobe Creative Suite (Photoshop, Illustrator, Premiere)</li>
    <li><strong>Office & Productivity:</strong> Microsoft Office (Word, Excel, Outlook), Google Workspace (Docs, Sheets, Calendar), Adobe Acrobat, Notion, Miro, Slack</li>
  </ul>

  <h2>RELEVANT EXPERIENCE & PROJECTS</h2>

  <h3>UNICEF GeoSight Swipe Feature for UN Hackathon – New York, NY | May – August 2025</h3>
  <ul>
    <li>Developed a dual-map swipe comparison tool using MapLibre GL JS and React for geospatial data analysis</li>
    <li>Refactored map container logic to toggle between swipe and single-map views with Redux state preservation</li>
    <li>Resolved critical bugs including duplicated layers, memory leaks, and UI inconsistencies</li>
    <li>Improved usability for UN and UNICEF partners analyzing temporal and categorical changes</li>
    <li>Contributed to a high-impact open-source tool for global development and field operations</li>
  </ul>

  <h3>Project Assistant – NYU Wagner, Office of Finance & Administration | May – August 2025</h3>
  <ul>
    <li>Served as sole front desk contact for NYU Wagner Graduate School of Public Service</li>
    <li>Managed calls and inquiries, screened visitors, and coordinated faculty access</li>
    <li>Sorted mail/packages, notified faculty via email, and flagged unidentified items</li>
    <li>Supported interoffice communication with NYU Corporate, HR, and Financial Offices</li>
    <li>Provided administrative support including scanning, data entry, and IT troubleshooting</li>
    <li>Assisted with internal events, emergency protocols, and workspace upkeep</li>
  </ul>

  <h3>Creative Coding Instructor – Vancouver, Canada | June – August 2024</h3>
  <ul>
    <li>Designed and taught a creative computing course in English & Mandarin for students aged 10–18</li>
    <li>Managed logistics: curriculum design, advertising, and parent communication</li>
    <li>Delivered 80+ hours of instruction to 10+ students in-person and online</li>
    <li>Customized lessons with adaptive feedback and age-specific content</li>
    <li>Mentored students through project development and creative builds</li>
  </ul>

  <h3>Featured Exhibitor – NYU ITP/IMA Show | Dec 2022 – Dec 2024</h3>
  <ul>
    <li>Selected to exhibit work at NYU public showcases for five consecutive semesters</li>
    <li>Presented projects to 100+ attendees per show, tailoring explanations for diverse audiences</li>
    <li>Led the 100 Days of Making showcase: created posters, websites, and coordinated event logistics</li>
  </ul>

  <h3>Notion-Based Personal Management System – New York, NY | Sept 2023 – Current</h3>
  <ul>
    <li>Built a multi-relational Notion workspace to manage projects, schedules, and resources</li>
    <li>Designed dashboards using filters, rollups, and linked databases</li>
    <li>Mentored peers in Notion use to improve productivity and planning</li>
  </ul>
</div>

    )
}