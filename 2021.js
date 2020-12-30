function mainfun(){
    

    document.getElementById('mainimgid').style.display='none';

    document.getElementById('bodyid').style.backgroundColor='white';
   
    document.getElementById('mainwishid').style.color='black';
    document.getElementById('mainwishid').innerHTML='I have a very beautiful message for you<br>For this intraction first let me Introduce myself<br> Hello! I am Jatin and you...?';
   
    document.getElementById('mainbuttonid').style.display='none';

    document.getElementById('secondbuttonid').style.display='inline-block';

    
    document.getElementById('arrowid21').style.display='none';

    document.getElementById('secondimgid').style.display='inline-block';
}
var name,i;
var list = [3158,6687,4076,4432,0708,5112,5754,9685,6455,3818,5463,6340];
var vip = ['monu','mrcy','riya','samita','swati','vrsa','anjali','moti','avinash','kartik','srinivas','manish'];
function secondfun() {
    document.getElementById('textid').style.display='inline-block';
    
    name = prompt("Hay! dude do you have the password??. If you have then please enter it, otherwise just leave it, take chill pill and click ok ;)");
    
    if(name === ""){
    }
    else{
        for(i=0;i<list.length;i++){
            if(list[i]==name){
                fun(vip[i]);
                break;
            }
             if(i+1 == list.length){
                alert('dude your password is incorrect... if you do not have password then please click "OK"...just enter your name, ignore this pssword alert kind of stuff...');
            }
            
            
        }
       
    }

    document.getElementById('secondbuttonid').innerHTML = 'wanna password alert?'
}
function thirdfun() {
    document.getElementById('submitid').style.display='block';
    document.getElementById('vipsubmitid').style.display='none';
    
    document.getElementById('arrowid21').style.display='none';

}
var random;
function forthfun(){
    random = document.getElementById('textid').value;
   
    document.getElementById('arrowid21').style.display='none';
    document.getElementById('secondimgid').style.display='none';
    document.getElementById('mainwishid').style.color='white';
    document.getElementById('secondbuttonid').style.display='none';
    document.getElementById('textid').style.display='none';
    document.getElementById('submitid').style.display='none';
    document.getElementById('vipsubmitid').style.display='none';
    document.getElementById('bodyid').style.backgroundColor='black';
   
    
    document.getElementById('mainwishid').innerHTML='Knock the door twice  &#10084;'
    document.getElementById('door').style.display='inline-block';

}

document.getElementById('textid').addEventListener('click', function(no){
    no.preventDefault();
});
document.getElementById('submitid').addEventListener('click',function(no){
    no.preventDefault();
});
document.getElementById('vipsubmitid').addEventListener('click',function(no){
    no.preventDefault();
});
document.getElementById('door').addEventListener('click',function(no){
    no.preventDefault();
});
document.getElementById('vipdoor').addEventListener('click',function(no){
    no.preventDefault();
});

var special="";
function fun(frnd){
    document.getElementById('mainwishid').innerHTML='HELLOOO!! '+frnd;
    document.getElementById('secondbuttonid').style.display='none';
    document.getElementById('textid').style.display='none';
    document.getElementById('vipsubmitid').style.display='block';
    document.getElementById('submitid').style.display='none';

    
    document.getElementById('arrowid21').style.display='none';

       special = frnd;

}
function vipfun(){
    document.getElementById('secondimgid').style.display='none';
    document.getElementById('mainwishid').style.color='white';
    document.getElementById('secondbuttonid').style.display='none';
    document.getElementById('textid').style.display='none';
    document.getElementById('submitid').style.display='none';
    document.getElementById('bodyid').style.backgroundColor='black';
    document.getElementById('vipsubmitid').style.display='none';
    
    document.getElementById('arrowid21').style.display='none';
   
    document.getElementById('mainwishid').innerHTML='Knock the door twice  &#10084;'
    document.getElementById('vipdoor').style.display='inline-block';
    
}

