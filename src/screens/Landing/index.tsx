import React, {FC} from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import MainLayout from '../../shared/layouts/MainLayout';


const Landing: FC = () => {

    const {t: translate} = useTranslation();

    return (
        <MainLayout>
            <div className="xl:container md:container mx-auto">
                <div className='grid grid-row-auto justify-center text-red-100 italic text-3xl font-bold mt-20 mx-4 md:mx-0 text-center'>
                    {translate('landing_screen_title')}
                </div>
                <div className='grid md:grid-cols-2 gap-10 mt-12 mx-4 md:mx-0'>
                    <div className="">
                        <img className="rounded-lg" src='./assets/images/introvert.png' alt='Introvert' />
                    </div>
                    <div className="">
                        <img className="rounded-lg" src='./assets/images/extrovert.png' alt='Extrovert' />
                    </div>
                </div>
            </div>
            <div className='bg-blue-50 mt-20 py-20'>
                <div className='grid grid-row-auto justify-center text-white italic text-3xl font-bold'>
                    {translate('how_it_works_label')}
                </div>
                <div className="xl:container md:container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gab-4 mt-10">
                        <div className='flex flex-col justify-center align-center mx-10 md:mx-0 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-red-100 rounded-full'>
                                    <span className='text-2xl text-white'>1</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-white font-bold mt-4">{translate('how_it_works_note_1_title')}</p>
                            <p className="text-center text-sm text-white font-bold mt-4">{translate('how_it_works_note_1_description')}</p>
                        </div>
                        <div className='flex flex-col justify-center align-center mx-10 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-red-100 rounded-full'>
                                    <span className='text-2xl text-white'>2</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-white font-bold mt-4">{translate('how_it_works_note_2_title')}</p>
                            <p className="text-center text-sm text-white font-bold mt-4">{translate('how_it_works_note_2_description')}</p>
                        </div>
                        <div className='flex flex-col justify-center align-center mx-10 md:mx-0 mt-5 md:mt-0'>
                            <div className='flex justify-center align-center'>
                                <div className='flex justify-center align-center w-50 px-10 py-8 bg-red-100 rounded-full'>
                                    <span className='text-2xl text-white'>3</span>
                                </div>
                            </div>
                            <p className="text-center text-lg text-white font-bold mt-4">{translate('how_it_works_note_3_title')}</p>
                            <p className="text-center text-sm text-white font-bold mt-4">{translate('how_it_works_note_3_description')}</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-row-auto justify-center text-blue-500 text-3xl font-bold mt-10'>
                    <Button variant='secondary' className='inline-flex items-center justify-center'>
                        <Link to='/test'>{translate('start_the_test_btn_label')}</Link> 
                    </Button>
                </div>
            </div>
        </MainLayout>
    );
}

export default Landing;