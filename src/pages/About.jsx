import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>
          Sérgio</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500 text-justify'>
        <p>Former geologist who turned full stack developer. After completing a
          Master's degree I left the world of rocks behind and embarked on a new
          adventure, discovering my passion for programming. I’ve applied for an
          intensive full stack bootcamp and found my true calling. Today, I ́m a highly
          motivated developer with almost 7 years of experience dedicated
          to creating innovative solutions to real-world problems.</p>
      </div>

      <div className='py-14 flex flex-col'>
        <h3 className='subhead-text'>
          My Skills
        </h3>

        <div className='mt-16 flex flex-wrap gap-12 justify-center px-[10%] py-[3%]'>
          {skills.map((skill, index) => (
            <div className='block-container w-20 h-20' key={index}>
              <div className='btn-back rounded-xl'>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='py-16'>
          <h3 className='subhead-text'>Work Experience</h3>
          <p className='mt-5 flex flex-col gap-3 text-slate-500'>I've worked with quite
            some companies, different technologies, and people. Some of my projects include:
          </p>
        </div>

        <div className='flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section >
  )
}

export default About;