var m=0;
function doubleclick(){ 
    
        m++;
        if(m==1){
            document.getElementById('mainwishid').innerHTML='hellooo!! '+random+' happy new year';
        }
       if(m==2){
        document.getElementById('mainwishid').style.display='none';
        document.getElementById('door').src = 'jatin.jpg';
     
        var initialwidth = 0;
        var countdown = 300;
        var stop =   setInterval(function(){         
            
               document.getElementById('door').style.width= initialwidth+.1+'px';

               initialwidth = initialwidth+10;
               countdown -=1;
                     
               if(countdown==10){
                   
    document.getElementById('door').style.width='280px'; 
    document.getElementById('door').style.height='auto'; 
    m=0;
                    clearInterval(stop);
                   
               }
            },10);
        windowstop =   setInterval(function(){         
                window.open('welcome.html');
                returnback();
                clearInterval(windowstop);
             },4000);
       }
       
}
var n=0;
function doubleclickvip(){ 
         n++;
       if(n==2){
        document.getElementById('mainwishid').style.display='none';   
        document.getElementById('vipdoor').src = 'jatin.jpg';
     
        var initialwidth = 0;
        var countdown = 300;
        var vipstop =   setInterval(function(){         
            
               document.getElementById('vipdoor').style.width= initialwidth+.01+'px';

               initialwidth = initialwidth+10;
               countdown -=1;
             
               if(countdown==10){  
                document.getElementById('vipdoor').style.width='280px'; 
                document.getElementById('vipdoor').style.height='auto'; 
                n=0;
               
                clearInterval(vipstop);
                  
               }
            },10);
        var nowindowstop  =  setInterval(function(){         
                vipspecial();  
                clearInterval(nowindowstop);           
             },4000);       
       }
}

function returnback(){
    document.getElementById('mainwishid').style.display='block';
    document.getElementById('door').src = 'gate.jpg';   
    document.getElementById('door').style.display = 'none';
  
    name="";
    random="";
    special="";
    document.getElementById('secondbuttonid').innerHTML = 'Come on Dude!!!'
    mainfun()
}

function vipreturnback(){
    document.getElementById('mainwishid').style.display='block';
    document.getElementById('samplemainid21').style.display='none';
    document.getElementById('bodyid').style.backgroundSize = '100% 100%';
    document.getElementById('bodyid').style.backgroundImage = 'none';
    document.getElementById('vipdoor').src = 'gate.jpg';  
    document.getElementById('arrowid21').style.display='none';
    name="";
    random="";
    special="";
    document.getElementById('secondbuttonid').innerHTML = 'Come on Dude!!!'
    mainfun()     
}

