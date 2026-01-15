import { useTranslations } from "next-intl";

export const useGalleryItems = () => {
  const t = useTranslations('homepage.Gallery.items');

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: t('1.title'),
      date: '15 Jan 2023',
      category: t('1.category'),
      image: '/media/inauguration.jpg'
    },
    {
      id: 2,
      type: 'video',
      title: t('2.title'),
      date: '22 Mar 2023',
      category: t('2.category'),
      image: '/media/cardiology-tour.jpg'
    },
    {
      id: 3,
      type: 'image',
      title: t('3.title'),
      date: '5 Apr 2023',
      category: t('3.category'),
      image: '/media/health-camp.jpg'
    },
    {
      id: 4,
      type: 'image',
      title: t('4.title'),
      date: '18 May 2023',
      category: t('4.category'),
      image: '/media/robotic-surgery.jpg'
    },
    {
      id: 5,
      type: 'video',
      title: t('5.title'),
      date: '30 Jun 2023',
      category: t('5.category'),
      image: '/media/patient-story.jpg'
    },
    {
      id: 6,
      type: 'image',
      title: t('6.title'),
      date: '12 Jul 2023',
      category: t('6.category'),
      image: '/media/symposium.jpg'
    }
  ];

  return galleryItems;
};
