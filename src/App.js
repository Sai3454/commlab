import logo from './logo.svg';
import {IoCheckmarkDoneCircleSharp} from 'react-icons/io5'
import {RiTeamFill} from 'react-icons/ri'
import './App.css';

function App() {
  return (
    <div className="h-auto bg-cover bg-fixed gap-10" style={{
      backgroundImage: `url("https://resources.commlabindia.com/hubfs/webinars/corporate-training-with-ai-banner.jpg")`,
      backgroundPosition: "center",
    }}>
      <div className='flex flex-col gap-5 p-10'>
        <h1 className='h-1/6 text-white font-bold text-2xl text-center'>
        "Some people call this artificial intelligence, but the reality is this technology will enhance us. So, instead of artificial intelligence, I think we’ll augment our intelligence” - Ginni Rometty – Former CEO & President, IBM"
        </h1>
        <div className='flex gap-5'>
          <img src="https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=350&height=489&name=corporate-training-with-ai-banner-image.png"
               className='w-2/6'
          />
          <div className='flex flex-col items-center gap-5 bg-cover w-4/6 p-7 text-center' style={{backgroundImage: `url("https://resources.commlabindia.com/hubfs/webinars/corporate-training-with-ai-texture-bg.jpg")`}}>
            <h1 className='text-xl'>The Top Trending Topic of the Year</h1>
            <h1 className='text-3xl text-red-500'>Unleashing the Potential of AI in Corporate Training</h1>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-lg'>Learn how AI is helping corporates upskill and reskill workforce</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-lg'>Walk away with tips, tools, and resources to get started with AI-empowered training</h1>
            </div>
            <h1 className='bg-black text-white font-semibold text-xl font-serif px-5 py-1'>JOIN DR RK Prasad, Shalini, Rajesh LIVE</h1>
            <h1 className='text-lg w-3/6'>Tuesday, January 09, 2024
11 AM Eastern | 8 AM Pacific
Duration: 90 Minutes
$997 VALUE FREE!</h1>
<div className='flex justify-center items-center gap-5 px-5 py-3 rounded-3xl bg-red-600'>
  <div className=''>
    <RiTeamFill  className='h-10 w-10 text-white'/>
  </div>
  <p className='text-xl font-bold text-white'>SECURE YOUR SEAT</p>
</div>
          </div>
        </div>
      </div>

      <div className='bg-red-600 h-2/6 p-5 opacity-80'>
        <img src='https://resources.commlabindia.com/hubfs/webinars/logos-v2.png' className='' alt='logos' />
      </div>

      <div className='flex flex-col p-10 bg-cover bg-fixed h-auto gap-10' 
          style={{backgroundImage: `url("https://resources.commlabindia.com/hubfs/webinars/corporate-training-with-ai-grey-banner.jpg")`, 
                  backgroundPosition: "center",  
                }}

      >
        <h1 className='text-5xl text-center font-bold text-gray-700'>YOU WILL LEARN:</h1>
        <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>Evolution of AI and Corporate Training</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>How AI can close skills gaps with rapid upskilling and reskilling</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>Steps to integrate AI tools in training programs</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>Challenges and opportunities with AI implementation</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>Steps to integrate AI tools in training programs</h1>
            </div>
            <div className='flex items-center gap-5'>
              <div className=''>
              <IoCheckmarkDoneCircleSharp className='text-orange-600 h-8 w-8' />
              </div>
              <h1 className='text-xl'>Challenges and opportunities with AI implementation</h1>
            </div>
        </div>
        <div className='flex justify-center w-6/6'>
          <div className='flex flex-col gap-5 text-center w-4/6 text-gray-800'>
            <h1 className='text-3xl font-bold'>Unleashing the Potential of
  AI in Corporate Training</h1>
  <h1 className='text-2xl font-semibold'>The Impact of AI on L&D – Insights and Applications</h1>
  <h1 className='text-3xl font-bold'>Tuesday, January 09, 2024
  11 am Eastern | 8 am Pacific
  Duration: 90 Minutes</h1>
  <div className='flex justify-center items-center'>

            <div className='flex justify-center items-center gap-5 px-5 py-3 rounded-3xl bg-red-600'>
            <div className=''>
              <RiTeamFill  className='h-10 w-10 text-white'/>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-xl font-bold text-white'>SECURE YOUR SEAT</p>
            <span className='text-xl text-white'><span style={{textDecoration: "line-through"}}>$997 VALUE</span> - FREE!</span>
            </div>
            </div>
  </div>
          </div>
        </div>
      </div>

        <div className='bg-black p-10 flex flex-col justify-around gap-10 text-white'>
          <h1 className='text-center text-white text-5xl font-bold'>MEET YOUR HOSTS</h1>
          <div className='flex justify-evenly'>
            <div className='basis-2/6 p-8 gap-10'>
              <div className='flex flex-col gap-10'>

                <img src='https://resources.commlabindia.com/hubfs/webinars/rk-prasad-ai-webinar.jpg'
                  alt="photo"
                  className='h-[500] w-[250]'
                />
                <h1 className='font-bold text-2xl'>RK Prasad</h1>
                <h1 className='font-bold text-xl'>CEO & Co-Founder</h1>
                <p className='text-md'>RK has nurtured CommLab India from concept to commercial success, and is responsible for formulating the business strategy. He is also responsible for nurturing customer relationships. 

An entrepreneur at heart, RK has 35 years of experience in Sales, Corporate training, University teaching, and eLearning. He regularly conducts seminars and webinars for customers across the world on various topics of technology-enhanced learning.

RK holds a PhD in Mobile Learning from Lancaster University, UK, and an MBA.

A good teacher and engaging trainer, RK helps people learn and bloom. His priorities are his employees, his customers, and his community.
                </p>
              </div>
            </div>
            <div className=' basis-2/6 p-8 gap-10'>
            <div className='flex flex-col gap-10'>
                <img src='https://resources.commlabindia.com/hubfs/cli-main-site/about-us/Shalini.jpg'
                  alt="photo"
                  className='h-[500] w-[250]'
                />
                <h1 className='font-bold text-2xl'>Shalini Merugu</h1>
                <h1 className='font-bold text-xl'>Director - Learning Solutions</h1>
                <p className='text-md'>Shalini is a versatile learning design professional with 16+ years of experience in instructional design (ILT, VILT, and eLearning).

Her experience in designing eLearning solutions along with designing and delivering instructor-led training helps her leverage the strengths of each medium to consistently create impactful training solutions, ensuring that nothing is lost when converting from one format to another.

Apart from improving the quality of learning solutions, she also conducts customer education workshops at customer sites globally and presents webinars on learning design.
                </p>
            </div>

            </div>
            <div className=' basis-2/6 p-8 gap-10'>
            <div className='flex flex-col gap-10'>

                <img src='https://resources.commlabindia.com/hubfs/cli-main-site/about-us/rajesh-v4.jpg'
                  alt="photo"
                  className='h-[500] w-[250]'
                />
                <h1 className='font-bold text-2xl'>Rajesh Venkata</h1>
                <h1 className='font-bold text-xl'>Director – Innovation</h1>
                <p className='text-md'>Rajesh started his career as a Quality Executive in 2008, and gained expertise in eLearning, digital content delivery, and project management, over these 15+ years.

Rajesh has an excellent track record of team management and operational planning, along with good knowledge of eLearning authoring tools such as Storyline, Captivate, and Lectora.

Well-experienced in managing multiple projects for global clients, Rajesh has a keen eye for trends in the tech-enabled learning space. This made him the natural choice for the current role, where he researches the latest tools and tech, and guides the CommLab India team in leveraging them to address training needs faster, better, and er.
                </p>
            </div>

            </div>
          </div>
        </div>

        <div className="h-auto bg-cover bg-fixed gap-10" style={{
      backgroundImage: `url("https://resources.commlabindia.com/hubfs/webinars/corporate-training-with-ai-banner.jpg")`,
      backgroundPosition: "center",
    }}>
      <div className='flex justify-center w-6/6 p-10'>
          <div className='flex flex-col gap-5 text-center w-4/6 text-white'>
            <h1 className='text-3xl font-bold'>Unleashing the Potential of
  AI in Corporate Training</h1>
  <h1 className='text-2xl font-semibold'>The Impact of AI on L&D – Insights and Applications</h1>
  <h1 className='text-3xl font-bold'>Tuesday, January 09, 2024
  11 am Eastern | 8 am Pacific
  Duration: 90 Minutes</h1>
  <div className='flex justify-center items-center'>

            <div className='flex justify-center items-center gap-5 px-5 py-3 rounded-3xl bg-red-600'>
            <div className=''>
              <RiTeamFill  className='h-10 w-10 text-white'/>
            </div>
            <div className='flex flex-col gap-5'>
            <p className='text-xl font-bold text-white'>SECURE YOUR SEAT</p>
            <span className='text-xl text-white'><span style={{textDecoration: "line-through"}}>$997 VALUE</span> - FREE!</span>
            </div>
            </div>
  </div>
          </div>
        </div>
    </div>

    <div className="flex justify-between p-10 text-white bg-black">
      <div className='flex flex-col gap-5'>
        <img src="https://resources.commlabindia.com/hubfs/commlab_logo/cl-logo-final-white.png" 
          alt='logo'
          className='w-[400] h-[100]'
        />
        <h1 className='text-lg'>Copyright © 2023, CommLab India</h1>
      </div>
      <div className='self-end text-lg'>
        <div className='flex gap-2'>
          <p className=''>Privacy policy |</p>
          <p>Site Map</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