function vipspecial(){
    document.getElementById('vipdoor').style.display='none';
    document.getElementById('samplemainid21').style.display='block';
    document.getElementById('bodyid').style.backgroundColor = 'white';
    document.getElementById('bodyid').style.backgroundAttachment = "local";
    document.getElementById('bodyid').style.backgroundSize = '100% 560px';
    document.getElementById('bodyid').style.backgroundRepeat = 'no-repeat';
    document.getElementById('arrowid21').style.display='block';


    if(special == 'monu'){

        document.getElementById('bodyid').style.backgroundImage = "url('https://www.filmibeat.com/wimgm/1366x70/desktop/2018/12/k-g-f_154512300440.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://3.bp.blogspot.com/-Wv3A9SkuHMs/UvG5XxTQADI/AAAAAAAAEjA/LkF799AKLn8/s1600/1.jpg';
        document.getElementById('sampleimg2id21').src='https://i2.wp.com/thekaravaliwok.com/wp-content/uploads/2018/02/DSC_0342.jpg?resize=375%2C414&ssl=1';
        document.getElementById('sampleimg3id21').src='bakchod.jpg';

        document.getElementById('sampleduo1id21').src='monu 1.jpg';
        document.getElementById('sampleduo2id21').src='monu 2.jpg';
        document.getElementById('sampleduo3id21').src='monu 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='wish u a very very happy new year monu...i wish you will get whatever you want.';
        document.getElementById('sampletxt2id21').innerHTML='keep smiling...  enjoy   with full masti';
        document.getElementById('sampletxt3id21').innerHTML='dieting suru kar le...vrna ghar me baithe baithe full kar gubbara ho jayagi';
    
    }
    if(special == 'mrcy'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://wallpapercave.com/wp/wp2482330.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg';
        document.getElementById('sampleimg2id21').src='https://content.techgig.com/thumb/msid-75672064,width-860,resizemode-4/Bill-Gates-recommends-these-online-free-resources-to-learn-coding.jpg?66999';
        document.getElementById('sampleimg3id21').src='bakchod.jpg';

        document.getElementById('sampleduo1id21').src='mrcy 1.jpg';
        document.getElementById('sampleduo2id21').src='mrcy 2.jpg';
        document.getElementById('sampleduo3id21').src='mrcy 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='Happy new year mrcy....how are you..i wish this year give you all the happiness you want...';
        document.getElementById('sampletxt2id21').innerHTML='mrcy ନୂଆ ବର୍ଷର ଶୁଭେଚ୍ଛା ...';
        document.getElementById('sampletxt3id21').innerHTML='mera aashirvaad sadevv aapke sath hai...fikar naa karo vats...';
    
    }
    if(special == 'riya'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://wallpaperaccess.com/full/1137839.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://www.thesprucecrafts.com/thmb/4krlR_ONU4EDXKbCb8FCWFkz--Y=/2121x1414/filters:fill(auto,1)/GettyImages-922707682-5b90467bc9e77c0025931eef.jpg';
        document.getElementById('sampleimg2id21').src='https://i.pinimg.com/originals/74/b3/51/74b351be9005b96d38702504fde99fd7.gif';
        document.getElementById('sampleimg3id21').src='bakchod.jpg';

        document.getElementById('sampleduo1id21').src='riya 1.jpg';
        document.getElementById('sampleduo2id21').src='riya 2.jpg';
        document.getElementById('sampleduo3id21').src='riya 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='wish you a verrrryyy verrrryyyy happy neww year closed riya.....';
        document.getElementById('sampletxt2id21').innerHTML='enjoy your happy couple life...stay safe....stay happy';
        document.getElementById('sampletxt3id21').innerHTML='party to deni padagi betaaaa....';
    
    }
    if(special == 'samita'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://i.ytimg.com/vi/sraZuv8cJow/maxresdefault.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/The_Chief_Minister_of_West_Bengal%2C_Ms._Mamata_Banerjee.jpg/220px-The_Chief_Minister_of_West_Bengal%2C_Ms._Mamata_Banerjee.jpg';
        document.getElementById('sampleimg2id21').src='https://i.pinimg.com/originals/8e/f3/4d/8ef34db225e9df54376d6d3ff771143a.jpg';
        document.getElementById('sampleimg3id21').src='https://rockymountevents.com/wp-content/uploads/2018/09/birthday_celebration.jpg';

        document.getElementById('sampleduo1id21').src='samita 1.jpg';
        document.getElementById('sampleduo2id21').src='samita 2.jpg';
        document.getElementById('sampleduo3id21').src='samita 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='sooo beta my son wish you a very very happy new year...';
        document.getElementById('sampletxt2id21').innerHTML='stay safe stay happy...and enjoy...or sun 3rd year k liye field dhundna suru kar de';
        document.getElementById('sampletxt3id21').innerHTML='তুমি আমার ছেলে. আমি জানি আপনি বোকা তবে নতুন বছর শুভ';
        
    }
    if(special == 'swati'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://free4kwallpapers.com/uploads/originals/2019/12/03/shiva-wallpaper.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://media0.giphy.com/media/hXIfeRydUFneO5Limu/giphy.gif';
        document.getElementById('sampleimg2id21').src='https://www.nme.com/wp-content/uploads/2018/09/margot-696x442.png';
        document.getElementById('sampleimg3id21').src='https://183263-537949-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/11/Successful-Business-Women.jpg';

        document.getElementById('sampleduo1id21').src='swati 1.jpg';
        document.getElementById('sampleduo2id21').src='swati 2.jpg';
        document.getElementById('sampleduo3id21').src='swati 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='wish you a very very happy nwwww yearrr miss kumari swati singh surayvanshi......';
        document.getElementById('sampletxt2id21').innerHTML='नवीन वर्षाच्या शुभेच्छा ... एके दिवशी आपण सॉफ्टवेअर अभियंता व्हाल अशी माझी इच्छा आहे';
        document.getElementById('sampletxt3id21').innerHTML='stay safe....happy....enjoy life...fun..masti....';
        
    }
    if(special == 'vrsa'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://www.wallpapertip.com/wmimgs/99-991421_shin-chan-wallpaper-hd.png')";
       
        document.getElementById('sampleimg1id21').src='https://news.sanfordhealth.org/wp-content/uploads/2017/07/COmp-Woman-stretching.jpg';
        document.getElementById('sampleimg2id21').src='yusuf.jpg';
        document.getElementById('sampleimg3id21').src='https://i.cdn.newsbytesapp.com/images/l158_14871576661020.jpg';

        document.getElementById('sampleduo1id21').src='vrsa 1.jpg';
        document.getElementById('sampleduo2id21').src='vrsa 2.jpg';
        document.getElementById('sampleduo3id21').src='vrsa 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='wish you  veryyyy veryyyy hapyyyy newwwwwww yearrrr vrsaaaa....';
        document.getElementById('sampletxt2id21').innerHTML='kher jharkhand m to jungle hi jungle h to wha to kya hi new year banate hone.......';
        document.getElementById('sampletxt3id21').innerHTML='phir bhi...stay safe...happy...joyfulllll';
        
    }
    if(special == 'anjali'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://www.fastweb.com/uploads/article_photo/photo/2037859/crop635w_study-tips-for-midterms-and-beyond.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://image.winudf.com/v2/image1/Y29tLnNldGFzd2FsbHBhcGVyLmJvb2sxX3NjcmVlbl8xXzE1NTY5MjQyMDBfMDkx/screen-1.jpg?fakeurl=1&type=.jpg';
        document.getElementById('sampleimg2id21').src='https://pwestpathfinder.com/wp-content/uploads/2019/11/Add-a-heading.jpg';
        document.getElementById('sampleimg3id21').src='https://static1.squarespace.com/static/55f009c8e4b079158f302bab/55f00a13e4b031210ec8b811/5649c0cae4b02d8d6e27efae/1455290053315/?format=1500w';

        document.getElementById('sampleduo1id21').src='anjali 1.jpg';
        document.getElementById('sampleduo2id21').src='anjali 2.jpg';
        document.getElementById('sampleduo3id21').src='anjali 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='wish youu a veryyy veryyy happy new year.. stay safe happy and enjoy each moment...';
        document.getElementById('sampletxt2id21').innerHTML='i know u r topper .. to wo hi rho apni padvi khna mat per life enjoy is also imp';
        document.getElementById('sampletxt3id21').innerHTML='y salll teko bout sari khusiya de be happy';
        
    }
    if(special == 'moti'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://wallpapercave.com/wp/wp2588231.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://bucket.mn2s.com/wp-content/uploads/2020/04/09125407/socialmedia-mn2s.jpg';
        document.getElementById('sampleimg2id21').src='https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/love-proposal-from-heart-gnanaprakash.jpg';
        document.getElementById('sampleimg3id21').src='https://post.healthline.com/wp-content/uploads/2020/08/mixed-tension-migraine_thumb.jpg';

        document.getElementById('sampleduo1id21').src='moti 1.jpg';
        document.getElementById('sampleduo2id21').src='moti 2.jpg';
        document.getElementById('sampleduo3id21').src='moti 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='orrrr motii kaidaa haad chadlll... i hope you are changa and maja maa';
        document.getElementById('sampletxt2id21').innerHTML='tohadaa naya sall ki lakah lakh badiyaji ji badiyaaaa';
        document.getElementById('sampletxt3id21').innerHTML='kandoo s dur rha... weight lose kr... pyar mohabat chutyape s dur rha... life enjoy kr and succes ho  my ashirwad is with u moti..';
        
    }
    if(special == 'avinash'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://www.minuteschool.com/wp-content/uploads/2017/11/blog-nov16-1080x630.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbestechcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg';
        document.getElementById('sampleimg2id21').src='https://img.jakpost.net/c/2019/03/02/2019_03_02_66706_1551461528._large.jpg';
        document.getElementById('sampleimg3id21').src='https://static1.squarespace.com/static/55f009c8e4b079158f302bab/55f00a13e4b031210ec8b811/5649c0cae4b02d8d6e27efae/1455290053315/?format=1500w';

        document.getElementById('sampleduo1id21').src='avinash 1.jpg';
        document.getElementById('sampleduo2id21').src='avinash 2.jpg';
        document.getElementById('sampleduo3id21').src='avinash 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='bro wish you a very very happy new year';
        document.getElementById('sampletxt2id21').innerHTML='stay safe.. healthy.. live life with ful of joy and fun.. ';
        document.getElementById('sampletxt3id21').innerHTML='enjoy with your girlfriends .. i wish this 2021 will be luckiest year for you';
        
    }
    if(special == 'kartik'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://i.ytimg.com/vi/CwXpxzWgUnA/maxresdefault.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://m.economictimes.com/thumb/msid-77342362,width-1200,height-900,resizemode-4,imgsize-419941/gym.jpg';
        document.getElementById('sampleimg2id21').src='https://www.stoodnt.com/blog/wp-content/uploads/2019/12/study_music.jpg';
        document.getElementById('sampleimg3id21').src='https://www.reuniontrips.in/wp-content/uploads/2018/11/boys-gang.jpg';

        document.getElementById('sampleduo1id21').src='kartik 1.jpg';
        document.getElementById('sampleduo2id21').src='kartik 2.jpg';
        document.getElementById('sampleduo3id21').src='kartik 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='bro wish you a very very happy new year';
        document.getElementById('sampletxt2id21').innerHTML='stay safe.. healthy.. live life with ful of joy and fun.. ';
        document.getElementById('sampletxt3id21').innerHTML='enjoy with your girlfriends .. i wish this 2021 will be luckiest year for you';
        
    }
    if(special == 'srinivas'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://www.7pace.com/wp-content/uploads/2020/08/cover-Focused-vs-diffuse.png')";
       
        document.getElementById('sampleimg1id21').src='https://insight.study.csu.edu.au/wp-content/uploads/2018/08/How-to-stay-motivated-when-studying-online-banner.jpg';
        document.getElementById('sampleimg2id21').src='https://image.freepik.com/free-photo/coding-man_1098-18084.jpg';
        document.getElementById('sampleimg3id21').src='https://uianimaler.com/images/speech_bubble_01.jpg';

        document.getElementById('sampleduo1id21').src='srinivas 1.jpg';
        document.getElementById('sampleduo2id21').src='srinivas 2.jpg';
        document.getElementById('sampleduo3id21').src='https://i.pinimg.com/564x/0d/11/c1/0d11c17fa0147794ae44e2ef9de84f1a.jpg';

        document.getElementById('sampletxt1id21').innerHTML='bro wish you a very very happy new year';
        document.getElementById('sampletxt2id21').innerHTML='stay safe.. healthy.. live life with ful of joy and fun.. ';
        document.getElementById('sampletxt3id21').innerHTML='enjoy with your girlfriends .. i wish this 2021 will be luckiest year for you';
        
    }
    if(special == 'manish'){
        document.getElementById('bodyid').style.backgroundImage = "url('https://i.ytimg.com/vi/MOWDb2TBYDg/maxresdefault.jpg')";
       
        document.getElementById('sampleimg1id21').src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/The_Chief_Minister_of_West_Bengal%2C_Ms._Mamata_Banerjee.jpg/220px-The_Chief_Minister_of_West_Bengal%2C_Ms._Mamata_Banerjee.jpg';
        document.getElementById('sampleimg2id21').src='https://news.pieperbar.com/hs-fs/hubfs/Blogs/Pieper-Blog-How-Studying-for-the-Bar-Exam-is-Different-Than-Studying-in-Law-School.jpg?width=800&name=Pieper-Blog-How-Studying-for-the-Bar-Exam-is-Different-Than-Studying-in-Law-School.jpg';
        document.getElementById('sampleimg3id21').src='https://i.pinimg.com/originals/80/49/8f/80498f58bf66949d3ff4e8bc39e172d0.jpg';

        document.getElementById('sampleduo1id21').src='manish 1.jpg';
        document.getElementById('sampleduo2id21').src='manish 2.jpg';
        document.getElementById('sampleduo3id21').src='manish 3.jpg';

        document.getElementById('sampletxt1id21').innerHTML='bro wish you a very very happy new year';
        document.getElementById('sampletxt2id21').innerHTML='নিরাপদ থাকুন .. স্বাস্থ্যকর .. পুরো আনন্দ এবং মজাদার সাথে জীবনযাপন করুন ..';
        document.getElementById('sampletxt3id21').innerHTML='আপনার গার্লফ্রেন্ডদের সাথে উপভোগ করুন .. আমি আশা করি এই 2021 আপনার জন্য ভাগ্যবান বছর হবে';
        
    }
}
// 2021.................................



