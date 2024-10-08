import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="container mx-auto px-4 mt-8 py-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => changeLanguage('en')}
          className="mr-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage('hi')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          हिंदी
        </button>
      </div>

      <h1 className="text-3xl font-bold text-center mb-6">{t('aboutUsTitle')}</h1>
      <p className="text-lg text-gray-700 mb-4">
        {t('aboutUsDescription')}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t('ourMissionTitle')}</h2>
      <p className="text-lg text-gray-700 mb-4">
        {t('ourMissionDescription')}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t('whatWeOfferTitle')}</h2>
      <ul className="list-disc list-inside mb-4">
        <li className="text-lg text-gray-700">{t('offer1')}</li>
        <li className="text-lg text-gray-700">{t('offer2')}</li>
        <li className="text-lg text-gray-700">{t('offer3')}</li>
        <li className="text-lg text-gray-700">{t('offer4')}</li>
      </ul>
      <h2 className="text-2xl font-semibold mb-4">{t('ourStoryTitle')}</h2>
      <p className="text-lg text-gray-700 mb-4">
        {t('ourStoryDescription')}
      </p>
      <h2 className="text-2xl font-semibold mb-4">{t('visitUsTitle')}</h2>
      <p className="text-lg text-gray-700 mb-4">
        {t('visitUsDescription')}
      </p>
      <div className="text-center mt-6">
        <a
          href="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
        >
          {t('contactUs')}
        </a>
      </div>
    </div>
  );
};

export default About;
