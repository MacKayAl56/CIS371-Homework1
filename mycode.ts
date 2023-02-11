

type Course = {
    courseNumber: string;
    courseName: string;
    semesterTaken: string
}

const myCourses: Array<Course> = [{courseNumber:"--Course Number--",courseName:"--Course Name--", semesterTaken:"--Semester Taken--"},
                {courseNumber:"CIS 162", courseName:"Computer Science I", semesterTaken:"Fall 2020"},
                {courseNumber:"CIS 163", courseName:"Computer Science II", semesterTaken:"Winter Semester 2021"},
                {courseNumber:"CIS 263", courseName:"Data Structures & Algorithms", semesterTaken:"Winter 2021"},
                {courseNumber:"CIS 241", courseName:"System-level Programming & Utilities",semesterTaken:"Fall 2021"},
                {courseNumber:"CIS 351", courseName:"Computer Organization & Assembly", semesterTaken:"Winter 2021"},
                {courseNumber:"CIS 343", courseName:"Structure of Programming Languages", semesterTaken:"Fall 2022"},
                {courseNumber:"CIS 353", courseName:"Database", semesterTaken:"Fall Semester 2022"}]

const tArea4 = document.getElementById("area4-table")
tArea4?.setAttribute("WIDTH", "100%");
tArea4?.setAttribute("HEIGHT", "100%");

for (var i in myCourses){
    const tr = document.createElement("tr");
    tArea4?.appendChild(tr);

    for (var j in myCourses[i]){
        const td = document.createElement("td");
        td.innerText = myCourses[i][j];
        tr.appendChild(td);
    }

}
/* <table WIDTH="100%" HEIGHT="100%">
                    <tr>
                      <th>Course Number</th>
                      <th>Course Name</th>
                      <th>Semester Taken</th>
                    </tr>
                    <tr>
                      <td>CIS 162</td>
                      <td>Computer Science I</td>
                      <td>Fall 2020</td>
                    </tr>
                    <tr>
                      <td>CIS 163</td>
                      <td>Computer Science II</td>
                      <td>Winter 2021</td>
                    </tr>
                    <tr>
                        <td>CIS 263</td>
                        <td>Data Structures & Algorithms</td>
                        <td>Winter 2021</td>
                    </tr>
                    <tr>
                        <td>CIS 241</td>
                        <td>System-level Programming & Utilities</td>
                        <td>Fall 2021</td>
                    </tr>
                    <tr>
                        <td>CIS 351</td>
                        <td>Computer Organization & Assembly</td>
                        <td>Winter 2021</td>
                    </tr>
                    <tr>
                        <td>CIS 343</td>
                        <td>Structure of Programming Languages</td>
                        <td>Fall 2022</td>
                    </tr>
                    <tr>
                        <td>CIS 353</td>
                        <td>Database</td>
                        <td>Fall 2022</td>
                    </tr>
                  </table>

*/


type Company = {
    name: string,           // Ex: "MSFT"
    abbreviation: string,   // Ex: Microsoft
    url: string             // Ex: https://microsoft.com
  }

const companies: Array<Company> = [{name: "Auto-Owners Insurance", abbreviation: "AOI", url: "https://www.auto-owners.com/"},
                                    {name: "General Motors", abbreviation: "GM", url: "https://www.gm.com/"},
                                    {name: "Ally Bank", abbreviation: "AB", url: "https://www.ally.com/"}];


const tArea6 = document.getElementById("area6-list");
const header = document.createElement("h1");
const text = document.createTextNode("Companies");
header.appendChild(text);
tArea6?.appendChild(header);

for (var x in companies){
    const li = document.createElement("li");
    tArea6?.appendChild(li);

    const a = document.createElement("a");
    a.innerText = companies[x].abbreviation;
    a.setAttribute("href", companies[x].url);
    li.appendChild(a);
}

/*<h1>Companies</h1>
                <ul>
                    <li><a href="https://www.auto-owners.com/">AOI</a></li>
                    <li><a href="https://www.gm.com/">GM</a></li>
                    <li><a href="https://www.ally.com/">AB</a></li>
                </ul>
*/

type SocialMedia = {
    icon: string;   // this can be a name of a local image or a URL to a remote image
    url: string;    // URL of the said social media company
}

const socials: Array<SocialMedia> = [{icon:"twitterpic.png", url:"https://twitter.com/?lang=en"},
                                    {icon:"instagrampic.png", url:"https://www.instagram.com/"},
                                    {icon:"facebookpic.png", url:"https://www.facebook.com/"},
                                    {icon:"youtubepic.png", url:"https://www.youtube.com/"},
                                    {icon:"tiktokpic.png", url:"https://www.tiktok.com/"}
                                    ]

const tArea8 = document.getElementById("area8-list");



for (var z = 0; z<socials.length; z++){
    const a = document.createElement("a");
    a.setAttribute("href", socials[z].url);
    tArea8?.appendChild(a);
    const img = document.createElement("img");
    img.setAttribute("src", socials[z].icon);
    img.setAttribute("height", "100px");
    img.setAttribute("class", "pad");
    a.appendChild(img);

}


/*
<a href="https://twitter.com/?lang=en"><img src ="twitterpic.png"height = 100px class = "pad"></a>
<a href="https://www.instagram.com/"><img src ="https://twitter.com/?lang=en" height = 100px class = "pad"></a>
<a href="https://www.facebook.com/"><img src ="facebookpic.png" height = 100px class = "pad"></a>
<a href="https://www.youtube.com/"><img src ="youtubepic.png" height = 100px class = "pad"></a>
<a href="https://www.tiktok.com/"><img src ="tiktokpic.png" height = 100px class = "pad"></a>
*/