var male;
function firstwelcome(){
    document.getElementById('maleid').style.display='none';
    document.getElementById('femaleid').style.display='none';
    document.getElementById('aboutmeid').style.display='none';

    document.getElementById('innoscentid').style.display='block';
    document.getElementById('gentalid').style.display='block';
    document.getElementById('haramiid').style.display='block';
    document.getElementById('aid').style.display='block';

    male = document.getElementById('maleid').innerHTML;
    
}

var female;
function secondwelcome(){
    document.getElementById('maleid').style.display='none';
    document.getElementById('femaleid').style.display='none';
    document.getElementById('aboutmeid').style.display='none';

    document.getElementById('innoscentid').style.display='block';
    document.getElementById('gentalid').style.display='block';
    document.getElementById('haramiid').style.display='block';
    document.getElementById('aid').style.display='block';
    
    female = document.getElementById('femaleid').innerHTML;
    
}

function zerowelcome(){
    document.getElementById('maleid').style.display='block';
    document.getElementById('femaleid').style.display='block';
    document.getElementById('aboutmeid').style.display='block';

    document.getElementById('innoscentid').style.display='none';
    document.getElementById('gentalid').style.display='none';
    document.getElementById('haramiid').style.display='none';
    document.getElementById('aid').style.display='none';
   
    male = "";
    female = "";
}







