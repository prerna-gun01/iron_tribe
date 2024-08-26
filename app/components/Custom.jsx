"use client"
import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const Custom = (props) => {
    console.log(props, "props");
    return (
        <div>
            {/* {props} */}
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
            >
                <CarouselContent>
                    {props.data.map((items, index) => (
                        <CarouselItem key={index} className="  px-5">
                            <div className="p-1 rounded-lg">


                                <div className='text-end'>

                                </div>
                                <img src={items} className=" mx-auto rounded-md w-96
                                                 h-96" />


                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>
        </div>
    )
}

export default Custom
