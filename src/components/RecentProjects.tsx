'use client';

import { FaLocationArrow } from 'react-icons/fa6';

import { projects } from 'data';
import { PinContainer } from './ui/Pin';
import Image from 'next/image';

const RecentProjects = () => {
    return (
        <div id='projects' className="py-20">
            <h1 className="heading">
                Небольшая подборка <span className="text-purple">последних проектов</span>
            </h1>
            <div className="flex flex-wrap projects-center justify-center p-4 gap-16 mt-10">
                {projects.map((project) => (
                    <div
                        className="lg:min-h-[32.5rem] h-[25rem] flex projects-center justify-center sm:w-96 w-[80vw]"
                        key={project.id}
                    >
                        <PinContainer title={project.link} href={project.link}>
                            <div className="relative flex projects-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[245px]  mb-10 bg-[#13162D] lg:rounded-3xl">
                                {/* <div
                                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: '#13162D' }}
                                >
                                    <Image src="/bg.png" alt="bgimg" width={200} height={200} />
                                </div> */}
                                <Image
                                    src={project.img}
                                    alt="cover"
                                    // className="z-10 absolute bottom-0"
                                    width={380}
                                    height={200}
                                />
                            </div>

                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{project.title}</h1>

                            <p
                                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                style={{
                                    color: '#BEC1DD',
                                    margin: '1vh 0',
                                }}
                            >
                                {project.des}
                            </p>

                            <div className="flex projects-center justify-between mt-7 mb-3">
                                <div className="flex projects-center">
                                    {project.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center projects-center"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <Image src={icon} alt="icon5" className="p-2" width={200} height={200} />
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">Посмотреть</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;