function thirdwelcome(){
    document.getElementById('mainboxid').style.display='none';
    document.getElementById('arrowid').style.display='block';
    document.getElementById('welcomebodyid').style.backgroundColor = 'white';
    document.getElementById('samplemainid').style.display='block';


    document.getElementById('welcomebodyid').style.backgroundAttachment = "local";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 560px';
    document.getElementById('welcomebodyid').style.backgroundRepeat = 'no-repeat';


    
    if(male==document.getElementById('maleid').innerHTML){

        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://i.pinimg.com/originals/eb/b8/2b/ebb82bf5a236073d28bc41b4c643c3f2.jpg')";
       
        document.getElementById('sampleimg1id').src='https://i.pinimg.com/originals/fb/17/2f/fb172f382e4f0f3639909d5e8260f455.jpg';
        document.getElementById('sampleimg2id').src='https://i.pinimg.com/originals/8e/ce/21/8ece21e5adb6d115cd0b19c7333e0102.jpg';
        document.getElementById('sampleimg3id').src='https://lh3.googleusercontent.com/proxy/p1WcpY5YAp85hiDL7RI-8ZJgT49EARo-MOxDQKKFk53jMGIA8SpeJiNBKddkm-3n54AETyeW65Cqbl6PIRdQ2lco55BLdmptJqLnupjaYMinMUBsAihQPa7Ju2Q';

        document.getElementById('sampleduo1id').src='https://www.mynameart.com/pics/new-year-2021-wishes-images-free.jpg';
        document.getElementById('sampleduo2id').src='https://media.tenor.com/images/4dc6c573b2091cf9cf8b72df28de1cb8/tenor.gif';
        document.getElementById('sampleduo3id').src='https://scdcentre.com/wp-content/uploads/the-psychology-of-happiness.jpg';

        document.getElementById('sampletxt1id').innerHTML='“In our perfect ways. In the ways we are beautiful. In the ways we are human. We are here. Happy New Year’s. Let’s make it ours.”';
        document.getElementById('sampletxt2id').innerHTML='“Kindness, kindness, kindness. I want to make a new year"s prayer, not a resolution. I"m praying for courage.” ';
        document.getElementById('sampletxt3id').innerHTML='“The future belongs to those who believe in the beauty of their dreams.”';
    }
    








    if(female==document.getElementById('femaleid').innerHTML){
 
        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg')";
       
        document.getElementById('sampleimg1id').src='https://www.itl.cat/pngfile/big/58-588880_boo-dog-image-boo-dog.jpg';
        document.getElementById('sampleimg2id').src='https://wallpapercave.com/wp/5dVsniU.jpg';
        document.getElementById('sampleimg3id').src='https://2.bp.blogspot.com/-RTv_wZ8jtTI/U8_MIltBrRI/AAAAAAAAL8A/OodChxsXFRw/s1600/hinh-nen-em-be+(7).jpg';

        document.getElementById('sampleduo1id').src='https://www.businessinsider.in/thumb/msid-80011822,width-600,resizemode-4,imgsize-431835/politics/india/news/happy-new-year-2021-wishes-and-messages-for-your-dear-ones/happy-new-year.jpg';
        document.getElementById('sampleduo2id').src='https://thumbs.gfycat.com/DisgustingComplicatedAmphiuma-size_restricted.gif';
        document.getElementById('sampleduo3id').src='https://www.lgt.com/export/shared/.content/publikationen/$news_images/20_053_image2.jpg';

        document.getElementById('sampletxt1id').innerHTML='“This is a new year. A new beginning. And things will change.”';
        document.getElementById('sampletxt2id').innerHTML='“For last year"s words belong to last year"s language. And next year"s words await another voice.”';
        document.getElementById('sampletxt3id').innerHTML='“It is not in the stars to hold our destiny but in ourselves.”';
         
    }
}

