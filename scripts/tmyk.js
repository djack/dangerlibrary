//
// @author DJ
// The More You Know!
//


var r_awesome_fact = new Array ();
r_awesome_fact[5] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>I have a dog named Ramsey. </p> <img class='sidebar' src='../images/ramsey-lentil.jpg'> <p> He was rescued from a shelter in the Carolinas. He is a mutt. This is a picture of Ramsey with a lentil on his nose for scale.</p>";
r_awesome_fact[1] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>Road trips are fun. </p><img class='sidebar' src='../images/road-trip.jpg'><p> I've driven the entire width of the United States five times without a second driver (I had companions for three of the trips, but never one who could drive). </p><p> I drove past Mt. Rushmore on the first three trips without bothering to get off the highway to see it. </p><p> When I finally stopped on the fourth trip, I forgot to take a picture.</p>";
r_awesome_fact[3] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>Rock climbing: also fun. </p><img src='../images/rack.jpg' class='sidebar'></p> My most recent road trip was decidedly climbing-themed. <p>I went to the Red River Gorge in Kentucky, Ten Sleep Canyon in Wyoming, Squamish in British Columbia, and Yosemite National Park. </p> <p> I love to talk climbing, and I'm always looking for more climbing partners.</p> <p><a href='/contact'> Get in touch!</a></p>";
r_awesome_fact[2] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>Computers are fascinating. </p><p> If you've never read <a href='http://www.amazon.com/gp/product/0735611319/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0735611319&linkCode=as2&tag=wwwdangerlibr-20'>Code</a> by Charles Petzold I thoroughly recommend it. He starts by introducing boolean algebra, binary encoding, and simple switch diagrams. Everything is presented in readable, jargon-free language. He builds on these concepts and finishes by describing the entire instruction set of a simple CPU. It is brilliantly written.</p><p>I've been building my own computers since I was a little kid. </p><p> My father and I would assemble the parts on the kitchen table and spend hours wrestling IDE cables into place and delicately aligning CPU pins.</p><p> Now that I almost exclusively use laptops, I have to entertain myself by writing software.</p>";
r_awesome_fact[0] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>I love programming. </p><p> I use the right language for the job, but if I were to choose a favorite it'd have to be Python. Recently I've been playing with <a href='http://pypi.python.org/pypi/mailer/'>Mailer</a> and <a href='http://docs.python-requests.org/en/latest/index.html'>Requests</a> to build a merge mail script to speed up personalized email campaigns.</p><p> It'll be on <a href='https://github.com/djack'>Github</a> soon.";
r_awesome_fact[4] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>Data is changing the world. </p><p> There is something extraordinarily satisfying about taking an enormous, esoteric data set and extracting meaningful, objective insight from it. </p><p> Thirty years ago it was impossible to store a terabyte of data. Today I have a terabyte harddrive that fits in my palm. I can fit a statistical model to a terabyte of time-series data in under an hour using free and open-source software and rented SSD hardware. </p><p>The ability to store and process this much information is not merely impressive, it is revolutionary. I'm excited to be a part of the revolution.</p>";
r_awesome_fact[6] = "<input type='button' id='didyouknow' onclick='changeText()' value='Did you know?'/> <p>Open source technology is incredible. </p><p> My primary laptop, where I built this website from scratch, runs Ubuntu. The server that runs this website also runs Linux. The webserver is nginx. The reverse proxy is Varnish. I upload files using Filezilla and I build most programs I use from source. All of this software is free, secure, and tremendously powerful. </p><p> If I were to use commercial technologies, this site would be impossible for me to afford, and it would be impossible for me to improve the software for the community. </p><p> sudo apt-get install revolution!";

var factnum = 0
function changeText(){
	document.getElementById('sidebar').innerHTML = r_awesome_fact[factnum];
	factnum = factnum + 1;
	if(factnum===r_awesome_fact.length) {factnum=0};
}
