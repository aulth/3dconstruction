import React from 'react'

const UmbrellaPage = () => {
    return (
        <div className="w-full flex gap-4 flex-col md:flex-row justify-center items-center p-5 bg-[#F4F6F8]">
            <div className="flex md:flex-row flex-col w-full gap-2">
                <div className='w-full md:w-1/2'>
                    <h3 className="font-bold roboto-font text-xl">Main Office</h3>
                    <address>Office 918, Business Village Block B
                        Port Saeed, Dubai
                    </address>
                </div>
                <div className='w-full md:w-1/2'>
                    <h3 className="font-bold roboto-font text-xl">Branches</h3>
                    <ul className="flex flex-col gap-1 list-disc list-inside">
                        <li>Sharja</li>
                        <li>Abu Dhabi</li>
                        <li>Ajman</li>
                        <li>United Kingdom</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default UmbrellaPage