function forthwelcome(){
    document.getElementById('mainboxid').style.display='none';
    document.getElementById('arrowid').style.display='block';
    document.getElementById('welcomebodyid').style.backgroundColor = 'white';
    document.getElementById('samplemainid').style.display='block';


    document.getElementById('welcomebodyid').style.backgroundAttachment = "local";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 560px';
    document.getElementById('welcomebodyid').style.backgroundRepeat = 'no-repeat';


    
    if(male==document.getElementById('maleid').innerHTML){

        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://www.teahub.io/photos/full/55-557581_gentleman-background-hd.jpg')";
       
        document.getElementById('sampleimg1id').src='https://wallpapercave.com/wp/wp3577630.jpg';
        document.getElementById('sampleimg2id').src='https://i.pinimg.com/originals/75/79/db/7579db53620b58a022c9c6c72e2316bc.jpg';
        document.getElementById('sampleimg3id').src='https://wallpapercave.com/wp/wp6692410.jpg';

        document.getElementById('sampleduo1id').src='https://happynewyear2021.net/wp-content/uploads/2019/10/2021-new-year.jpg';
        document.getElementById('sampleduo2id').src='https://64.media.tumblr.com/368a7723d61bb2e27ced337dd822514a/tumblr_pmky6nkqZQ1vv42ga_500.gifv';
        document.getElementById('sampleduo3id').src='https://content.thriveglobal.com/wp-content/uploads/2019/07/SMALL-THINGS1.jpg';

        document.getElementById('sampletxt1id').innerHTML='“The beginning is the most important part of the work.”';
        document.getElementById('sampletxt2id').innerHTML='“No matter how hard the past is, you can always begin again.”';
        document.getElementById('sampletxt3id').innerHTML='New year, new start. May all your dreams come true in 2021!';
    }
    








    if(female==document.getElementById('femaleid').innerHTML){
 
        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://img5.goodfon.com/wallpaper/nbig/7/c2/enrique-mesegue-devushka-krasivaia-nezhnaia.jpg')";
       
        document.getElementById('sampleimg1id').src='https://i.pinimg.com/originals/de/c8/5d/dec85d3977cfbc1d016f9ccf2b2b9c0c.jpg';
        document.getElementById('sampleimg2id').src='https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
        document.getElementById('sampleimg3id').src='https://wallpapercave.com/wp/wp4049203.jpg';

        document.getElementById('sampleduo1id').src='https://miro.medium.com/max/2048/1*WZKRDcHUFMCj9ryJEEs74g.jpeg';
        document.getElementById('sampleduo2id').src='https://i.pinimg.com/originals/91/8a/1a/918a1a6ff663f7f8d4e1b2e966ce1b8e.gif';
        document.getElementById('sampleduo3id').src='https://www.drjimtaylor.com/4.0/wp-content/uploads/2020/08/happiness.jpg';

        document.getElementById('sampletxt1id').innerHTML='New Year’s Day is the first page in a blank book: Write a phenomenal story!';
        document.getElementById('sampletxt2id').innerHTML='You deserve all the best: May all your wishes come true in 2021!';
        document.getElementById('sampletxt3id').innerHTML='The future is your story to write… make next year the best one yet.';
         
    }

}

