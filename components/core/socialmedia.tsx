'use client'

import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Icons from '@/components/icons'
import { PageHeader, PageHeaderHeading, PageHeaderDescription } from '@/components/typografy/heading'


gsap.registerPlugin(ScrollTrigger);


export default function Scroll() {
    const main = useRef();

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {

            gsap.from('.text-3xl', {
                y: -250,
                scale: 0,
                opacity: 0,

                duration: 1,
                stagger: 0.2
            });

            gsap.from('.text-lg', {
                x: -100,
                opacity: 0,

                delay: 0.5,
                duration: 0.6,
            })

            gsap.from('.w-8', {
                x: -20,
                scale: 0,
                opacity: 0,

                delay: 1,
                duration: 0.4,
                stagger: 0.2
            });


            gsap.to('target', {
                x: -350,
                scrollTrigger: {
                    trigger: main.current,
                    start: 'top 10%',
                    end: 'bottom 20%',
                    scrub: true,
                    markers: true,
                },
            });
        })

        return () => ctx.revert()
    }, [])

    return (
        // @ts-ignore
        <div id='target' ref={main}>
            <PageHeader className="pb-8">
                <PageHeaderHeading><em className='text-6xl'>A</em >rthur <a className='text-6xl'>H</a >enrique</PageHeaderHeading>
                <PageHeaderDescription>
                    Enthusiastic learner • Computer scientist • Python developer • Software business analyst • Unix-like system user
                </PageHeaderDescription>
                <div className="flex w-full items-center space-x-4 pb-8 pt-4 md:pb-10">
                    <Icons.GitHub className='w-8 text-black' />
                    <Icons.LinkedIn className='w-8 text-black' />
                    <Icons.Twitter className='w-8 text-black' />
                    <Icons.Gmail className='w-8 text-black' />
                    <Icons.Codepen className='w-8 text-black' />
                    <Icons.StackOverflow className='w-8 text-black' />
                </div>
            </PageHeader>
        </div>
    );
}