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
              fees: 'Hallinnointi- ja tuotepalkkiot',
              years: 'vuotta',
            },
          },
          outputs: {
            heading: 'Varainhoidon kustannusten vaikutus tuottoon',
            details: 'Näytä lisää',
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
            costs: 'Kustannukset',
            closingBalance: 'Loppusaldo',
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
              fees: 'Wealth management & product fees',
              years: 'years',
            },
          },
          outputs: {
            heading: 'Impact on wealth management fees on total gains',
            details: 'View details',
            models: {
              wmm: 'Wealth management model',
              hpm: 'Hourly priced model',
              ncm: 'No cost model',
            },
            bars: {
              investment: 'Investment',
              totalEarnings: 'Total Earnings',
              costs: 'Costs',
              compoundInterest: 'Opportunity cost',
            },
          },
          modal: {
            years: 'Years',
            startingBalance: 'Starting Balance',
            earnings: 'Earnings',
            costs: 'Costs',
            closingBalance: 'Closing Balance',
          },
        },
      },
    },
  });

export default i18n;