function fifthwelcome(){
    alert('Bade Harami Ho Betaa...!');
    document.getElementById('mainboxid').style.display='none';
    document.getElementById('arrowid').style.display='block';
    document.getElementById('welcomebodyid').style.backgroundColor = 'white';
    document.getElementById('samplemainid').style.display='block';


    document.getElementById('welcomebodyid').style.backgroundAttachment = "local";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 560px';
    document.getElementById('welcomebodyid').style.backgroundRepeat = 'no-repeat';


    
    if(male==document.getElementById('maleid').innerHTML){

        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://miro.medium.com/max/2048/0*oWXbULQRv3Igrz4J.png')";
       
        document.getElementById('sampleimg1id').src='https://i.pinimg.com/originals/c9/55/81/c95581e36af76c022e8e9e2635f5e2fe.jpg';
        document.getElementById('sampleimg2id').src='https://www.wallpapertip.com/wmimgs/3-32233_hand-in-dark-background.jpg';
        document.getElementById('sampleimg3id').src='https://cdn.promodj.com/afs/13bea25276a176d2b8542ddb2155f2be12:resize:640x480:fill:ffffff:0bd36c';

        document.getElementById('sampleduo1id').src='https://www.quoteswishesmsg.com/wp-content/uploads/2019/12/happy-new-year-wishes-26.jpg';
        document.getElementById('sampleduo2id').src='https://i.pinimg.com/originals/58/e0/35/58e035c7b998c64cf0b7dc22c623e3b3.gif';
        document.getElementById('sampleduo3id').src='https://i0.wp.com/nwasianweekly.com/wp-content/uploads/2019/09/BLOG-happiness.jpg?fit=626%2C417&ssl=1';

        document.getElementById('sampletxt1id').innerHTML='Here’s to another year of making memories with you, my cherished friend. Happy New Year!';
        document.getElementById('sampletxt2id').innerHTML='I’m so grateful for your support and love this year. Here’s to many more years of friendship!';
        document.getElementById('sampletxt3id').innerHTML='In an extraordinary year, I’ve been grateful for your extraordinary friendship…. thank you. And cheers to new beginnings!';
    }
    








    if(female==document.getElementById('femaleid').innerHTML){
 
        document.getElementById('welcomebodyid').style.backgroundImage = "url('https://images.wallpapersden.com/image/download/bodybuilder-2020-man_a25rbW2UmZqaraWkpJRmbmdlrWZlbWU.jpg')";
       
        document.getElementById('sampleimg1id').src='https://cdn-b.william-reed.com/var/wrbm_gb_hospitality/storage/images/publications/hospitality/bighospitality.co.uk/article/2018/04/26/beer-quiz-25-questions-to-test-your-knowledge/2807204-1-eng-GB/Beer-quiz-25-questions-to-test-your-knowledge_wrbm_large.jpg';
        document.getElementById('sampleimg2id').src='https://www.therecoveryvillage.com/wp-content/uploads/2017/05/shutterstock_139087055-600x400-300x200.jpg';
        document.getElementById('sampleimg3id').src='https://i.guim.co.uk/img/media/cd669a79153ad4f59404d4426716f8c6b15feb8c/0_270_4039_2424/master/4039.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=88a76585d556ace96080d7831b6c345f';

        document.getElementById('sampleduo1id').src='https://i.pinimg.com/736x/51/da/d0/51dad0e88737473e30e07b18c63194d6.jpg';
        document.getElementById('sampleduo2id').src='https://media2.giphy.com/media/5bgOQIZu7PmNwaZ2jA/giphy-downsized.gif';
        document.getElementById('sampleduo3id').src='https://www.goalcast.com/wp-content/uploads/2017/05/friends.jpg';

        document.getElementById('sampletxt1id').innerHTML='Cheers to health, happiness, and prosperity in 2021!';
        document.getElementById('sampletxt2id').innerHTML='Wishing you and yours a safe, healthy, and prosperous new year!';
        document.getElementById('sampletxt3id').innerHTML='Cheers to more shared successes in the new year!';
         
    }

}
var jin;
function arrowfun(){
    
    document.getElementById('mainboxid').style.display='inline-block';
    document.getElementById('arrowid').style.display='none';
    document.getElementById('welcomebodyid').style.backgroundAttachment = "fixed";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 100%';
   
    if(jin=='jatin'){
        
        document.getElementById('maleid').style.display='block';
        document.getElementById('femaleid').style.display='block';
      jin="chinu";
    }
    else if(jin==undefined){
      
    document.getElementById('innoscentid').style.display='block';
    document.getElementById('gentalid').style.display='block';
    document.getElementById('haramiid').style.display='block';
    }

    
    document.getElementById('welcomebodyid').style.backgroundColor = 'black';
    document.getElementById('samplemainid').style.display='none';

    document.getElementById('welcomebodyid').style.backgroundAttachment = "fixed";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 100%';
    document.getElementById('welcomebodyid').style.backgroundRepeat = 'no-repeat';

}


