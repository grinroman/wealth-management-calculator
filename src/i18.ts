import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'fi',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      fi: {
        translation: {
          title: 'Varainhoidon kustannuslaskuri',
          calculator: {
            heading: 'Lähtötiedot',
            paramas: {
              initial: 'Alkupääoma',
              investment: 'Sijoituksen kestoaika',
              annual: 'Vuotuinen tuotto-odotus',
              fees: 'Hallinnointi- ja tuotepalkkiot yhteensä',
              years: 'vuotta',
            },
          },
          outputs: {
            heading: 'Varainhoidon kustannusten vaikutus tuottoon',
            details: 'Näytä',
            models: {
              wmm: 'Prosenttihinnoiteltu malli',
              hpm: 'Tuntihinnoiteltu malli',
              ncm: 'Tee se itse -malli',
            },
            bars: {
              investment: 'Alkupääoma',
              totalEarnings: 'Tuotot',
              costs: 'Suorat kustannukset',
              compoundInterest: 'Vaihtoehtoiskustannus',
            },
          },
          modal: {
            years: 'Vuosi',
            startingBalance: 'Aloitussaldo',
            earnings: 'Tuotot',
            costs: 'Suorat kustannukset',
            closingBalance: 'Loppusaldo',
            total: 'Yhteensä',
          },
        },
      },
      en: {
        translation: {
          title: 'Wealth management cost calculator',
          calculator: {
            heading: 'Data for calculate',
            paramas: {
              initial: 'Initial capital',
              investment: 'Investment duration',
              annual: 'Annual gain expectation',
              fees: 'Total wealth management & product fees',
              years: 'years',
            },
          },
          outputs: {
            heading: 'Impact of wealth management fees on total earnings',
            details: 'Details',
            models: {
              wmm: 'Percentage based model',
              hpm: 'Hourly based model',
              ncm: 'Do it yourself model',
            },
            bars: {
              investment: 'Initial capital',
              totalEarnings: 'Earnings',
              costs: 'Direct Costs',
              compoundInterest: 'Opportunity Cost',
            },
          },
          modal: {
            years: 'Year',
            startingBalance: 'Starting Balance',
            earnings: 'Earnings',
            costs: 'Direct Costs',
            closingBalance: 'Closing Balance',
            total: 'Total',
          },
        },
      },
    },
  });

export default i18n;