function jatin(){
    jin = 'jatin';
    document.getElementById('mainboxid').style.display='none';
    document.getElementById('arrowid').style.display='block';
    document.getElementById('welcomebodyid').style.backgroundColor = 'white';
    document.getElementById('samplemainid').style.display='block';


    document.getElementById('welcomebodyid').style.backgroundAttachment = "local";
    document.getElementById('welcomebodyid').style.backgroundSize = '100% 560px';
    document.getElementById('welcomebodyid').style.backgroundRepeat = 'no-repeat';
   
    document.getElementById('welcomebodyid').style.backgroundImage = "url('https://images3.alphacoders.com/106/1069102.jpg')";
       
    document.getElementById('sampleimg1id').src='https://static1.squarespace.com/static/55f009c8e4b079158f302bab/55f00a13e4b031210ec8b811/5649c0cae4b02d8d6e27efae/1455290053315/?format=1500w';
    document.getElementById('sampleimg2id').src='https://lh3.googleusercontent.com/proxy/kW9JxfEbJ-NwIca0KJfzqYAX-NgiCeyO0krTpwnxr_sl1taYsnBO8Z2yQVMUL9NVhtP3O0joz8cThAd6m2BQD03LjArnEsD4QFRzJhF4r78zplA';
    document.getElementById('sampleimg3id').src='https://image.shutterstock.com/image-vector/pixel-art-design-word-year-600w-344231336.jpg';

    document.getElementById('sampleduo1id').src='jatin 1.jpg';
    document.getElementById('sampleduo2id').src='jatin 2.jpg';
    document.getElementById('sampleduo3id').src='jatin 3.jpg';

    document.getElementById('sampletxt1id').innerHTML='Guys first of all wish you a very very happy new year..  btrr then 2020 hope so.. ';
    document.getElementById('sampletxt2id').innerHTML='i am jatin sharma and i really love working on webpages with some music ...';
    document.getElementById('sampletxt3id').innerHTML='i hope you like it... :)';

}